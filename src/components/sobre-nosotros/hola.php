<?php
try{

//Parametros de envio:
$excelData = base64_encode(file_get_contents($archivosalida));
$remitente = 'pig-t@g-talent.cl';
$nombreRemitente='[No Reply] - G-Talent';
$nombreUsuario='pig-t';
$cc = []; //["example2@gmail.com", "example3@gmail.com"];

$body = "Envío de Excel con precios actualizados";
$adjunto = [
        "nombre"     => "salida". $fechaHoraActual . ".xlsx",
        "contenido"  => $excelData,
        "tipo"       => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];

$params = [
  "Remitente"       => $remitente,
  "NombreRemitente" => $nombreRemitente,
  "NombreUsuario"   => $nombreUsuario,
  "Destinatario"    => "ccastillo@g-talent.cl",
  "CC"              => $cc,
  "Asunto"          => "Formulario de contacto",
  "TipoTemplate"    => "txt", 
  "Cuerpo"          => $body,
  "Adjuntos"        => $adjunto,
];

$params = json_encode($params);

$authorization_header = "Authorization: Bearer " . $token;
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.pig-t.cl/api/mailer/envio",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
  CURLOPT_HTTPHEADER => array(
      "Content-Type: application/json",
      "Accept: application/json",
      $authorization_header
  ),
));

$response = curl_exec($curl);
curl_close($curl);

$json = [
  'status'  => 'enviado',
  'message'   => 'Mensaje enviado'
];

} catch (Exception $e){

$json = [
  'status'  => 'error',
  'message'   => 'Mensaje no enviado',
  'detalle' => $e->getMessage(),
];

}

echo json_encode($json, JSON_FORCE_OBJECT);