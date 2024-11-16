// 20ye kadar olan asal sayıları yazdıran js kodu

for (let sayi = 2; sayi <= 20; sayi++) {
    let asalmi = true;

    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            asalmi = false;
            break;
        }
    }


    if (asalmi) {
        console.log(sayi);
    }
}