alert('Hello World');

//Semi Calon Atau Titik Koma//
alert('Hallo World'); console.log('Statement Baris Kedua');
console.log('Statement 1 Baris') //tidak perlu memakai titik koma//

//Variabel//
var fullName = "Iwaa"
document.write(fullName)

//Mengubah Value variabel//
var fullName = "Iwaa"
fullName = "Iwaa Kusumah"
fullName = "Gilang M.R. Iwa Kusumah"
document.write(fullName)

//Menggunakan Variabel//
var fullName = "Iwa"
fullName = "Iwaa Kusumah"
fullName = "Gilang M.R. Iwa Kusumah"

document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)

//perbedaan var,let, const//
//menggunkan let//
let y = 10;
if (true) {
    let y = 20;
    console.log("Nilai y di dalam blok:", y); //output 20
}
console.log("Nilai y di luar blok:", y); //output 10

//const//
const fullName = "Iwaa Kusumah"

fullName = "Iwaa"
document.write(fullName)//terjadi error

//menggunakan var//
var x = 10;
if (true) {
    var x = 20;
    console.log("Nilai x di dalam blok:", x); //output:20
}
console.log("Nilai di luar blok:", x); //output:20

//Tipe Data Number//
let bulat = 25
let desimal = 26.2

document.writeln(bulat)
document.writeln('<br>')
document.writeln(desimal)
document.writeln('<br>')
document.writeln("Hasil Penjumlahan = ")
document.writeln(desimal + bulat)

//Tipe data String//
let text = "Arkatama"
document.writeln(text)

//Tipe data Boolean//
let admin = true
let perbandingan = 15 > 8

document.writeln(perbandingan)

//Tipe data Undefined//
let kursus
document.writeln(kursus)

//Tipe data Null//
let kampus = null
document.writeln(kampus)

//Tipe data symbol//
let employee = Symbol("Iwaa Kusumah")
console.log(employee)
console.log(employee.description)

//Tipe Data Object//
let employe = {
    name: "Iwaa Kusumah",
    age: 21,
    job: "Backend Developer",
    isMarried: false,
}

document.write('Namaku adalah ${employe.name} dan dia berumur ${employe.age} years old')

//Operator Aritmatika//
let a = 3
let b = 5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);

//Operator Perbandingan//
console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a != b);

//Operator Logika//
console.log(a && b)
console.log(a || b)
console.log(!a)

//Operator Ternary//
let c = 3
let d = 5
console.log(a == b ? 'sama' : 'tidak sama');

//Popup Alert//
alert('Halo semua, selamat datang di Arkatama')

//popup prompt//
let String = prompt("Apakah kamu mau makan malam denganku?")
alert('Jawaban Anda' + String)

//Penggunaan If//
let string = confirm("Apakah kamu mau makan malam denganku?")

if (string) {
    alert('Jawaban anda mau')
}

//Penggunaan Else-if//
let Boolean = prompt("1 + 1 ?")

if (Boolean = 2) {
    alert('Jawaban anda Betul')
}else if (Boolean > 2) {
    alert('Jawaban anda Kelebihan')
}else if (Boolean < 2) {
    alert('Jawaban anda Kurang')
}else{
    alert('Jawaban Anda Salah')
}

//Perulangan while//
let z = 1

while (z<5) {
    document.writeln(z)
    document.writeln("<br>")
    z++
}

//Perulangan do-while//
let i = 1
document.writeln('Perulangan do while')
document.writeln("<br>")
do {
    document.writeln(i)
    document.writeln("<br>")
    i++
}while (i<5);

//break//
document.writeln('Perulangan for')
document.writeln("<br>")
for (let a = 1; a < 5; a++) {
    if (a == 3) {
        break
    }
    document.writeln(a)
    document.writeln("<br>")
}