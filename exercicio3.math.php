<?php

$handle = fopen ("php://stdin", "r");

function somOsPaEMostra5AntDo1EDoUlt(array $ar):array{
  foreach($ar as $k=>$number){

    if($number % 2 == 0 && $number != 0){

      $paresnumber[] = $number;
      $somaDosPares = array_sum($paresnumber);

    }
    else{
      $result[] = false;
    }
  }
  //var_dump($paresnumber);exit;

  for($z=0; $z<=count($paresnumber);$z++){
    if($z == 0){
      $quintoAntececorDoPrimeiro = $paresnumber[$z] - 5;
    }elseif ($z == count($paresnumber)- 1) {
      $quintoAntececorDoUltimo = $paresnumber[$z] - 5;
    }
  //  $result2["z"][] = $z;
    $result2["antcecordoultimo"] = $quintoAntececorDoUltimo;
    $result2["numerospares"] = $paresnumber;
    $result2["antcecordoprimeiro"] = $quintoAntececorDoPrimeiro;
    $result2["somadospares"] = $somaDosPares;

  }

  return $result2;
}


function naturaisImparMaioresQue100(array $ar):array {
  foreach($ar as $k=>$number){
    if(!($number % 2 == 0) && $number > 100){
      $result[] = $number;
    }
    else{
      $result[] = false;
    }
  }
  return $result;
}

function numerosNaturaisNaoNulos(array $ar): array {
    foreach($ar as $k=>$number){
      if($number < 1){
        $result[] = $number;
      }
    }

    return $result;
}

$ar_temp = fgets($handle);
$ar = explode(" ",$ar_temp);
$ar = array_map('intval', $ar);

$result = numerosNaturaisNaoNulos($ar);
echo "naturais não nulos:";
print_r($result);
echo "naturais impares maiores que 100";
$result2 = naturaisImparMaioresQue100($ar);
print_r($result2);
echo "soma Os Pares E Mostra o quinto AntDo 1 E Do Ultimo";
$result3 = somOsPaEMostra5AntDo1EDoUlt($ar);
print_r($result3);

//print_r(floor(002));
/*=
*if num = 0 then if num contem + 1 zero then é um número negativo{negnumber[i]=num}*/
