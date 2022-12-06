const text = Deno.readTextFileSync('../input.txt');
const str = text.split('');

const charArr: string[] = [];

for (let i = 0; i < 3; i++) {
  charArr.push(str[i]);
}

for (let i = 3; i < str.length; i++) {
  if (!charArr.includes(str[i]) && new Set(charArr).size === charArr.length) {
    console.log(i + 1);
    break;
  } else {
    charArr.shift();
    charArr.push(str[i]);
  }
}