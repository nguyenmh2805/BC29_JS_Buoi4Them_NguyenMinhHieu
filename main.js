// BT1
document.getElementById("ngayHomQua").onclick = function () {
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;

    if(ngay > 1 && thang >= 1){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + (ngay - 1) + "/" + thang + "/" + nam;
    } else if (ngay === 1 && thang === 3){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "28" + "/" + "2" + "/" + nam;
    } else if (ngay === 1 && thang === 1){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "31" + "/" + "12" + "/" + (nam - 1);
    } else if (ngay === 1 && thang === 2){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "31" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 4){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "31" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 6){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "31" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 9){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "31" + "/" + (thang -1) + "/" + nam;
    } else if (ngay === 1 && thang === 10){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "31" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 5){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "30" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 7){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "30" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 8){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "30" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 10){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "30" + "/" + (thang - 1) + "/" + nam;
    } else if (ngay === 1 && thang === 12){
        document.getElementById("resultNgayHomQua").innerHTML = "Ngày hôm qua là: " + "30" + "/" + (thang - 1) + "/" + nam;
    }
}

document.getElementById("ngayMai").onclick = function () {
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;

    if(ngay >= 1 && thang >= 1 && ngay < 31){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + (ngay + 1) + "/" + thang + "/" + nam;
    } else if (ngay === 31 && thang === 12){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + "1" + "/" + (nam + 1);
    } else if (ngay === 28 && thang === 2){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + "3" + "/" + nam;
    } else if (ngay === 31 && thang === 1){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 31 && thang === 3){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 30 && thang === 4){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 31 && thang === 5){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 30 && thang === 6){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 31 && thang === 7){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 8) + "/" + nam;
    } else if (ngay === 31 && thang === 8){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 30 && thang === 9){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 31 && thang === 10){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    } else if (ngay === 30 && thang === 11){
        document.getElementById("resultNgayMai").innerHTML = "Ngày mai là: " + "1" + "/" + (thang + 1) + "/" + nam;
    }
}

// BT2
document.getElementById("soNgay").onclick = function () {
    var Thang = document.getElementById("Thang").value * 1;
    var Nam = document.getElementById("Nam").value * 1;

    if(Nam % 4 == 0){
        if(Nam % 100 == 0){
            if(Nam % 400 == 0){
                document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 29 ngày";
            } else {
                document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 28 ngày";
            } 
        } else {
            document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 29 ngày";
        }
    } else {
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 28 ngày";
    }

    if(Thang === 1){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 3){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 5){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 7){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 8){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 10){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 12){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 31 ngày";
    } else if (Thang === 4){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 30 ngày";
    } else if (Thang === 6){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 30 ngày";
    } else if (Thang === 9){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 30 ngày";
    } else if (Thang === 11){
        document.getElementById("resultSoNgay").innerHTML = "Số ngày là: 30 ngày";
    }
}

// BT3




