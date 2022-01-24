let databarang = [
    { nama: "aksesoris komputer"},
    { nama: "aksesoris handphone"},
    { nama: "aksesoris diri"},
    { nama: "aksesoris motor"},
    { nama: "coming soon"},
  ];

let kategori_produk = document.getElementById("kategoriproduk");
let listcombo = "";
databarang.forEach((item) => {
listcombo += "<li class= 'pb-3'>"+"<a class=' fontprodukatas' href= ''> "+ item.nama +"</a>"+"</li>" ;
kategori_produk.innerHTML = listcombo;
});

// function loadform() {
// document.getElementById("loginmodal").disabled = true;
// }


const username = "admin";
const password = "123";

 function ceklog(){
  let loginuser = document.getElementById("loguser").value;
  let loginpass = document.getElementById("logpass").value;

  if(loginuser === "" || loginuser === null || loginpass === "" || loginpass === null){
    message("alert", "username dan password wajib diisi!");
  }else {
    if (loginuser === username && loginpass === password) {
      message("alertok", "Login Berhasil Selamat datang Muhammad Ardiansyah");
      // window.location.href = "index.html"; //ini untuk buka atau link ke halaman index.html
    } else {
      clearform()
      message("alert", "Username dan Password tidak sesuai!!");
    }
  }
 }

 function message(id, text) {
  document.getElementById(id).innerHTML = "<b>" + text + "</b>";
  document.getElementById(id).style.display = "inline";
}


function clearform() {
  document.getElementById("loguser").value ="";
  document.getElementById("logpass").value ="";
}
function cekout(){
  document.getElementById("alertckout").innerHTML = "<b>" + 1 + "</b>";
 document.getElementById("alertckout").style.display = "inline" ;

}