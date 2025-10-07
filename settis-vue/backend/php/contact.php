<?php
header('Content-Type: application/json');

// CORS Headers
header('Access-Control-Allow-Origin: *'); // Adjust this to your frontend URL in production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle OPTIONS request (pre-flight for CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Security Headers (equivalent to Helmet)
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');

require_once 'db.php'; // Include database connection

$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$subject = $input['subject'] ?? '';
$message = $input['message'] ?? '';
$honeypot = $input['honeypot'] ?? '';

// Honeypot check
if (!empty($honeypot)) {
    echo json_encode(['error' => 'Bot detected!']);
    http_response_code(400);
    exit();
}

// Basic Rate Limiting (simple session-based)
session_start();
$last_submission_time = $_SESSION['last_contact_submission'] ?? 0;
$current_time = time();
$rate_limit_interval = 10; // 10 seconds between submissions

if (($current_time - $last_submission_time) < $rate_limit_interval) {
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    http_response_code(429);
    exit();
}
$_SESSION['last_contact_submission'] = $current_time;

// Data Validation
$errors = [];
if (empty($name)) {
    $errors[] = 'Name is required.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}
if (empty($subject)) {
    $errors[] = 'Subject is required.';
}
if (empty($message)) {
    $errors[] = 'Message is required.';
}

if (!empty($errors)) {
    echo json_encode(['errors' => $errors]);
    http_response_code(400);
    exit();
}

// Insert data into database using PDO prepared statements
try {
    $stmt = $pdo->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->execute([$name, $email, $subject, $message]);
    echo json_encode(['message' => 'Message saved successfully!']);
    http_response_code(200);
} catch (PDOException $e) {
    error_log("Error saving contact message: " . $e->getMessage());
    echo json_encode(['error' => 'Error saving message.']);
    http_response_code(500);
}

?>