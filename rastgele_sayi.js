let rastgeleSayi;

do {
  rastgeleSayi = Math.floor(Math.random() * 20) + 1;
} while (rastgeleSayi < 10);

console.log("Rastgele sayı 10 veya daha büyük: " + rastgeleSayi);
