function is_username_valid(username) 
  {
    var ketentuanUsername = /^[a-z]{5,12}$/g;//huruf kecil dengan panjang 5-9 karakter. Username tidak boleh terdapat huruf besar/angka/karakter special.
    return ketentuanUsername.test(username);
  }
/*Metode test () mengeksekusi pencarian untuk kecocokan 
antara Regular Expression dan string yang ditentukan. 
Mengembalikan nilai true atau false. */

if (is_username_valid("aaatgg")) 
  {
    console.log("Username Is Valid");
  } 
else 
  {
    console.log("Username Is Invalid");
  }


function is_password_valid(password) 
  {
    var ketentuanPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return ketentuanPassword.test(password);
  }

if (is_password_valid("FGFGFGFGFM3ru!lkFGFgffgfgffgfg74")) 
  {
    console.log("Username Is Valid");
  } 
else 
  {
    console.log("Username Is Invalid");
  }