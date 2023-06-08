import { exec as execCb } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';

const exec = promisify(execCb);

const target = process.argv[2];

const command = `python3 ${target}`;

const generated = [] as Array<{ case: string; sol: string }>;

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTestcase() {
  return `${randInt(1, 69)} ${randInt(1, 69)} ${randInt(1, 69)}`;
}

while (generated.length < 100) {
  const testcase = getTestcase();

  try {
    const { stdout } = await exec(`echo ${testcase} | ${command}`, {
      timeout: 100,
    });

    generated.push({ case: testcase, sol: stdout.trim() });
    console.log(`Finished Test Case #${generated.length}`);
  } catch (err) {
    console.log('Broken Testcase, trying again...');
  }
}

function exp(s: string) {
  return 'export default `' + s + '`;\n';
}

await fs.writeFile(
  target.replace('.py', '.in.ts'),
  exp(generated.map((g) => g.case).join('\n'))
);

await fs.writeFile(
  target.replace('.py', '.out.ts'),
  exp(generated.map((g) => g.sol).join('\n'))
);
