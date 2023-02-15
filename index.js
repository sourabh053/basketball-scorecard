let count1 = 0;
let count2 = 0;
let homeCnt = document.getElementById("home-score")
let guestCnt = document.getElementById("guest-score")
function compare(){
    if(count1>count2){
    document.getElementById("head").style.color = "#FF3F16";
    document.getElementById("tail").style.color = "#EEEEEE";       
    }else if(count2 > count1){
    document.getElementById("tail").style.color = "#FF3F16";        
    document.getElementById("head").style.color = "#EEEEEE";           
    }else{
    document.getElementById("head").style.color = "#EEEEEE";           
    document.getElementById("tail").style.color = "#EEEEEE";           
    }
}
function add1(){
    count1++;
    homeCnt.textContent = count1
    compare()
}
function add2(){
    count1 += 2;
    homeCnt.textContent = count1
    compare()    
}
function add3(){
    count1 += 3;
    homeCnt.textContent = count1
    compare()    
}
function add1g(){
    count2++;
    guestCnt.textContent = count2
    compare()    
}
function add2g(){
    count2 += 2;
    guestCnt.textContent = count2
    compare()    
}
function add3g(){
    count2 += 3;
    guestCnt.textContent = count2
    compare()    
}
function newgame(){
    homeCnt.textContent = 0;
    guestCnt.textContent = 0;
    count1 = 0;
    count2 = 0; 
    compare();   
}
// console.log(homeCnt)
