const tarefas = [];

function tarefa(titulo, descricao) {
  return {
    titulo: titulo,
    descricao: descricao,
    status: 'pendente'
  };
}

function adicionarTarefa() {
  const titulo = prompt('Digite o título da tarefa:');
  const descricao = prompt('Digite a descrição da tarefa:');
  const novaTarefa = tarefa(titulo, descricao);
  tarefas.push(novaTarefa);
  console.log('Tarefa adicionada com sucesso!');
}

function verTodasTarefas() {
  console.log('Lista de Tarefas:');
  tarefas.forEach((tarefa, index) => {
    console.log(`Tarefa ${index + 1}:`);
    console.log(`Título: ${tarefa.titulo}`);
    console.log(`Descrição: ${tarefa.descricao}`);
    console.log(`Status: ${tarefa.status}`);
    console.log('---');
  });
}

function marcarTarefaComoConcluida() {
  const indice = parseInt(prompt('Digite o índice da tarefa a ser marcada como concluída:'));
  if (indice >= 0 && indice < tarefas.length) {
    tarefas[indice].status = 'concluída';
    console.log('Tarefa marcada como concluída.');
  } else {
    console.log('Índice de tarefa inválido.');
  }
}

function editarTarefa() {
  const indice = parseInt(prompt('Digite o índice da tarefa a ser editada:'));
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

function excluirTarefa() {
  const indice = parseInt(prompt('Digite o índice da tarefa a ser excluída:'));
  if (indice >= 0 && indice < tarefas.length) {
    tarefas.splice(indice, 1);
    console.log('Tarefa excluída com sucesso.');
  } else {
    console.log('Índice de tarefa inválido.');
  }
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
var menuControle = true;
while (menuControle) {
exibirMenu();
const escolha = parseInt(prompt("Digite o número da opção desejada:"));

switch (escolha) {
  case 1:
    adicionarTarefa();
    break;
  case 2:
    verTodasTarefas();
    break;
  case 3:
    marcarTarefaComoConcluida();
    break;
  case 4:
    editarTarefa();
    break;
  case 5:
    excluirTarefa();
    break;
  case 6:
    console.log('Saindo...');
    menuControle = false;
    break;
  default:
    console.log('Opção inválida. Tente novamente.');
}}
