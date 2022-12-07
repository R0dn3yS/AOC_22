const input = Deno.readTextFileSync('../input.txt').split('\n');

const rootDir = '/tmp/aoc';
let curDir = rootDir;
let lastLength = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].startsWith('$')) {
    const query = input[i].slice(2);
    
    const command = query.split(' ')[0];
    const args = query.split(' ')[1];
    
    switch (command) {
      case 'cd': {
        if (args === '/') {
          curDir = rootDir;
          break;
        } else if (args === '..') {
          curDir = curDir.slice(0, lastLength);
          break;
        } else {
          curDir += `/${args}`;
          await Deno.mkdir(curDir, { recursive: true });
          lastLength = curDir.length - args.length - 1;
          break;
        }
      }

      // deno-lint-ignore no-fallthrough
      case 'ls': {
        let ls = true;
        while (ls === true) {
          i++;
          if (i >= input.length) {
            ls = false;
            break;
          } else {
            const line = input[i].split(' ');

            switch (line[0]) {
              case 'dir': {
                Deno.mkdir(`${curDir}/${line[1]}`, { recursive: true });
                break;
              }

              case '$': {
                ls = false;
                break;
              }

              default: {
                Deno.writeTextFileSync(`${curDir}/${line[1]}.tmp`, line[0]);
                break;
              }
            }
          }
        }
      }

      default: {
        // console.log(curDir);
      }
    }
  }
}

async function dirTraversal(dir: string, dirTotal: number): Promise<number> {
  let dirValue = 0;
  for await (const dirEntry of Deno.readDir(dir)) {
    if (dirEntry.isDirectory) {
      dirTotal = await dirTraversal(`${dir}/${dirEntry.name}`, dirTotal);

      for await (const nextDir of Deno.readDir(`${dir}/${dirEntry.name}`)) {
        if (nextDir.isDirectory) {
          try {
            dirValue += parseInt(Deno.readTextFileSync(`${dir}/${dirEntry.name}/total`));
          } catch (_e) {
            // console.error(e);
          }
        }
      }
    } else if (dirEntry.isFile) {
      dirValue += parseInt(Deno.readTextFileSync(`${dir}/${dirEntry.name}`));
    }
  }

  Deno.writeTextFileSync(`${curDir}/total`, dirValue.toString());

  if (dirValue <= 100000) {
    dirTotal += dirValue;
  }

  return(dirTotal);
}

console.log(await dirTraversal(rootDir, 0));
