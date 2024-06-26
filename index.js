let opcao, entrada, consulta, indice, resp;
let consultas = [];

console.log(`Digite o que deseja fazer
    [1] Adicionar consulta
    [2] Listar consultas
    [3] Atualizar consulta existente
    [4] Cancelar consulta
    [5] Sair`);
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
                consulta.indice = consultas.length;
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
                consulta.removido = false;
                consultas.push(consulta);
                console.log("Consulta cadastrada com sucesso.");
                opcao = undefined;
                consulta = undefined;
            }
            break;
        case 2:
            console.log("CONSULTAS:")
            for(let c=0; c<consultas.length;c++){
                if(!consultas[c].removido){
                    console.log("===================================");
                    console.log("Número da consulta: " + consultas[c].indice);
                    console.log("Nome do paciente: " + consultas[c].nomePaciente);
                    console.log("Nome do médico: " + consultas[c].nomeMedico);
                    console.log("Data: " + consultas[c].data);
                    console.log("Horário: " + consultas[c].hora);
                    console.log("===================================");
                }
            }
            opcao = undefined;
            break;
        case 3:
            if(!consulta){
                console.log("Digite o índice da consulta que deseja atualizar:");
                consulta = {};
                indice = undefined;
            } else if(!indice && indice != 0){
                indice = Number(entrada);
                if(indice >=0 && indice < consultas.length){
                    console.log("Digite o que deseja alterar:\n[1] Nome do Paciente");
                    console.log("[2] Nome do Médico\n[3] Data\n[4] Horário");
                    break;
                }else {
                    console.log("Não foi possível encontrar nenhum paciente com esse nome.");
                    opcao = undefined;
                    consulta = undefined;
                }
            } else{
                if(!resp){
                    resp = Number(entrada);
                }
                switch(resp){
                    case 1:
                        if(consultas[indice].nomePaciente){
                            console.log("Digite o novo nome do paciente:");
                            consultas[indice].nomePaciente = undefined;
                        } else{
                            consultas[indice].nomePaciente = entrada;
                            console.log("Nome do paciente alterado com sucesso.");
                            opcao = undefined;
                            consulta = undefined;
                            resp = undefined;
                        }
                        break;
                    case 2:
                        if(consultas[indice].nomeMedico){
                            console.log("Digite o novo nome do médico:");
                            consultas[indice].nomeMedico = undefined;
                        } else{
                            consultas[indice].nomeMedico = entrada;
                            console.log("Nome do médico alterado com sucesso.");
                            opcao = undefined;
                            consulta = undefined;
                            resp = undefined;
                        }
                        break;
                    case 3:
                        if(consultas[indice].data){
                            console.log("Digite a nova data:");
                            consultas[indice].data = undefined;
                        } else{
                            consultas[indice].data = entrada;
                            console.log("Data alterada com sucesso.");
                            opcao = undefined;
                            consulta = undefined;
                            resp = undefined;
                        }
                        break;
                    case 4:
                        if(consultas[indice].hora){
                            console.log("Digite o novo horário:");
                            consultas[nome].hora = undefined;
                        } else{
                            consultas[indice].hora = entrada;
                            console.log("Horário alterado com sucesso.");
                            opcao = undefined;
                            consulta = undefined;
                            resp = undefined;
                        }
                        break;
                    default:
                        console.log("Opção inválida.");
                        opcao = undefined;
                        consulta = undefined;
                        resp = undefined;
                }
            }
            break;
        case 4:
            indice = undefined;
            if(!consulta){
                console.log("Digite o indice da consulta que deseja excluir:");
                consulta = {};
            } else if(!indice){
                indice = Number(entrada);
                if(indice >=0 && indice < consultas.length && !consultas[indice].removido){
                    consultas[indice].removido = true;
                    console.log("Consulta removida com sucesso.");
                }
                opcao = undefined;
                consulta = undefined;
            }
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