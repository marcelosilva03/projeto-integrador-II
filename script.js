// Função para coletar informações com possibilidade de encerrar o loop
function coletarInformacoes(mensagem) {
    var informacoes = "";
    while (true) {
      var info = prompt(mensagem + " (ou 'continue' para continuar):");
      if (info.toLowerCase() === "continue") {
        break;
      }
      informacoes += "- " + info + "\n";
    }
    return informacoes;
  }
  
  // Obtenção dos dados do agente de saúde
  var agenteSaude = document.getElementById("agenteSaude").value;
  var dataHoje = prompt("Digite a data de hoje (DD/MM/AAAA):");
  var horaAtual = prompt("Digite a hora atual (HH:MM):");
  
  // Obtenção dos dados do paciente
  var paciente = prompt("Digite o nome do paciente:");
  var endereco = prompt("Digite o endereço do paciente:");
  
  // Coleta de anotações pessoais
  var anotacoes = coletarInformacoes("Digite uma anotação pessoal");
  
  // Coleta de exames do paciente
  var exames = coletarInformacoes("Digite um exame do paciente");
  
  // Coleta de agendamentos do paciente
  var agendamentos = coletarInformacoes("Digite um agendamento do paciente");
  
  // Coleta de campanhas de saúde vigentes
  var campanhas = coletarInformacoes("Digite uma campanha de saúde vigente");
  
  // Obtenção da assinatura digital do paciente
  var assinaturaDigital = prompt("Digite a assinatura digital do paciente:");
  
  // Pergunta se deseja realizar outra entrevista
  var finalizar = prompt("Deseja realizar outra entrevista? (Sim/Não)");

  var resultado = "<h2>Resumo do Atendimento</h2><p>Agente de Saúde: " + agenteSaude + "</p>";
  
  if (finalizar.toLowerCase() === "sim") {
    // Exibição dos dados coletados e das anotações pessoais
    console.log("Agente de saúde: " + agenteSaude);
    console.log("Data de hoje: " + dataHoje);
    console.log("Hora atual: " + horaAtual);
    console.log("Paciente: " + paciente);
    console.log("Endereço: " + endereco);
    console.log("Anotações pessoais:\n" + anotacoes);
    console.log("Exames do paciente:\n" + exames);
    console.log("Agendamentos do paciente:\n" + agendamentos);
    console.log("Campanhas de saúde vigentes:\n" + campanhas);
    console.log("Assinatura digital do paciente: " + assinaturaDigital);
  } else {
    // Continuar a entrevista
    console.log("A entrevista será continuada.");
    // Adicione aqui o código para continuar a entrevista

    document.getElementById("resultado").innerHTML = resultado;
  }
  