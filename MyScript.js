//[Thực hành] Khai báo và sử dụng biến
function sudungbien() {
    //Bai 1
    document.write("Bài 1");
    document.write('<br/>');
    document.write('<br/>');
    let i = 10;
    let f = 20.5;
    let b = true;
    let s = 'Hà Nội';

    document.write('i = ' + i);
    document.write('<br/>');
    document.write('f = ' + f);
    document.write('<br/>');
    document.write('b = ' + b);
    document.write('<br/>');
    document.write('s = ' + s);
    document.write('<br/>');

    //Bài 2
    document.write('<br/>');
    document.write("Bài 2")
    document.write('<br/>');
    document.write('<br/>');
    let width = 20;
    let height = 10;
    let area = width * height;
    document.write('Area = ' + area);

}

//[Thực hành] Sử dụng toán tử
function sudungtoantu() {
    let inputWidth;
    let inputHeight;

    inputWidth = prompt("Enter the width");
    inputHeight = prompt("Enter the height");

    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);

    let area = width * height;
    document.write("The area is: " + area);
}

//[Bài tập] Biến, kiểu dữ liệu và toán tử

//Bải 1: Tính điểm trung bình và tổng
function tinhdiemtrungbinh() {
    let diemtoan = +prompt("Nhập điểm toán");
    let diemly = +prompt("Nhập điểm lý");
    let diemhoa = +prompt("Nhập điểm hóa");

    let tong = diemtoan + diemly + diemhoa;
    let trungbinh = tong / 3;

    document.write("Điểm trung bình: " + trungbinh);
    document.write('<br/>');
    document.write("Tổng điểm: " + tong);

}

//Bải 2: Đổi độ C sang độ F
function doinhietdo() {
    let doC = +prompt("Nhập nhiệt độ C");

    let doF = doC / 5 * 9 + 32  // C/5 = (F-32)/9;

    document.write("Độ C: " + doC + " >>> độ F: " + doF );

}

//Bải 3: Tính diện tích hình tròn
function dientichhinhtron() {
    let bankinh = +prompt("Nhập bán kính hình tròn");

    let dientich = Math.PI * bankinh * bankinh;

    document.write("Đường tròn có bán kính " + bankinh + " có diện tích là: " + dientich );

}

//Bải 4: Tính chu vi hình tròn
function chuvihinhtron() {
    let bankinh = +prompt("Nhập bán kính hình tròn");

    let chuvi = 2 * Math.PI * bankinh ;

    document.write("Đường tròn có bán kính " + bankinh + " có chu vi là: " + chuvi );

}


//[Bài tập] Ứng dụng chuyển đổi tiền tệ
function convertMoney() {

    let radio = 23000;
    let amount = document.getElementById("amount").value;
    let fromCountry = document.getElementById("fromC").value;
    let toCountry = document.getElementById("toC").value;

    let result;

    if (fromCountry == "VND"){
        if (toCountry == "USD"){
            result = amount / 23000;
        }else{result = amount ;}
    }else {
        if (toCountry == "USD"){
            result = amount;
        }else{result = amount * 23000;}
    }
document.getElementById ('convertResult').innerHTML = "Result: " + result + " " + toCountry;
}

//[Bài tập] Ứng dụng máy
function cong2so(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1 * 1 + num2 * 1 ;
    document.getElementById ('calResult').innerHTML = "Result Add: " + result ;
}
function tru2so(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1 - num2 ;
    document.getElementById ('calResult').innerHTML = "Result Sub: " + result ;
}
function nhan2so(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = num1 * num2 ;
    document.getElementById ('calResult').innerHTML = "Result Mul: " + result ;
}
function chia2so(){

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if(num2 == 0){
        document.getElementById ('calResult').innerHTML = "Result Div: Invalid"  ;
    }else{
        let result = num1 / num2 ;
        document.getElementById ('calResult').innerHTML = "Result Div: " + result ;
    }
}
