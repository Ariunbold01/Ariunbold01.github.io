let lastnameConsole = document.querySelector('#lastname-wrong');
let firstnameConsole = document.querySelector('#firstname-wrong');
let birthdayConsole = document.querySelector('#birthday-wrong');
let regnumberConsole = document.querySelector('#regnumber-wrong');
let passwordConsole = document.querySelector('#password-wrong');

function validateForm(){
    let lastname = document.forms["form"]["lastname"].value;
    let firstname = document.forms["form"]["firstname"].value;
    let date = new Date(document.forms["form"]["birthday"].value);
    let regnumber = document.forms["form"]["regnumber"].value;
    let password = document.forms["form"]["password"].value;
    let correct = true;
    
    //check

    if(lastname.length == 0){
        lastnameConsole.innerText = "Овгоо оруулна уу";
        correct= false;
    }
    if(lastname.length >= 1){
        lastnameConsole.innerText = " ";
    }
    if(firstname.length == 0){
        firstnameConsole.innerText = "Нэрээ оруулна уу";
        correct = false;
    }
    if(firstname.length >= 1){
        firstnameConsole.innerText = " ";
    }
    if(date.length == 0){
        birthdayConsole.innerText = "Төрсөн он сараа оруулна уу";
        correct = false;
    }
    if(regnumber.length < 6){
        regnumberConsole.innerText = "РД ээ оруулна уу";
        correct= false;
    }
    if(password.length == 0){
        passwordConsole.innerText = "Password хийгээгүй байна";
        correct = false;
    }
    else if(password.length < 8){
        passwordConsole.innerText = "Урт 8, том жижиг үсэг, тоо орсон байх";
        correct = false;
    }


    // Password 
    if(password.search(/[0-9]/) < 0){
        passwordConsole.innerText = "Тоо алга байна.";
        correct = false;
    }
    else if(password.search(/[A-Z]/)<0){
        passwordConsole.innerText = "Том үсэг байхгүй байна";
        correct = false;
    }
    else if(password.search(/[a-z]/)<0){
        passwordConsole.innerText = "Жижиг үсэг олдсонгүй";
        correct = false;
    }
    else if(password.search(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)<0){
        passwordConsole.innerText = "Тусгай тэмдэгт олдсонгүй";
        correct = false;
    }
    else if(password.search((/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)&&(/[a-z]/)&&(/[A-Z]/)&&(/[0-9]/))>8){
        passwordConsole.innerText =" ";
    }
    
    // Date 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    // register
    if(regnumber.length == 10){
        let regYear = regnumber.substring(2, 4);
        let regMonth = regnumber.substring(4, 6);
        let regDay = regnumber.substring(6, 8);
        
        if(parseInt(year) > 1999){
            regMonth = regMonth - 20;
        }
        
        if( year % 100 != parseInt(regYear)){
            regnumberConsole.innerText = "Он зөрж байна.";
            console.log(year.toString().substring(3,5));
            correct = false;
        }
        else if(month != regMonth){
            regnumberConsole.innerText = "Сар зөрж байна.";
            correct = false;
        }
        else if(day != regDay){
            regnumberConsole.innerText = "Өдөр зөрж байна.";
            correct = false;
        }
        else if((year % 100 == parseInt(regYear))&&(month == regMonth)&&(day == regDay)){
            regnumberConsole.innerText = " ";
        }
    }
    else{
        regnumberConsole.innerText = "Буруу Рэгистэрийн дугаар";
    }    
    
    //correct

    if(correct){
        alert("Submit");
        return true;
    }
    else{
        return false;
    }
}