// PLEASE IF IT WORKS DO NOT TOUCH THE CODE !!! HOURS PUT INTO THIS : 54 HOURS
products = [];
var i = 0;
function updateCartQuantity1() {
  a = document.getElementById("liste1").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b1.1").checked;
  y = document.getElementById("b1.2").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false) {
    aux = "Plain";
  } else if (y == true && x == false) {
    aux = "Lavendar";
  } else {
    alert("Kindly Choose one Style!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    quantity: a - b,
    option: aux,
    price: 2899,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity2() {
  a = document.getElementById("liste2").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b2.1").checked;
  y = document.getElementById("b2.2").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false) {
    aux = "Black";
  } else if (y == true && x == false) {
    aux = "Gold";
  } else {
    alert("Kindly Choose one Style!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Black Glasses With Polarized Lenses for Men and Women",
    quantity: a - b,
    option: aux,
    price: 1560,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity3() {
  a = document.getElementById("liste3").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b3.1").checked;
  y = document.getElementById("b3.2").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false) {
    aux = "Big";
  } else if (y == true && x == false) {
    aux = "Small";
  } else {
    alert("Kindly Choose one Style!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Sun Hats for Women and Men , Pachable Straw Beach Hat",
    quantity: a - b,
    option: aux,
    price: 2200,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity4() {
  a = document.getElementById("liste4").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b4.1").checked;
  y = document.getElementById("b4.2").checked;
  z = document.getElementById("b4.3").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false && z == false) {
    aux = "S";
  } else if (y == true && x == false && z == false) {
    aux = "M";
  } else if (z == true && x == false && y == false) {
    aux = "L";
  } else {
    alert("Kindly Choose one Size!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Mens Womens Running Trainers Lightweight Sport Shoes",
    quantity: a - b,
    option: aux,
    price: 3000,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity5() {
  a = document.getElementById("liste5").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b5.1").checked;
  y = document.getElementById("b5.2").checked;
  z = document.getElementById("b5.3").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false && z == false) {
    aux = "S";
  } else if (y == true && x == false && z == false) {
    aux = "M";
  } else if (z == true && x == false && y == false) {
    aux = "L";
  } else {
    alert("Kindly Choose one Size!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "2 Plain , Cotton , Fruit of the Loom Men's Original Tee T-shirt",
    quantity: a - b,
    option: aux,
    price: 800,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity6() {
  a = document.getElementById("liste6").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b6.1").checked;
  y = document.getElementById("b6.2").checked;
  z = document.getElementById("b6.3").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false && z == false) {
    aux = "S";
  } else if (y == true && x == false && z == false) {
    aux = "M";
  } else if (z == true && x == false && y == false) {
    aux = "L";
  } else {
    alert("Kindly Choose one Size!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Women Chiffon Beachzear Coverup in Black , All Sizes Available",
    quantity: a - b,
    option: aux,
    price: 4889,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity7() {
  a = document.getElementById("liste7").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b7.1").checked;
  y = document.getElementById("b7.2").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false) {
    aux = "Black";
  } else if (y == true && x == false) {
    aux = "White";
  } else {
    alert("Kindly Choose one Style!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "6 Piece non Stick Baking Set , Extremely Useful and such a Time Saver",
    quantity: a - b,
    option: aux,
    price: 3225,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity8() {
  a = document.getElementById("liste8").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b8.1").checked;
  y = document.getElementById("b8.2").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false) {
    aux = "Big";
  } else if (y == true && x == false) {
    aux = "Small";
  } else {
    alert("Kindly Choose one Style!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Trash Can with Foot Pedal , 50 Liter or 25 Liter",
    quantity: a - b,
    option: aux,
    price: 675,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity9() {
  a = document.getElementById("liste9").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b9.1").checked;
  y = document.getElementById("b9.2").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false) {
    aux = "Gold";
  } else if (y == true && x == false) {
    aux = "Silver";
  } else {
    alert("Kindly Choose one Style!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Double Elongated Twist Frensh Wire Earrings , in Gold or in Silver",
    quantity: a - b,
    option: aux,
    price: 8999,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function updateCartQuantity10() {
  a = document.getElementById("liste10").selectedIndex + 1;
  b = document.getElementById("cart-quantity").innerHTML;
  x = document.getElementById("b10.1").checked;
  y = document.getElementById("b10.2").checked;
  z = document.getElementById("b10.3").checked;
  a += Number(b);
  d = new Date();
  if (x == true && y == false && z == false) {
    aux = "S";
  } else if (y == true && x == false && z == false) {
    aux = "M";
  } else if (z == true && x == false && y == false) {
    aux = "L";
  } else {
    alert("Kindly Choose one Size!");
    return false;
  }
  localStorage.setItem("quantity", JSON.stringify(a));
  document.getElementById("cart-quantity").innerHTML = String(a);
  products[i] = {
    name: "Men Cozy Fleece Zip Up Hoodie , Red Color , all Sizes Available",
    quantity: a - b,
    option: aux,
    price: 2499,
    time: {
      s: d.getSeconds(),
      m: d.getMinutes(),
      h: d.getHours(),
      M: d.getMonth(),
      d: d.getDate(),
      a: d.getFullYear(),
    },
  };
  i++;
  console.log(products);
  localStorage.setItem("table", JSON.stringify(products));
}
function showProducts() {
  StoredProducts = localStorage.getItem("table");
  if (StoredProducts) {
    Products2 = JSON.parse(StoredProducts);
    if (Products2.length == 0) {
      alert("Succesfully Retrieved but Found Nothing in The Cart ");
    } else {
      alert("Succesfully Retrieved Products!");
      console.log(Products2);
    }
  } else {
    alert("User Data Not Found. Contents of Products Were Reset To Empty");
  }
  StoredProducts = localStorage.getItem("table");
  if (StoredProducts) {
    // Products2 = JSON.parse(StoredProducts);
    // alert("Succesfully Retrieved Products!");
    // console.log(Products2);
    for (j = 0; j < Products2.length; j++) {
      document.getElementById("products").innerHTML =
        document.getElementById("products").innerHTML +
        `<br>` +
        "Product : " +
        Products2[j]["name"];
      document.getElementById("products").innerHTML =
        document.getElementById("products").innerHTML +
        `<br>` +
        "Quantity : " +
        Products2[j]["quantity"];
      document.getElementById("products").innerHTML =
        document.getElementById("products").innerHTML +
        `<br>` +
        "Style/Size : " +
        Products2[j]["option"];
      document.getElementById("products").innerHTML =
        document.getElementById("products").innerHTML +
        `<br>` +
        "On " +
        Products2[j]["time"]["a"] +
        "/" +
        Products2[j]["time"]["M"] +
        "/" +
        +Products2[j]["time"]["d"] +
        " At " +
        Products2[j]["time"]["h"] +
        ":" +
        +Products2[j]["time"]["m"] +
        ":" +
        +Products2[j]["time"]["s"] +
        `<br>`;
    }
  } else {
    alert("User Data Not Found. Contents of Products Were Reset To Empty");
  }
}
function convertTo$(cents) {
  ch = "";
  for (i = 0; i < cents.length; i++) {
    if (i == cents.length - 2) {
      ch += ".";
    }
    ch += cents[i];
  }
  return ch;
}
function showPrice() {
  //getting elements to calculate total
  StoredQuantity = localStorage.getItem("quantity");
  if (StoredQuantity) {
    q = JSON.parse(StoredQuantity);
    document.getElementById("price").innerHTML =
      document.getElementById("price").innerHTML + "(" + q + ") : ";
    document.getElementById("cart-quantity").innerHTML = String(q);
  }
  StoredProducts = localStorage.getItem("table");
  if (StoredProducts) {
    Products2 = JSON.parse(StoredProducts);
  }
  price = 0;
  for (i = 0; i < Products2.length; i++) {
    price += Products2[i]["price"] * Products2[i]["quantity"];
  }
  // tryna convert the price from cents to $
  price = String(price);
  ch = convertTo$(price);
  document.getElementById("price").innerHTML += "$" + String(ch);
  //tot b4 taxes
  totb4tax = 499 + parseInt(price);
  totb4tax = String(totb4tax);
  ch2 = convertTo$(totb4tax);
  document.getElementById("totb4").innerHTML += "$" + String(ch2);
  //taxes
  tax = parseInt(price) / 10;
  tax = parseInt(tax);
  tax = String(tax);
  ch3 = convertTo$(tax);
  document.getElementById("tax").innerHTML += "$" + String(ch3);
  //total
  tot = parseInt(totb4tax) + parseInt(tax);
  tot = String(tot);
  ch4 = convertTo$(tot);
  document.getElementById("tot").innerHTML += "$" + String(ch4);
}
