//ScrollReveal().reveal('.headline');

document.getElementById("asideac").addEventListener("click",function(){
    document.getElementById("aside-xsml").style.height = 50 + "vh";
    document.getElementById("aside-xsml").style.display = "block";
    document.getElementById("asidexsmlwrapper").style.display = "block";
    document.getElementById("asidekapa").style.display = "block";



    document.getElementById("asideac").style.display = "none";
    document.getElementById("nav-xsml").style.height = 0 + "vh";
    document.getElementById("nav-xsml-ul").style.display = "none";
    document.getElementById("navkapa").style.display = "none";
})

document.getElementById("asidekapa").addEventListener("click",function(){
    document.getElementById("aside-xsml").style.height = 0 + "vh";
    document.getElementById("asidexsmlwrapper").style.display = "none";
    document.getElementById("asidekapa").style.display = "none";

    document.getElementById("asideac").style.display = "block";
})

//ASİDE KAPAMA AÇMA BİTTİ


document.getElementById("navac").addEventListener("click",function(){
    document.getElementById("nav-xsml").style.height = 50 + "vh";
    document.getElementById("nav-xsml-ul").style.display = "block";
    document.getElementById("navkapa").style.display = "block";


    document.getElementById("navac").style.display = "none";
    document.getElementById("aside-xsml").style.height = 0 + "vh";
    document.getElementById("asidexsmlwrapper").style.display = "none";
    document.getElementById("asidekapa").style.display = "none";
})


document.getElementById("navkapa").addEventListener("click",function(){
    document.getElementById("nav-xsml").style.height = 0 + "vh";
    document.getElementById("nav-xsml-ul").style.display = "none";
    document.getElementById("navkapa").style.display = "none";
    document.getElementById("navac").style.display = "block";
    document.getElementById("asideac").style.display = "block"
})


//****NAV ACMA KAPAMA BİTTİ***//


// *****KREDİ GERİ DÖNÜŞ HESAPLAMA****//


function hesapla(){
var miktar = parseInt(document.getElementById("miktar").value);
var sure = parseInt(document.getElementById("sure").value);
var islem = miktar / sure *2;

if(miktar<=299){
    document.getElementById("miktar").value = "300 $ aşağı değer girmeyiniz!";
    document.getElementsByTagName("input")[2].value = "Belirtilen şartlara uyun lütfen";
}

if(sure>12){
    document.getElementById("sure").value = "12 ay ve fazla ödeme seçeneği kabul edemiyoruz";
    document.getElementsByTagName("input")[2].value = "Belirtilen şartlara uyun lütfen";
}

else if(document.getElementById("miktar").value == "" || document.getElementById("sure").value == ""){
    document.getElementById("miktar").value = "Lütfen boş geçmeyiniz";
    document.getElementById("sure").value = "Lütfen boş geçmeyiniz";
    document.getElementsByTagName("input")[2].value = "Belirtilen şartlara uyun lütfen";
}



else{
    document.getElementById("tutar").value = islem + "$";
}

}

