/* =================================== !/

X55 is... Cross-Site Scripting!

Please check below on how to use this domain for XSS:
https://twitter.com/brutelogic/status/1488523712244637708

By @brutelogic
Visit https://brutelogic.com.br for more XSS stuff.

/! =================================== */

if (document.location.hash) {
   var frag = document.location.hash.match(/[^#][^#]*/)[0];
}

if (frag) {

  try {

    eval(frag);

  } catch(e) {

    alert("URL fragment (#) contains invalid JS code, try again!");

  }

} else {

  alert(1);

}
