function cambiaColor(){
    document.getElementById("div1").style.color= "red";
}
function regresarColor(){
    document.getElementById("div1").style.color= "green";
}
function cambiarTamaño(){
    document.getElementById("div1").style.fontSize ="50px";
}
function regresarTamaño(){
    document.getElementById("div1").style.fontSize ="20px";
}
 function actualizaTotal(precio){
     var total = document.getElementById("total").value;

     var num = parseInt(total);
     num += parseInt(precio);
     

     document.getElementById("total").value = num.toString() ;
 }