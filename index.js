let divTabela = document.querySelector("#animais_cadastrados");
let tabela = document.querySelector("#tabela");
let nomes = JSON.parse(localStorage.getItem("0")) || ["Nome_1","Nome_2","Nome_3","Nome_4","Nome_5","Nome_6","Nome_7","Nome_8"];
let brincos = JSON.parse(localStorage.getItem("1")) || [1,2,3,4,5,6,7,8];
let tipos = JSON.parse(localStorage.getItem("3")) || ["Vaca","Touro","Boi","Boi", "Novilha","Novilha","Bezerro","Vaca"];
let sexos = JSON.parse(localStorage.getItem("2")) || ["F","M","M","M","F","F","M","F"];
let racas = JSON.parse(localStorage.getItem("4")) || ["Holandesa", "Guzerá","Nelore","Nelore","Holandesa","Holandesa","Nelore","Holandesa"];
let idades = JSON.parse(localStorage.getItem("5")) || [0,0,0,0,0,0,0,0,];
let origens = JSON.parse(localStorage.getItem("6")) || ["Nascimento","Nascimento","Compra","Nascimento","Nascimento","Compra","Compra","Nascimento"];
let nascimentos = JSON.parse(localStorage.getItem("7")) || ["dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy",];

window.addEventListener("DOMContentLoaded", () => {
  console.log(tipos);
  Render();
});

function RenderTable(){
    tabela.innerHTML = "";
    tabela.innerHTML = ` <tr id="categorias">
    <th class="valores">Nomes</th>
    <th class="valores">Brincos</th>
    <th class="valores">Sexos</th>
    <th class="valores">Tipos</th>
    <th class="valores">Raças</th>
    <th class="valores">Idades</th>
    <th class="valores">Origens</th>
    <th class="valores">Nascimentos</th>
    </tr>`;
  
}
function Render() {
    RenderTable();
  for (let i = 0; i < nomes.length; i++) {
    tabela.innerHTML += `
      <tr class="linha_estilo" id="${i}">
      <th class="valores">${nomes[i]}</th>
      <th class="valores">${brincos[i]}</th>
      <th class="valores">${sexos[i]}</th>
      <th class="valores">${tipos[i]}</th>
      <th class="valores">${racas[i]}</th>
      <th class="valores">${idades[i]}</th>
      <th class="valores">${origens[i]}</th>
      <th class="valores">${nascimentos[i]}</th>
      </tr>
      `;
  }
}
function setItens(){
    localStorage.setItem("0", JSON.stringify(nomes));
  localStorage.setItem("1", JSON.stringify(brincos));
  localStorage.setItem("2", JSON.stringify(sexos));
  localStorage.setItem("3", JSON.stringify(tipos));
  localStorage.setItem("4", JSON.stringify(racas));
  localStorage.setItem("5", JSON.stringify(idades));
  localStorage.setItem("6", JSON.stringify(origens));
  localStorage.setItem("7", JSON.stringify(nascimentos));
}



let btn = document.querySelector("#cdt_animal");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let nome = document.getElementById("0").value;
  let brinco = document.getElementById("1").value;
  let sexo = document.getElementById("2").value;
  let tipo = document.getElementById("3").value;
  let raca = document.getElementById("4").value;
  let idade = document.getElementById("5").value;
  let origem = document.getElementById("6").value;
  let nascimento = document.getElementById("7").value;
    if(nome==""||brinco==""||sexo==""){
        return
    }else{
  nomes.push(nome);
  brincos.push(brinco);
  tipos.push(tipo);
  sexos.push(sexo);
  racas.push(raca);
  idades.push(idade);
  origens.push(origem);
  nascimentos.push(nascimento);
    }
  Render();
});
