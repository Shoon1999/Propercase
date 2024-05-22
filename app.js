// var sentence = "hello world";
// var word = sentence.split(" ");
// console.log(word);
// for(let i=0;i<word.length;i++){
//     let capital= word[i].charAt(0).toUpperCase()+word[i].charAt(1).toLowerCase();
//    console.log(capital);
// }
// let capital;
// for (let i = 0; i < word.length; i++) {
//     let front = word[i].charAt(0).toUpperCase()+word[i].slice(1,word[i].length);
//     console.log(front);
    // for (let j = 1; j < word[i].length; j++) {
        // capital = word[i].charAt(j).toLowerCase() ;
        // console.log(capital);
        //  let laststring=word[i].slice(1,word[i].length);
        //  console.log(laststring);
    // }
// }
var input=document.querySelector("input");
var btn=document.querySelector("button");
var strong=document.querySelector("strong");
let front;

btn.addEventListener("click",()=>{
    var realinput = input.value;
    var word = realinput.split(" ");
    for (let i = 0; i < word.length; i++) {
         front = word[i].charAt(0).toUpperCase()+word[i].slice(1,word[i].length);
         console.log(front);
         strong.innerText += " " +front;
         console.log(strong);
    }
    
});

