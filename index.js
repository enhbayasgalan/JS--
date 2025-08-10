// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverse("hello"));

//split('') -> string-ийг array болгоно
//reverse('') -> ["o", "l", "l", "e", "h"]


// task-2 
// function sumArray(arr) {
//     let result = 0; // нийлбэр хадгалах хувьсагч
//     for(let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result;
// }

// console.log(sumArray([1, 2, 3]));

//Хэт богино хувилбар
// const sumArray = arr => arr.reduce((sum, curr) => sum + curr, 0)


// task-3
// function charFrequency(str) {
//     let result = {}  // хоосон объект түлхүүр = үсэг, утга = хэдэн удаа гарсан
//     for(let char of str) { // for...of loop ашиглан str-ийн үсэг бүрийг нэг нэгээр нь авч байгаа.
//         if (result[char]) { // Хэрвээ тухайн char (үсэг) аль хэдийн result дотор байгаа бол, +1 гэж нэмэгдүүлнэ
//             result[char]++;
//         } else {
//             result[char] = 1; // Хэрвээ тухайн үсэг анх удаа гарч байгаа бол, 1 гэж онооно (эхэлж байна гэсэн үг)
//         } 
//     }
    
//     return result // result объектыг буцаана
// }

// console.log(charFrequency("hello"));


// task-4
// function isAnagram(s, t) {
//     if (s.length !== t.length) {
//         return false // Хэрвээ s ба t-ийн урт өөр байвал anagram байж болохгүй тул шууд false буцаана.
//     }
//     function charFrequency(str) {
//         let freq = {}
//         for (let char of str) {
//             freq[char] = freq[char] ? freq[char] + 1 : 1;
//         }
//         return freq; // Үсгийн давтамж тоолох дэд функц
//     }
//     const freqS = charFrequency(s)
//     const freqT = charFrequency(t)

//     for(let char in freqS) { // Хоёр объектыг харьцуулах
//         if (freqS[char] !== freqT[char]) {
//             return false // Хэрвээ аль нэг үсгийн давтамж зөрүүтэй байвал false буцаана.
//         }
//     }

//     return true  // Бүх үсэг ижил тоотой байвал true буцаана.
// }

// console.log(isAnagram("listen", "silent"));     


// task-5
// function checkDoubleExists(arr) {
//     const seen = new Set();

//     for(let num of arr) {
//         if (seen.has(num * 2) || seen.has(num/2)) {
//             return true
//         }
//         seen.add(num);
//     }

//     return false
// }

// console.log(checkDoubleExists([10, 2, 5, 3]));


// Easy-level logic
// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiou"

//     for (let char of str.toLowerCase()) { // эгшиг мөн эсэхийг шалгана
//         if (vowels.includes(char)) {  // Том жижиг үсэг ялгахгүй болно 
//             count++; // эгшиг таарах бүрд тоогоо нэмнэ
//         }
//     }
//     return count
// }
// console.log(countVowels("hello"));


// Өгсөн тоонуудын массив дотроос хамгийн их утгыг олоорой.
// function findMax(arr) {
//     let max = arr[0]

//     for(let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max
// }

// console.log(findMax([1, 5, 3, 9, 2]));


// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiou"

//     for(let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("hello"));


// Reverse Number
// function reverseNumber(num) {
//     const reversedStr = Math.abs(num).toString().split('').reverse().join('')
//     const reverseNum = parseInt(reversedStr)
//     return num < 0 ? -reverseNum : reverseNum;
// }   
// Math.abs(num) → сөрөг тэмдгийг түр салгаж авна.
// .toString().split('').reverse().join('') → тоог string болгож эргүүлнэ.
// parseInt(...) → эргүүлсэн string-ээ тоо болгон буцаана.
// Эцэст нь num < 0 бол сөрөг тэмдэг дахин тавина.

// console.log(reverseNumber(123)); 


// Class Logic Changalle "Fizzbuzz"
// function Fizzbuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// Fizzbuzz(15)


// Palindrome 

// function isPalindrome(str) {
//     const reverse = str.split('').reverse().join('')
//     return str === reverse
// }

// console.log(isPalindrome("madam"));



// Remove Duplicates
// function removeDuplicates(arr) {
//     const result = [];
//     for (i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


//  Find the Second Largest Number
// function secondLargest(arr) {
//     const max = Math.max(...arr)
//     const filtered = arr.filter(n => n !== max)
//     return Math.max(...filtered)
// }

// console.log(secondLargest([1, 3, 7, 4, 6]));



// function uniqueArray(arr) {
//     return [...new Set(arr)]
// }

// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));


// Хамгийн урт үгийг олох
// function findLongestWord(str) {
//   const words = str.split(' ');
//   let longest = '';

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }


// console.log(findLongestWord("Learning JavaScript step by step")); 




// Хамгийн урт үгийг цэвэрлэж олох (punctuation-гүй)
// function findCleanLongestWord(str) {
//     const words = str.split(' ');
//     let longest = '';

    
//     for(let word of words) {
//         const cleanWord = word.replace(/[^\w]/g, ''); // \w гэдэг нь a-z, A-Z, 0-9, _ гэсэн тэмдэгтүүд. Харин ^ нь эсрэг утга, g нь нийт бүх давхардлыг арилгана.
//         if (cleanWord.length > longest.length) {
//             longest =cleanWord
//         }
//     }

//     return longest  
// }

// console.log(findCleanLongestWord("Well, hello! How's everything?")); 




 // Массив доторх давтагдсан тоонуудыг арилгах
//  function removeDuplicates(arr) {
//     return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num)) // indexOf === lastIndexOf гэдэг нь тухайн тоо ганц л удаа орсон гэсэн үг.
//  }

//  console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));




// const numbers = [3, -1, 5, 8, -4, 7, -6, 2, -3, 10];
// const positiveNums = numbers.filter(num => num > 0)
// console.log(positiveNums);

// const negativeNums = numbers.filter(num => num < 0)
// console.log(negativeNums);

// const positiveSum = positiveNums.reduce((sum, num) => sum + num, 0);
// console.log(positiveSum); 

// const evenNums = numbers.filter(num => num % 2 === 0);
// console.log(evenNums); 

// const oddCount = numbers.filter(num => num % 2 !== 0).length;
// console.log(oddCount);
    

// function removeDuplicates(str) {
//     const words = str.split(" ");
//     const uniqueWords = [...new Set(words)];
//     return uniqueWords.join(" ");
// }

// console.log(removeDuplicates("hello world hello javascritpt world "));

// function wordFrequency(str) {
//     return Object.entries(
//         str.split(" ").reduce((acc, word) => {
//             acc[word] = (acc[word] || 0) + 1
//             return acc
//         }, {})
//     )
//     .map(([word, count]) => ({word, count}))
//     .sort((a, b) => b.count - a.count)
// }

// console.log(wordFrequency("apple banana apple orange banana apple"));


// function sumOfDuplicates(arr) {
//   const seen = new Set();
//   const duplicates = new Set();

//   for (let num of arr) {
//     if (seen.has(num)) {
//       duplicates.add(num);
//     } else {
//       seen.add(num);
//     }
//   }

//   return [...duplicates].reduce((sum, n) => sum + n, 0);
// }

// console.log(sumOfDuplicates([1, 2, 3, 2, 4, 3, 5, 1]));
