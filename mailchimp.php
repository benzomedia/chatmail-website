<?php
/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 11/02/2017
 * Time: 8:48
 */
require( "vendor/autoload.php" );

use \DrewM\MailChimp\MailChimp;

$userEmail = isset( $_POST['email'] ) ? $_POST['email'] : null;


$MailChimp = new MailChimp( 'c18aa6d256a9fa1b44302fe5486a7b5a-us10' );

$list_id  = 'd35ca4868a';
//$group_id = "4b29afaf0f";


$result = $MailChimp->post( "lists/$list_id/members", [
	'email_address' => $userEmail,
	'status'        => 'subscribed'
] );

//
//$message = "There was a new subscriber for webscope.\r\nEmail: " . $userEmail;
//$message = wordwrap( $message, 70, "\r\n" );
//
//
//$to      = 'hello@webscopeapp.com';
//$subject = "New Subscriber for Webscope";
//
//
//$headers = "From:hello@webscopeapp.com \r\n";
//$headers .= "MIME-Version: 1.0\r\n";
//$headers .= "Content-type: text/html\r\n";
//
//mail( $to, $subject, $message, $headers );


print_r($result);

