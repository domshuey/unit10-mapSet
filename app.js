//qq1
new Set([1,1,2,2,3,4]);
//{1,2,3,4}

//qq2
[...new Set("referee")].join("");
// 'ref'

//qq3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//0 {array[3]=> true}
//1: {array[3] => false}

//hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
//---------------accept array---if set of array is smaller than original array --> return true(theres duplicates), if false, no dupes 
const hasDuplicate = (array) => new Set(array).size !== array.length ? true : false;


//vowelCount
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowel(letter){
    const vowels = 'aieuo';
    return vowels.includes(letter);
};

function vowelCount (str){
    //create map to add vowel and it's count
    const newMap = new Map();
    //iterate through string
    for(let letter of str){
        //turn all letters into lowercase in case of uppercase
        const lowLet = letter.toLowerCase();
        //if letter is a vowl
        if(vowel( lowLet ) === true){
            //if there is a key for current vowel
            if(newMap.has( vowel( lowLet) ) ){
                //pull value of vowel key, add 1
                newMap.set( vowel( lowLet ), newMap.get( vowel( lowLet )) +1 )
            }
            //if not, set new pair, give vowel value of 1
        }else {newMap.set( vowel( lowLet ), 1)}
    }
    //return map
    return newMap;
}