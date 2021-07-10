<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$nome = $_POST['nome'];
		$email = $_POST['email'];
        $celular = $_POST['celular'];
		$endereco = $_POST['endereco'];
		$cep = $_POST['cep'];
		$dataNasc = $_POST['dataNasc'];
		$mensagem = $_POST['mensagem'];
		
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "l.oliveira260@gmail.com");
        $subject = "Mensagem de contato";
        $to = new SendGrid\Email(null, "l.oliveira260@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá Lucas, <br><br>Nova mensagem de contato<br><br>Nome: $nome<br>Email: $email <br>Celular: $celular <br>Enderço: $endereco <br>Cep: $cep <br>Data de Nascimento: $dataNasc <br>Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = 'SENDGRID_API_KEY';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
