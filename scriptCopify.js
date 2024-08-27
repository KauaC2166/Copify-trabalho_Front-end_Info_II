//function que muda a 'mensagem de boas vindas'
function mudaHora() {
    const agora = new Date();
    const hora = agora.getHours();
    const horaMsg = document.getElementById("horaMsg");

    if (hora > 5 && hora < 12) {
        horaMsg.textContent = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        horaMsg.textContent = "Boa tarde";
    } else {
        horaMsg.textContent = "Boa noite";
    }
}

window.onload = mudaHora();

//botão 'inicio'
const homeIcon = document.getElementById("homeIcon");
//botão 'buscar'
const lupaIcon = document.getElementById("surchIcon");

//function para mudar a imagem do botão 'inicio' quando o mouse passa encima do botão
function mudaCasa() {
    homeIcon.src = "whiteHomeIcon.png";
}
//function para mudar a imagem do botão 'inicio' quando o mouse sai de cima do botão 
function voltaCasa() {
    homeIcon.src = "greyHomeIcon.png";
}
//functio para mudar a imagem do botão 'buscar' quando o mouse passa encima do botão
function mudaLupa() {
    lupaIcon.src = "whiteSurchIcon.png";
}
//function para mudar a imagem do botão 'buscar' quando o mouse sai de cima do botão
function voltaLupa() {
    lupaIcon.src = "greySurchIcon.png"
}

//playlists/albuns da parte de cima da pagina inicial
const mainPlaylist2 = document.querySelector('#mainPlaylist2');
const mainPlaylist3 = document.querySelector('#mainPlaylist3');
const mainPlaylist4 = document.querySelector('#mainPlaylist4');
const mainPlaylist5 = document.querySelector('#mainPlaylist5');
const mainPlaylist6 = document.querySelector('#mainPlaylist6');

const mainTop = document.querySelector('#mainTop');

//sistema para trocar o gradiente do fundo da pagina inicial
mainPlaylist2.addEventListener('mouseenter', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #ce2828, #141212)';
});

mainPlaylist2.addEventListener('mouseleave', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #801426, #141212)';
});

mainPlaylist3.addEventListener('mouseenter', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #001bb3, #141212)';
});

mainPlaylist3.addEventListener('mouseleave', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #801426, #141212)';
});

mainPlaylist4.addEventListener('mouseenter', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #4f7ad6, #141212)';
});

mainPlaylist4.addEventListener('mouseleave', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #801426, #141212)';
});

mainPlaylist5.addEventListener('mouseenter', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #df1c1c, #141212)';
});

mainPlaylist5.addEventListener('mouseleave', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #801426, #141212)';
});

mainPlaylist6.addEventListener('mouseenter', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #959cbe, #141212)';
});

mainPlaylist6.addEventListener('mouseleave', () => {
    mainTop.style.backgroundImage = 'linear-gradient(180deg, #801426, #141212)';
});

//botão 'sua biblioteca'
bibleIcon = document.getElementById("bibleIcon");

//function para mudar a imagem do botão 'sua biblioteca' quando o mouse passa encima do botão
function mudaBibleBtn() {
    bibleIcon.src = "whiteBibleIcon.png";
}
//function para mudar a imagem do botão 'sua biblioteca' quando omouse sai de cima do botão
function voltaBibleBtn() {
    bibleIcon.src = "greyBibleIcon.png";
}

//botões do player
coracao = document.getElementById("coracao");
randomBtn = document.getElementById("randomBtn");
loopBtn = document.getElementById("loopBtn");
backBtn = document.getElementById("backBtn");
nextBtn = document.getElementById("nextBtn");
tocandoAgr = document.getElementById("tocandoAgrBtn");
fila = document.getElementById("filaBtn");
dispositivos = document.getElementById("dispositivoBtn");
telaCheia = document.getElementById("telaCheiaBtn");
som = document.getElementById("volumeBtn");
barraVolume = document.getElementById("barraVolume");
bolaVolume = document.getElementById("volumeBola");
microfone = document.getElementById("microfone");
picInPic = document.getElementById("picInPicBtn");
playerSeta = document.getElementById("playerSetaIcon");


//function para mudar o botão de 'shuffle'
function mudaRandom() {

    if (randomBtn.getAttribute("src") == "greyRandomBtn.png") {
        randomBtn.setAttribute("src", "randomBtn.png");
    } else if (randomBtn.getAttribute("src") == "randomBtn.png") {
        randomBtn.setAttribute("src", "greyRandomBtn.png");
    }
}

//function para mudar o botão de loop
function mudaLoop() {

    if (loopBtn.getAttribute("src") == "loop.png") {
        loopBtn.setAttribute("src", "greenLoop.png");
    } else if (loopBtn.getAttribute("src") == "greenLoop.png") {
        loopBtn.setAttribute("src", "greenLoop1.png");
    } else if (loopBtn.getAttribute("src") == "greenLoop1.png") {
        loopBtn.setAttribute("src", "loop.png");
    }
}

