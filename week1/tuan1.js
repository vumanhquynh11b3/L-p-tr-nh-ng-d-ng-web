document.getElementById("demo1").innerHTML = "Tài liệu học CSS";
document.getElementById("demo2").innerHTML = "Tài liệu học MySQL";
document.getElementById("demo3").innerHTML = "Tài liệu học PHP";

function myFunction() {
	x = document.getElementById("numb1").value;
   y = document.getElementById("numb2").value;
   tong=parseFloat(x) + parseFloat(y);
    hieu=parseFloat(x) - parseFloat(y);
	 tich=parseFloat(x) * parseFloat(y);
	  thuong=parseFloat(x) / parseFloat(y);

	xtong ='A + B =  <b>'+tong+'<br>';
	xhieu ='A - B =  <b>'+hieu+'<br>';
	xtich ='A * B =  <b>'+tich+'<br>';
	xthuong ='A/B =  <b>'+thuong+'<br>';

 document.getElementById("demo").innerHTML=xtong+xhieu+xtich+xthuong;
}