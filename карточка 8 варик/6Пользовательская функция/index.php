<?php
function calculateZ($x, $y) {
    // Расчет по формуле
    $z = atan($y) - (3 / 7) * exp($x * $y) + pow(($x + $y), $x) / pow(sin($x) + 5, 3);

    return $z;
}

// Пример использования функции
$x_value = 2; // Замените на нужное значение x
$y_value = 1; // Замените на нужное значение y

$result = calculateZ($x_value, $y_value);
echo "Результат расчета: " . $result;
?>
