const mahasiswa = { nama: "fulan", umur: 21, jurusan: "Teknologi informasi" }; 
   
for (let key in mahasiswa) { 
  console.log(key + ": " + mahasiswa[key]); 
} 
// Output:  
// nama: fulan 
// umur: 21 
// jurusan: Teknologi informasi 