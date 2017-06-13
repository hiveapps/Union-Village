<?php 
/*if(isset($_POST['submit'])){
    $to = "live@unionvillage.net"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    //$facility = $_POST['facility'];
    $subject = "Inquiries about living at" . $facility;
    $subject2 = "Copy of your Union Village form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];// . "contact them back at: " . $from
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }*/
if(isset($_POST['submit'])){
    require_once "../vendor/autoload.php";
    
    $mail = new PHPMailer;
    
    //Enable SMTP debugging. 
    //$mail->SMTPDebug = 2;
    //Set PHPMailer to use SMTP.
    //$mail->isSMTP();            
    //Set SMTP host name                          
    //$mail->Host = localhost; //Use "smtpout.secureserver.net" (in quotations) if in development
    //Set this to true if SMTP host requires authentication to send email
    //$mail->SMTPAuth = true;                          
    //Provide username and password     
    //$mail->Username = "leasing@unionvillage.net";                 
    //$mail->Password = "union.Village1";                           
    //If SMTP requires TLS encryption then set it
    //$mail->SMTPSecure = "ssl";                           
    //Set TCP port to connect to 
    //$mail->Port = 465;
    
    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['first_name'] . " " . $_POST['last_name'];
    
    $mail->addAddress("leasing@unionvillage.net", "Craig");
    
    $mail->isHTML(true);
    
    $mail->Subject ="Inquiring about leasing at: " . $_POST['facility'];
    $mail->Body = $_POST['message'];
    $mail->AltBody = "This is the plain text version of the email content";
    
    if(!$mail->send()) 
    {
        //echo "Mailer Error: " . $mail->ErrorInfo;
        header('Location: http://unionvillage.net/#/success');
        
    }else {
        //echo "Message sent successfully!";
        header('Location: http://unionvillage.net/#/success');
    };
};
?> 