//function para mudar a imagem do botão 'back' quando o mouse passa encima do botão
function mudaBackBtn() {
    backBtn.setAttribute("src", "whiteBackBtn.png");
}
//function para mudar a imagem do botão 'back' quando o mouse sai de cima do botão
function voltaBackBtn() {
    backBtn.setAttribute("src", "greyBackBtn.png");
}
//function para mudar a imagem do botão 'next' quando o mouse passa encima do botão
function mudaNextBtn() {
    nextBtn.setAttribute("src", "whiteNextBtn.png");
}
//function para mudar a imagem do botão 'next' quando o mouse sai de cima do botão
function voltaNextBtn() {
    nextBtn.setAttribute("src", "greyNextBtn.png");
}


playerAlbumIcon = document.getElementById("playerAlbumIcon");

//function para mudar o botão de like do player
function mudaCoracao() {

    if (coracao.getAttribute("src") == "coracao.png") {
        coracao.setAttribute("src", "coracaoVazio.png");

    } else if (coracao.getAttribute("src") == "coracaoVazio.png") {
        coracao.setAttribute("src", "coracao.png");

    }
}

//function para mudar a imagem do botão 'tocando agora' qunado o mouse passa encima do botão 
function mudaTocandoAgr() {
    tocandoAgr.setAttribute("src", "whiteTocandoAgr.png");
}
//function para mudar a imagem do botão 'tocando agora' qunado o mouse sai de cima do botão 
function voltaTocandoAgr() {
    tocandoAgr.setAttribute("src", "tocandoAgr.png");
}
//function para mudar a imagem do botão 'fila' qunado o mouse passa encima do botão 
function mudaFila() {
    fila.setAttribute("src", "whiteFila.png");
}
//function para mudar a imagem do botão 'fila' qunado o mouse sai de cima do botão 
function voltaFila() {
    fila.setAttribute("src", "fila.png");
}
//function para mudar a imagem do botão 'dispositivos' qunado o mouse passa encima do botão 
function mudaDispositivos() {
    dispositivos.setAttribute("src", "whiteDispositivos.png");
}
//function para mudar a imagem do botão 'dispositivos' qunado o mouse sai de cima do botão 
function voltaDispositivos() {
    dispositivos.setAttribute("src", "dispositivos.png");
}
//function para mudar a imagem do botão 'tela cheia' qunado o mouse passa encima do botão 
function mudaTelaCheia() {
    telaCheia.setAttribute("src", "whiteTelaCheia.png");
}
//function para mudar a imagem do botão 'tela cheia' qunado o mouse sai de cima do botão 
function voltaTelaCheia() {
    telaCheia.setAttribute("src", "telaCheia.png");
}
//function para mudar a imagem do botão de som e a barra de volume quando o mouse passa encima do botão 
function mudaSom() {
    if (som.getAttribute("src") == "greyMutedSom.png") {
        som.setAttribute("src", "whiteMutedSom.png");
        barraVolume.style.width = "0px";
    } else if (som.getAttribute("src") == "som.png") {
        som.setAttribute("src", "whiteSom.png");
        barraVolume.style.width = "94px";
    }

    barraVolume.style.backgroundColor = "#1DB954";
    bolaVolume.style.display = "block";
}
//function para mudar a imagem do botão de som e a barra de volume quando o mouse sai de cima do botão 
function voltaSom() {
    if (som.getAttribute("src") == "whiteMutedSom.png") {
        som.setAttribute("src", "greyMutedSom.png");
        barraVolume.style.width = "0px";
    } else {
        som.setAttribute("src", "whiteSom.png");
        barraVolume.style.width = "100px";
    }

    barraVolume.style.backgroundColor = "white";
    bolaVolume.style.display = "none";
}
//function para 'mutar' o volume
function mutaSom() {
    if (som.getAttribute("src") == "whiteSom.png" || som.getAttribute("src") == "som.png") {
        som.setAttribute("src", "whiteMutedSom.png");
        barraVolume.style.width = "0px";
    } else if (som.getAttribute("src") == "whiteMutedSom.png" || som.getAttribute("src") == "greyMutedSom.png") {
        som.setAttribute("src", "whiteSom.png");
        barraVolume.style.width = "94px";
    }
}
//function para mudar a cor da barra de volume qunado o mouse passa encima do botão 
function mudaBarraSom() {
    barraVolume.style.backgroundColor = "#1DB954";
    bolaVolume.style.display = "block";
}
//function para mudar a cor da barra de volume qunado o mouse sai de cima do botão 
function voltaBarraSom() {
    barraVolume.style.backgroundColor = "white";
    bolaVolume.style.display = "none";
}
//function para mudar a imagem do botão 'letra' quando o mouse passa encima do botão 
function mudaMicrofone() {
    microfone.setAttribute("src", "whiteMicrofone.png");
}
//function para mudar a imagem do botão 'letra' quando o mouse sai de cima do botão 
function voltaMicrofone() {
    microfone.setAttribute("src", "greyMicrofone.png");
}
//function para mudar a imagem do botão 'picture in picture' quando o mouse passa encima do botão 
function mudaPicInPic() {
    picInPic.setAttribute("src", "whitePictureInPicture.png");
}
//function para mudar a imagem do botão 'picture in picture' quando o mouse sai de cima do botão 
function voltaPicInPic() {
    picInPic.setAttribute("src", "pictureInPicture.png");
}
//function para mostrar a seta que fica encima da capa do album do player quando o mouse passa encima do botão 
function mostraSeta() {
    playerSeta.style.display = "block";
}
//function para tirar a seta que fica encima da capa do album do player quando o mouse sai de cima do botão 
function someSeta() {
    playerSeta.style.display = "none";
}

