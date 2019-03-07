const utils = {

    hasAccent: letter => {
        switch(letter.charCodeAt(0)) {
            case 193:
            case 201:
            case 205:
            case 211:
            case 218:
            case 225:
            case 233:
            case 237:
            case 243: 
            case 250:
                return true;
            default: 
                return false;
        }
    },

    getLetterUnaccentedCounterpart: letter => {
        switch(letter.charCodeAt(0)) {
            case 65:
                return String.fromCharCode(193);
            case 69:
            case 73:
            case 79:
            case 85:
            case 97:
            case 101:
            case 105:
            case 111:
            case 117:
                break;
            default: 
                return null;

        }
    },

    toggleAccent: (letter) => {
        if(this.hasAccent(letter)) {
            
        }
    },
    
    getAccentIndex(word) {
        if(!word) return null;
        for(let i = 0; i < word.length; i++) 
            if(this.hasAccent(word[i])) 
                return i;
        
        return -1;
    },

    removeAccent(word) {
        if(!word) return null;
        const vocals = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
        for(let i = 0; i < word.length; i++) 
            if(this.hasAccent(word[i]))
                return "abc";
        
        return word;
    },
    
    addAccent(letter) {
        console.log(letter);
        console.log(letter.charCodeAt(0));
        const vocals = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
        const accents = ["Á","É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú"];
        let result;
        for(let i = 0; i < vocals.length; i++)
            if(vocals[i] === letter) {
                console.log(vocals[i], letter)
                result = accents[i];
            }
        return result || letter;
    }
}

export default utils;