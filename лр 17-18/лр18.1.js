// Пример 1: Поиск чисел в строке
const text1 = "Встречайте 2023 год! 42 это ответ на все вопросы.";
const regex1 = /\d+/g;
const numbers1 = text1.match(regex1);
console.log("Пример 1 - Поиск чисел:", numbers1);

// Пример 2: Замена дат в формате "dd/mm/yyyy" на "yyyy-mm-dd"
const text2 = "Today is 30/10/2023 and tomorrow is 31/10/2023.";
const regex2 = /(\d{2})\/(\d{2})\/(\d{4})/g;
const result2 = text2.replace(regex2, "$3-$2-$1");
console.log("Измененный текст с замененными датами:", result2);

// Пример 3: Поиск email-адресов в тексте
const text3 = "My email addresses are example1@email.com and example2@email.co.uk";
const regex3 = /[\w.-]+@[A-Za-z.-]+\.[A-Za-z]{2,4}/g;
const emailAddresses = text3.match(regex3);
console.log("Email-адреса в тексте:", emailAddresses);