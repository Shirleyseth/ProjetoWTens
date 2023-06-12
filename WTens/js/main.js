
  /* Pagina Sobre */

function umClique(){
    document.getElementById("img-fluid").src="../images/sobre-img.png";
    document.getElementById("img-fluid1").src="../images/piano6.png";
  }
  
  function doisCliques(){
    document.getElementById("img-fluid").src="../images/mti1.png";
    document.getElementById("img-fluid1").src="../images/mti2.png";
  
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

  let aulas = [
    {
      name: "bateria",
      professor: "Monica",
      horario: "Segunda as 10hs",
    }, 
    {
      nome: "canto",
      professor: "Morgana",
      horario: "Terça as 18hs",
    },
    {
      name: "guitarra",
      professor: "Shirley",
      horario: "Quarta as 10hs",
    },
    {
      name: "violino",
      professor: "Pedro",
      horario: "Quinta as 18hs",
    },
  ];

  let professor = aulas.indexOf ({
    name: "guitarra",
    professor: "Shirley",
    horario: "Quarta as 10hs",
  })
  ;

  if (professor !== -1) {
    aulas[professor] = {
    name: "Guitarra",
    professor: "Leticia",
    horario: "Sexta as 19hs"};

}
  console.log(aulas)

  alert(aulas[0])
  for(let i = 0; i < aulas.length; i++){
    console.log(aulas[i])
  }

  

  