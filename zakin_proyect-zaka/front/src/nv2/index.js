var sonido = '../musica/freddy-krueger-viene-por-ti-1.mp3';

var audio ='<embed id="musica" src="'+sonido+'" autoplay="false" type="audio/mpeg" enablejavascript="true"></embed>';
document.write(audio);

function reproducirmusica() {
var tocando = document.getElementById('musica');
tocando.Play();
}


function floor() {}
