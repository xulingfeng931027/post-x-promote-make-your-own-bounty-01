import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const sourceFile = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot', 'POST.json');
const outputFolder = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const destination = resolve(outputFolder, 'POST.json');

try {
  mkdirSync(outputFolder, { recursive: true });
  copyFileSync(sourceFile, destination);
} catch (cause) {
  console.error(`Unable to write ${destination} from ${sourceFile}.`, (cause as Error).message);
  process.exitCode = 1;
}
