function change(){

var _amount = document.getElementById("amount").value;
var _country = document.getElementById("country").value;
var _curiencies = document.getElementById("currencies").value;
var resault;

if(_country == 'VND' && _curiencies == 'USD'){
    document.getElementById('resault').innerHTML = (_amount/23000) + 'USD';
}else if(_country == 'USD' && _curiencies == 'VND'){
    document.getElementById('resault').innerHTML = (_amount*23000) + 'VND';
}else if (_country == 'USD' && _curiencies == 'USD' ){   
    document.getElementById('resault').innerHTML = (_amount) + 'USD';
}else{
    document.getElementById('resault').innerHTML =  (_amount) + 'VND';
}

// if (_country == 'VND' && _curiencies == 'USD' ){
//     resault = "Resault: " + (_amount/23000) + '$';
// }else if (_country == 'USD' && _curiencies == 'VND'){
//     resault = "Resault: " + (_amount*23000) + 'Dong';
// }else if (_country == 'USD' && _curiencies == 'USD'){
//     resault = "Resault: " + _amount + '$';
// }else{
//     resault = "Resault: " + _amount + 'Dong';
// }
// document.getElementById('resault').innerHTML=resault;
}