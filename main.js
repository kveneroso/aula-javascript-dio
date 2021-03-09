/*
uso de variaveis 

var nome = "Keila Veneroso";
var idade = 29;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo"
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos!!!");
//alert(idade+idade2);
//alert com mensagem pronta
// alert("Meu primeiro JS")   
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(n1*n2);
*/

//usando arrays
/*
var lista=["maça","pera","laranja"];
console.log(lista[1]);
//alert(lista[2]);
lista.push("uva");  //inseri
console.log(lista);
lista.pop();  //retira
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());

console.log(lista.toString());  //deixa de ser array
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
*/

//usando dicionarios
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

//lista de dicionarios
/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas.nome);
alert(frutas[1].nome);
*/


// entrando com dados e condicional
/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


//usando laços de repetição while
/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1; // ou count++;
}
*/


//usando laços de repetição for
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

//usando data
/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/

//usando funções
/*
function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("vai Japão", "Japão", "Brasil"));


function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/


function clicou(){
   // alert("Obrigada por clicar");
  // document.getElementById("agradecimento");
  // console.log(document.getElementById("agradecimento"));

   document.getElementById("agradecimento").innerHTML="OBRIGADA POR CLICAR";
}


function redirecionar(){
    window.open("https://web.digitalinnovation.one/"); //abre numa nova aba
    window.location.href="https://web.digitalinnovation.one/"; //abre na mesma aba
}

//para um elemento no html
/*
function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse aqui";
   // alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}
*/

//para mais de um elemento  no html
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse aqui";
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
