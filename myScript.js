src="jquery.flip.min.js";
$(document).ready(function(){
    var confere = [];
    var resp = [];
    var t;
    

    $.ajax({
           url: 'jogo.php',
           type: 'POST',
           success: function(result){
               var el = result;
               var elements = el.split(' ');
               var aux = elements[36].slice(18);


               $('#txtnum').text(elements[37]);

               $('#txtSimbolo').text(elements[38]);

               $('#txtNome').text(aux);

               $('#txtEstado').text(elements[40]);

               if(elements[41] == 'yes'){
                    $('#txtMonm').text('Metal');
               }else{
                   $('#txtMonm').text('Não Metal');
               } 
               resp.push(elements[37]);
               resp.push(elements[38]);
               resp.push(aux);
               resp.push(elements[40]);
               resp.push(elements[41]);
               confere.push($('#txtnum').text());
               confere.push($('#txtSimbolo').text());
               confere.push($('#txtNome').text());
               confere.push($('#txtEstado').text());
               confere.push($('#txtMonm').text());
           }
       });
    
    $("#btSimbolo").click(function(){
        confere = [];
        confere.push($('#txtnum').text());
        confere.push($('#txtSimbolo').text());
        confere.push($('#txtNome').text());
        confere.push($('#txtEstado').text());
        confere.push($('#txtMonm').text());
    });
    
    $("#btnum").click(function(){
        confere = [];
        confere.push($('#txtnum').text());
        confere.push($('#txtSimbolo').text());
        confere.push($('#txtNome').text());
        confere.push($('#txtEstado').text());
        confere.push($('#txtMonm').text());
    });
    
    $("#btNome").click(function(){
        confere = [];
        confere.push($('#txtnum').text());
        confere.push($('#txtSimbolo').text());
        confere.push($('#txtNome').text());
        confere.push($('#txtEstado').text());
        confere.push($('#txtMonm').text());
    });
    
    $("#btEstado").click(function(){
        confere = [];
        confere.push($('#txtnum').text());
        confere.push($('#txtSimbolo').text());
        confere.push($('#txtNome').text());
        confere.push($('#txtEstado').text());
        confere.push($('#txtMonm').text());
    });
    $("#btMonm").click(function(){
        confere = [];
        confere.push($('#txtnum').text());
        confere.push($('#txtSimbolo').text());
        confere.push($('#txtNome').text());
        confere.push($('#txtEstado').text());
        confere.push($('#txtMonm').text());
    });
    
    $("#btn").click(function(){
       $.ajax({
           url: 'jogo.php',
           type: 'POST',
           success: function(result){
               var el = result;
               var elements = el.split(' ');
               var r = Math.floor(Math.random() * 10 + 1);
               
               var aux = elements[36].slice(18);
               
               var acertou = 0;
               
               console.log(confere[0] + " = " + resp[0]);
               if(confere[0] == resp[0]){
                   console.log("Deu bom");
                   acertou++;
               }
               console.log(confere[1] + " = " + resp[1]);
               if(confere[1] == resp[1]){
                   console.log("Deu bom");
                   acertou++;
               }
               console.log(confere[2] + " = " + resp[2]);
               if(confere[2] == resp[2]){
                   console.log("Deu bom");
                   acertou++;
               }
               console.log(confere[3] + " = " + resp[3]);
               if(confere[3] == resp[3]){
                   console.log("Deu bom");
                   acertou++;
               }
               console.log(confere[4] + " = " + resp[4]);
               if(confere[4] == "Metal"){
                   console.log("Deu bom");
                   acertou++;
               }else if(confere[4] == "Não Metal"){
                   console.log("Deu bom");
                   acertou++;
               }
               console.log(acertou);
               if(acertou == 5){
                   t = r;
                   console.log(t + " " + r);
                   if(r > 0 && r <= 2){
                        $('#txtnum').text('?');
                   }else{
                       $('#txtnum').text(elements[37]);
                   }
                   if(r > 2 && r <= 4){
                       $('#txtSimbolo').text('?');
                   }else{
                       $('#txtSimbolo').text(elements[38]);
                   }
                   if(r > 4 && r <= 6){
                       $('#txtNome').text('?');
                   }else{
                       $('#txtNome').text(aux);
                   }
                   if(r > 6 && r <= 8){
                       $('#txtEstado').text('?');
                   }else{
                       $('#txtEstado').text(elements[40]);
                   }
                   if(r > 8 && r <= 10){
                       $('#txtMonm').text('?');

                   }else{
                       if(elements[41] == 'yes'){
                            $('#txtMonm').text('Metal');
                       }else{
                           $('#txtMonm').text('Não Metal');
                       } 
                   }
                   
                   resp = [];

                   resp.push(elements[37]);
                   resp.push(elements[38]);
                   resp.push(aux);
                   resp.push(elements[40]);
                   resp.push(elements[41]);
               }else{
                   console.log(t);
                   
                   if(t > 0 && t <= 2){
                       alert("Você errou o número atômico");
                        $('#txtnum').text('?');
                   }else if(t > 2 && t <= 4){
                       alert("Você errou o simbolo");
                       $('#txtSimbolo').text('?');
                   }else if(t > 4 && t <= 6){
                       alert("Você errou o nome");
                       $('#txtNome').text('?');
                   }else if(t > 6 && t <= 8){
                       alert("Você errou o estado");
                       $('#txtEstado').text('?');
                   }else if(t > 8 && t <= 10){
                       alert("Você errou se é metal ou não");
                       $('#txtMonm').text('?');
                   }
               } 
           }
       }); 
    });
})