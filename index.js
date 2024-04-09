const { exec } = require("child_process");

// Comando que você deseja executar
const command = "dir"; // Exemplo de comando que lista os arquivos e diretórios no diretório atual

// Função para executar o comando
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro de saída: ${stderr}`);
      return;
    }
    console.log(`Saída do comando: ${stdout}`);
  });
}

// Executando o comando
executeCommand(command);
