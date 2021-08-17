const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", randomThings);

function randomThings() {
  const randomValue = Math.random() * 100;
  if (randomValue > 90) {
    document.body.style.backgroundColor = "red";
  } else if (randomValue > 80) {
    document.body.style.backgroundColor = "blue";
  } else if (randomValue > 70) {
    randomButton.innerText = "Don't click here";
  } else if (randomValue > 60) {
    randomButton.innerText = "Last chance";
  } else if (randomValue > 50) {

  } else if (randomValue > 40) {

  } else if (randomValue > 30) {

  } else if (randomValue > 20) {

  } else if (randomValue > 10) {

  } else if (randomValue > 8) {

  } else if (randomValue > 6) {

  } else if (randomValue > 4) {
    
  } else if (randomValue > 2) {
    randomButton.innerText =
      "Poxa amigo vou te falar legal, eu não fico usando internet wifi dos outros, internet wifi de loja, internet wifi não cara. Isso aqui é um pacote de dados, filho. Pra abrir videos gasta dinheiro. Ai eu vou abrir a video lá é um episódio de Jojo. Ta de brincadeira cara. Ou então sinaliza VIDEO DE JOJO que ai eu não abro. Cara, vou abrir achando que é um anime legal pra a gente se divertir, pra a gente rir, pra a gente brincar, e é JOJO? Acaba estressando fih. Se tu gosta filho cada um gosta do que quiser. EU SOU JOJOFOBICO FIH. JOJOFOBICO. EU GOSTO DE ANIME DE VERDADE FIH. Agora se tu não gosta é ctg mesmo, agora sinaliza meu filho, q ai eu não abro. Ah num é maneiro isso, isso num é normal amigo, num é normal. Toda hora ce bota um bagulho de jojo, é poses, é... é... é... é stands. Isso num é normal filho. Ce tem q se tratar, procurar um medico, agora se vc me convencer que jojo é bom, que eu num sei oq, que eu num sei oq lá, po,  quem treina joga fih. Ah qual foi amigo.";
  } else {
    randomButton.innerText = "hmmmmmmmmmmm";
    console.log("hmmmmmmmm");
  }
}

window.onload;
{
}
