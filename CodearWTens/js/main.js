
  /* Pagina Sobre */

function umClique(){
  document.getElementById("img-fluid").src="../images/mti1.png";  
  }
  
function doisCliques(){ 
    document.getElementById("img-fluid").src="../images/sobre-img.png";
  }


function umCliqueDois(){
    document.getElementById("img-fluid1").src="../images/divino.png";
  }

function doisCliquesDois(){
    document.getElementById("img-fluid1").src="../images/piano6.png";
  }

  

  /* Newsletter */

  function validateEmail(){
                
    let emailField = document.getElementById('email');   
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
    if( validEmail.test(emailField.value) ){
      alert('E-mail salvo, obrigada');
      return true;

    }else{
      alert('Email inválido, tente novamente');
      return false;
    }
  } 


    /* Contato */

    let nameid = document.querySelector('#nameid')
    let validNameid = false

    let emailid = document.querySelector('#emailid')
    let validEmailid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    let address = document.querySelector('#address');
    validAddress = false

    let number = document.querySelector('#number');
    validNumbers = false

    let message = document.querySelector("message");
    

  nameid.addEventListener('keyup', () => {
      if(nameid.value.length <= 2){
        alert("Por favor, *Insira no minimo 3 caracteres")
        nameid.setAttribute('style', 'border-color: red') //muda a cor da borda para vermelho caso esteja errado
        validNameid = false
      } else {
        nameid.setAttribute('style', 'border-color: green') //muda a cor da borda para verde caso eseja certo
        validNameid = true
      }
    })


  emailid.addEventListener('keyup', () => {
    if( emailid.value.indexOf("@") == -1 ||
      emailid.valueOf.indexOf(".") == -1 ||
      emailid.value == "" ||
      emailid.value == null) {
      alert("Por favor, *Indique um e-mail válido.");
      emailid.focus();
      return false;
    }

  })

  address.addEventListener('keyup', () => {
      if(address.value.length <= 2){
        alert("Por favor, *Insira no minimo 3 caracteres'")
        address.setAttribute('style', 'border-color: red') 
        validAddress = false
      } else {
        address.setAttribute('style', 'border-color: green') 
        validAddress = true
      }
    
    })

    number.addEventListener('keyup', () => {
      if(number.value.length <= 0){
        alert("Por favor, *Digite apenas numeros")
        number.setAttribute('style', 'border-color: red') 
        validNumber = false
      } else {
        number.setAttribute('style', 'border-color: green') 
        validNumber = true
      }
    
    })

    message.addEventListener('keyup', () => {
     if(message.value == "" || 
        message.value == null || 
        message.value.length <= 1) {
      alert('Por favor, Deixe sua mensagem! *Obrigatorio ao menos 2 caracteres');
      message.focus();
      return false;
  }
})




function enviar () {
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

  listaUser.push({

      nameCad: nameid.value,
      emailidCad: emailid.value,
      addressCad: address.value,
      numberCad: number.value,
      messageCad: message.value,

  })

  localStorage.setItem("listaUser", JSON.stringify(listaUser))

  alert('Obrigado Sr(a), os seus dados foram encaminhados com sucesso!')

}

 /*   function env(){

      let name = document.getElementById("nameid").value;
      let email = document.getElementById("emailid").value;
      let address = document.getElementById("address").value;
      let number = document.getElementById("number").value;
      let message = document.getElementById("message").value;



      // Pega a lista já cadastrada, se não houver vira um array vazio
      let lista_pessoas = JSON.parse(localStorage.getItem('lista-pessoas') || '[]');
      // Adiciona pessoa ao cadastro
      lista_pessoas.push({
          nameCad: name,
          emailCad: email,
          addressCad: address,
          numberCad: number,
          messageCad: message,
  
      });

      // Salva a lista alterada
      localStorage.setItem("lista-pessoas", JSON.stringify(lista_pessoas));

      alert('Obrigado Sr(a), os seus dados foram encaminhados com sucesso!');
      
  }
*/

    /* Aulas */

  const aulas = [
    {
        curso: "Aulas de bateria",
        professor: "Monica",
        horario: "Seg e Qua as 09h",

    },
    {
        curso: "Aulas de canto",
        professor: "Morgana",
        horario: "Ter e Qui 16h",

    },
    {
        curso: "Aulas de guitarra",
        professor: "Leandro",
        horario: "Sábado as 09h",

    },
    {
        curso: "Aulas de violino",
        professor: "Shirley",
        horario: "Qua e Sex as 16h",

    },
];


function aula(curso, professor, horario) {
    this.curso = curso;
    this.professor = professor;
    this.horario = horario;
}

const novaAula = new aula("Aulas de violino", "Pedro", "Sábado as 11hs");
aulas.push(novaAula)


  
function saibaMais() {
  aulas.forEach((user) => {
      alert(`
        Curso: ${user.curso}
        Professor: ${user.professor} 
        Horario: ${user.horario}`)
        })
      }

