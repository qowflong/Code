const now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng tính từ 0 đến 11 nên cần +1
let day = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

// Ghép các chuỗi lại theo đúng định dạng YYYY-MM-DD HH:mm
let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

console.log("Định dạng thời gian:", formattedDateTime);