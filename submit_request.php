<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['full-name'];
    $email = $_POST['email'];
    $song = $_POST['song-request'];

    // Compose email message
    $to = "runriddim@gmail.com";
    $subject = "New Song Request";
    $body = "Name: $fullname\nEmail: $email\nSong Request: $song";

    // Set additional headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you for your song request!');</script>";
    } else {
        echo "<script>alert('Failed to send the song request. Please try again later.');</script>";
    }
}
?>
