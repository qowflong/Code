// ==========================================
// 1. Khai báo biến và kiểm tra kiểu dữ liệu (typeof)
// ==========================================
let firstName = "An";
let lastName = "Nguyen";
let country = "Vietnam";
let city = "Hanoi";
let age = 21;
let isMarried = false;
let year = 2026;

console.log("--- 1. Kiểm tra kiểu dữ liệu ---");
console.log(typeof firstName);  // string
console.log(typeof lastName);   // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number


// ==========================================
// 3 & 4. Kiểm tra '10' và parseInt('9.8')
// ==========================================
console.log("\n--- 3 & 4. Kiểm tra số và chuỗi ---");
console.log("Kiểu '10' bằng 10 (===):", '10' === 10); // false (khác kiểu dữ liệu)
console.log("Kiểu '10' bằng 10 (==):", '10' == 10);   // true (ép kiểu lỏng lẻo)

console.log("parseInt('9.8') bằng 10:", parseInt('9.8') === 10); // false (vì parseInt('9.8') trả về số 9)


// ==========================================
// 5. Giá trị Truthy và Falsy
// ==========================================
console.log("\n--- 5. Truthy và Falsy ---");
// 3 giá trị trả về truthy (đúng)
console.log(Boolean(1));       // true
console.log(Boolean("Hello")); // true
console.log(Boolean([]));      // true (mảng rỗng vẫn là truthy trong JS)

// 3 giá trị trả về falsy (sai)
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false (chuỗi rỗng)
console.log(Boolean(null));    // false


// ==========================================
// 6. Các biểu thức so sánh
// ==========================================
console.log("\n--- 6. Biểu thức so sánh ---");
console.log("6.1. 4 > 3:", 4 > 3);          // true
console.log("6.2. 4 >= 3:", 4 >= 3);        // true
console.log("6.3. 4 < 3:", 4 < 3);          // false
console.log("6.4. 4 <= 3:", 4 <= 3);        // false
console.log("6.5. 4 == 4:", 4 == 4);        // true
console.log("6.6. 4 === 4:", 4 === 4);      // true
console.log("6.7. 4 != 4:", 4 != 4);        // false
console.log("6.8. 4 !== 4:", 4 !== 4);      // false
console.log("6.9. 4 != '4':", 4 != '4');    // false
console.log("6.10. 4 == '4':", 4 == '4');   // true
console.log("6.11. 4 === '4':", 4 === '4'); // false

// Tìm độ dài 'python' và 'jargon', sau đó đưa ra một câu so sánh sai
let pyLen = 'python'.length;
let jarLen = 'jargon'.length;
console.log("6.12. So sánh sai độ dài python và jargon (pyLen > jarLen):", pyLen > jarLen); // false (vì bằng nhau = 6)


// ==========================================
// 7. Các biểu thức logic
// ==========================================
console.log("\n--- 7. Biểu thức logic ---");
console.log("7.1. 4 > 3 && 10 < 12:", 4 > 3 && 10 < 12);       // true
console.log("7.2. 4 > 3 && 10 > 12:", 4 > 3 && 10 > 12);       // false
console.log("7.3. 4 > 3 || 10 < 12:", 4 > 3 || 10 < 12);       // true
console.log("7.4. 4 > 3 || 10 > 12:", 4 > 3 || 10 > 12);       // true
console.log("7.5. !(4 > 3):", !(4 > 3));                         // false
console.log("7.6. !(4 < 3):", !(4 < 3));                         // true
console.log("7.7. !false:", !false);                             // true
console.log("7.8. !(4 > 3 && 10 < 12):", !(4 > 3 && 10 < 12)); // false
console.log("7.9. !(4 > 3 && 10 > 12):", !(4 > 3 && 10 > 12)); // true
console.log("7.10. !(4 === '4'):", !(4 === '4'));                // true
// Cả dragon và python đều không có từ 'on' (Thực tế cả hai đều chứa 'on', nên biểu thức này là false)
let noOnCheck = !('dragon'.includes('on')) && !('python'.includes('on'));
console.log("7.11. Cả dragon và python không có từ 'on':", noOnCheck); // false


// ==========================================
// 8. Sử dụng đối tượng Date
// ==========================================
console.log("\n--- 8. Đối tượng Date ---");
const now = new Date();

console.log("8.1. Năm hiện tại:", now.getFullYear());
console.log("8.2. Tháng hiện tại (tính bằng số từ 0-11):", now.getMonth()); // Tháng hiện tại (0 là tháng 1)
console.log("8.3. Hôm nay là ngày (thứ trong tuần từ 0-6):", now.getDay()); // 0 là Chủ Nhật
console.log("8.4. Hôm nay là ngày mấy (trong tháng):", now.getDate());
console.log("8.5. Giờ hiện tại:", now.getHours());
console.log("8.6. Phút hiện tại:", now.getMinutes());
console.log("8.7. Số giây từ 1/1/1970 đến nay:", Math.floor(now.getTime() / 1000));