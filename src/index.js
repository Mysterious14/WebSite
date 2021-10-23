import './index.less';
import badges from './img/badge.png'
import backgrond from './img/Bitmap.png'
import phones from './img/phone.png'
import right from './img/Allright.png'
import maps from './img/map.png'


function add() {
    const badge = document.querySelector('.badge')
    badge.insertAdjacentHTML('beforeend', `<img src=${badges}>`)

    const backgrondImg = document.querySelector('.backgrond')
    backgrondImg.insertAdjacentHTML('beforeend', `<img src=${backgrond} width="100%" height="100%">`)

    const phone = document.querySelector('.nextPage')
    phone.insertAdjacentHTML('beforeend', `<img src=${phones} id="firstPhone">`)

    const lastBudges = document.querySelector('.footer')
    lastBudges.insertAdjacentHTML('beforeend', `<img src=${badges} id="lastBudges">`)

    const Allright = document.querySelector('.footer')
    Allright.insertAdjacentHTML('beforeend', `<img src=${right} id="Allright">`)

    const Map = document.querySelector('.borderadd')
    Map.insertAdjacentHTML('beforeend', `<img src=${maps} id="LAmap" class="maps">`)
    Map.insertAdjacentHTML('beforeend', `<img src=${maps} id="NYmap" class="maps">`)
    Map.insertAdjacentHTML('beforeend', `<img src=${maps} id="BostonMap" class="maps">`)
   /Map.insertAdjacentHTML('beforeend', `<img src=${maps} id="DetroitMap" class="maps">`)
    //document.getElementById("blockLA").style.box-shadow="20px 20px 50px rgba(0, 0, 0, 0.0758039)";*/

    
}

add();


function LAclick(){
   /* document.getElementById("LAgoogleMap").style.display="block";
    document.getElementById("NYgoogleMap").style.display="none";
    document.getElementById("BostongoogleMap").style.display="none";
    document.getElementById("DetroitgoogleMap").style.display="none";
    document.getElementById("blockLA").style.boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"; */
    //document.getElementById("first").style.color="red";
    alert('Hello World');
}

function alerttt(){
    alert('sdgvsdv');
}