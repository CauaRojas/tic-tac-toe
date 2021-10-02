let aPosicoes = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];
let aBotoes = [
	[, ,],
	[, ,],
	[, ,],
];
//true = x; false = o
let bSimbol = true,
	bInicio = false;
for (let nCont = 0; nCont < 3; nCont++) {
	for (let nAux = 0; nAux < 3; nAux++) {
		aBotoes[nCont][nAux] = document.getElementById(
			nCont.toString() + nAux.toString()
		);
	}
}
const fnBotao = (oElemento) => {
	bInicio
		? (oElemento.innerText = 'Para Jogo')
		: (oElemento.innerText = 'Iniciar Jogo');
};
const fnJoga = (oBotao) => {
	if (!bInicio) return;
	let nP1, nP2, lblTexto;
	lblTexto = document.getElementById('lblTexto');
	nP1 = parseInt(oBotao.id.substring(0, 1));
	nP2 = parseInt(oBotao.id.substring(1, 2));
	if (aBotoes[nP1][nP2].innerText != '') {
		return;
	}
	//console.log(nP1, nP2);
	bSimbol ? (aPosicoes[nP1][nP2] = 'X') : (aPosicoes[nP1][nP2] = 'O');
	aBotoes[nP1][nP2].innerText = aPosicoes[nP1][nP2];
	aBotoes[nP1][nP2].className = 'jogado';
	bSimbol = !bSimbol;
	lblTexto.innerText = bSimbol ? 'X vai jogar' : 'O vai jogar';

	if (fnCheca()) {
		if (!bSimbol) alert("Parabens o Jogador 'X' Ganhou!");
		else alert("Parabens o Jogador 'O' Ganhou!");
		alert('A partida vai pode reiniciada');
		document.getElementById('btnInicio').innerText = 'Reiniciar Partida';
		document
			.getElementById('btnInicio')
			.addEventListener('click', () => document.location.reload(false));
	}
	if (fnVelha()) {
		alert('Ahhhh que pena! O jogo deu velha');
		alert('A partida vai pode reiniciada');
		document.getElementById('btnInicio').innerText = 'Reiniciar Partida';
		document
			.getElementById('btnInicio')
			.addEventListener('click', () => document.location.reload(false));
	}
};
const fnVelha = () => {
	let bVelha = true;
	aPosicoes[0].forEach((item) => {
		if (item == '') bVelha = false;
	});
	aPosicoes[1].forEach((item) => {
		if (item == '') bVelha = false;
	});
	aPosicoes[2].forEach((item) => {
		if (item == '') bVelha = false;
	});
	return bVelha;
};
const fnCheca = () => {
	let pos1 = '',
		pos2 = '',
		pos3 = '';
	for (let i = 0; i < 9; i++) {
		if (pos1 !== '' && pos1 == pos2 && pos2 == pos3) {
			console.log(i);
			//fnGanhou(i);
			return true;
		}
		switch (i) {
			case 0:
				pos1 = aPosicoes[0][0];
				pos2 = aPosicoes[1][0];
				pos3 = aPosicoes[2][0];
				break;
			case 1:
				pos1 = aPosicoes[0][0];
				pos2 = aPosicoes[0][1];
				pos3 = aPosicoes[0][2];
				break;
			case 2:
				pos1 = aPosicoes[1][0];
				pos2 = aPosicoes[1][1];
				pos3 = aPosicoes[1][2];
				break;
			case 3:
				pos1 = aPosicoes[0][1];
				pos2 = aPosicoes[1][1];
				pos3 = aPosicoes[2][1];
				break;
			case 4:
				pos1 = aPosicoes[2][0];
				pos2 = aPosicoes[2][1];
				pos3 = aPosicoes[2][2];
				break;
			case 5:
				pos1 = aPosicoes[0][2];
				pos2 = aPosicoes[1][2];
				pos3 = aPosicoes[2][2];
				break;
			case 6:
				pos1 = aPosicoes[0][0];
				pos2 = aPosicoes[1][1];
				pos3 = aPosicoes[2][2];
				break;
			case 7:
				pos1 = aPosicoes[0][2];
				pos2 = aPosicoes[1][1];
				pos3 = aPosicoes[2][0];
				break;
			default:
				pos1 = '';
				pos2 = '';
				pos3 = '';
				break;
		}
	}
	function fnGanhou(nCaso) {
		if (nCaso % 2 == 1) nCaso += 1;
		else nCaso -= 1;
		console.log(nCaso);
		switch (nCaso) {
			case 0:
				aBotoes[0][0].className += ' ganhou';
				aBotoes[1][0].className += ' ganhou';
				aBotoes[2][0].className += ' ganhou';
				break;
			case 1:
				aBotoes[0][0].className += ' ganhou';
				aBotoes[0][1].className += ' ganhou';
				aBotoes[0][2].className += ' ganhou';
				break;
			case 2:
				aBotoes[1][0].className += ' ganhou';
				aBotoes[1][1].className += ' ganhou';
				aBotoes[1][2].className += ' ganhou';
				break;
			case 3:
				aBotoes[0][1].className += ' ganhou';
				aBotoes[1][1].className += ' ganhou';
				aBotoes[2][1].className += ' ganhou';
				break;
			case 4:
				aBotoes[2][0].className += ' ganhou';
				aBotoes[2][1].className += ' ganhou';
				aBotoes[2][2].className += ' ganhou';
				break;
			case 5:
				aBotoes[0][2].className += ' ganhou';
				aBotoes[1][2].className += ' ganhou';
				aBotoes[2][2].className += ' ganhou';
				break;
			case 6:
				aBotoes[0][0].className += ' ganhou';
				aBotoes[1][1].className += ' ganhou';
				aBotoes[2][2].className += ' ganhou';
				break;
			case 7:
				aBotoes[0][2].className += ' ganhou';
				aBotoes[1][1].className += ' ganhou';
				aBotoes[2][0].className += ' ganhou';
				break;
			default:
				break;
		}
	}
};
