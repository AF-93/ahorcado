var palabra = document.getElementById("pala");
var notiene = document.querySelector(".notiene");
var adivina = document.querySelector(".adivina");

function gana() {
    var audio = new Audio("./victoryff.mp3");
    audio.play();
    audio.volume=0.2
  }
function pierde() {
    var audio = new Audio("./sad-trombone.mp3");
    audio.play();
    audio.volume=0.2
  }

String.prototype.replaceAt = function (pos,letra) {
    return this.substr(0,pos) + letra + this.substr(pos+letra.length);
}
lista = ["ghostface","pinhead","freddy","sadako","chucky","jason","michaelmyers"]
deletreado = lista[Math.round(Math.random()*lista.length)].split(""); //obtengo una palabra al azar y la separo en letreas
let deletreadoSub = deletreado.toString() //la transformo en un string
.replaceAll(",","") //elimino las comas
.replace(/\w/g,"_ "); // remplazo las letras con guiones bajos y un espacio para separar
function agregaPalabra(){
        let input = document.getElementById("nuevaPalabra");
        lista = lista.push(input)
        window.location.assign("./ahorcado.html")
    }

function deletre(){
    
    palabra.textContent = deletreadoSub //agrego en el html los guiones de la palabra
}
deletre()

vidas = 7 
aciertos = 0  

const canvas = document.querySelector("canvas");
let lap = canvas.getContext("2d");

function escenario(){ //escenario de la horca
    
    lap.fillStyle="#46604B";
    lap.fillRect(150,700,1100,100);
    lap.fillRect(200,650,950,100);
}
    function error1(){ //empezamos a dibujar la horca
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

function error(vidas){ //dibujamos la horca y el ahorcado en relacion a las vidas restantes
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

        let pal=deletreado.toString()
        .replaceAll(",","");
        //abajo usamos evento de teclado para detectar la tecla presionada y realizar todas las funciones acordes al juego
        document.addEventListener("keydown",(e)=>{var teclaPresionada = e.key;

        if (deletreado.includes(teclaPresionada)){
        let tecla = teclaPresionada.toString()
        let coincide1 = deletreado.indexOf(tecla);
        let coincide2 = deletreado.lastIndexOf(tecla);
        let pos1 = coincide1.toString();
        let pos2 = coincide2.toString();
        let si = 2
        let repe = deletreadoSub.indexOf(teclaPresionada)
        
        if(deletreadoSub[repe]==teclaPresionada){
            console.log("ya pusiste eso papu");
        }else{if(coincide1==coincide2||coincide2==-1){
        deletreadoSub = deletreadoSub.toString()
        .replaceAt(pos1*2,tecla)
        palabra.textContent=deletreadoSub.toUpperCase()
        aciertos++
        console.log(pal.charAt(pos1));}
        else{
            deletreadoSub = deletreadoSub.toString()
        .replaceAt(pos1*2,tecla)
        .replaceAt(pos2*2,tecla)
        palabra.textContent=deletreadoSub.toUpperCase()
        aciertos = aciertos+si
        }}

    } else{
    
        let noesta = notiene.textContent + teclaPresionada               
        let errado = notiene.textContent
                            .toString()
                            .toLowerCase()
                            .split("")
        //con este switch evito que cualquier tecla que no sea una letra cuente para los errores.
        comprueba=errado.indexOf(teclaPresionada)
        console.log(comprueba);
        console.log(teclaPresionada);
        console.log(errado);
        if(errado[comprueba]==teclaPresionada){
            console.log("ya pusiste eso papu");
        }else{
        switch(teclaPresionada){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "<":
        case ">":
        case ".":
        case "-":
        case "_":
        case ",":
        case ";":
        case " ":
        case "Backspace":
        case "CapsLock":
        case "Tab":
        case "|":
        case "Esc":
        case "AltGraph":
        case "Control":
        case "Shift":
        case "+":
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
        case "Alt":
            console.log("no pibe no pode");
            break;
        default:
                notiene.textContent = noesta.toUpperCase()
                console.log(errado);
                console.log(noesta);
                vidas = vidas-1
                break;
        }}

        error(vidas)
        console.log("no contiene")
        console.log(vidas);}

        if(aciertos==pal.length){ //sonido de victorias apenas completar la palabra
            gana()
        }
        if(vidas==0){ //sonido de derrota apenas se terminan tus vidas
            pierde()
        }
        function victoria() { //funcion de alerta al ganar, con leve retraso para que en la pantalla se lea la palabra completa
            if (aciertos>=pal.length){
            pal=pal.toUpperCase()
            let alerta = confirm("Ganaste! La palabra era "+ pal + " ¿Querés jugar de nuevo?")
            if (alerta == true){ //si el jugador quiere volver a jugar se recarga la pagina
            aciertos=0
            window.location.reload();
            ;
        }else{ //caso contrario se vuelve a la pagina principal
            aciertos=0
            window.location.assign("./index.html")
        } //en ambos casos resetearemos el contador de aciertos
    }} setTimeout(victoria,1000)
   
        function derrota()
        {if (vidas<=0){
            pal=pal.toUpperCase()
            let alerta = confirm("¡Perdiste! la palabra era " + pal + " ¿Querés jugar de nuevo?")
            if (alerta == true){
            vidas=7
            window.location.reload()
        }else{
            vidas = 7
            window.location.assign("./index.html")
        } 
        }
    }setTimeout(derrota,1500)
    })



    function a() {
        var audio = new Audio("./strager 8 bit.mp3");
        audio.play();
        audio.volume = 0.1
        audio.loop = true
      }

    function b() {
        var audio = new Audio("./Halloween.mp3");
        audio.play();
        audio.volume = 0.1
        audio.loop = true
      }

      function c() {
        var audio = new Audio("./Dream Warrior8bit.mp3");
        audio.play();
        audio.volume = 0.1
        audio.loop = true
      } 
    
      function d() {
        var audio = new Audio("./The Walking Dead Theme 8 Bit.mp3");
        audio.play();
        audio.volume = 0.1
        audio.loop = true
      } 
      function play(){//musica de fondo aleatoria
        let sonido = Math.round(Math.random()*3)
        console.log(sonido);
        switch (sonido) {
            case 1:
                a()
                break;
            case 2:
                b()
                break;
            case 3:
                d()
                break;
            case 0:
                c()
                break;
        }
    }