const os = require("os");
const { exec } = require("child_process");

const list_arm = ["aix", "darwin", "freebsd", "linux", "openbsd", "sunos"];
const list_win = ["win32"];

function cmd(command) {
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

function init() {
  const platform = process.platform;
  if (list_arm.includes(platform)) {
    cmd("ls");
  } else {
    cmd("cd");
  }
}

init();
