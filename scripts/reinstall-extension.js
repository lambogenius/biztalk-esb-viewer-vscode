const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const vsixPath = path.join(root, 'artifacts', 'biztalk-esb-viewer.vsix');

function run(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: 'inherit', cwd: root });
}

try {
  run('npm run build');
  run('npx @vscode/vsce package --allow-missing-repository --out artifacts/biztalk-esb-viewer.vsix');

  if (!fs.existsSync(vsixPath)) {
    throw new Error(`VSIX bundle not found at ${vsixPath}`);
  }

  const codeExecutable = process.platform === 'win32' ? 'code.cmd' : 'code';

  try {
    run(`${codeExecutable} --install-extension ${vsixPath} --force`);
  } catch (error) {
    console.warn('VS Code CLI was not available on PATH. Falling back to a direct install hint.');
    console.log(`Install the extension manually with: ${codeExecutable} --install-extension ${vsixPath} --force`);
  }
} catch (error) {
  console.error('Failed to rebuild and reinstall the extension.');
  console.error(error.message);
  process.exit(1);
}
