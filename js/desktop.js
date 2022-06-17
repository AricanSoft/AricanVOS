function computer(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
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
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
    document.getElementById('App1').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function settings(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
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
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
    document.getElementById('App2').style.display = 'none'
    document.body.style.backgroundImage = 'url(assets/Background.jpg)';
}

function sufi(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
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
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
    document.getElementById('App3').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function aricanstore(){
    document.getElementById('div1').style.display = 'none'
    document.getElementById('div2').style.display = 'none'
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
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

function installcalculatepi(){
    document.getElementById('div1').style.display = 'block'
    document.getElementById('div2').style.display = 'block'
    document.getElementById('div3').style.display = 'block'
    document.getElementById('div4').style.display = 'block'
    document.getElementById('App4').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function calculatepi(){
    var errorsound = new Audio('assets/errorsound.mp3')  
    errorsound.play();
    document.getElementById('startmenu').style.display = 'none'
    document.getElementById('App1').style.display = 'none'
    document.getElementById('App2').style.display = 'none'
    document.getElementById('App3').style.display = 'none'
    document.getElementById('App4').style.display = 'none'
    document.getElementById('App5').style.display = 'block'
}

function calculatepiExit(){
    document.getElementById('div1').style.display = 'block'
    document.getElementById('div2').style.display = 'block'
    document.getElementById('div3').style.display = 'none'
    document.getElementById('div4').style.display = 'none'
    document.getElementById('App5').style.display = 'none'
    document.body.style.backgroundImage = "url('assets/Background.jpg')";
}

function feth(){
    document.getElementById('virustext').style.display = 'none'
    document.getElementById('loading').style.display = 'none'
    document.getElementById('startmenu').style.display = 'none'
    document.getElementById('App1').style.display = 'none'
    document.getElementById('App2').style.display = 'none'
    document.getElementById('App3').style.display = 'none'
    document.getElementById('App4').style.display = 'none'
    document.getElementById('App5').style.display = 'none'
    document.getElementById('App6').style.display = 'block'
}

function scan(){
    document.getElementById('scanbutton').style.display = 'none'
    document.getElementById('loading').style.display = 'block'
    setTimeout(scanned, 10000);
}

function scanned(){
    document.getElementById('virustext').style.display = 'block'
    document.getElementById('loading').style.display = 'none'
    document.getElementById('scanbutton').style.display = 'block'
    setTimeout(result)
}

function result() {
    var results = ['No virus found', '365 viruses were found and Feth nuked them. Please get a new hard drive and restart the computer.', '2 viruses found. Please format your computer or buy the Pro ++++++ version of Feth.'];
    var randomresults = Math.floor(Math.random() * results.length);
    document.getElementById('virustext').innerHTML = results[randomresults];
    };
