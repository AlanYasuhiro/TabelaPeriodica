$(document).ready(function(){
    var confere = [];
    var resp = [];
    var t;
    var t2;
    var t3;
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
               
               do{
                    var r = Math.floor(Math.random() * 5 + 1);
                    var r2 = Math.floor(Math.random() * 5 + 1);
                    var r3 = Math.floor(Math.random() * 5 + 1);
               }while(r == r2 || r2 == r3 || r == r3)
               console.log(r + " " + r2 + " " + r3);
               
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
                   t2 = r2;
                   t3 = r3;
//                   console.log(t + " " + r);
                   
                   if(r == 1 || r2 == 1 || r3 == 1){
                        $('#txtnum').text('?');
                   }else{
                       $('#txtnum').text(elements[37]);
                   }
                   if(r == 2 || r2 == 2 || r3 == 2){
                       $('#txtSimbolo').text('?');
                   }else{
                       $('#txtSimbolo').text(elements[38]);
                   }
                   if(r == 3 || r2 == 3 || r3 == 3){
                       $('#txtNome').text('?');
                   }else{
                       $('#txtNome').text(aux);
                   }
                   if(r == 4 || r2 == 4 || r3 == 4){
                       $('#txtEstado').text('?');
                   }else{
                       $('#txtEstado').text(elements[40]);
                   }
                   if(r == 5 || r2 == 5 || r3 == 5){
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
                   
                   if((t == 1 || t2 == 1 || t3 == 1) && (confere[0] != resp[0])){
                       alert("Você errou o número atômico");
                        $('#txtnum').text('?');
                   }
                   if((t == 2 || t2 == 2 || t3 == 2) && (confere[1] != resp[1])){
                       alert("Você errou o simbolo");
                       $('#txtSimbolo').text('?');
                   }
                   if((t == 3 || t2 == 3 || t3 == 3) && (confere[2] != resp[2])){
                       alert("Você errou o nome");
                       $('#txtNome').text('?');
                   }
                   if((t == 4 || t2 == 4 || t3 == 4) && (confere[3] != resp[3])){
                       alert("Você errou o estado");
                       $('#txtEstado').text('?');
                   }
                   if((t == 5 || t2 == 5 || t3 == 5) && (confere[4] != resp[4])){
                       alert("Você errou se é metal ou não");
                       $('#txtMonm').text('?');
                   }
               } 
           }
       }); 
    });
})