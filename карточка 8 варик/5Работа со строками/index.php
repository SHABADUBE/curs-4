<?php
// Создаем строковые переменные
$s1 = "Я люблю Беларусь";
$s2 = "Я учусь в политехе";

// 1. Определение длины строки s2
$длина_s2 = strlen($s2);
echo "1. Длина строки s2: " . $длина_s2 . "<br>";

// 2. Определение вхождения слова "Гродно" в строке s1
$вхождение_гродно = strpos($s1, "Гродно") !== false;
echo "2. В строке s1 " . ($вхождение_гродно ? "есть" : "нет") . " слово 'Гродно'.<br>";

// 3. Выделение 8 символа в строке s2 и определение ASCII-кода
$восьмой_символ = $s2[7];
$ascii_код = ord($восьмой_символ);
echo "3. 8-й символ в строке s2: '{$восьмой_символ}', его ASCII-код: {$ascii_код}.<br>";
?>
