<?php

$handle = fopen ("php://stdin", "r");

      function antecessorAndSucessor($n) {
        if(isset($n) && $n > 0){
        $result = [];
        $result['ant'] = $n - 1;
        $result['suc'] = $n+1;
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
$result = antecessorAndSucessor($n);
print_r($result) . "\n";

?>
