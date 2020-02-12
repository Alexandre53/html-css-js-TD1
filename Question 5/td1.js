function v() {
	var masque= 24;
	var mask = 0xFFFFFFFF << (32-masque);
    
    var adress = document.getElementById("adresse").value;
    var ip=adress.split(".");
    document.getElementById("adr").innerHTML=(adress);
    

    var IP = parseInt(ip[0]) << 24 |parseInt(ip[1]) << 16 |parseInt(ip[2]) << 8 |parseInt(ip[3]);
   
    var ADRr=IP & mask;
    document.getElementById("adrR").innerHTML=toString(ADRr);
   
   var ADRb=IP| ~mask;
   document.getElementById("adrB").innerHTML=toString(ADRb);

    var ADR1=ADRr+1;
    document.getElementById("adr1").innerHTML=toString(ADR1);
  
   var ADRd=ADRb-1;
   document.getElementById("adrD").innerHTML=toString(ADRd);

  var nbrH = Math.pow(2, (32-masque))-2;
  document.getElementById("NBRh").innerHTML =nbrH;

}

function toString(data) {
	var str = (data >> 24 &0xFF).toString()+"."+
 (data >> 16 & 0xFF ).toString()+"." + (data >> 8 & 0xFF ).toString()+"." + (data & 0xFF).toString();
 

	return str;
}


