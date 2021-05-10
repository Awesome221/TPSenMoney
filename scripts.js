function Langues(){
    var lgp = document.getElementById("lang").value;

        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
            document.body.innerHTML = this.responseText;
            }
            };
if(lgp == 'Fr'){
        xhttp.open("GET", "donnees_fr.txt", true);}
if(lgp == 'En'){
        xhttp.open("GET", "donnees_en.txt", true);}
if(lgp == 'Wo'){
        xhttp.open("GET", "donnees_wo.txt", true);}
        xhttp.send();
}
var cpt, sld;

var flag = -1;

var tabNumeros = ["771234567", "761234567", "701234567", "781234567", "777654321"];

var tabComptes = [12000, 18000, 15000, 33000, 55000];

var tabCodes = [1111, 0000, 1110, 1234, 5555];

    function getValue() {
   		var lg = document.getElementById("lang").value;
    	var select = document.getElementById('num');
            var idx = select.selectedIndex;
            var val = select.options[idx].value;
            var content = select.options[idx].innerHTML;


var key_m = document.getElementById('codeIncorrect');
var id = tabNumeros.indexOf(val);
var key_vrf = /^[0-9]{4}$/;
    
                var code = document.getElementById('code').value;

	if(code == tabCodes[id]){
		if(lg == "En" || lg == "Fr")
		{
			key_m.textContent = 'ok';
		}if(lg == "Wo"){
			key_m.textContent = 'bakhna';
		}
			key_m.style.color = 'green';
			mef.style.display = 'block';
		
	}
	else{
		if(lg == "Fr"){
			key_m.textContent = 'Ce code ne correspond pas à votre numéro de téléphone!';
		}if(lg == "Wo"){
			key_m.textContent = 'Code bi gua bouggal méggo wout ak sa numero!';
		}if(lg == "En"){
			key_m.textContent = 'this code doesn\'t match your phone number!'; 
		}
		key_m.style.color = 'brown';
		mef.style.display = 'none';
	}
                }

var mef = document.getElementById('bton');


function afficherSolde(){
	var select = document.getElementById('num');
    var idx = select.selectedIndex;
    if(lg == "Fr"){
	alert('Le solde de votre compte est de '+tabComptes[idx]);}
    if(lg == "En"){
	alert('Your account balance is '+tabComptes[idx]);}
    if(lg == "Wo"){
	alert(tabComptes[idx]+' mo nekka si sa kalpé Sen Money...');}
}

