for (var num = 0; num <= 20; num++) {
  if (num === 0) {
    console.log(num + " est nul");
  } else if (num % 2 === 0) {
      console.log(num + " est pair");
  } else {
      console.log(num + " est impair");
    }
}
// EXERCICE: MULTIPLICATION TABLES

for (var a = 0; a <= 10; a++) {
   console.log(a*9);
 }

// EXERCICE: GRADES

 for (var b = 0; b <= 100; b++) {
    if (b >= 90) {
      console.log("Pour " + b + " points vous avez le grade A");
    } else if (b >= 80) {
      console.log("Pour " + b + " points vous avez le grade B");
    } else if (b >= 70) {
      console.log("Pour " + b + " points vous avez le grade C");
    } else if (b >= 65) {
      console.log("Pour " + b + " points vous avez le grade D");
    } else {
      console.log("Pour " + b + " points vous avez le grade F");
    }
  }

// EXERCICE TRIANGLE

var star = "*"
 for (var i=1; i<=5; i++) {
   console.log(star);
   star = star + "*";
 }
