export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmmount = Math.floor(Math.sqrt(breaks.length));  
    let i = 0;
    for(; i < breaks.length; i += jumpAmmount) {
        if(breaks[i]) {
            break;
        }
    }
    i -= jumpAmmount;
    for(let j = i; j < i + jumpAmmount; j++) {
        if(breaks[j]) {
            return j;
        }
    }
    return -1;
}