function mobilMoney(){
			var select = document.getElementById('num');
            var idx = select.selectedIndex;
            var val = select.options[idx].value;
            var content = select.options[idx].innerHTML;

var id = tabNumeros.indexOf(val);

            var code = document.getElementById('code').value;

	if(code == tabCodes[id]){
		if(lg == "Fr"){
 	var chx = prompt("----Menu SENMONEY---\nTaper le numéro du service choisi\n1. Solde de mon compte\n2. Transfert dargent\n3. Paiement de facture\n4. Paramètre");
 			}
 		if(lg == "En"){
 	var chx = prompt("----Menu SENMONEY---\nEnter your choose service number\n1. Account\n2. Money Transfer\n3. Bill payment\n4. Setting");
 			}
 		if(lg == "Wo"){
 	var chx = prompt("----Menu SENMONEY---\nBindal fi numéro bi gua yitéwo\n1. Kholal sa guirsa\n2. Yooné xaliss\n3. Fayal sa facture\n4. taneff");
 			}

 	if(chx == 1){
 		afficherSolde();
 	}
 	if(chx == 2){
 		if(lg == 'Fr'){
	 		var env = prompt("Saisissez le numéro du destinataire\n");
	 		if(!isNaN(env)){
	 			var senv = prompt("Le montant à envoyé");
	 		}
	 	}
	 	if(lg == 'En'){
	 		var env = prompt("Enter the recipient's number\n");
	 		if(!isNaN(env)){
	 			var senv = prompt("How much do you want to send it?");
	 		}
	 	}
	 	if(lg == 'Wo'){
	 		var env = prompt("Bindal fi Numéro bi kho wara diott\n");
	 		if(!isNaN(env)){
	 			var senv = prompt("Gnata gua koy yooné?");
	 		}
	 	}

	    		var idx = select.selectedIndex;

 		function transfert(env, senv){

	    		 for(var i=0; i<tabNumeros.length; i++){
	    		 	if(env === tabNumeros[i]){
	    		 		cpt = tabComptes[idx] - senv;
	    		 		var senV = tabComptes[idx] - cpt;
	    		 		tabComptes[idx] = cpt;
	    		 		flag = i;
	    		 	}	
	    		 }
	    		 if(flag != -1){
	    		 		sld = tabComptes[flag] + senV;
 						tabComptes[flag] = sld;
if(lg == "Fr"){
	    		alert('Votre transfert a bien été envoyé.\nA Bientôt, cher(e) client!');
    		}
if(lg == "En"){
	    		alert('Your transfer has been sent successfully.\nSee you soon, dear customer!');
    		}
if(lg == "Wo"){
	    		alert('Sa yobal dem na thie lo wor.\nFi akh thie kanam, dieureudieuf thie koloutébi!');
    		}
	    		 	}
	    		 	else{
if(lg == "Fr"){
	    		 		alert('Votre numéro n\'est pas pris en compte!\nA Bientôt...');
    		}
if(lg == "En"){
	    		 		alert('Your number is not taken into account!\nSee you soon...');
    		}
if(lg == "Wo"){
	    		 		alert('Nio gui diégalu, wayé xamé wouniu sa numéro bi!\nBa bénen su niou xarit...');
    		}
	    		 	}
	    		 
    		}

 		if(senv < tabComptes[idx]){
 			if(!isNaN(senv)){
 			var numE = document.getElementById('num').value;
    		transfert(env, senv);
 			}
 }
 else{
 	if(lg == "Fr"){
 	alert('Votre compte est insuffisant pour cette opération!\nA Bientôt ... ');}
 	 	if(lg == "En"){
 	alert('Your account is not enough for this operation!\nSee you soon ... ');}
 	 	if(lg == "Wo"){
 	alert('Li gua beugg yooné néwoul thie sa guirsa!\nBa bénen yoon ... ');}
 }
 	}
 	if(chx == 3){
 		if(lg == "Fr"){
 		var pf = prompt("---Paiement de facture---\nChoix du service\n1.Senelec\n2.Sen'Eau\n3.Sonatel");}
 		if(lg == "En"){
 		var pf = prompt("---Bill Payment---\nService choose\n1.Senelec\n2.Sen'Eau\n3.Sonatel");}
 		if(lg == "Wo"){
 		var pf = prompt("---Fayal sa facture---\nTanal dieumoukay bi\n1.Senelec\n2.Sen'Eau\n3.Sonatel");}

 		if(pf == 1 || pf == 2){
 			if(lg == "Fr"){
 			var cpt = prompt("Renseigner votre numéro de compteur");}
 			if(lg == "En"){
 			var cpt = prompt("Enter your counter number");}
 			if(lg == "Wo"){
 			var cpt = prompt("Dougalal sa numéro compteur");}
 			if(!isNaN(cpt)){
 				if(lg == "Fr"){	
 				var pay = prompt("Votre montant à payer");}
 				if(lg == "En"){	
 				var pay = prompt("Your amount to pay");}
 				if(lg == "Wo"){	
 				var pay = prompt("Li gua wara faye");}
 			}
	 		if(!isNaN(pay)){
	 			if(lg == "Fr"){
	 			alert('Votre paiement a bien été enrégistré.\nAu revoir, cher(e) client!');}
	 			if(lg == "En"){
	 			alert('Your payment has been recorded.\nThank you, soon ...');}
	 			if(lg == "Wo"){
	 			alert('Sa fayoum facture bi dialana.\nDieureudieuf thie koloutébi!');}
	 		}
 		}
 		if(pf == 3){
 			if(lg == "Fr"){
 			var cpt = prompt("Renseigner votre numéro de téléphone");
 			if(!isNaN(cpt)){	
 				var pay = prompt("Votre montant à payer");
 			}
	 		if(!isNaN(pay)){
	 			alert('Votre paiement a bien été enrégistré.\nAu revoir, cher(e) client!');
	 		}
	 			}
 			if(lg == "En"){
 			var cpt = prompt("Enter your phone number");
 			if(!isNaN(cpt)){	
 				var pay = prompt("Your amount to pay");
 			}
	 		if(!isNaN(pay)){
	 			alert('Your payment has been recorded.\nThank you, soon ...');
	 		}
	 			}
 			if(lg == "Wo"){
 			var cpt = prompt("Dougalal sa numéro téléphone");
 			if(!isNaN(cpt)){	
 				var pay = prompt("Li gua wara faye");
 			}
	 		if(!isNaN(pay)){
	 			alert('Sa fayoum facture bi dialana.\nDieureudieuf thie koloutébi!');
	 		}
	 			}
 		}
 	}
 	if(chx == 4){
 		var opt = prompt("---Options---\n1.Changer votre code\n2.Revenir à l'acceuil");

 		if(opt == 1){
 			if(lg == "Fr"){
 			alert('Changement du code\nA Bientôt...');}
 			if(lg == "En"){
 			alert('Changing your code\nComing soon...');}
 			if(lg == "Wo"){
 			alert('Bessal sa code\nLégui té gua meuna bessalat sa code...');}
 		}
 		if(opt == 2){
 			if(lg == "Fr"){
 			alert('Au revoir!');}
 			if(lg == "En"){
 			alert('Goodbye');}
 			if(lg == "Wo"){
 			alert('Au revoir!');}
 		}
 	}
 }
 else{
 	if(lg == "Fr"){
 	alert('Vous devez au préalable entré votre code!');}
 	if(lg == "En"){
 	alert('You must first enter your code!');}
 	if(lg == "Wo"){
 	alert('Faw gua Dougal sa code! bala guay meuna diala');}
 }
}
