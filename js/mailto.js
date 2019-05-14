
document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "https://ius174.ru/php/contacts.php", true);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
      if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поле сообщения, если в ответе первым словом будет имя отправителя
        f.messageFF.removeAttribute('value');
        f.messageFF.value='';
        f.nameFF.removeAttribute('value');
        f.nameFF.value='';
      }
    }
}
  http.onerror = function() {
    /*alert('Извините, вложение не было передано. Возможно, размер вложения слишком большой.');*/
    f.nameFF.removeAttribute('value');
    f.nameFF.value='';
    f.messageFF.removeAttribute('value');
    f.messageFF.value='';
    f.contactFF.removeAttribute('value');
    f.contactFF.value='';
    f.formСontrol.removeAttribute('value');
    f.formСontrol.value='';
    f.fileFF.removeAttribute('value');
    f.fileFF.value='';
}
  http.send(new FormData(f));
  /*alert('Ваше сообщение было отправлено на question@ius174.ru. Спасибо за обращение!');*/
  f.nameFF.removeAttribute('value');
  f.nameFF.value='';
  f.messageFF.removeAttribute('value');
  f.messageFF.value='';
  f.contactFF.removeAttribute('value');
  f.contactFF.value='';
  f.formСontrol.removeAttribute('value');
  f.formСontrol.value='';
  f.fileFF.removeAttribute('value');
  f.fileFF.value='';
}, false);
