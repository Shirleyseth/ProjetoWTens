
  /* Pagina Sobre */

function umClique(){
    document.getElementById("img-fluid").src="../images/mti1.png";
  }
  
function doisCliques(){
    document.getElementById("img-fluid").src="../images/sobre-img.png"; 
  }


function umCliqueDois(){
    document.getElementById("img-fluid1").src="../images/mti2.png";
  }
  
function doisCliquesDois(){
    document.getElementById("img-fluid1").src="../images/piano6.png";
  }


  

  /* Newsletter */

  function verificaForm(){
    if(document.getElementById("email").value == ""){
      alert("Preencha o email");
      document.getElementById("email").focus();
      return false;
    }
    return true;
  }

    /* Contato */
    
    function Enviar() {

      let name = document.getElementById("nameid");
  
      if (name.value != "") {
          alert('Obrigado sr(a) ' + name.value + ' os seus dados foram encaminhados com sucesso');
      }
  
  }


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


  
function SaibaMais() {
  aulas.forEach((user) => {
      alert(`
        Curso: ${user.curso}
        Professor: ${user.professor} 
        Horário: ${user.horario}.`)
        })
      }
 

  

  
