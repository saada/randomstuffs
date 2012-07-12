<html>
<head>
	<link rel="stylesheet" type="text/css" href="mycss.css">
	<title>Mobicloud</title>
</head>
<body>

	<div id="page">
		<h1>Welcome to Mobicloud's XMPP Client</h1></b>
		<h2>Where you can chat with friends, share files, and more!</h2>
		<p id="console">TIME</p>
		

		<script type="text/javascript">
			function myFunction()
			{
				setInterval(function(){myTimer()},1000);
			}

			function myTimer()
			{
				var d=new Date();
				var t=d.toLocaleTimeString();
				document.getElementById("console").innerHTML=t;
				return t;
			}
			// myTimer();	//static
			// myFunction();	//dynamic
		</script>
		<?php 
			echo '<script type="text/javascript">myTimer();</script>'.'Connecting to mobicloud...';

			// Include and initialize Jaxl core
			require_once 'JAXL2/core/jaxl.class.php';
			$jaxl = new JAXL(array(
			    'user'=>'terry',
			    'pass'=>'terry',
			    'host'=>'localhost',
			    'domain'=>'localhost',
			    'authType'=>'PLAIN',
			    'logLevel'=>5
			));

			// Send message after successful authentication
			function postAuth($payload, $jaxl) {
			    global $argv;
			    $jaxl->sendMessage("jerry@mobicloud", "jerry");
			    $jaxl->shutdown();
			}

			// Register callback on required hook (callback'd method will always receive 2 params)
			$jaxl->addPlugin('jaxl_post_auth', 'postAuth');

			// Start Jaxl core
			$jaxl->startCore('stream');
		?> 
		
	</div>

</body>
</html>