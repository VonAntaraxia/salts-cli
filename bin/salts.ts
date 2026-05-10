#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { commandTemplate } from '../src/templates/command.template';

const [,, cmd, name] = process.argv;

const projectRoot = process.cwd();
const targetPath = path.join(projectRoot, 'src/commands');

if ((cmd === 'g' || cmd === 'generate') && name) {
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  const fileTarget = path.join(targetPath, `${name}.ts`);

  if (!fs.existsSync(fileTarget)) {
    fs.writeFileSync(fileTarget, commandTemplate(name));
    console.log(chalk.green('✔ Success:'), `Command ${chalk.bold(name)} created at src/commands/`);
  } else {
    console.log(chalk.red('✖ Error:'), `File ${name}.ts already exists!`);
  }
} else {
  console.log(chalk.cyan.bold('\nSalts CLI - Framework Tooling'));
  console.log('Usage: salts g <command-name>');
}