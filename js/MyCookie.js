//zmienna tekst przechowuje komunikat dot polityki cookies

var tekst = 'Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą zbierane żadne informacje';

//var tekstZamknij przechowuje tekt linku zamykającego

var tekstZamknij = "close X"

var tekstColor = "navy"

function zamknij(){
    setCookie('Akceptacja','tak',30);
    document.getElementById('MyCookie').style.display = "none";
}


function setCookie(name, val, days){
    if(days){
        var data = new Date();
        data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000)); //wms
        var expires = ";expires" + data.toGMTString();
    } else {
        var expires = "";
    }
    
    document.cookie = name + "=" + val + expires + "path=/";
    
}

function deleteCookie(name){
    var data = new Date();
    data.setTime(data.getMonth() - 1);
    document.cookie = name + "=; expires=" + data.toGMTString();
}

function showCookie(name){
    if(document.cookie != ''){
        var cookies = document.cookie.split(';');
        
        for(var i = 0; i < cookies.length; i++){
        
        var cookieName = cookies[i].split("=")[0];
        var cookieVal = cookies[i].split("=")[1];
        
        
    }
    
    if(cookieName === name){
        alert('ciastko istnieje');
        return cookieVal;
    }
    
    
}

return "";
}

var existCookie = showCookie("Akceptacja");

if(existCookie !== ""){
    document.getElementById('MyCookie').style.display = 'none';
}

document.getElementById('tekst').innerHTML = tekst;

document.getElementById('tekst').style.color = tekstColor;

document.getElementById('close').innerHTML = '<a href="#" onclick="zamknij()">' + tekstZamknij + '</a>';
