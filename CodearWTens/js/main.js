
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
/*
    let nameid = document.getElementById('nameid')
    let validNameid = false

    let emailid = document.getElementById('emailid')
    let validEmailid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    let address = document.getElementById('address')
    validAddress = false

    let number = document.getElementById('number')
    validNumbers = false

    let message = document.getElementById('message')
    validMessage = false
    

  nameid.addEventListener('keyup', () => {
    if(nameid.value.length <= 1){
      alert('Campo Obrigatorio, *Insira seu nome')
      nameid.setAttribute('style', 'border-color: red') 
      validNameid = false

    } else {
      nameid.setAttribute('style', 'border-color: green') 
      validNameid = true
    }

  })

    emailid.addEventListener('keyup', () => {
      if(emailid.value.indexOf('@') == -1 ||
        emailid.valueOf.indexOf('.') == -1 ||
        emailid.value == '' ||
        emailid.value == null) {
        alert('Por favor, *Indique um e-mail válido')  
        emailid.focus();
        validEmailid = false
      } 

  })
  
  address.addEventListener('keyup', () => {
    if(address.value.length <= 1){
      alert('Campo Obrigatorio, *Insira seu endereço')
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

/*  message.addEventListener('keyup', () => {
   if(message.value == '' ||
      message.value == null) {
      alert('Por favor, Deixe sua mensagem!')
      message.focus()
      validMessage = false
    
}

})*/

/*function enviar(){

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({

        nameid: nameid.value,
        emailid: emailid.value,
        address: address.value,
        number: number.value,
        message: message.value,

    })
    localStorage.setItem("listaUser", JSON.stringify(listaUser))
    alert('Dados enviados com sucesso')

  }
  
/*



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
        Horário: ${user.horario}.`)
        })
      }
  

  
