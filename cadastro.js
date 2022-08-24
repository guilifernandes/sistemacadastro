//Sistema de Cadastro de Evento.

const data = new Date()

const dia = String(data.getDate()).padStart(2, "0")

const mes = String(data.getMonth() + 1).padStart(2, "0")

const ano = data.getUTCFullYear()

const dataAtual = `${dia}/${mes}/${ano}`

let dat = 0;
let idade = 0;
let listaParticipante = 0;

dat = prompt("Coloque a data do evento");

if (dat > dataAtual) {
    idade = prompt("Nos informe sua idade");

    if (idade >= 18) {
        listaParticipante = prompt("Total de pessoas na lista");

        if (listaParticipante <= 100) {
            console.log("Permitir Cadastro");
        } else {
            console.log("Cadastro não será permitido por ter excedido o limite de participantes");
        }
    } else {
        console.log("Idade não permitida");
    }
} else {
    console.log("Cadastro não permitido, sua Data está inválida");
}