// var myName = "Lowis";
// var userInput = prompt('Siapa Namamu ?');
// alert(`Nama saya  ${userInput}`)
// alert("Nama Saya " + userInput)

//resign
// javascript akan membaca yang paling bawah jika ada var sama

// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)

// prompt("Siapa Namamu ?")
// var userInput = prompt ("Masuk Universitas Gak ?")
// // jika jawabannya mau keluarkan persenannya

// if (userInput === "mau") {

//     var chanceGetUniv = Math.random() * 100
// chanceGetUniv = Math.floor(chanceGetUniv)
// console.log(chanceGetUniv)
// alert("Kemungkinan masuk Univ adalah " + chanceGetUniv + "%")
// } else {
//     alert("GoodLuck !")
// }




// prompt("Brp Nilaimu")
// // Jika nilai userInput diatas 80
// // kemungkinan masuk universitas diatas 80

// var userInput = prompt("Berapa Nilaimu ?")
// var nilai = userInput


var Student = prompt("Siapa Namamu ?");

var userInput = prompt("Apakah kamu ingin masuk universitas ?");

if (userInput === "mau") {
    var nilaiStudent = prompt("Berapa nilai akhir SMA/SMK mu?");
   
    if (nilaiStudent < 30) {
        alert("Tidak mungkin masuk universitas.");
    } else {
        var chanceGetUniv = Math.random() * 100;
        chanceGetUniv = Math.floor(chanceGetUniv) + 1;

       
        if (nilaiStudent < 50) {
            if (chanceGetUniv < 50) {
                alert("Hmm, kemungkinan kamu " + Student + " kecil masuk UNIV." + "dengan kemungkinan masuk " + chanceGetUniv + "%");
            } 
            else {
                alert("Hmm, kemungkinan kamu " + Student + " bisa masuk UNIV." + "dengan kemungkinan masuk " + chanceGetUniv + "%");
            }
        }

        if (chanceGetUniv > 70 && nilaiStudent > 60) {
            alert("Hei, " + Student + " pasti masuk UNIV dengan nilai SMA " + nilaiStudent + " mu yang besar itu!" + "dengan kemungkinan masuk " + chanceGetUniv + "%");
        }

        if (chanceGetUniv > 70 || nilaiStudent > 80) {
            alert("Hei, " + Student + " pasti masuk UNIV dengan nilai SMA " + nilaiStudent + " mu yang besar itu!" + "dengan kemungkinan masuk " + chanceGetUniv + "%");
        }
        
    }
} else {
    alert("GoodLuck, " + Student + "!");
}