// encrypt text using caesar cipher
function caesarCipher(s, k) {
    // s for text
    // k for number
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let index = [];
    let result = [];


    // get Index s from alphabet
    for(let i = 0; i < s.length; i++)
    {
        for(let j = 0; j < alphabet.length; j++)
        {
            if(s[i] == alphabet[j])
            {
                index.push(alphabet.indexOf(alphabet[j]));
                break;
            }
            else if(s[i] === s[i].toUpperCase())
            {
                if(s[i].toLowerCase() == alphabet[j])
                {
                    index.push(alphabet.indexOf(alphabet[j]));
                    break;
                }
                else if(j == alphabet.length - 1)
                {
                    index.push(s[i])
                }
            } 
        }
    }
    
    
    
    // leftRotation array alphabet
    for(let l = 0; l < k; l++)
    {
        let letter = alphabet[0];
        alphabet.push(letter);
        alphabet.shift();
    }
    

    // Match index from array index with array alphabet
    for(let m = 0; m < index.length; m++)
    {
        for(let n = 0; n < alphabet.length; n++)
        {
            if(index[m] == n)
            {
                result.push(alphabet[n])
                break;
            }
            else if(n == alphabet.length - 1)
            {
                result.push(index[m]);
            }
        }
    }
    
    
    // check if there are numbers and uppercase letters 
    for(let o = 0; o < s.length; o++)
    {
        for(let p = 0; p < alphabet.length; p++)
        {
            if(s[o].toLowerCase() == alphabet[p])
            {
                if(s[o] == s[o].toUpperCase())
                {
                    result[o] = result[o].toUpperCase();
                    break;
                }
                break;
            }
            else if(p == alphabet.length -1)
            {
                result[o] = s[o];
            }
        }
    }
    return result.join('');
}
