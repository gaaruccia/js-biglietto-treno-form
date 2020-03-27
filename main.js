var valnome, valkm, valeta, sconto, msg;
var costo1Kilometro = 0.21;
var nomeU = document.getElementById('nome');
var kmU = document.getElementById('km');
var etaU = document.getElementById('eta');
var generaButton = document.getElementById('genera');
generaButton.addEventListener("click",
function(){
  var visible = document.getElementById('sectionmod')
  visible.className = "visible";
  visible.className = "white";
  valnome = nomeU.value;
  valkm = kmU.value;
  var prezzoFinale = valkm * costo1Kilometro;
  valeta = etaU.value;
  var carrozza = Math.floor(Math.random()*10)+1
  var codiceCP = Math.floor(Math.random()*10000)+1
  if (valeta >=1 && valeta <= 17){
    sconto = prezzoFinale * 20 / 100;
    msg = "Sconto Minorenne"
  } else if (valeta >= 66){
    sconto = prezzoFinale * 40 / 100;
    msg = "Sconto Over 65"
  } else if (valeta >=18 && valeta <=65){
    sconto = 0;
    msg = "Offerta Base"
  }else{
    valnome ="Inserisci il tuo nome sopra"
    msg = "Inserisci l' età sopra"
  }
  var prezzoScontato = prezzoFinale - sconto;
  document.getElementById('nomeu').innerHTML = valnome;
  document.getElementById('sconto').innerHTML = msg;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codicecp').innerHTML = codiceCP;
  document.getElementById('prezzoscontato').innerHTML = prezzoScontato.toFixed(2);
  }
);
var annullaButton = document.getElementById('annulla');
annullaButton.addEventListener("click",
  function(){
    valnome = nomeU.value = ""
    valeta = etaU.value = ""
    valkm = kmU.value = ""
    var invisible = document.getElementById('sectionmod')
    invisible.className = "invisible";
  }
);
