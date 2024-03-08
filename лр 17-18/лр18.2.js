// Метод test()
const regexTest = /\d{3}/;
const stringTest = "12345";
const isMatch = regexTest.test(stringTest);
console.log(`Метод test(): Соответствует ли строка ${stringTest} регулярному выражению? Ответ: ${isMatch}`);

// Метод exec()
const regexExec = /\d+/g;
const stringExec = "42 и 1001 это числа.";
let match;
while ((match = regexExec.exec(stringExec)) !== null) {
  console.log(`Метод exec(): Найдено число - ${match[0]} (начиная с индекса ${match.index}).`);
}

// Метод split()
const inputStringSplit = "Это пример метода split в действии";
const wordsSplit = inputStringSplit.split(" ");
console.log("Метод split(): Разделенные слова:", wordsSplit);

// Метод match()
const textMatch = "Слова в этой строке будут найдены.";
const patternMatch = /\w+/g;
const wordsFoundMatch = textMatch.match(patternMatch);
console.log("Метод match(): Найденные слова:", wordsFoundMatch);

// Метод search()
const searchTextSearch = "Слова в этой строке будут найдены.";
const searchWordSearch = "этой";
const indexOfWordSearch = searchTextSearch.search(searchWordSearch);
console.log(`Метод search(): Индекс первого вхождения "${searchWordSearch}" в строке: ${indexOfWordSearch}`);

// Метод replace()
const originalTextReplace = "Это пример, а не пример.";
const newTextReplace = originalTextReplace.replace(/пример/g, "демонстрация");
console.log("Метод replace(): Замененный текст:", newTextReplace);