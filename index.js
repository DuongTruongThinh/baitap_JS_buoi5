// Bài 1
function tinhKetQuaBai1() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value * 1;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem1").value * 1;
  var diem3 = document.getElementById("diem1").value * 1;
  var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;

  if (tongDiem > diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0)
    document.getElementById(
      "ketQuaBai1"
    ).innerText = `Đạt, tổng điểm là ${tongDiem}`;
  else
    document.getElementById(
      "ketQuaBai1"
    ).innerText = `Không đạt, tổng điểm là ${tongDiem}`;
}
// Bài 2
function tinhKetQuaBai2() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("soKw").value * 1;
  var tienDien;
  if (soKw <= 50) tienDien = soKw * 500;
  else if (soKw <= 100) tienDien = 50 * 500 + (soKw - 50) * 650;
  else if (soKw <= 200) tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  else if (soKw <= 350)
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  else
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  document.getElementById(
    "ketQuaBai2"
  ).innerText = `Tiền điện của khách hàng ${hoTen} là ${tienDien} VND`;
}
// Bài 3
function tinhKetQuaBai3() {
  var hoTen = document.getElementById("bai3_hoTen").value;
  var tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  var tienThue;
  var thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
  if (thuNhapChiuThue > 960)
    tienThue =
      (5 * 60 +
        10 * (120 - 60) +
        15 * (210 - 120) +
        20 * (384 - 210) +
        25 * (624 - 384) +
        30 * (960 - 624) +
        35 * (thuNhapChiuThue - 960)) /
      100;
  else if (thuNhapChiuThue > 624)
    tienThue =
      (5 * 60 +
        10 * (120 - 60) +
        15 * (210 - 120) +
        20 * (384 - 210) +
        25 * (624 - 384) +
        30 * (thuNhapChiuThue - 624)) /
      100;
  else if (thuNhapChiuThue > 384)
    tienThue =
      (5 * 60 +
        10 * (120 - 60) +
        15 * (210 - 120) +
        20 * (384 - 210) +
        25 * (thuNhapChiuThue - 384)) /
      100;
  else if (thuNhapChiuThue > 210)
    tienThue =
      (5 * 60 +
        10 * (120 - 60) +
        15 * (210 - 120) +
        20 * (thuNhapChiuThue - 210)) /
      100;
  else if (thuNhapChiuThue > 120)
    tienThue = (5 * 60 + 10 * (120 - 60) + 15 * (thuNhapChiuThue - 120)) / 100;
  else if (thuNhapChiuThue > 60)
    tienThue = (5 * 60 + 10 * (thuNhapChiuThue - 60)) / 100;
  else if (thuNhapChiuThue > 0) tienThue = (5 * thuNhapChiuThue) / 100;
  else tienThue = 0;
  document.getElementById(
    "ketQuaBai3"
  ).innerText = `Tiền thuế của khách hàng ${hoTen} là ${tienThue} triệu VND`;
}
//Bài 4
function bai4() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value*1;
  if (loaiKhachHang == 1) 
  {
    var soKetNoi = document.querySelector("#soKetNoi");
    soKetNoi.style.display = "block";
  }
}
function tinhKetQuaBai4() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value*1;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var kenh = document.getElementById("soKenhCaoCap").value*1;
  var ketNoi = document.getElementById("soKetNoi").value*1;
  var tienCap;
  if (loaiKhachHang==0)
  tienCap=4.5+20.5+7.5*kenh;
  else {
    if (ketNoi<=10)
    tienCap=15+50*kenh+75;
    else
    tienCap = 15+50*kenh+75+(ketNoi-10)*5;
  }
  document.getElementById("ketQuaBai4").innerText=`Tiền cáp của khách hàng ${maKhachHang} là ${tienCap} $`
}
