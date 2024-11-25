
let cursor = document.querySelector('.cursor');
let cursorSm = document.querySelector('.cursorSm');
let cursorSmm = document.querySelector('.cursorSmm');
function customMouse(event){

let top = event.pageY;
let left = event.pageX;
cursor.style.top = `${top}px`;
cursor.style.left = `${left}px`;

cursorSm.style.top = `${top}px`;
cursorSm.style.left = `${left}px`;

cursorSmm.style.top = `${top}px`;
cursorSmm.style.left = `${left}px`;
}

window.addEventListener('mousemove',customMouse);
// cursor ends here

// basic loop
// let paras = document.querySelectorAll('p');
// for (let a = 0; a <= a; a++){
//   paras[a].style.color = 'red';
//   paras[a].style.color = 'green';
//   console.log(a);
// }

// sir practice
// let paras = document.querySelectorAll('p');
// for (let a = 0; a <= paras.length - 1; a++){
//   paras[a].style.color = 'red';
//   console.log(a);
// }


// for of loop easier to use nodelist and array
// let fruits = ['apple', 'banana', 'cherry'];
// for (let fruit of fruits) {
//   console.log(' i love ' + fruit);
// }


// let paras = document.querySelectorAll('p');
// for (p of paras) {
// p.style.color = 'red';
//   console.log(paras);
// }
// basic loop ends here

let faqs = document.querySelectorAll(".faq");
function toggleFAQ(event){
for (faq of faqs){
   faq.classList.remove('active');
}
event.currentTarget.classList.toggle("active");
}
for (faq of faqs){
faq.addEventListener('click',toggleFAQ);
}
// FAQ ENDS HERE
function darkMode(){
   let body = document.body;
   body.classList.toggle('dark');
}

// text hidden starts
function toggleText(hideId, showId) {
   const hideText = document.getElementById(hideId);
   const showText = document.getElementById(showId);
 
   hideText.classList.add('hidden');
   showText.classList.remove('hidden');
 }
 