// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") => "<div></div><div></div>"
// Namuna("p*1")   => "<p></p>"
// Namuna("li*3")  => "<li></li><li></li><li></li>"

// const tagLar = str => {
//   let new_str = str.split("*");
//   return `<${new_str[0]}></${new_str[0]}>`.repeat(new_str[1]);
// }
// console.log(tagLar("p*1"));
// console.log(tagLar("div*2"));
// console.log(tagLar("li*3"));

// -----------------------------------------------------------

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// namuna(3) ᔍ 6
// // 1 + 2 + 3 = 6
// namuna(10) ᔍ 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) ᔍ 28
// // 1 + 2 + 3 + ... + 7 = 28

// const summaSongacha = son => {
//   let summa = 0;
//   for (let i = 1; i <= son; i++){
//     summa += i;
//   }
//   return summa;
// }
// console.log(summaSongacha(3));
// console.log(summaSongacha(10));

// ----------------------------------------------------------------
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false


// const orasidami = (son, obj) => son >= obj.min && son <= obj.max ? true : false;
// console.log(orasidami(4, { min: 0, max: 5 }));
// console.log(orasidami(4, { min: 6, max: 10 }));
// console.log(orasidami(5, { min: 5, max: 5 }));

// ====================================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// const oxirigisiTengmi = son => Math.pow(son, 2).toString().endsWith(son.toString());
// console.log(oxirigisiTengmi(6));

// ==================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

// const indexPulsQiymat = arr => arr.map((qiymat, index) => qiymat + index);
// console.log(indexPulsQiymat([0, 0, 0, 0, 0]));
// console.log(indexPulsQiymat([0, 1, 0, 4, 10]));

// ==========================================================


// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:

// const shakarBormi = arr => {
//   const shakarli = ["fanta", "cola"];
//   return arr.filter(item => !shakarli.includes(item));
// }
// console.log(shakarBormi(["fanta", "cola", "water"]));
// console.log(shakarBormi(["fanta", "cola"]));
// console.log(shakarBormi(["lemonade", "beer", "water"]));

// ========================================================
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin

// const nechaXona = son => Math.abs(son).toString().length;
// console.log(nechaXona(1111111));

// ==================================================
// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.

// const engKattaSon = son => Number(son.toString().split("").sort((a, b) => b-a).join(""));
// console.log(engKattaSon("001"));


// ==========================================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// const randomSon = (son1, son2) => {
//   let max = Math.max(son1, son2);
//   let min = Math.min(son1, son2);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomSon(10,17));


//=====================================================

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

// const narissistikMi = son => {
//   let count=0;
//   let son_new = son.toString().split("");
//   for (let i of son_new) {
//     count+=Math.pow(Number(i),son_new.length)
//   }
//   return count === son;
// }
// console.log(narissistikMi(153));
// console.log(narissistikMi(370));
// console.log(narissistikMi(1652));

// =============================================
// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.

// const kattaHarflarSoni = str => {
//   let harf = "abcdefghijklmnopqrstuvyxzw".toUpperCase();
//   let count = 0;
//   for (let i of str) {
//     if (harf.includes(i)) count++;
//   }
//   return count;
// }

// console.log(kattaHarflarSoni("jdinJAJOoPAJAnjnadIin"));

