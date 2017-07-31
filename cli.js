#!/usr/bin/env node
const path = require('path');
require('colors');
const sync = require('./');

const srcDir = process.argv[2];
const destDir = process.argv[3];

function log(args) {
  const destPath = args.relative;
  if (args.type === 'add') {
    console.log(destPath.green);
  } else if (args.type === 'change') {
    console.log(destPath);
  } else {
    console.log(destPath.red);
  }
}

if (srcDir && destDir) {
	sync(path.resolve(srcDir), path.resolve(destDir), { log: log });
} else {
  console.log('Usage: chokdir <srcDir> <destDir>');
}
