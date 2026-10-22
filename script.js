
let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length) // đếm số kĩ tự trong chuỗi //
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase())
let result = challenge.substring(3); // trích xuất các kí tự bắt đầu từ kí tự số 3 trong chuỗi //
console.log(result);
console.log(challenge.slice(3));
console.log(challenge.includes('Script')); // tìm kiếm từ Script có trong bảng//
console.log(challenge.split(' ')); // chia các phần tử cách nhau 1 khoảng trống thành cách phần tử riêng biệt //
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(',');
console.log(companiesArray);
let newChallenge = challenge.replace('javaScript', 'Python');// thay từ javascript thành python//
console.log(newChallenge);
console.log(challenge.charAt(15));
console.log('J'.charCodeAt(0)); // mã kí tự của chữ J //
console.log(challenge.indexOf('a')); //tìm vị trí của kí tự chữ a đầu tiên//
console.log(challenge.lastIndexOf('a')); //tìm vị trí của chữ a cuối cùng //
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
// Khai báo một chuỗi có khoảng trắng thừa ở đầu và cuối
let messyString = '   30 Days Of JavaScript   ';

console.log('Chuỗi gốc (có khoảng trắng):', messyString);

// Sử dụng trim() để làm sạch khoảng trắng thừa
let cleanString = messyString.trim();

console.log('Sau khi dùng trim():', cleanString);
document.querySelector('.my-challenge').innerText = challenge;
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// 1. Sử dụng lastIndexOf() để tìm vị trí xuất hiện cuối cùng của "because "
console.log("1. Vị trí cuối cùng của 'because ':", sentence.lastIndexOf('because '));

// 2. Sử dụng indexOf() để tìm vị trí xuất hiện đầu tiên của "because "
console.log("2. Vị trí đầu tiên của 'because ':", sentence.indexOf('because '));

// 3. Sử dụng trim() để loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
let stringWithSpaces = '   30 Days Of JavaScript   ';
console.log("3. Sau khi dùng trim():", stringWithSpaces.trim());

// 4. Sử dụng startsWith() với chuỗi có khoảng trắng ở đầu cho kết quả true
let stringWithSpace = ' 30 Days Of JavaScript';
console.log("4. Kiểm tra startsWith(' 30'):", stringWithSpace.startsWith(' 30'));

// 5. Sử dụng endsWith() với chuỗi để kiểm tra phần kết thúc cho kết quả true
console.log("5. Kiểm tra endsWith('JavaScript'):", stringWithSpace.endsWith('JavaScript'));

// 6. Sử dụng match() để tìm tất cả các chữ 'a' trong '30 Days Of JavaScript'
let challengeStr = '30 Days Of JavaScript';
console.log("6. Tìm tất cả chữ 'a' bằng match():", challengeStr.match(/a/g));

// 7. Sử dụng concat() để ghép '30 Days of ' và 'JavaScript' thành một chuỗi
let part1 = '30 Days of ';
let part2 = 'JavaScript';
console.log("7. Ghép chuỗi bằng concat():", part1.concat(part2));

// 8. Sử dụng repeat() để in '30 Days Of JavaScript' 2 lần
console.log("8. Lặp lại chuỗi 2 lần:", challengeStr.repeat(2));