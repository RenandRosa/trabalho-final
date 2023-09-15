function opcao1() {
    console.log("Você escolheu Adicionar tarefa");
  }
  
  function opcao2() {
    console.log("Você escolheu Visualizar tarefas");
  }
  
  function opcao3() {
    console.log("Você escolheu Marcar tarefa como concluída");
  }
  
  function opcao4() {
    console.log("Você escolheu Editar tarefa");
  }
  
  function opcao5() {
    console.log("Você escolheu Excluir tarefa");
  }
  
  function opcao6() {
    console.log("Você escolheu Sair");
  }
  
  function exibirMenu() {
    console.log("Selecione uma opção:");
    console.log('1. Adicionar tarefa');
    console.log('2. Visualizar tarefas');
    console.log('3. Marcar tarefa como concluída');
    console.log('4. Editar tarefa');
    console.log('5. Excluir tarefa');
    console.log('6. Sair');
  }
  
  exibirMenu();
  
  const escolha = prompt("Digite o número da opção desejada:");
  
  if (escolha === "1") {
    opcao1();
  } else if (escolha === "2") {
    opcao2();
  } else if (escolha === "3") {
    opcao3();
  }  else if (escolha === "4") {
    opcao4();
  }  else if (escolha === "5") {
    opcao5();
  }  else if (escolha === "6") {
    opcao6();
  } else {
    console.log("Opção inválida.");
  } 
  
  const tarefas = [];
  
  function tarefa(titulo, descrição) {
    return {
      titulo: titulo,
      descrição: descrição,
      status: 'pendente'
    };
  }
  
  tarefa();
  
  function adicionarTarefa() {
    const titulo = prompt('Digite o título da tarefa:');
    const descrição = prompt('Digite a descrição da tarefa:');
    const novaTarefa = tarefa(titulo, descrição);
    tarefas.push(novaTarefa);
    console.log('Tarefa adicionada com sucesso!');
  }
  
  adicionarTarefa();

    function chamarMenu1(adicionarTarefa) {
        return prompt('Digite o número da opção desejada')
    }

  chamarMenu1();
  
  function verTodasTarefas() {
    console.log('Lista de Tarefas:');
    tarefas.forEach((tarefa, index) => {
      console.log(`Tarefa ${index + 1}:`);
      console.log(`Título: ${tarefa.titulo}`);
      console.log(`Descrição: ${tarefa.descrição}`);
      console.log(`Status: ${tarefa.status}`);
      console.log('---');
    });
  }
  
  verTodasTarefas();

  function chamarMenu2(verTodasTarefas) {
    return prompt('Digite o número da opção desejada')
}

chamarMenu2();
  
  function marcarTarefaComoConcluida(indice) {
    if (indice >= 0 && indice < tarefas.length) {
      tarefas[indice].status = 'concluída';
      console.log('Tarefa marcada como concluída.');
    } else {
      console.log('Índice de tarefa inválido.');
    }
  }
  
  marcarTarefaComoConcluida();

  function chamarMenu3(marcarTarefaComoConcluida) {
    return prompt('Digite o número da opção desejada')
}

chamarMenu3();
  
  function editarTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
      const novoTitulo = prompt('Novo título:');
      const novaDescricao = prompt('Nova descrição:');
      const novoStatus = prompt('Novo status:');
      tarefas[indice].titulo = novoTitulo;
      tarefas[indice].descricao = novaDescricao;
      tarefas[indice].status = novoStatus;
      console.log('Tarefa editada com sucesso.');
    } else {
      console.log('Índice de tarefa inválido.');
    }
  }
  
  editarTarefa();

  function chamarMenu4(editarTarefa) {
    return prompt('Digite o número da opção desejada')
}

chamarMenu4();
  
  function excluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
      tarefas.splice(indice, 1);
      console.log('Tarefa excluída com sucesso.');
    } else {
      console.log('Índice de tarefa inválido.');
    }
  }
  
  excluirTarefa();

  function chamarMenu5(excluirTarefa) {
    return prompt('Digite o número da opção desejada')
}

chamarMenu5();


    


  if (opcao1 === adicionarTarefa()) {
  } else if (opcao2 === verTodasTarefas()) {
  } else if (opcao3 === marcarTarefaComoConcluida()) { 
  } else if (opcao4 === editarTarefa()) {
  } else if (opcao5 === excluirTarefa()) {
  } else if (opcao6 === opcao6()) {
  }

 else {
    console.log('Opção inválida. Tente novamente.');
  }
