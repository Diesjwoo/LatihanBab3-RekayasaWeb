// Fungsi untuk menghitung luas 
 function hitungLuas(panjang, lebar) { 
   return panjang * lebar; 
 } 
   
 // Fungsi untuk menghitung keliling 
 function hitungKeliling(panjang, lebar) { 
   return 2 * (panjang + lebar); 
 } 
   
 // Memanggil fungsi 
 let panjang = 5; 
 let lebar = 3; 
   
 let luas = hitungLuas(panjang, lebar); 
 let keliling = hitungKeliling(panjang, lebar); 
   
 console.log("Luas Persegi Panjang: " + luas); // Output: Luas Persegi Panjang: 15 
 console.log("Keliling Persegi Panjang: " + keliling); // Output: Keliling Persegi