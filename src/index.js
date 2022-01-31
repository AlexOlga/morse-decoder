const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const dash='-';
    const dot='.';
    let arr=[];
    let newArr=[];
    let n=0;
    //преобразуем строку в массив
 for (let i=0; i < expr.length; i=i+10 )   {
     arr[n]= expr.slice(i, i+10);
     n++;     
 }
 // делаем массив вида -.
 newArr=arr.map((item)=>{
let s='';
for (let i=0; i < item.length; i=i+2 )   {
    if (item.slice(i, i+2)=='**') {return ' '}
    else if (item.slice(i, i+2)=='11') {s=s+ '-'}
    else if (item.slice(i, i+2)=='10') {s=s+ '.'}       
}
return s;
});
let result='';
newArr.forEach((item)=>{
if (item==' ') {result=result+' '; }
else {result=result+MORSE_TABLE[item] }
console.log('item',item);
console.log(MORSE_TABLE[item]);}
);
 return result;   
}

module.exports = {
    decode
}