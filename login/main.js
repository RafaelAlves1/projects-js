/*para mostrar a senha*/

let btn = document.querySelector('.fa-eye');

btn.addEventListener('click',()=>{
  
  let senha = document.querySelector('#senha');
  
  /*se senha pegar o type e for igual password (que é o tipo de input) entao ele coloca o type text*/
  if (senha.getAttribute('type') == 'password'){
    senha.setAttribute('type','text')
  }else{
    senha.setAttribute('type','password')
  }
  
});