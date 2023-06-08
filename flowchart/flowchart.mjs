// @ts-check

import { exec as execCb } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execCb);

const target = process.argv[2];

const { stdout } = await exec(`python3 -m pyflowchart ${target}`);

let entrypoint = '';
let endpoint = '';

const processed = stdout
  .split('\n')
  .map((line) => {
    if (line.includes('a, b, c')) {
      entrypoint = line.split('=>')[0];
      return entrypoint + '=>inputoutput: a, b, c';
    }

    if (line.includes('print(')) {
      endpoint = line.split('=>')[0];
      return (
        endpoint + '=>inputoutput: ' + line.split('print(')[1].slice(1, -2)
      );
    }

    if (line.includes('if (')) {
      return line.replace('if (', '').slice(0, -1);
    }

    if (line.includes('while (')) {
      return line.replace('while (', '').slice(0, -1);
    }

    return line;
  })
  .join('\n');

const [part1, part2] = processed.split('\n\n');

console.log(
  `st=>start: Start\ne=>end: End\n${part1}\n\nst->${entrypoint}\n\n${part2}\n\n${endpoint}->e`
);
