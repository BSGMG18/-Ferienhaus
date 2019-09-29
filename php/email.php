<?php

echo '
<html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link type="text/css" rel="stylesheet" href="../css/email.css"/>


      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
 <body>
';


if(isset($_POST['submit'])){


    $vorname = $_POST['name'];

    $telefon = $_POST['telefon'];

    $email = $_POST['email'];

    $von = $_POST['von'];

    $bis = $_POST['bis'];



    $empfaenger = "a.jordanov@t-online.de";

    $betreff = "Havelferienhaus";

    $text = "Hallo, wir würden gerne vom " . $von . " bis zum " . $bis . " in Branne Ferien machen. " . $telefon;

    $from = "From:" . $name . " " . "<" . $email . ">\r\n";
 


    if(mail($empfaenger, $betreff, $text, $from)){

        echo '
		<div id="mailSent" class="container">
			<div class="card teal">
 				<div class="card-content white-text">
					<span class="card-title"><h2>Ihre E-Mail wurde erfolgreich versendet</h2></span>
				</div> 
				<div class="card-action">
          			<a href="http://havelferienhaus.com">Zur&uuml;ck zur Website</a>
        			</div>
			</div>
		</div>
             ';

    }

    else{

        echo '
		<div id="mailSent" class="container">
			<div class="card teal">
 				<div class="card-content white-text">
					<span class="card-title"><h2>Es gab einen Fehler. Ihre E-Mail konnte leider nicht versendet werden</h2></span>
				</div> 
				<div class="card-action">
          			<a href="http://havelferienhaus.com">Zur&uuml;ck zur Website</a>
        			</div>
			</div>
		</div>
             ';


    }

}

echo '
 <!--JavaScript at end of body for optimized loading-->
       <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
              </html>
';



?>