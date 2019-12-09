var sonido = '/musica/el-exorsista.mp3';

var audio ='<embed id="musica" src="'+sonido+'" autoplay="false" type="audio/mpeg" enablejavascript="true"></embed>';
document.write(audio);

function reproducirmusica() {
var tocando = document.getElementById('musica');
tocando.Play();
}


function floor() {}