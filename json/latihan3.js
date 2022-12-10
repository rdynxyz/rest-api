let profile = {
    nama : "Radyan Bintang",
    "umur" : 20,
    "email" : "radyan6661@gmail.com",
    "hobi" : ["baca", "coding", "gaming"]
}
// OBJECT TO JSON
console.log(JSON.stringify(profile));

// JSON TO OBJECT
// 1. VANILA JS
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let profile = JSON.parse(this.responseText);
        console.log(profile);
    }
}
xhr.open('GET', 'test.json', true);
xhr.send();

// 2. JQUERY
$.getJSON('test.json', function(data) {
    console.log(data)

})
