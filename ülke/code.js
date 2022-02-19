document.getElementById("listeulkeler").addEventListener("change",taraftar)
let sonuc = document.getElementById("sonucBaslık")

function taraftar(){
    sonuc.classList.remove("CA","USA","TRY","normal")
    leulke=document.getElementById("listeulkeler").selectdIndex

    if(ulke==0){
    document.body.style.backgroundColor="red"
    sonuc.innerHTML="kanada nifusu 47mm"
    sonuc.classList.add("CA");
   }
    
   else if(ulke==1){
    document.body.style.backgroundColor="blue"
    sonuc.innerHTML="Amerika nifusu 56mm"
    sonuc.classList.add("USA");
    document.getElementById("logo").setAttribute("src","amerika.png")
   }
   
   else if(ulke==2){
    document.body.style.backgroundColor="red"
    sonucBaslık.innerHTML="TÜRKİYE nifusu 31mm"
    sonuc.classList.add("TRY");
   }
   console.log(ulke)
}
function merhaba(){
    let ad

    ad=document.getElementById("txtAd").value 
}