//o sino de notificação q fica lá encima
sino = document.getElementById("sinoImg");
//function para mudar a imagem do botão de notificação quando o mouse passa encima do botão 
function mudaSino() {
    sino.setAttribute("src", "whiteSino.png");
}
//function para mudar a imagem do botão de notificação quando o mouse sai de cima do botão 
function voltaSino() {
    sino.setAttribute("src", "greySino.png");
}

//botões ta parte de cima de 'sua biblioteca'
bibleSetaIcon = document.getElementById("bibleSeta");
mais = document.getElementById("maisIcon");
setaIcon = document.getElementById("setaIcon");
bibleSurchIcon = document.getElementById("bibleSurchIcon");
triangulo = document.getElementById("triangulo");

//function para mudar a imagem do botão da seta quando o mouse passa encima do botão 
function mudaBibleSetaIcon() {
    bibleSetaIcon.setAttribute("src", "whiteBibleSetaIcon.png");
}
//function para mudar a imagem do botão da seta quando o mouse sai de cima do botão 
function voltaBibleSetaIcon() {
    bibleSetaIcon.setAttribute("src", "greyBibleSetaIcon.png");
}
//function para mudar a imagem do botão de mais quando o mouse passa encima do botão 
function mudaMais() {
    mais.setAttribute("src", "whiteMaisIcon.png");
}
//function para mudar a imagem do botão de mais quando o mouse sai de cima do botão 
function voltaMais() {
    mais.setAttribute("src", "greyMaisIcon.png");
}
//function para mudar a imagem do botão da outra seta quando o mouse passa encima do botão 
function mudaSeta() {
    setaIcon.setAttribute("src", "whiteSetaIcon.png");
}
//function para mudar a imagem do botão da outra seta quando o mouse sai de cima do botão 
function voltaSeta() {
    setaIcon.setAttribute("src", "greySetaIcon.png");
}
//function para mudar a imagem do botão de pesquisa da biblioteca quando o mouse passa encima do botão 
function mudaBibleSurch() {
    bibleSurchIcon.setAttribute("src", "whiteSurchIcon.png");
}
//function para mudar a imagem do botão de pesquisa da biblioteca quando o mouse sai de cima do botão 
function voltaBibleSurch() {
    bibleSurchIcon.setAttribute("src", "greySurchIcon.png");
}
//function para mudar a imagem do botão 'order by' quando o mouse passa encima do botão
function mudaOrderBtn() {
    triangulo.setAttribute("src", "whiteTriangulo.png");
}
//function para mudar a imagem do botão 'order by' quando o mouse sai de cima do botão
function voltaOrderBtn() {
    triangulo.setAttribute("src", "greyTriangulo.png");
}

//todas as paginas
inicio = document.getElementById("inicio");
sgtPeppersPage = document.getElementById("sgtPeppersPage");
holyDioPage = document.getElementById("holyDioPage");

//usado para garantir q pagina inicial estará com display block
window.onload = inicio.style.display = "block";

//function para abrir a pagina inicial
function mostraInicio() {
    inicio.style.display = "block";
    sgtPeppersPage.style.display = "none";
    holyDioPage.style.display = "none";

    scrollContainer.scrollTo(0, 0);

}
//function para abrir o album sgt peppers
function mostraSgtPeppers() {
    inicio.style.display = "none";
    sgtPeppersPage.style.display = "block";
    holyDioPage.style.display = "none";

    scrollContainer.scrollTo(0, 0);

}
//function para abrir a playlist holy dio
function mostraHolyDio() {
    inicio.style.display = "none";
    sgtPeppersPage.style.display = "none";
    holyDioPage.style.display = "block";

    scrollContainer.scrollTo(0, 0);

}
//as coisas nescessarias para fazer a barra de cima funcionar
const scrollContainer = document.querySelector("#main");
const mainOpt = document.querySelector("#mainOpt");
const mainPlaylistOpt = document.querySelector("#mainPlaylistOpt");
const mainOptPlaylistName = document.querySelector("#mainOptPlaylistName");

const inicioScrollTrigger = 300;
const playlistScrollTrigger = 400;

//sistema pra que a cor de fundo da barra de cima apareça quando o scroll passa de um certo ponto
scrollContainer.addEventListener('scroll', () => {
    const scrollPosition = scrollContainer.scrollTop;

    if (inicio.style.display == "block") {
        mainPlaylistOpt.style.display = "none";
        if (scrollPosition >= inicioScrollTrigger) {
            mainOpt.style.backgroundColor = "#801426";
        } else {
            mainOpt.style.backgroundColor = "transparent";
        }
    } else if (sgtPeppersPage.style.display == "block") {
        if (scrollPosition >= playlistScrollTrigger) {
            mainPlaylistOpt.innerHTML = "<img src='greenPlayBtn.png' id='sgtPepperMainOptPlay' class='playlistmainOptPlay' onclick='playSgtPeppers();'> <h2 id='mainOptPlaylistName'>Sgt Peppers Lonely Hearts Club Band (Remas...</h2>";
            mainOpt.style.backgroundColor = "#801426";
            mainPlaylistOpt.style.display = "flex";
            mainPlaylistOpt.style.position = "static";
            mainPlaylistOpt.style.right = "0";
        } else {
            mainOpt.style.backgroundColor = "transparent";
            mainPlaylistOpt.style.display = "none";
        }
    } else if (holyDioPage.style.display == "block") {
        mainPlaylistOpt.innerHTML = "<img src='greenPlayBtn.png' id='holyDioMainOptPlay' class='playlistmainOptPlay' onclick='playHolyDio();'> <h2 id='mainOptPlaylistName'>Holy Dio</h2>";
        mainPlaylistOpt.style.position = "relative";
        mainPlaylistOpt.style.right = "215px";
        if (scrollPosition >= playlistScrollTrigger) {
            mainOpt.style.backgroundColor = "#ce2828";
            mainPlaylistOpt.style.display = "flex";
        } else {
            mainOpt.style.backgroundColor = "transparent";
            mainPlaylistOpt.style.display = "none";
        }
    }
});

