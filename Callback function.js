function prosesData(callback) { 
   console.log("Sedang memproses data..."); 
   callback(); // Memanggil fungsi callback 
 } 
   
 function selesai() { 
   console.log("Data telah diproses."); 
 } 
   
 prosesData(selesai); 
 // Output:  
 // Sedang memproses data... 
 // Data telah diproses.