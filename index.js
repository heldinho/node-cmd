const os = require("os");
const readline = require("readline");
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
    // console.log(`Saída do comando:\n${stdout}`);

    if (command === "emulator -list-avds") {
      const list_emulator = stdout.split("\n");
      exec(`emulator -avd ${list_emulator[1]}`, (error2, stdout2, stderr2) => {
        if (error2) {
          console.error(`Erro ao executar o comando: ${error2.message}`);
        }
        if (stderr2) {
          console.error(`Erro de saída: ${stderr2}`);
          return;
        }
        return;
      });
    }
  });
}

function init() {
  const platform = process.platform;
  if (list_arm.includes(platform)) {
    cmd("ls");
  } else {
    cmd("cd");
  }
  cmd("adb devices");
  cmd("emulator -list-avds");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(
    [
      "Menu:",
      "1. Opção 1",
      "2. Opção 2",
      "3. Opção 3",
      "0. Sair",
      "Escolha uma opção:",
    ].join("\n")
  );
}

function handleChoice(choice) {
  switch (choice) {
    case "1":
      console.log("Você escolheu a Opção 1");
      console.log("escolheu rodar o emulator");
      break;
    case "2":
      console.log("Você escolheu a Opção 2");
      console.log("Você escolheu a Opção 2");
      console.log("Você escolheu a Opção 2");
      break;
    case "3":
      console.log("Você escolheu a Opção 3");
      console.log("Você escolheu a Opção 3");
      console.log("Você escolheu a Opção 3");
      break;
    case "0":
      console.log("Saindo...");
      console.log("Saindo...");
      console.log("Saindo...");
      rl.close();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      console.log("Opção inválida. Tente novamente.");
      console.log("Opção inválida. Tente novamente.");
      console.log("Opção inválida. Tente novamente.");
  }
  showMenu();
}

showMenu();

rl.on("line", (input) => {
  handleChoice(input);
});

function run() {
  let vRun = true;
  let op = null;

  while (vRun) {
    rl.question(`1: init\n2: Opção 2\n3: Opção 3\nDigite aqui: `, (val) => {
      op = val;
      rl.close();
    });
    switch (op) {
      case 1:
        init();
        break;
      case 2:
        console.log("Opção 2");
        break;
      case 3:
        console.log("Opção 3");
        break;
      case 0:
        vRun = false;
        break;
      default:
        console.log("Opção não encontrada");
        break;
    }
  }
}
