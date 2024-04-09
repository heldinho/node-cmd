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

init();
