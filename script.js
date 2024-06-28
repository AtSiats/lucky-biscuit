const home = document.querySelector('.home');
const sorte = document.querySelector('.sorte');
const homebutton = document.querySelector('.home button');
const sortebutton = document.querySelector('.sorte button');
const sortep = document.querySelector('.array')

homebutton.addEventListener('click', handleClick);
sortebutton.addEventListener('click', handleResetClick);

var array = ["Se alguém está tão cansado que\n não possa te dar um sorriso,\ndeixa-lhe o teu","procure acender uma vela em vez\n de amaldiçoar a escuridão","Todos veem o que você parece ser, mas poucos sabem o que você realmente é.", "Sábio é aquele que conhece os limites da própria ignorância.","A nossa felicidade depende mais do que temos nas nossas cabeças, do que nos nossos bolsos.","Pelos mesmos caminhos não se chega sempre aos mesmos fins.", "tentei fugir de mim mesmo, mas onde eu ia eu tava."]


function handleClick(){
  let i = (Math.floor(Math.random() * array.length))
  sortep.innerText = `${array[i]}`
  home.classList.add('hide');
  sorte.classList.remove('hide');
}
function handleResetClick(){
  home.classList.remove('hide');
  sorte.classList.add('hide');
}