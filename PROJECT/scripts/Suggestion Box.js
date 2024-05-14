// PLEASE IF IT WORKS DO NOT TOUCH THE CODE !!! HOURS PUT INTO THIS : 54 HOURS
function alpha(ch) {
  ch = ch.toUpperCase();
  i = 0;
  while (i < ch.length && (ch.charAt(i) > "A" || ch.charAt(i) <= "Z")) {
    i++;
  }
  return i == ch.length && i != 0;
}
function numerique(ch) {
  i = 0;
  while (i < ch.length && (ch.charAt(i) > "0" || ch.charAt(i) <= "9")) {
    i++;
  }
  return i == ch.length;
}
function verif(ch) {
  //DEBUGGING :((((((((
  // p1 = ch.indexOf(".");
  // p2 = ch.lastIndexOf(".");
  // console.log(ch);
  // console.log(p1);
  // console.log(p2);
  if (
    ch.indexOf("@") != ch.lastIndexOf("@") ||
    ch.indexOf(".") != ch.lastIndexOf(".")
  ) {
    return false;
  }
  ch2 = ch.substring(ch.indexOf(".") + 1, ch.length);
  console.log(ch2);
  if (ch2 != "com" && ch2 != "fr" && ch2 != "hotmail") {
    return false;
  }
  console.log(ch2);
  return true;
}
function valid() {
  nom = document.getElementById("nom").value;
  pre = document.getElementById("pre").value;
  mail = document.getElementById("mail").value;
  // location = document.getElementById("location").value;
  // f = document.getElementById("list").selectedIndex;
  if (!alpha(nom) || !alpha(pre)) {
    alert("Kindly Enter a Valid Name !");
    return false;
  }
  // idk how but when i uncomment this code the website crashes !!!
  // if (location == "") {
  //   alert("Kindly Enter your WorkPlace ! ");
  //   return false;
  // }
  // if (f < 1) {
  //   alert("Kindly Choose a Type of Suggestion ! ");
  // return false;
  // }
  // if ((!verif(mail)) || (mail="")) {
  if (mail == "" || verif(mail) == false) {
    alert("Email is Invalid ! ");
    return false;
  }
  alert("Submitted Succesfully ! ");
  document.getElementById("msg").innerHTML =
    "Kindly Describe Your Suggestion in yzineddine123@gmail.com, Thx !! ";
  return true;
}
