


function addition(){
    var _number_1 = document.getElementById("num_1").value;
    var _number_2 = document.getElementById("num_2").value;
    document.getElementById('result').innerHTML = Number(_number_1)+Number(_number_2);
}

function subtraction(){
    var _number_1 = document.getElementById("num_1").value;
    var _number_2 = document.getElementById("num_2").value;
    document.getElementById('result').innerHTML = Number(_number_1)-Number(_number_2);
}

function multiplication(){
    var _number_1 = document.getElementById("num_1").value;
    var _number_2 = document.getElementById("num_2").value;
    document.getElementById('result').innerHTML = Number(_number_1)*Number(_number_2);
}

function division(){
    var _number_1 = document.getElementById("num_1").value;
    var _number_2 = document.getElementById("num_2").value;
    document.getElementById('result').innerHTML = Number(_number_1)/Number(_number_2);
}