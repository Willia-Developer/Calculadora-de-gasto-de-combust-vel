/*primeiro desafio

let combustivel = 100;
let consumo = 10;
let preco = 5.5;
let valormedio = combustivel * preco / consumo; // 100 * 5.5 / 10 = 55;
let km = 1000;
let autonomia = km / consumo; // 1000 / 10 = 100;
let valor = valormedio * autonomia; // 55 * 100 = 5500;
console.log(valor); 

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaPercorridaemKM = 1580;

const litrosConsumidos = distanciaPercorridaemKM / kmPorLitros;
const valorTotal = litrosConsumidos * precoCombustivel;
console.log(valorTotal.toFixed(2)); */

function calcular(){
  var gasolina = 5.79;
  var alcool = 4.99;
 var tipocombustivel = gasolina; alcool;
 document.getElementById("tipocombustivel").value;
  var km = document.getElementById('km').value
  var consumo = document.getElementById('consumo').value
  var resultado = document.getElementById('resultado').value;
  var resultado = tipocombustivel  * km / consumo;
  document.getElementById('resultado').value = resultado.toFixed(2);
}
