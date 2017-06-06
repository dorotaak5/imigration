


// var i;
// for (i = 0; i < x.length; i++) {
//     var x = document.querySelectorAll("button");
//     var y = document.querySelectorAll(".answer");
//     document.querySelector.x.addEventListener('click', function() {
//     // document.querySelector.y.style.display = 'block';
//   x[i].style.backgroundColor = "red";
// });
    
// }

// var x = '.button'; 
// var i;
// for (i = 0; i < x.length; i++) {
//     var y = '.answer';
//     document.querySelector(x).addEventListener('click', function() {
//     document.querySelector(y).style.display = 'block';
// });
// }    
// // });


// var buttons = document.querySelectorAll(".buttton");
// var i = 0, length = buttons.length;
// for (i; i < length; i++) {
//     if (document.addEventListener) {
//         buttons[i].addEventListener("click", function() {
//             // use keyword this to target clicked button
//             document.querySelector('.answer').style.display = 'block';
//         });
//     // } else {
//     //     buttons[i].attachEvent("onclick", function() {
//     //         // use buttons[i] to target clicked button
//     //         document.querySelector('.answer').style.display = 'none';
//     //     });
//     // };
// }}


// var element = 'answer'
// document.querySelector('button').addEventListener('click', function(event) {
//   func(event.target);
// });



// var button = document.getElementsByTagName("button");
//  for (var i = 0; i < button.length; i++) {
//      function func(element) {
//     element.style.backgroundColor = "blue";
// }
// //   button[i].addEventListener("click", function() {
// //      this.style.backgroundColor = "gray";
// //   });
//  }


// var button = document.getElementsByClassName("button");
// var answer = document.getElementsByClassName("answer")
// var myFunction = function() {
//      document.getElementsByClassName("button").addEventListener('click', function() {
//     answer.style.display = "block";
//     })
// };

// for (var i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', myFunction, false);
// }

// var theParent = document.querySelector("button");
// theParent.addEventListener("click", doSomething, false);
 
// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         alert("Hello");
//     }
//     e.stopPropagation();
// }
