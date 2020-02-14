function v() {


	var cidr=document.getElementById("masque").value;
  var masque=Number.parseInt(cidr,10);
	var mask = 0xFFFFFFFF << (32-masque);
  var cidr2=document.getElementById("masque2").value;
  var masque2=Number.parseInt(cidr2,10);
  var mask2 = 0xFFFFFFFF << (32-masque2);
    
    var adress = document.getElementById("adresse").value;
    var ip=adress.split(".");
    document.getElementById("adr").innerHTML=(adress);
    

    var adress2 = document.getElementById("adresse2").value;
    var ip2=adress2.split(".");

    var IP2=parseInt(ip2[0]) << 24 |parseInt(ip2[1]) << 16 |parseInt(ip2[2]) << 8 |parseInt(ip2[3]);

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

  var ADRr2=IP2 & mask2;
  

 if (ADRr2==ADRr) {
  document.getElementById("adr2").innerHTML="oui";
 }   

  else if (ADRr2!=ADRr) 
 {
  document.getElementById("adr2").innerHTML="non";
 }


}

function toString(data) {
	var str = (data >> 24 &0xFF).toString()+"."+
 (data >> 16 & 0xFF ).toString()+"." + (data >> 8 & 0xFF ).toString()+"." + (data & 0xFF).toString();
 

	return str;
}


