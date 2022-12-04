const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

let buffer = 0;
const dict: number[] = [];

for (const line of textByLine) {
  if (line === '') {
    dict.push(buffer);
    buffer = 0;
  } else {
    buffer += parseInt(line);
  }
}

dict.sort((n1, n2) => n1 - n2);
console.log(dict.pop());