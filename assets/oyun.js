
let kullaniciHamlesi = prompt('Hamlenizi Giriniz: Taş , Kağıt , Makas');

console.log(kullaniciHamlesi);

 let bilgisayarinHamlesi = ["Taş", "Kağıt", "Makas"].at(Math.floor(Math.random() *3));
 console.log(bilgisayarinHamlesi);

 

 if (kullaniciHamlesi === bilgisayarinHamlesi ) {

 console.log ('Berabere Bitti');
 } else if (

  (kullaniciHamlesi === 'Taş' && bilgisayarinHamlesi === 'Makas') &&
  (kullaniciHamlesi === 'Makas' && bilgisayarinHamlesi === 'Kağıt') &&
  (kullaniciHamlesi === 'Kağıt' && bilgisayarinHamlesi === 'Taş')
) {
 console.log('Kazandınız'); }
  else {
  console.log('Kaybettiniz :( ');
 }