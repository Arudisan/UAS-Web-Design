function hurufbesar(){
    let ket = document.getElementById("namadaftar");
    ket.value = ket.value.toUpperCase();
    };

    document.getElementById("btn-daftar").disabled = true;
    
  
    document.getElementById("cfpassword").onchange = function () {
    let pass = document.getElementById("password").value ; 
    let cfpass = document.getElementById ("cfpassword").value ; 
    if(pass !== cfpass ){
       document.getElementById("notepass").style.display ="inline" ;
       document.getElementById("btn-daftar").disabled = true;
    } else {
      document.getElementById("notepass").style.display ="none" ;
       document.getElementById("btn-daftar").disabled = false ;
    }
  
    } 
  
      document.getElementById("btn-daftar").onclick = function () {
      let today = new Date();
      const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      let bt = month[today.getMonth()] + today.getFullYear(); 

      let nama = document.getElementById("namadaftar").value ;
      let username = document.getElementById("email").value ; 
      let pass = document.getElementById("password").value ; 
      let cfpass = document.getElementById ("cfpassword").value ; 
      let notlp = document.getElementById("notelpon").value ; 
          
      if (nama === "" || nama === null|| username=== "" || username === null || pass === "" || pass === null || cfpass === "" || cfpass === null || notlp === "" || notlp === null) {
            alert ("Semua Input Form Wajib diisi !");
      }else{
                document.getElementById("Terdaftar").style.display = "inline";
                document.getElementById("dft").style.display = "none";
                
                let kode = bt + nama.substring(0, 2); 
  
                let registered = "<div class= 'row'>";
                registered += "<div class= 'col-md-2'>" + "</div>";
                registered +=  "<div class= 'col-md-9 bgformpend'>" + "<h2>" + "Terimakasih Telah Melakukan Pendaftaran sebagai Member>>" + "</h1>" +"</div>";
                registered += "<div class= 'col-md-2'>"+"</div>";
                registered += "</div>" ;
                registered += "<div class='row'>";
                registered += "<div class= 'col-md-2'>" + "</div>";
                registered += "<div class='col-md-9 bgformpend'>";
                registered += "<div class='row'>";
                registered += "<div class='col-md-2'>"+"</div>";
                registered += "<div class='col-md-3'>";
                registered += "<label for='Namadaftar' id='' class='form-label'>"+"Nama"+"</label>" ;
                registered += "</div>";
                registered += "<div class='col-md-3'>";
                registered +=  "<p>"+":"+nama+"</p>";   
                registered +=  "</div>";
                registered +=  "<div class='col-md-2'>"+"</div>";
                registered +=   "</div>";
                registered +=  "<div class='row'>";
                registered +=  "<div class='col-md-2'>"+"</div>";
                registered +=  "<div class='col-md-3'>";
                registered +=  "<label for='Namadaftar' id='' class='form-label'>"+"Username"+"</label>";
                registered +=  "</div>";
                registered +=  "<div class='col-md-3'>";
                registered +=  "<p>"+":"+username+"</p>";
                registered +=  "</div>";
                registered +=  "<div class='col-md-2'>"+"</div>";
                registered +=   "</div>";
                registered +=   "<div class='row'>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "<div class='col-md-3'>";
                registered +=   "<label for='Namadaftar' id=''class='form-label'>"+"Nomer Telepon"+"</label>";
                registered +=   "</div>";
                registered +=   "<div class='col-md-3'>";
                registered +=   "<p>"+":"+notlp+"</p>";
                registered +=   "</div>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "</div>";
                registered +=   "<div class='row'>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "<div class='col-md-3'>";
                registered +=   "<label for='Namadaftar' id='' class='form-label'>"+"Kode Member"+"</label>"; 
                registered +=   "</div>";
                registered +=   "<div class='col-md-3'>";
                registered +=   "<p>"+":"+kode+"</p>";
                registered +=   "</div>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "</div>";
                registered +=   "</div>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "</div>";
                registered +=   "<div class='row pb-5'>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "<div class='col-md-9 text-center bgformpend'>"+"<h2>"+"Silahkan Cek Email Untuk Mendapatkan Link Aktivasi"+"</h2>"+"</div>";
                registered +=   "<div class='col-md-2'>"+"</div>";
                registered +=   "</div>";
                document.getElementById("Terdaftar").innerHTML += registered ; 
              }         
     }
  