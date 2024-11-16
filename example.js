const ogrenci = {
    ad:"Ali",
    yas:20,
    bolum:"Bilgisayar Mühendisliği"
};

for (let ozellik in ogrenci) {
    console.log(`${ozellik}: ${ogrenci[ozellik]}`);
}