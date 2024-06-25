let opcao, entrada, consulta, nome;
const consultas = [];

console.log("Digite o que deseja fazer\n[1] Adicionar consulta\n[2] Listar consultas");
console.log("[3] Atualizar consulta existente\n[4] Cancelar consulta\n[5] Sair");
process.stdin.on("data", function(data){
    entrada = data.toString().trim();
    if(!opcao){
        opcao = Number(entrada);
    }
    switch(opcao){
        case 1:
            if(!consulta){
                console.log("Digite o nome do paciente:");
                consulta = {};
            } else if(!consulta.nomePaciente){
                consulta.nomePaciente = entrada;
                console.log("Digite o nome do médico:");
            } else if(!consulta.nomeMedico){
                consulta.nomeMedico = entrada;
                console.log("Digite a data da consulta");
            } else if(!consulta.data){
                consulta.data = entrada;
                console.log("Digite o horário da consulta:");
            } else{
                consulta.hora = entrada;
                consultas.push(consulta);
                console.log("Consulta cadastrada com sucesso.");
                opcao = undefined;
                consulta = undefined;
            }
            break;
        case 2:
            console.log("CONSULTAS:")
            for(let c=0; c<consultas.length;c++){
                console.log("===================================");
                console.log("Nome do paciente: " + consultas[c].nomePaciente);
                console.log("Nome do médico: " + consultas[c].nomeMedico);
                console.log("Data: " + consultas[c].data);
                console.log("Horário: " + consultas[c].hora);
                console.log("===================================");
            }
            opcao = undefined;
            break;
        case 3:
            if(!consulta){
                console.log("Digite o nome do paciente da consulta que deseja atualizar:");
                consulta = {};
            } else if(!nome){
                nome = entrada;
                for(let c=0; c<consultas.length; c++){
                    if(nome == consultas[c].nome){
                        nome = c;
                        console.log("Digite o que deseja alterar:\n[1] Nome do Paciente");
                        console.log("[2] Nome do Médico");
                        break;
                    }
                }
            } else{

            }
            break;
        case 4:
            break;
        case 5:
            console.log("Até mais!");
            process.exit();
            break;
        default:
            console.log("Opção inválida. Digite um número de 1 a 5.");
    }
    if(!opcao){
        console.log("Digite o que deseja fazer\n[1] Adicionar consulta\n[2] Listar consultas");
        console.log("[3] Atualizar consulta existente\n[4] Cancelar consulta\n[5] Sair");
    }
});