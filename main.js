let btnSignUp = document.querySelector('.login .login__columnRight__signUp #btnSingUp');
let btnRegisterAccount = document.querySelector('.login #btnRegisterAccount');

let sectionLogin = document.querySelector('.login__columnRight');
let sectionRegisterAccount = document.querySelector('.login__registerAccount');

btnSignUp.addEventListener('click', (event) => {
  event.preventDefault();

  if( sectionLogin.classList.contains("ativo-block") && sectionRegisterAccount.classList.contains("ativo-none") ){

      sectionLogin.classList.remove('ativo-block')
      sectionLogin.classList.add('ativo-none')

      sectionRegisterAccount.classList.remove('ativo-none')
      sectionRegisterAccount.classList.add('ativo-block')
  }

});

btnRegisterAccount.addEventListener('click', (event) => {
  event.preventDefault();

  // sectionRegisterAccount.classList.remove('ativo-block');
  sectionRegisterAccount.classList.add('ativo-none');

  sectionLogin.classList.remove('ativo-none');
  sectionLogin.classList.add('ativo-block');
})