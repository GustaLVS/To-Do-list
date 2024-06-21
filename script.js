// Adiciona um evento de clique ao botão de adicionar tarefa
document.getElementById('add').addEventListener('click', addTask);

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('txt'); // Obtém o campo de entrada de texto
    const taskText = taskInput.value.trim(); // Obtém o valor do campo de entrada e remove espaços em branco

    if (taskText !== '') {
        const taskContainer = document.getElementById('taskContainer'); // Obtém o contêiner de tarefas

        const taskDiv = document.createElement('div'); // Cria um novo elemento de tarefa
        taskDiv.classList.add('list'); // Adiciona a classe 'list' ao elemento

        const taskP = document.createElement('p'); // Cria um elemento de parágrafo para a tarefa
        taskP.textContent = taskText; // Define o texto da tarefa
        taskDiv.appendChild(taskP); // Adiciona o parágrafo à div da tarefa

        const checkButton = document.createElement('button'); // Cria um botão de conclusão
        checkButton.classList.add('check'); // Adiciona a classe 'check' ao botão
        checkButton.innerHTML = '<i class="bi bi-check-circle-fill"></i>'; // Define o ícone do botão
        checkButton.addEventListener('click', () => {
            // Alterna o estilo de decoração de texto e a classe 'completed' ao clicar
            if (taskP.style.textDecoration === 'line-through') {
                taskP.style.textDecoration = 'none';
                checkButton.classList.remove('completed');
            } else {
                taskP.style.textDecoration = 'line-through';
                checkButton.classList.add('completed');
            }
        });
        taskDiv.appendChild(checkButton); // Adiciona o botão de conclusão à div da tarefa

        const editButton = document.createElement('button'); // Cria um botão de edição
        editButton.classList.add('edit'); // Adiciona a classe 'edit' ao botão
        editButton.innerHTML = '<i class="bi bi-pencil-fill"></i>'; // Define o ícone do botão
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edite sua tarefa', taskP.textContent); // Solicita o novo texto da tarefa
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskP.textContent = newTaskText.trim(); // Atualiza o texto da tarefa
            }
        });
        taskDiv.appendChild(editButton); // Adiciona o botão de edição à div da tarefa

        const deleteButton = document.createElement('button'); // Cria um botão de exclusão
        deleteButton.classList.add('delete'); // Adiciona a classe 'delete' ao botão
        deleteButton.innerHTML = '<i class="bi bi-trash-fill"></i>'; // Define o ícone do botão
        deleteButton.addEventListener('click', () => {
            taskContainer.removeChild(taskDiv); // Remove a tarefa do contêiner
            adjustContainerHeight(); // Ajusta a altura do contêiner principal
        });
        taskDiv.appendChild(deleteButton); // Adiciona o botão de exclusão à div da tarefa

        taskContainer.appendChild(taskDiv); // Adiciona a nova tarefa ao contêiner de tarefas
        taskInput.value = ''; // Limpa o campo de entrada de texto
        adjustContainerHeight(); // Ajusta a altura do contêiner principal
    }
}

// Função para ajustar a altura do contêiner principal
function adjustContainerHeight() {
    const taskContainer = document.getElementById('taskContainer'); // Obtém o contêiner de tarefas
    const mainContainer = document.getElementById('mainContainer'); // Obtém o contêiner principal

    const taskCount = taskContainer.children.length; // Obtém a quantidade de tarefas

    // Altura base inicial de 300px e começa a aumentar quando há mais de 4 tarefas
    const baseHeight = 300;
    const additionalHeightPerTask = 50;
    const maxTasksBeforeIncrease = 4; // Número máximo de tarefas antes de começar a aumentar

    if (taskCount > maxTasksBeforeIncrease) {
        mainContainer.style.height = `${baseHeight + (taskCount - maxTasksBeforeIncrease) * additionalHeightPerTask}px`;
    } else {
        mainContainer.style.height = `${baseHeight}px`;
    }
}
