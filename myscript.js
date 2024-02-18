var clear = document.querySelector('#button');
var square = document.querySelectorAll('td');
function clearBoard(){
    for(var i=0; i< square.length; i++){
        square[i].textContent='';
    }
}clear.addEventListener('click', clearBoard);



function myFunction(){
    if(this.textContent===""){
        this.textContent='X';
    }else if(this.textContent==="X"){
        this.textContent='O';
    }else{
        this.textContent='';
    }

}
for (var i=0; i<square.length; i++){
    square[i].addEventListener('click', myFunction)
}

// var head= document.querySelector("#headOne");
// head.addEventListener('click', function(){
//     head.textContent="X";
//     head.style.fontSize="40px";
//     head.style.fontFamily="Arial"
// })
// var head= document.querySelector("#headOne");
// head.addEventListener('dblclick', function(){
//     head.textContent="O";
//     head.style.fontSize="40px";
//     head.style.fontFamily="Arial"
// })
// var headTwo= document.querySelector("#headTwo");
// headTwo.addEventListener('click', function(){
//     headTwo.textContent="X";
//     headTwo.style.fontSize="40px";
//     headTwo.style.fontFamily="Arial";

// })
// var headTwo= document.querySelector("#headTwo");
// headTwo.addEventListener('dblclick', function(){
//     headTwo.textContent="O";
//     headTwo.style.fontSize="40px";
//     headTwo.style.fontFamily="Arial";
// })
// var headThree= document.querySelector("#headThree");
// headThree.addEventListener('click', function(){
//     headThree.textContent="X";
//     headThree.style.fontSize="40px";
//     headThree.style.fontFamily="Arial";

// })
// var headThree= document.querySelector("#headThree");
// headThree.addEventListener('dblclick', function(){
//     headThree.textContent="O";
//     headThree.style.fontSize="40px";
//     headThree.style.fontFamily="Arial";
// })
// var data= document.querySelector("#dataOne");
// data.addEventListener('click', function(){
//     data.textContent="X";
//     data.style.fontSize="40px";
//     data.style.fontFamily="Arial";
// })
// var data= document.querySelector("#dataOne");
// data.addEventListener('dblclick', function(){
//     data.textContent="O";
//     data.style.fontSize="40px";
//     data.style.fontFamily="Arial";
// })
// var dataTwo= document.querySelector("#dataTwo");
// dataTwo.addEventListener('click', function(){
//     dataTwo.textContent="X";
//     dataTwo.style.fontSize="40px";
//     dataTwo.style.fontFamily="Arial";
// })
// var dataTwo= document.querySelector("#dataTwo");
// dataTwo.addEventListener('dblclick', function(){
//     dataTwo.textContent="O";
//     dataTwo.style.fontSize="40px";
//     dataTwo.style.fontFamily="Arial";
// })
// var dataThree= document.querySelector("#dataThree");
// dataThree.addEventListener('click', function(){
//     dataThree.textContent="X";
//     dataThree.style.fontSize="40px";
//     dataThree.style.fontFamily="Arial";
// })
// var dataThree= document.querySelector("#dataThree");
// dataThree.addEventListener('dblclick', function(){
//     dataThree.textContent="O";
//     dataThree.style.fontSize="40px";
//     dataThree.style.fontFamily="Arial";
// })

// var dataFour= document.querySelector("#dataFour");
// dataFour.addEventListener('click', function(){
//     dataFour.textContent="X";
//     dataFour.style.fontSize="40px";
//     dataFour.style.fontFamily="Arial";
// })
// var dataFour= document.querySelector("#dataFour");
// dataFour.addEventListener('dblclick', function(){
//     dataFour.textContent="O";
//     dataFour.style.fontSize="40px";
//     dataFour.style.fontFamily="Arial";
// })
// var dataFive= document.querySelector("#dataFive");
// dataFive.addEventListener('click', function(){
//     dataFive.textContent="X";
//     dataFive.style.fontSize="40px";
//     dataFive.style.fontFamily="Arial";
// })
// var dataFive= document.querySelector("#dataFive");
// dataFive.addEventListener('dblclick', function(){
//     dataFive.textContent="O";
//     dataFive.style.fontSize="40px";
//     dataFive.style.fontFamily="Arial";
// })
// var dataSix= document.querySelector("#dataSix");
// dataSix.addEventListener('click', function(){
//     dataSix.textContent="X";
//     dataSix.style.fontSize="40px";
//     dataSix.style.fontFamily="Arial";
// })
// var dataSix= document.querySelector("#dataSix");
// dataSix.addEventListener('dblclick', function(){
//     dataSix.textContent="O";
//     dataSix.style.fontSize="40px";
//     dataSix.style.fontFamily="Arial";
// })

// var button= document.querySelector("#button");
// button.addEventListener('click', function(){
   
//     dataSix.textContent=" "; 
//     dataFive.textContent=" "; 
//     dataFour.textContent=" "; 
//     dataThree.textContent=" "; 
//     dataTwo.textContent=" "; 
//     dataOne.textContent=" "; 
//     headOne.textContent=" "; 
//     headTwo.textContent=" "; 
//     headThree.textContent=" "; 
// })

