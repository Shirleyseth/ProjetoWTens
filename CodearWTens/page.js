    /*
<span id="rsNome">&nbsp;</span>
 <span id="rsEmail">&nbsp;</span>
<span id="rsEndereco">&nbsp;</span>
 <span id="rsNumero">&nbsp;</span> 
<span id="rsMensagem">&nbsp;</span>
    
*/


if(emailid.value.length <= 2){
  emailid.innerHTML = 'Email *Insira no minimo 3 caracteres'
  emailid.setAttribute('style', 'border-color: red') 
  validEmailid = false
} else {
  emailid.innerHTML = 'Email'
  emailid.setAttribute('style', 'border-color: green')
  validEmailid = true
}


    




function validaForm(frm) {

// COMENTARIO
/*o parâmetro frm desta função significa: this.form,
pois a chamada da função - validaForm(this) foi
definida na tag form.*/
//
    //Verifica se o campo nome foi preenchido e
    //contém no mínimo três caracteres.



    if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, indique o seu nome.");
        //Foi definido um focus no campo.
        frm.nome.focus();
        //o form não é enviado.
    }        
        
        return false;
    }
  
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if(frm.email.value.indexOf("@") == -1 ||
      frm.email.valueOf.indexOf(".") == -1 ||
      frm.email.value == "" ||
      frm.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        frm.email.focus();
        return false;
    }

    // O utilizador necessita de selecionar um dos dois
    //radio buttons: Masculino ou Feminino.
    escolhaSexo = -1; //valor negativo default (padrão) que significa que nada foi escolhido ainda.
    //No bloco de código abaixo foi criado um ciclo entre
    //os radios button com o mesmo nome (sexo)
    for(x = frm.sexo.lenght -1; x > -1; x--) {

        /* COMENTARIO
        x = frm.sexo.lenght -1 é a mesma coisa que: x = 2-
        1, que resulta em 1.
        x > -1 significa que o valor de x não pode ser igual a -1 e
        sim maior, porque -1 significa que nada foi escolhido.
        x-- significa que há um decremento no valor x, é algo como:
        x = 1, x= 0 e pára pois x não pode ser -1.
        // */


        if(frm.sexo[x].checked) { //checked quer dizer selecionado,
           //então verifica se o primeiro (0) ou o
           //segundo (1) radio button foi selecionado (checked).
           escolhaSexo = x; //atribui à variável escolhaSexo o valor X.
        }
    }

    //se nenhuma das opções (masculino ou feminino) forem
    //escolhidas, mostra um alerta e cancela o envio.
    if(escolhaSexo == -1) {
        alert("qual o seu sexo?");
        frm.sexo[0].focus();
        return false;
    }

    //COMENTARIO
    /*valida a profissão:
    O utilizador tem de escolher uma entre as três opções
    (Programador, Designer e Tester).
    */

    if(frm.prof.value == "" || from.prof.value == "Todas") {
        alert("De momento, precisamos de especialistas nas três áreas indicadas");
        frm.prof.focus();
        return false;
    }

    //Valida a textArea, que é como validar um campo de texto simples.
    if(frm.sobre.value == "" || frm.sobre.value == null) {
        alert("Por favor, conte-nos um pouco sobre si.");
        frm.sobre.focus();
        return false;
    }
  




//Thiago

let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')



