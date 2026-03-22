
/**
 * Вывод массива в формате:
 * Element i: value x
 * @param {Array} array
 */
function printArray(array) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: передан не массив");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    console.log(`Element ${i}: value ${array[i]}`);
  }
}

printArray([1, 2, 3]);


/**
 * Вывод массива в формате:
 * i: x
 * @param {Array} array
 */
function printArray1(array) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: передан не массив");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    console.log(`${i}: ${array[i]}`);
  }
}

printArray1([10, 20, 30]);

/**
 * Выполняет callback для каждого элемента массива.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция обратного вызова
 * @returns {undefined} Ничего не возвращает
 */

function forEach(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return;
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

forEach([1, 2, 3], (el, i) => {
  console.log(`Element: ${el}, Index: ${i}`);
});

/**
 * Создает новый массив, применяя callback к каждому элементу исходного массива.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция обратного вызова
 * @returns {Array} Новый массив с результатами callback
 */
function map(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return [];
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return [];
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

const numbers = [1, 2, 3];

const squared = map(numbers, (element) => element * element);

console.log(squared);


/**
 * Фильтрует массив по условию callback.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция обратного вызова, возвращает true/false
 * @returns {Array} Новый массив с элементами, удовлетворяющими условию
 */
function filter(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return [];
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return [];
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

const num = [1, 2, 3, 4, 5];

const evenNumbers = filter(num, (element) => element % 2 === 0);

console.log(evenNumbers);
// [2, 4]


/**
 * Возвращает первый элемент массива, удовлетворяющий условию callback.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция обратного вызова, возвращает true/false
 * @returns {*|undefined} Первый подходящий элемент или undefined
 */
function find(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return undefined;
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return undefined;
  }

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i]; 
    }
  }

  return undefined; 
}

const nu = [1, 2, 3, 4, 5];

const firstEven = find(nu, (element) => element % 2 === 0);

console.log(firstEven);
// 2


/**
 * Проверяет, есть ли хотя бы один элемент массива, удовлетворяющий условию callback.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция обратного вызова, возвращает true/false
 * @returns {boolean} true, если найден хотя бы один подходящий элемент, иначе false
 */
function some(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return false;
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true; // первый элемент, который удовлетворяет условию
    }
  }

  return false; // если ни один элемент не подошел
}
const n = [1, 2, 3, 4, 5];

const hasEven = some(n, (element) => element % 2 === 0);

console.log(hasEven);
// true

/**
 * Проверяет, удовлетворяют ли все элементы массива условию callback.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция обратного вызова, возвращает true/false
 * @returns {boolean} true, если все элементы удовлетворяют условию, иначе false
 */
function every(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return false;
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false; // первый элемент, который не удовлетворяет условию
    }
  }

  return true; // все элементы подошли
}

const numb = [2, 4, 6];

const allEven = every( numb, (element) => element % 2 === 0);

console.log(allEven);
// true


/**
 * Последовательно обрабатывает элементы массива, накапливая результат в аккумуляторе.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова, принимает 4 аргумента:
 *   @param {*} callback.accumulator - Текущее значение аккумулятора.
 *   @param {*} callback.element - Текущий элемент массива.
 *   @param {number} callback.index - Индекс текущего элемента.
 *   @param {Array} callback.array - Исходный массив.
 * @param {*} [initialValue] - Начальное значение аккумулятора (необязательный).
 * @returns {*} Итоговое значение аккумулятора после обработки всех элементов массива.
 */
function reduce(array, callback, initialValue) {
  if (!Array.isArray(array)) {
    console.log("Ошибка: первый аргумент не массив");
    return undefined;
  }

  if (typeof callback !== "function") {
    console.log("Ошибка: callback не функция");
    return undefined;
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (array.length === 0) return undefined;
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}



const sum = reduce(n, (accumulator, element) => accumulator + element, 0);

console.log(sum);
// 15