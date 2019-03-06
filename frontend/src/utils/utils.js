export default {
    
    getAccentIndex(word) {
        if(!word) return 0;
        const accents = ["Á","É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú"];
        for(let i = 0; i < word.length; i++) 
            if(accents.indexOf(word[i]) !== -1) return i;
        
        return -1;
    },
    
    removeAccent(word) {
        if(!word) return 0;
        const vocals = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
        const accents = ["Á","É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú"];
        for(let i = 0; i < accents.length; i++) 
            if(word.indexOf(accents[i]) !== -1)
                return word.replace(accents[i], vocals[i]);
        
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