nome.addEventListener('keyup', () => {
  if(nome.value.lenght <= 2) {
    labelNome.setAttribute('style', 'color:red')
    labelNome.innerHTML = 'Nome  *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false

  } else {
    labelNome.setAttribute('style', 'color:green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.lenght <= 4) {
    labelUsuario.setAttribute('style', 'color:red')
    labelUsuario.innerHTML = 'Usuario  *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false

  } else {
    labelUsuario.setAttribute('style', 'color:green')
    labelUsuario.innerHTML = 'Usuario'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})


senha.addEventListener('keyup', () => {
  if(senha.value.lenght <= 5) {
    labelSenha.setAttribute('style', 'color:red')
    labelSenha.innerHTML = 'Senha  *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false

  } else {
    labelSenha.setAttribute('style', 'color:green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value) { //senhas for diferentes '!= negativo
    labelConfirmSenha.setAttribute('style', 'color:red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha  *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validSenha = false

  } else {
    labelConfirmSenha.setAttribute('style', 'color:green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({

        nameCad: nome.value,
        usuarioCad: usuario.value,
        senhaCad: senha.value,

    })
    localStorage.setItem("listaUser", JSON.stringify(listaUser))



    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = <strong>Cadastrado com sucesso!</strong>
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

  } else {
    msgError.setAtribute('style', 'display: block')
    msgError.innerHTML = <strong>Preencha os campos corretamente.</strong>
    msgSuccess.innerHTML = ''
    msgSuccess.setAtribute('style', 'display: none')
    
  }

    /*setTimeout (() => { //outra tela html
      window.location.href = '../index.html'
    }, 3000)

  */

}



btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if(inputSenha = getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')

  } else {
    inputSenha.setAttribute('type', 'password')

  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if(inputConfirmSenha = getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')

  } else {
    inputConfirmSenha.setAttribute('type', 'password')

  }
})












document.addEventListener("DOMContentLoaded", function(){ //Cria um evento para quando a página for carregada

	document.getElementById("frmCadastro").addEventListener("submit", function(e){
		var nome  = document.getElementById("txtNome").value;//Carregamos o valor do campo nome
		var email = document.getElementById("txtEmail").value;//Carregamos o valor do campo e-mail
		var senha = document.getElementById("txtSenha").value;//Carregamos o valor do campo senha
		var validacoes = 0; //Variável de controle, se inicia com zero

		
		if(nome.length > 10){ //Se o nome conter mais de 10 caracteres.
			document.getElementById("rsNome").style.color = "green";//Alteramos a cor do Span para Verde
			document.getElementById("rsNome").innerHTML = "OK";//Alteramos o valor do Span para OK
			validacoes++;//Incrementamos 1 a variável de controle
		}else{
			document.getElementById("rsNome").style.color = "red";//Alteramos a cor do Span para Vermelho
			document.getElementById("rsNome").innerHTML = "*";//Alteramos o valor do Span para *
		}
		
		if(email.indexOf('@') > 0 && email.indexOf('.') > 0){ //Se houver @ e . então é um e-mail válido
			document.getElementById("rsEmail").style.color = "green";//Alteramos a cor do Span para Verde
			document.getElementById("rsEmail").innerHTML = "OK";//Alteramos o valor do Span para OK
			validacoes++;//Incrementamos 1 a variável de controle
		}else{
			document.getElementById("rsEmail").style.color = "red";//Alteramos a cor do Span para Vermelho
			document.getElementById("rsEmail").innerHTML = "*";//Alteramos o valor do Span para *
		}
		
		if(senha.length > 7){ //Se a senha conter mais de 7 caracteres, é uma senha válida
			document.getElementById("rsSenha").style.color = "green";//Alteramos a cor do Span para Verde
			document.getElementById("rsSenha").innerHTML = "OK";//Alteramos o valor do Span para OK
			validacoes++;//Incrementamos 1 a variável de controle
		}else{
			document.getElementById("rsSenha").style.color = "red";//Alteramos a cor do Span para Vermelho
			document.getElementById("rsSenha").innerHTML = "*";//Alteramos o valor do Span para *
		}
		
		if(validacoes != 3){ //Se todos os campos estiverem válidos, a variável de controle terá o valor três, senão...
			e.preventDefault();//Não envia o formulário e retorna o estado padrão.
			//o e representa o evento, que vem como parâmetro no evento Submit
		}	
	});
});





/*function validar() {
  var nome = form1.nome.value;
  var email = form1.email.value;
  var senha = form1.senha.value;
  var rep_senha = form1.rep_senha.value;
  if (nome == "") {
  alert('Preencha o campo com seu nome');
  form1.nome.focus();
  return false;
  }
  }

if (nome.length < 5) {
  alert('Digite seu nome completo');
  form1.nome.focus();
  return false;
  }
  if (senha != rep_senha) {
    alert('Senhas diferentes');
    form1.senha.focus();
    return false;
    }
    */





//SEM HTML
  /*
    let form = document.getElementById('menu_form')
    if ( !!form ) {

        form.addEventListener('submit', function(event){

            let object = {}
            object.name = document.getElementById('nameid').value;
            object.email = document.getElementById('emailid').value;
            object.address = document.getElementById('address').value;
            object.number = document.getElementById('number').value;
            object.text = document.getElementById('message').value;

            localStorage.setItem('listaDados', JSON.stringify(object));
        }, false);
        
        if ( localStorage.getItem('listaDados') ) {
    
          let object = JSON.parse(localStorage.getItem('listaDados'));
     
      }
    }
*/



   
   //SEM HTML   
    /*const formulario = document.forms['menu_form'];

    formulario.addEventListener("submit", function(event){
      
      let erros = []
      let inputName = document.getElementById("nameid");
      let inputEmail = document.getElementById("email");
      let inputEndereco = document.getElementById("address");
      let inputNumero = document.getElementById("number");
      let inputMensagem = document.getElementById("mensagem");
    
    
      if (inputName.value == "") {
        erros.push("O campo deve estar completo")
      }else if(inputName.value.length < 3){
        erros.push("o campo nome deve ter pelo menos 3 caracteres")
      }
      if (erros.length > 0) {
        event.preventDefault();
        //imprimir erro na div 'erros' criada no html
        let ulErros = document.querySelector("div.erros ul");
      for(let i = 0; i < erros.length; i++){
        ulErros.innerHTML += '<li>' + erros[i] + '</li>'}  
      }else if(erros.length <= 0){
        alert('Obrigado Sr(a) ' + inputName.value + ' os seus dados foram encaminhados com sucesso!');
      }
    
      localStorage.setItem('Nome', inputName.value)
      localStorage.setItem('Email', inputEmail.value)
      localStorage.setItem('Endereço', inputEndereco.value)
      localStorage.setItem('Número', inputNumero.value)
      localStorage.setItem('Mensagem', inputMensagem.value)
    });
    

      document.querySelector("#menu_form").onsubmit = function(event){
        event.preventDefault();
        console.log('quero enviar o formulario')
    };
    
*/