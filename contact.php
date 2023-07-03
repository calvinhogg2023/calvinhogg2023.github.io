<?php

if($_POST) {
	$recipient = "calvinhogg12345678@protonmail.com";

    $guest_name = "";
    $guest_email = "";
    $guest_subject = "";
    $guest_message = "";
    $email_body = "<div>";

    if(isset($_POST['guest_name'])) {
        $visitor_name = filter_var($_POST['guest_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
<label><b>Guest Name:</b></label>&nbsp;<span>".$visitor_name."</span>
</div>";
    }
    if(isset($_POST['guest_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['guest_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
<label><b>Guest Email:</b></label>&nbsp;<span>".$visitor_email."</span>
</div>";
    }

    if(isset($_POST['guest_subject'])) {
        $email_title = filter_var($_POST['guest_subject'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
<label><b>Guest Subject:</b></label>&nbsp;<span>".$email_title."</span>
</div>";
    }

    if(isset($_POST['guest_message'])) {
        $visitor_message = htmlspecialchars($_POST['guest_message']);
        $email_body .= "<div>
<label><b>Guest Message:</b></label>
<div>".$visitor_message."</div>
</div>";
    }

    $email_body .= "</div>";
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";

    if(mail($recipient, $email_title, $email_body, $headers)) {
        echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}
?>
