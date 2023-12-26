function solution(letter) {
  morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  }
    
    const moresWord = letter.split(' ');
    let result = '';
    
    for(let i = 0; i < moresWord.length; i++){
        if(morse[moresWord[i]]){
            result += morse[moresWord[i]]
        }
    }
    
    return result;
}