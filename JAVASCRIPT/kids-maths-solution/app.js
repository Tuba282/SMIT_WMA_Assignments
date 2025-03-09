// // kids maths solution

var get_table = document.querySelector(".table");
var userSelect = +prompt(`What you wanna do first 
1. Forword Counting
2. Backword Counting
3. Generate Table

Enter your choice (Numbers 1-3):
`);

if (userSelect === 1) {
  // Forword Counting
  var start_fcounting = +prompt("Where you want to start counting.");
  var end_fcounting = +prompt("Where you want to end counting.");
  if (start_fcounting < end_fcounting) {
    for (var i = start_fcounting; i <= end_fcounting; i += 10) {
      for (var j = i; j < i + 10; j++) {
        var row = document.createElement("span");
        row.innerHTML = "  " + j + " ";
        get_table.appendChild(row);
      }
      document.write("<br />");
    }
  } else {
    var row = document.createElement("p");
    row.innerHTML = "Please Input Valid Number";
    get_table.appendChild(row);
  }
} else if (userSelect === 2) {
  // Backword Counting
  var start_bcounting = +prompt("Where you want to start counting.");
  var end_bcounting = +prompt("Where you want to end counting.");
  if (start_bcounting > end_bcounting) {
    for (var i = start_bcounting; i >= end_bcounting; i -= 10) {
      for (var j = i; j > i - 10; j--) {
        var row = document.createElement("span");
        row.innerHTML = "  " + j + " ";
        get_table.appendChild(row);
      }
      document.write("<br />");
    }
  } else {
    var row = document.createElement("p");
    row.innerHTML = "Please Input Valid Number";
    get_table.appendChild(row);
  }
} else if (userSelect === 3) {
  // table
  var table_num = +prompt("Enter table number ?");
  var starting_num = +prompt("Enter start number ?");
  var ending_num = +prompt("Enter end number ?");
  if (starting_num < ending_num) {
    for (var i = starting_num; i <= ending_num; i++) {
      var row = document.createElement("p");
      row.innerHTML = table_num + " x " + i + " = " + i * table_num + " <br/>";
      get_table.appendChild(row);
    }
  } else {
    var row = document.createElement("p");
    row.innerHTML = "Please Input Valid Number";
    get_table.appendChild(row);
  }
} else {
  var row = document.createElement("p");
  row.innerHTML = "Please Input Valid Number";
  get_table.appendChild(row);
}

// // table
// var table_num = +prompt("Enter table number ?");
// var starting_num = +prompt("Enter start number ?");
// var ending_num = +prompt("Enter end number ?");

// for (var i = starting_num; i <= ending_num; i++) {
//   if (starting_num < ending_num) {
//     var row = document.createElement("p");
//     row.innerHTML = table_num + " x " + i + " = " + i * table_num + " <br/>";
//     get_table.appendChild(row);
//   }else{
//     var row = document.createElement("p");
//     row.innerHTML = "Please Input Valid Number";
//     get_table.appendChild(row);
//   }
// }

// // Forword Counting
// var start_fcounting = +prompt("Where you want to start counting.");
// var end_fcounting = +prompt("Where you want to start counting.");
// for (var i = start_fcounting; i <= end_fcounting; i += 10) {
//   if (start_fcounting < end_fcounting) {
//     for (var j = i; j < i + 10; j++) {
//       var row = document.createElement("span");
//       row.innerHTML = "  " + j + " " ;
//       get_table.appendChild(row);
//     }
//     document.write("<br />");
//   } else {
//     var row = document.createElement("p");
//     row.innerHTML = "Please Input Valid Number";
//     get_table.appendChild(row);
//   }
// }

// // Backword Counting
// var start_bcounting = +prompt("Where you want to start counting.");
// var end_bcounting = +prompt("Where you want to start counting.");
// for (var i = start_bcounting; i >= end_bcounting; i -= 10) {
//   if (start_bcounting > end_bcounting) {
//     for (var j = i; j > i - 10; j--) {
//       var row = document.createElement("span");
//       row.innerHTML = "  " + j + " ";
//       get_table.appendChild(row);
//     }
//     document.write("<br />");
//   } else {
//     var row = document.createElement("p");
//     row.innerHTML = "Please Input Valid Number";
//     get_table.appendChild(row);
//   }
// }
