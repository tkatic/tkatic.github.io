<?php
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'portfolio@tristankatic.com';
    $email_subject = "New Contact Submission";
    $email_body = "User Name: $name.\n".
                    "User Email: $email.\n".
                    "User Subject: $subject.\n".
                    "User Message: $message.\n";

    $to = "tristankatic@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>