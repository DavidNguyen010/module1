

    var year = parseInt(prompt("Moi ban nhap nam can kiem tra"));

//    if (year % 4 == 0){
//         if(year % 100 == 0){
//             if(year % 400 == 0){
//                 document.getElementById('result').innerHTML = 'la nam nhuan';
//             }
//             else{
//                 document.getElementById('result').innerHTML = 'khong phai la nam nhuan';
//             }
//         }
//         else{
//             document.getElementById('result').innerHTML =  'la nam nhuan';
//         }
//    }
//    else{
//     document.getElementById('result').innerHTML = 'khong la nam nhuan';
//    }


if(year % 4==0){
    if(year%100==0){
        if(year%400==0){
            alert(year + " :la nam nhuan");
        }else{
            alert(year + " :khong la nam nhuan");
        }
    }else{
        alert(year + " :la nam nhuan");
    }
}else{
    alert(year + " :khong la nam nhuan");
}
   