//os botões de play de todas as playlists/albuns
playBtn = document.getElementById("playBtn");
mainSgtPeppersPlayBtn = document.getElementById("mainSgtPeppersPlay");
playlistSgtPeppersPlayBtn = document.getElementById("playlistSgtPeppersPlay");
mix5Play = document.getElementById("mix5Play");
mix4Play = document.getElementById("mix4Play");
mix3Play = document.getElementById("mix3Play");
mix2Play = document.getElementById("mix2Play");
mix1Play = document.getElementById("mix1Play");
steveVaiPlay = document.getElementById("steveVaiPlay");
maidenPlay = document.getElementById("maidenPlay");
sabbathPlay = document.getElementById("sabbathPlay");
metallicaPlay = document.getElementById("metallicaPlay");
toxicityPlay = document.getElementById("toxicityPlay");
megadeadPlay = document.getElementById("megadeadPlay");
siriusPlay = document.getElementById("siriusPlay");
rammPlay = document.getElementById("rammPlay");
beastPlay = document.getElementById("beastPlay");
kikoPlay = document.getElementById("kikoPlay");
queenIIPlay = document.getElementById("queenIIPlay");
mainSehnPlay = document.getElementById("mainSehnPlay");
mainStAngerPlay = document.getElementById("mainStAngerPlay");
albumCardStAngerPlay = document.getElementById("albumCardStAngerPlay");
mainInnuendoPlayBtn = document.getElementById("mainInnuendoPlay");
albumCardInnuendoPlay = document.getElementById("albumCardInnuendoPlay");
mainRustPlayBtn = document.getElementById("mainRustPlay");
albumCardRustPlay = document.getElementById("albumCardRustPlay");
mainHolyDioPlayBtn = document.getElementById("mainHolyDioPlay");
playlistHolyDioPlayBtn = document.getElementById("playlistHolyDioPlay");
abbeyRoadPlay = document.getElementById("abbeyRoadPlay");
whiteAlbumPlay = document.getElementById("whiteAlbumPlay");
helpPlay = document.getElementById("helpPlay");
rubberSoulPlay = document.getElementById("rubberSoulPlay");
letItBePlay = document.getElementById("letItBePlay");
sgtPepperMainOptPlay = document.getElementById("sgtPepperMainOptPlay");
holyDioMainOptPlay = document.getElementById("holyDioMainOptPlay");

playerSongName = document.getElementById("playerSongName");
playerBandName = document.getElementById("playerBandName");
loadBar = document.getElementById("loadBar");
tempoUm = document.getElementById("tempoUm");
tempoDois = document.getElementById("tempoDois");
sgtPeppersPlayNum = document.getElementById("sgtPeppersPlayNum");
holyDioPlayNum = document.getElementById("holyDioPlayNum");

