<?php

$handle = fopen ("php://stdin", "r");

      function sucessorPar($n) {
        if(isset($n) && $n > 0){
        $result = [];
        $result['suc'] = $n+1;

        if($result['suc'] % 2 == 0){
          $result['suc']+2;
        }
        elseif($result['suc'] % 1 == 0){
          $result['suc']++;
        }
        return $result;
    }
    else {
      return "Digite um número natural não nulo!";
    }

}

//fscanf($handle, "%i",$n);
$n = (int)fgets($handle);
#$ar = explode(" ",$ar_temp);
#$ar = array_map('intval', $ar);
$result = sucessorPar($n);
print_r($result) . "\n";

?>
