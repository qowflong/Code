 document.getElementById("btnPrint").addEventListener("click", function){
        let d=parseInt(document.getElementById("txtDay").value);
let d=parseInt(document.getElementById("txtMonth").value)-1;
let d=parseInt(document.getElementById("txtYear").value);
let dateObj = new Date(y, m, d);
document.getElementById("h-year").innerText = dateObj.getFullYear();
document.getElementById("h-month").innerText ="Tháng " + (dateObj.getMonth() + 1) ;
document.getElementById("h-day").innerText = dateObj.getDate();
let daysOfWeek = ["Chủ nhật", "Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
let thu = daysOfWeek[dateObj.getDay()];
document.getElementById("h-weekday").innerText = thu ;
let gio = new Date().getHours();
let loichao="Chào buổi sáng!";
if(gio >= 12 && gio < 18){
    loichao="Chào buổi chiều!";
    }else if(gio >=18) {
        loichao = " chào buổi tối!";
        }
    document.getElementById("h-greeting").innerText = loichao;
        };