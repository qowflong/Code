// ==========================================
// 1. Tính diện tích tam giác
// ==========================================
console.log("--- 1. Diện tích tam giác ---");
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let triangleArea = 0.5 * Number(base) * Number(height);
console.log(`The area of the triangle is ${triangleArea}`);


// ==========================================
// 2. Tính chu vi tam giác
// ==========================================
console.log("\n--- 2. Chu vi tam giác ---");
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
let trianglePerimeter = Number(a) + Number(b) + Number(c);
console.log(`The perimeter of the triangle is ${trianglePerimeter}`);


// ==========================================
// 3. Diện tích và chu vi hình chữ nhật
// ==========================================
console.log("\n--- 3. Hình chữ nhật ---");
let length = Number(prompt("Enter length:"));
let width = Number(prompt("Enter width:"));
let rectArea = length * width;
let rectPerimeter = 2 * (length + width);
console.log(`The area of the rectangle is ${rectArea}`);
console.log(`The perimeter of the rectangle is ${rectPerimeter}`);


// ==========================================
// 4. Diện tích và chu vi hình tròn (π = 3.14)
// ==========================================
console.log("\n--- 4. Hình tròn ---");
let radius = Number(prompt("Enter radius:"));
const PI = 3.14;
let circleArea = PI * radius * radius;
let circleCircumference = 2 * PI * radius;
console.log(`The area of the circle is ${circleArea}`);
console.log(`The circumference of the circle is ${circleCircumference}`);


// ==========================================
// 5. Tính hệ số góc (độ dốc)
// ==========================================
console.log("\n--- 5. Hệ số góc ---");
// Phương trình y = 2x - 2 có hệ số góc m = 2
// Tính độ dốc giữa điểm (2, 2) và (6, 10): m = (y2 - y1) / (x2 - x1)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`Độ dốc giữa điểm (2, 2) và (6, 10) là: ${slope}`);
console.log("So sánh: Hệ số góc của phương trình y = 2x - 2 là 2, bằng với độ dốc vừa tính.");


// ==========================================
// 6. Tìm giá trị x làm cho y = 0 (y = x² + 6x + 9)
// ==========================================
console.log("\n--- 6. Tìm nghiệm phương trình bậc 2 ---");
// Phương trình: (x + 3)^2 = 0 => x = -3
let testXValues = [-5, -4, -3, -2, 0];
testXValues.forEach(x => {
    let y = (x * x) + (6 * x) + 9;
    console.log(`Với x = ${x}, giá trị y = ${y}`);
    if (y === 0) {
        console.log(`=> Giá trị x làm cho y bằng 0 là: ${x}`);
    }
});


// ==========================================
// 7. Tính tiền lương hàng tuần
// ==========================================
console.log("\n--- 7. Tính lương ---");
let hours = Number(prompt("Enter hours:"));
let ratePerHour = Number(prompt("Enter rate per hour:"));
let weeklyEarning = hours * ratePerHour;
console.log(`Your weekly earning is ${weeklyEarning}`);


// ==========================================
// 8. So sánh độ dài tên
// ==========================================
console.log("\n--- 8. So sánh độ dài tên ---");
let myFirstName = 'Asabeneh';
let myLastName = 'Yetayeh';
if (myFirstName.length > 7) {
    console.log("Tên của bạn dài");
} else {
    console.log("Tên của bạn ngắn");
}

if (myFirstName.length > myLastName.length) {
    console.log(`Your first name, ${myFirstName} is longer than your family name, ${myLastName}`);
} else {
    console.log(`Your first name, ${myFirstName} is shorter than or equal to your family name, ${myLastName}`);
}


// ==========================================
// 9. So sánh tuổi
// ==========================================
console.log("\n--- 9. So sánh tuổi ---");
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years old older than you.`);


// ==========================================
// 10. Kiểm tra đủ tuổi lái xe
// ==========================================
console.log("\n--- 10. Kiểm tra tuổi lái xe ---");
let birthYear = Number(prompt("Enter birth year:"));
let currentYear = new Date().getFullYear();
let calculatedAge = currentYear - birthYear;

if (calculatedAge >= 18) {
    console.log(`You are ${calculatedAge}. You are old enough to drive.`);
} else {
    let yearsToWait = 18 - calculatedAge;
    console.log(`You are ${calculatedAge}. You will be allowed to drive after ${yearsToWait} years.`);
}


// ==========================================
// 11. Tính số giây có thể sống trong một số năm
// ==========================================
console.log("\n--- 11. Tính số giây theo năm ---");
let numberOfYears = Number(prompt("Enter number of years you live:"));
// 1 năm = 365 ngày * 24 giờ * 60 phút * 60 giây = 31,536,000 giây
let secondsLived = numberOfYears * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);


// ==========================================
// 12. Định dạng thời gian
// ==========================================
console.log("\n--- 12. Định dạng thời gian ---");
const d = new Date();
let yearNow = d.getFullYear();
let monthNow = String(d.getMonth() + 1).padStart(2, '0'); // Tháng từ 0-11 nên +1
let dayNow = String(d.getDate()).padStart(2, '0');
let hourNow = String(d.getHours()).padStart(2, '0');
let minuteNow = String(d.getMinutes()).padStart(2, '0');

// 1. YYYY-MM-DD HH:mm
console.log(`${yearNow}-${monthNow}-${dayNow} ${hourNow}:${minuteNow}`);

// 2. DD-MM-YYYY HH:mm
console.log(`${dayNow}-${monthNow}-${yearNow} ${hourNow}:${minuteNow}`);

// 3. DD/MM/YYYY HH:mm
console.log(`${dayNow}/${monthNow}/${yearNow} ${hourNow}:${minuteNow}`);