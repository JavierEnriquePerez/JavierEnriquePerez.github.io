$(document).ready(function($) {

    var c = 1;
    let baraja= [];
    
    
    $("#iniciar").click(function(event) {
        
        let cartas = [];


        delete $("#iniciar").removeClass("#lista")
        for (var i = 1; i <=16; i++){
            $("#c1_"+i).removeClass("marca");
            $("#c1_"+i).removeClass("marca");

            let b= true;

            while (b){
                let exists = false;
                var num = Math.floor(Math.random()*54) + 1;

                for (var j = 0; j < cartas.length; j++){
                    if (cartas[j] == num){
                        exists = true;
                    }
                }
                if (!exists){
                    $("#c1_"+i).attr("src","img/"+num+".jpg");
                    $("#c1_"+i).attr("carta",num);
                    b=false;
                    cartas.push(num);
                }
            }
        }
            let cartas2 = [];

        for (var i = 1; i <=16; i++){

            let b= true;

            while (b){
                let exists = false;
                var num = Math.floor(Math.random()*54) + 1;

                for (var j = 0; j < cartas2.length; j++){
                    if (cartas2[j] == num){
                        exists = true;
                    }
                }
                if (!exists){
                    $("#c2_"+i).attr("src","img/"+num+".jpg");
                    $("#c2_"+i).attr("carta",num);
                    b=false;
                    cartas2.push(num);
                }
            }

            
        }
           
        for (let index =1; index<=54; index++){
            baraja.push(index);
        }
       baraja =  baraja.sort(()=>Math.random() - 0.5)
           $("#darCarta").fadeIn("slow");
    });     
    
    $("#darCarta").click(function(event){
        
        
        if (c<54){

        $("#lista").append(
    "<div class='col-1'><img class='img-fluid' src='img/"+baraja[c]+".jpg'></div>"
            );
            for(let index=1; index<=16; index++){
                if($("#c1_"+index).attr("carta")==baraja[c]){ 
                $("#c1_"+index).addClass("marca");
                }
            
                if($("#c2_"+index).attr("carta")==baraja[c]){ 
                $("#c2_"+index).addClass("marca");
            } 
        }
            c++;
        }
        var cont_1 = 0;
        var cont_2 = 0;
            if(c>15){
                    for(let index = 1; index <=16; index++){
                        if($("#c1_"+index).hasClass("marca")){
                            cont_1++;
                        }
                        if($("#c2_"+index).hasClass("marca")){
                            cont_2++;
                        }
                    }
                    if(cont_1 == 16){
                        alert("GANA CARTA 1");
                    }
                    if(cont_2 == 16){
                        alert("GANA CARTA 2");
                    }
            }

    });
});
