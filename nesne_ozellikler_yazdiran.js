const ogrenci = {
    ad:"Ahmet",
    yas:21,
    bolum:"Bilgisayar Mühendisliği"
};
for (let ozellik in ogrenci) {
    console.log(`${ozellik}:${ogrenci[ozellik]}`)
}