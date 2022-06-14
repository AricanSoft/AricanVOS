function computer(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('startmenu').style.display = 'none'
    document.getElementById('App1').style.display = 'block'
    document.getElementById('App2').style.display = 'none'
    document.getElementById('App3').style.display = 'none'
    document.getElementById('App4').style.display = 'none'
    document.getElementById('body').style.backgroundImage = 'none'
}

function computerExit(){
    document.getElementById('div1').style.display = 'block'
    document.getElementById('div2').style.display = 'block'
    document.getElementById('App1').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function settings(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('startmenu').style.display = 'none'
    document.getElementById('App1').style.display = 'none'
    document.getElementById('App2').style.display = 'block'
    document.getElementById('App3').style.display = 'none'
    document.getElementById('App4').style.display = 'none'
    document.getElementById('body').style.backgroundImage = 'none'
}

function settingsExit(){
    document.getElementById('div1').style.display = 'block'
    document.getElementById('div2').style.display = 'block'
    document.getElementById('App2').style.display = 'none'
    document.body.style.backgroundImage = 'url(assets/Background.jpg)';
}

function sufi(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('startmenu').style.display = 'none'
    document.getElementById('App1').style.display = 'none'
    document.getElementById('App2').style.display = 'none'
    document.getElementById('App3').style.display = 'block'
    document.getElementById('App4').style.display = 'none'
    document.getElementById('body').style.backgroundImage = 'none'
}

function sufiExit(){
    document.getElementById('div1').style.display = 'block'
    document.getElementById('div2').style.display = 'block'
    document.getElementById('App3').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function aricanstore(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('startmenu').style.display = 'none'
    document.getElementById('App1').style.display = 'none'
    document.getElementById('App2').style.display = 'none'
    document.getElementById('App3').style.display = 'none'
    document.getElementById('App4').style.display = 'block'  
    document.getElementById('body').style.backgroundImage = 'none'
}

function aricanstoreExit(){
    document.getElementById('div1').style.display = 'block'
    document.getElementById('div2').style.display = 'block'
    document.getElementById('App4').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function startmenu(){
    document.getElementById('startmenu').style.display = 'block'
}

function startmenuExit(){
    document.getElementById('startmenu').style.display = 'none'
}
