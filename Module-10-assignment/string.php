<?php
 $stings = ["Hello", "World", "PHP", "Programming"];

foreach($stings as $str){
    $countVowel = preg_match_all('/[aeiou]/i', $str, $matches);

    $reverseString = strrev($str);

    echo "Original String: $str, Vowel Count: $countVowel, Reversed String: $reverseString"."\n";
}