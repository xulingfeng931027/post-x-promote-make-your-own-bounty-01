import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const sourceFile = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot', 'POST.json');
const outputFolder = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const outputFile = resolve(outputFolder, 'POST.json');

try {
  mkdirSync(outputFolder, { recursive: true });
  copyFileSync(sourceFile, outputFile);
} catch (error) {
  console.error(`Could not copy the X post file to ${outputFile}: ${(error as Error).message}`);
  process.exitCode = 1;
}
