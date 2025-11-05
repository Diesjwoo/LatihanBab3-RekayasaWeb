const orang = { nama: "John", umur: 25 }; 
 const angka = [1, 2, 3, 4]; 
   
 // Mengubah properti objek 
 orang.umur = 30; 
 console.log(orang); // Output: { nama: 'John', umur: 30 } 
   
 // Mengubah elemen array 
 angka[0] = 10; 
 console.log(angka); // Output: [10, 2, 3, 4] 
   
 // Tidak bisa mengubah referensi objek atau array 
 // orang = { nama: "Jane", umur: 28 }; // Error 
 // angka = [5, 6, 7]; // Error 