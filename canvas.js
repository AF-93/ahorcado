const canvas = document.querySelector("canvas");
let lap = canvas.getContext("2d");

function escenario(){ 
    
    lap.fillStyle="#46604B";
    lap.fillRect(150,700,1100,100);
    lap.fillRect(200,650,950,100);
}
    function error1(){
    lap.fillStyle="#60465B";
    lap.fillRect(550,630,300,20);
    lap.fillStyle="#60465B";
    lap.fillRect(640,250,20,400);}
    function error2(){
    //vidas 5
    lap.fillStyle="#60465B";
    lap.fillRect(640,250,200,20);
    lap.fillRect(840,250,20,50);
}   
    function error3(){ //vidas 4
    lap.beginPath()
    lap.arc(850,350,30,0,Math.PI*2);
    lap.fill();
    lap.fillStyle="#60465B";
    lap.fillRect(840,380,20,100);}
    function error4(){
    //vidas 3
    lap.beginPath()
    lap.moveTo(840,380);
    lap.lineTo(800,420);
    lap.lineTo(800,450);
    lap.lineTo(840,410);
    lap.fill()
    lap.closePath()}
    function error5(){
    //vidas 2
    lap.beginPath()
    lap.moveTo(860,380);
    lap.lineTo(900,420);
    lap.lineTo(900,450);
    lap.lineTo(860,410);
    lap.fill()
    lap.closePath()}
    function error6(){
    //vidas 1
        lap.beginPath()
    lap.moveTo(840,460);
    lap.lineTo(800,500);
    lap.lineTo(800,530);
    lap.lineTo(845,490);
    lap.fill()
    lap.closePath()}
    function error7(){
    //vidas 0
    lap.beginPath()
    lap.moveTo(840,440);
    lap.lineTo(900,500);
    lap.lineTo(900,530);
    lap.lineTo(845,490);
    lap.fill()
    lap.closePath()}

function error(vidas){
    switch(vidas){
        case 6:
        error1()
        break;
        case 5:
            error1()
            error2()
            break;
        case 4:
            error1()
            error2()
            error3()
            break;
        case 3:
            error1()
            error2()
            error3()
            error4()
            break;
        case 2:
            error1()
            error2()
            error3()
            error4()
            error5()
            break;
        case 1:
            error1()
            error2()
            error3()
            error4()
            error5()
            error6()
            break;
        case 0:
            error1()
            error2()
            error3()
            error4()
            error5()
            error6()
            error7()
            break;
    }

}

escenario()
