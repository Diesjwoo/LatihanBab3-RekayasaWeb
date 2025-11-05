if (true) { 
   
var varScope = "Ini var scope"; 
   
let letScope = "Ini let scope"; 
 } 
   
 // Mengakses variabel di luar blok 
 console.log(varScope); // Output: Ini var scope 
 // console.log(letScope); // Error: letScope is not defined