//function pra 'dar play' na playlist holy dio
function playHolyDio() {
    if (mainHolyDioPlayBtn.getAttribute("src") == "greenPlayBtn.png") {
        mainHolyDioPlayBtn.setAttribute("src", "greenPauseBtn.png");
        playlistHolyDioPlayBtn.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mainHolyDioPlayBtn.getAttribute("src") == "greenPauseBtn.png") {
        mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
        playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - All The Fools Sailed Away";
    playerAlbumIcon.setAttribute("src", "dreamEvil.jpeg");
    playerSongName.textContent = "All The Fools Sailed Away";
    playerBandName.textContent = "Dio";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "7:11";
    holyDioPlayNum.innerHTML = "<img src='trackTriangulo.png' id='holyDioNumPlay'/>";
    holyDioNumPlay = document.getElementById("holyDioNumPlay");
    holyDioNumPlay.style.width = "15px";
    holyDioNumPlay.style.height = "15px";
    holyDioNumPlay.style.margin = "0 16px 0 16px";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    mainSehnPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album rust in peace
function playRust() {
    if (mainRustPlayBtn.getAttribute("src") == "greenPlayBtn.png") {
        mainRustPlayBtn.setAttribute("src", "greenPauseBtn.png");
        albumCardRustPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mainRustPlayBtn.getAttribute("src") == "greenPauseBtn.png") {
        mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
        albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Holy Wars... The Punishment Due - 2004 Remix";
    playerAlbumIcon.setAttribute("src", "rust.jpg");
    playerSongName.textContent = "Holy Wars... The Punishment Due - 2...";
    playerBandName.textContent = "Megadeth";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "6:33";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    mainSehnPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album innuendo
function playInnuendo() {
    if (mainInnuendoPlayBtn.getAttribute("src") == "greenPlayBtn.png") {
        mainInnuendoPlayBtn.setAttribute("src", "greenPauseBtn.png");
        albumCardInnuendoPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mainInnuendoPlayBtn.getAttribute("src") == "greenPauseBtn.png") {
        mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
        albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Innuendo - Remastered 2011";
    playerAlbumIcon.setAttribute("src", "innuendo.jpg");
    playerSongName.textContent = "Innuendo - Remastered 2011";
    playerBandName.textContent = "Queen";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "6:33";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    mainSehnPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album st anger
function playStAnger() {
    if (mainStAngerPlay.getAttribute("src") == "greenPlayBtn.png") {
        mainStAngerPlay.setAttribute("src", "greenPauseBtn.png");
        albumCardStAngerPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mainStAngerPlay.getAttribute("src") == "greenPauseBtn.png") {
        mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
        albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Frantic";
    playerAlbumIcon.setAttribute("src", "anger.jpg");
    playerSongName.textContent = "Frantic";
    playerBandName.textContent = "Metallica";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "5:50";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainSehnPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album sehnsurcht
function playSehn() {
    if (mainSehnPlay.getAttribute("src") == "greenPlayBtn.png") {
        mainSehnPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mainSehnPlay.getAttribute("src") == "greenPauseBtn.png") {
        mainSehnPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Sehnsucht";
    playerAlbumIcon.setAttribute("src", "sehn.jpg");
    playerSongName.textContent = "Sehnsucht";
    playerBandName.textContent = "Rammstein";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "4:04";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album queen II
function playQueenII() {
    if (queenIIPlay.getAttribute("src") == "greenPlayBtn.png") {
        queenIIPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (queenIIPlay.getAttribute("src") == "greenPauseBtn.png") {
        queenIIPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Procession - Remastered 2011";
    playerAlbumIcon.setAttribute("src", "queenII.jpeg");
    playerSongName.textContent = "Procession - Remastered 2011";
    playerBandName.textContent = "Queen";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "1:13";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist This Is Kiko Loureiro
function playKiko() {
    if (kikoPlay.getAttribute("src") == "greenPlayBtn.png") {
        kikoPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (kikoPlay.getAttribute("src") == "greenPauseBtn.png") {
        kikoPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Pau-De-Arara";
    playerAlbumIcon.setAttribute("src", "noGravity.jpeg");
    playerSongName.textContent = "Pau-De-Arara";
    playerBandName.textContent = "Kiko Loureiro";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "7:00";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album the number of the beast
function playBeast() {
    if (beastPlay.getAttribute("src") == "greenPlayBtn.png") {
        beastPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (beastPlay.getAttribute("src") == "greenPauseBtn.png") {
        beastPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Invaders - 2015 Remaster";
    playerAlbumIcon.setAttribute("src", "beast.jpg");
    playerSongName.textContent = "Invaders - 2015 Remaster";
    playerBandName.textContent = "Iron Maiden";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "3:23";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist Ich weiß nicht, welchen Namen ich hier setzen soll (playlist de rammstein)
function playRamm() {
    if (rammPlay.getAttribute("src") == "greenPlayBtn.png") {
        rammPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (rammPlay.getAttribute("src") == "greenPauseBtn.png") {
        rammPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Wollt ihr das Bett in Flammen Sehen";
    playerAlbumIcon.setAttribute("src", "herzeleid.jpeg");
    playerSongName.textContent = "Wollt ihr das Bett in Flammen Sehen";
    playerBandName.textContent = "Rammstein";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "5:15";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album from mars to sirius
function playSirius() {
    if (siriusPlay.getAttribute("src") == "greenPlayBtn.png") {
        siriusPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (siriusPlay.getAttribute("src") == "greenPauseBtn.png") {
        siriusPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Ocean Planet";
    playerAlbumIcon.setAttribute("src", "sirius.jpg");
    playerSongName.textContent = "Ocean Planet";
    playerBandName.textContent = "Rammstein";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "5:32";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist megadead
function playMegadead() {
    if (megadeadPlay.getAttribute("src") == "greenPlayBtn.png") {
        megadeadPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (megadeadPlay.getAttribute("src") == "greenPauseBtn.png") {
        megadeadPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Sleepwalker";
    playerAlbumIcon.setAttribute("src", "unitedAbominations.jpeg");
    playerSongName.textContent = "Sleepwalker";
    playerBandName.textContent = "Megadeth";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "5:57";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album toxicity
function playToxicity() {
    if (toxicityPlay.getAttribute("src") == "greenPlayBtn.png") {
        toxicityPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (toxicityPlay.getAttribute("src") == "greenPauseBtn.png") {
        toxicityPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Prison Song";
    playerAlbumIcon.setAttribute("src", "toxicity.jpg");
    playerSongName.textContent = "Prison Song";
    playerBandName.textContent = "System Of A Down";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "3:21";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist metallicum
function playMetallica() {
    if (metallicaPlay.getAttribute("src") == "greenPlayBtn.png") {
        metallicaPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (metallicaPlay.getAttribute("src") == "greenPauseBtn.png") {
        metallicaPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Orion";
    playerAlbumIcon.setAttribute("src", "puppets.jpeg");
    playerSongName.textContent = "Orion";
    playerBandName.textContent = "Metallica";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "8:27";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist bloody sabbath
function playSabbath() {
    if (sabbathPlay.getAttribute("src") == "greenPlayBtn.png") {
        sabbathPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (sabbathPlay.getAttribute("src") == "greenPauseBtn.png") {
        sabbathPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - War Pigs";
    playerAlbumIcon.setAttribute("src", "paranoid.jpeg");
    playerSongName.textContent = "War Pigs";
    playerBandName.textContent = "Black Sabbath";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "7:54";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist trapped in an iron maiden
function playMaiden() {
    if (maidenPlay.getAttribute("src") == "greenPlayBtn.png") {
        maidenPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (maidenPlay.getAttribute("src") == "greenPauseBtn.png") {
        maidenPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Aces High - 2015 Remaster";
    playerAlbumIcon.setAttribute("src", "powerslave.jpeg");
    playerSongName.textContent = "Aces High - 2015 Remaster";
    playerBandName.textContent = "Iron Maiden";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "4:31";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist steve vai
function playVai() {
    if (steveVaiPlay.getAttribute("src") == "greenPlayBtn.png") {
        steveVaiPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (steveVaiPlay.getAttribute("src") == "greenPauseBtn.png") {
        steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Building The Church";
    playerAlbumIcon.setAttribute("src", "realIllusions.jpeg");
    playerSongName.textContent = "Building The Church";
    playerBandName.textContent = "Steve Vai";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "4:58";
    randomBtn.setAttribute("src", "randomBtn.png");

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist daily mix 1
function playMix1() {
    if (mix1Play.getAttribute("src") == "greenPlayBtn.png") {
        mix1Play.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mix1Play.getAttribute("src") == "greenPauseBtn.png") {
        mix1Play.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Amazonia";
    playerAlbumIcon.setAttribute("src", "fortitude.jpeg");
    playerSongName.textContent = "Amazonia";
    playerBandName.textContent = "Gojira";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "5:00";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist daily mix 2
function playMix2() {
    if (mix2Play.getAttribute("src") == "greenPlayBtn.png") {
        mix2Play.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mix2Play.getAttribute("src") == "greenPauseBtn.png") {
        mix2Play.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - The Hellion";
    playerAlbumIcon.setAttribute("src", "screaming.jpeg");
    playerSongName.textContent = "The Hellion";
    playerBandName.textContent = "Judas Priest";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "0:41";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist daily mix 3
function playMix3() {
    if (mix3Play.getAttribute("src") == "greenPlayBtn.png") {
        mix3Play.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mix3Play.getAttribute("src") == "greenPauseBtn.png") {
        mix3Play.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - FREEZE MY MIND";
    playerAlbumIcon.setAttribute("src", "emigrate.jpeg");
    playerSongName.textContent = "FREEZE MY MIND";
    playerBandName.textContent = "Emigrate";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "3:19";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist daily mix 4
function playMix4() {
    if (mix4Play.getAttribute("src") == "greenPlayBtn.png") {
        mix4Play.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mix4Play.getAttribute("src") == "greenPauseBtn.png") {
        mix4Play.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Eye Of The Tiger";
    playerAlbumIcon.setAttribute("src", "martinMiller.jpeg");
    playerSongName.textContent = "Eye Of The Tiger";
    playerBandName.textContent = "Martin Miller";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "1:20";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' na playlist daily mix 5
function playMix5() {
    if (mix5Play.getAttribute("src") == "greenPlayBtn.png") {
        mix5Play.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mix5Play.getAttribute("src") == "greenPauseBtn.png") {
        mix5Play.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Under Pressure - Remastered 2011";
    playerAlbumIcon.setAttribute("src", "hotSpace.jpeg");
    playerSongName.textContent = "Under Pressure - Remastered 2011";
    playerBandName.textContent = "Queen, David Bowie";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "1:20";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album abbey road
function playAbbeyRoad() {
    if (abbeyRoadPlay.getAttribute("src") == "greenPlayBtn.png") {
        abbeyRoadPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (abbeyRoadPlay.getAttribute("src") == "greenPauseBtn.png") {
        abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Come Together - Remastered 2009";
    playerAlbumIcon.setAttribute("src", "abbeyRoad.jpeg");
    playerSongName.textContent = "Come Together - Remastered 2009";
    playerBandName.textContent = "The Beatles";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "4:19";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album 'white album'
function playWhiteAlbum() {
    if (whiteAlbumPlay.getAttribute("src") == "greenPlayBtn.png") {
        whiteAlbumPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (whiteAlbumPlay.getAttribute("src") == "greenPauseBtn.png") {
        whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Back In The U.S.S.R. - Remastered 2009";
    playerAlbumIcon.setAttribute("src", "whiteAlbum.jpeg");
    playerSongName.textContent = "Back In The U.S.S.R. - Remastered 2009";
    playerBandName.textContent = "The Beatles";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "2:43";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album help
function playHelp() {
    if (helpPlay.getAttribute("src") == "greenPlayBtn.png") {
        helpPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (helpPlay.getAttribute("src") == "greenPauseBtn.png") {
        helpPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Help! - Remastered 2009";
    playerAlbumIcon.setAttribute("src", "help.jpeg");
    playerSongName.textContent = "Help! - Remastered 2009";
    playerBandName.textContent = "The Beatles";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "2:19";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album rubber soul
function playRubberSoul() {
    if (rubberSoulPlay.getAttribute("src") == "greenPlayBtn.png") {
        rubberSoulPlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (rubberSoulPlay.getAttribute("src") == "greenPauseBtn.png") {
        rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Drive My Car - Remastered 2009";
    playerAlbumIcon.setAttribute("src", "rubberSoul.jpeg");
    playerSongName.textContent = "Drive My Car - Remastered 2009";
    playerBandName.textContent = "The Beatles";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "2:28";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album let it be
function playLetItBe() {
    if (letItBePlay.getAttribute("src") == "greenPlayBtn.png") {
        letItBePlay.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (letItBePlay.getAttribute("src") == "greenPauseBtn.png") {
        letItBePlay.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Two Of Us - Remastered 2009";
    playerAlbumIcon.setAttribute("src", "letItBe.jpeg");
    playerSongName.textContent = "Two Of Us - Remastered 2009";
    playerBandName.textContent = "The Beatles";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "3:36";

    sgtPeppersPlayNum.innerHTML = "<p class='trackNum'>1</p>";
    mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra 'dar play' no album sgt peppers
function playSgtPeppers() {
    if (mainSgtPeppersPlayBtn.getAttribute("src") == "greenPlayBtn.png") {
        mainSgtPeppersPlayBtn.setAttribute("src", "greenPauseBtn.png");
        playlistSgtPeppersPlayBtn.setAttribute("src", "greenPauseBtn.png");
        playBtn.setAttribute("src", "pause.png");

    } else if (mainSgtPeppersPlayBtn.getAttribute("src") == "greenPauseBtn.png") {
        mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
        playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
        playBtn.setAttribute("src", "play.png");

    }

    document.title = "Copify - Sgt Pepper's Lonely Hearts Club Band - Remastered 2009";
    playerAlbumIcon.setAttribute("src", "sgtPepper.jpeg");
    playerSongName.textContent = "Sgt. Peppers Lonely Hearts Club Band ...";
    playerBandName.textContent = "The Beatles";
    loadBar.style.display = "none";
    tempoUm.textContent = "0:00";
    tempoDois.textContent = "3:28";
    sgtPeppersPlayNum.innerHTML = "<img src='trackTriangulo.png' id='sgtPepperNumPlay'/>";
    sgtPepperNumPlay = document.getElementById("sgtPepperNumPlay");
    sgtPepperNumPlay.style.width = "15px";
    sgtPepperNumPlay.style.height = "15px";
    sgtPepperNumPlay.style.margin = "0 16px 0 16px";

    holyDioPlayNum.innerHTML = "<p class='trackNumDez'>25</p>";
    mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
    mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
    mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
    albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
    mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
    queenIIPlay.setAttribute("src", "greenPlayBtn.png");
    kikoPlay.setAttribute("src", "greenPlayBtn.png");
    beastPlay.setAttribute("src", "greenPlayBtn.png");
    rammPlay.setAttribute("src", "greenPlayBtn.png");
    siriusPlay.setAttribute("src", "greenPlayBtn.png");
    megadeadPlay.setAttribute("src", "greenPlayBtn.png");
    toxicityPlay.setAttribute("src", "greenPlayBtn.png");
    metallicaPlay.setAttribute("src", "greenPlayBtn.png");
    sabbathPlay.setAttribute("src", "greenPlayBtn.png");
    maidenPlay.setAttribute("src", "greenPlayBtn.png");
    steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
    mix1Play.setAttribute("src", "greenPlayBtn.png");
    mix2Play.setAttribute("src", "greenPlayBtn.png");
    mix3Play.setAttribute("src", "greenPlayBtn.png");
    mix4Play.setAttribute("src", "greenPlayBtn.png");
    mix5Play.setAttribute("src", "greenPlayBtn.png");
    abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
    whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
    helpPlay.setAttribute("src", "greenPlayBtn.png");
    rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
    letItBePlay.setAttribute("src", "greenPlayBtn.png");
    holyDioMainOptPlay.setAttribute("src", "greenPlayBtn.png");
}
//function pra fazer o botão de play principal funcionar
function mudaPlay() {

    if (playBtn.getAttribute("src") == "play.png") {
        playBtn.setAttribute("src", "pause.png");

        if (playerAlbumIcon.getAttribute("src") == "sgtPepper.jpeg") {
            mainSgtPeppersPlayBtn.setAttribute("src", "greenPauseBtn.png");
            playlistSgtPeppersPlayBtn.setAttribute("src", "greenPauseBtn.png");
            sgtPepperMainOptPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "dreamEvil.jpeg") {
            mainHolyDioPlayBtn.setAttribute("src", "greenPauseBtn.png");
            playlistHolyDioPlayBtn.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "rust.jpg") {
            mainRustPlayBtn.setAttribute("src", "greenPauseBtn.png");
            albumCardRustPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "innuendo.jpg") {
            mainInnuendoPlayBtn.setAttribute("src", "greenPauseBtn.png");
            albumCardInnuendoPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "anger.jpg") {
            mainStAngerPlay.setAttribute("src", "greenPauseBtn.png");
            albumCardStAngerPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "sehn.jpg") {
            mainSehnPlay.setAttribute("src", "greenPauseBtn.png");
            playBtn.setAttribute("src", "pause.png");
        } else if (playerAlbumIcon.getAttribute("src") == "queenII.jpeg") {
            queenIIPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "noGravity.jpeg") {
            kikoPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "beast.jpg") {
            beastPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "herzeleid.jpeg") {
            rammPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "sirius.jpg") {
            siriusPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "unitedAbominations.jpeg") {
            megadeadPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "toxicity.jpg") {
            toxicityPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "puppets.jpeg") {
            metallicaPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "paranoid.jpeg") {
            sabbathPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "powerslave.jpeg") {
            maidenPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "realIllusions.jpeg") {
            steveVaiPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "fortitude.jpeg") {
            mix1Play.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "screaming.jpeg") {
            mix2Play.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "emigrate.jpeg") {
            mix3Play.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "martinMiller.jpeg") {
            mix4Play.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "hotSpace.jpeg") {
            mix5Play.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "abbeyRoad.jpeg") {
            abbeyRoadPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "whiteAlbum.jpeg") {
            whiteAlbumPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "help.jpeg") {
            helpPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "rubberSoul.jpeg") {
            rubberSoulPlay.setAttribute("src", "greenPauseBtn.png");
        } else if (playerAlbumIcon.getAttribute("src") == "letItBe.jpeg") {
            letItBePlay.setAttribute("src", "greenPauseBtn.png");
        }

    } else if (playBtn.getAttribute("src") == "pause.png") {
        playBtn.setAttribute("src", "play.png");

        mainSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
        playlistSgtPeppersPlayBtn.setAttribute("src", "greenPlayBtn.png");
        mainHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
        playlistHolyDioPlayBtn.setAttribute("src", "greenPlayBtn.png");
        mainRustPlayBtn.setAttribute("src", "greenPlayBtn.png");
        albumCardRustPlay.setAttribute("src", "greenPlayBtn.png");
        mainInnuendoPlayBtn.setAttribute("src", "greenPlayBtn.png");
        albumCardInnuendoPlay.setAttribute("src", "greenPlayBtn.png");
        mainStAngerPlay.setAttribute("src", "greenPlayBtn.png");
        albumCardStAngerPlay.setAttribute("src", "greenPlayBtn.png");
        queenIIPlay.setAttribute("src", "greenPlayBtn.png");
        kikoPlay.setAttribute("src", "greenPlayBtn.png");
        beastPlay.setAttribute("src", "greenPlayBtn.png");
        rammPlay.setAttribute("src", "greenPlayBtn.png");
        siriusPlay.setAttribute("src", "greenPlayBtn.png");
        megadeadPlay.setAttribute("src", "greenPlayBtn.png");
        toxicityPlay.setAttribute("src", "greenPlayBtn.png");
        metallicaPlay.setAttribute("src", "greenPlayBtn.png");
        sabbathPlay.setAttribute("src", "greenPlayBtn.png");
        maidenPlay.setAttribute("src", "greenPlayBtn.png");
        steveVaiPlay.setAttribute("src", "greenPlayBtn.png");
        mix1Play.setAttribute("src", "greenPlayBtn.png");
        mix2Play.setAttribute("src", "greenPlayBtn.png");
        mix3Play.setAttribute("src", "greenPlayBtn.png");
        mix4Play.setAttribute("src", "greenPlayBtn.png");
        abbeyRoadPlay.setAttribute("src", "greenPlayBtn.png");
        mix5Play.setAttribute("src", "greenPlayBtn.png");
        whiteAlbumPlay.setAttribute("src", "greenPlayBtn.png");
        helpPlay.setAttribute("src", "greenPlayBtn.png");
        rubberSoulPlay.setAttribute("src", "greenPlayBtn.png");
        letItBePlay.setAttribute("src", "greenPlayBtn.png");
        sgtPepperMainOptPlay.setAttribute("src", "greenPlayBtn.png");
    }
}

//botões de like do album sgt peppers e da plaaylist holy dio
sgtPeppersPlaylistHeart = document.getElementById("sgtPeppersPlaylistHeart");
HolyDioPlaylistHeart = document.getElementById("HolyDioPlaylistHeart");

//function pra fazer o botão de like do album sgt peppers funcionar
function peppersHeart() {
    if (sgtPeppersPlaylistHeart.getAttribute("src") == "coracao.png") {
        sgtPeppersPlaylistHeart.setAttribute("src", "coracaoVazio.png");
    } else if (sgtPeppersPlaylistHeart.getAttribute("src") == "coracaoVazio.png") {
        sgtPeppersPlaylistHeart.setAttribute("src", "coracao.png");
    }
}
//function pra fazer o botão de like da playlist holy dio funcionar
function holyDioHeart() {
    if (HolyDioPlaylistHeart.getAttribute("src") == "coracao.png") {
        HolyDioPlaylistHeart.setAttribute("src", "coracaoVazio.png");
    } else if (HolyDioPlaylistHeart.getAttribute("src") == "coracaoVazio.png") {
        HolyDioPlaylistHeart.setAttribute("src", "coracao.png");
    }
}

//Kauã Costa Seabra - 2023