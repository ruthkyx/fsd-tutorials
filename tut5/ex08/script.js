function initialize() {
    let text = document.getElementsByClassName('text')[0];
    let words = document.getElementsByClassName('words')[0];
    let characters = document.getElementsByClassName('characters')[0];

    let countChar = 0;
    let countWord = 0;

    text.addEventListener('input', function(){
        const userInput = text.value;
        // /\s/g is a search pattern that searches for whitespaces \s in the string; g is a gloabl search so all whitespaces are replaces instead of just one only
        countChar = userInput.replace(/\s/g,'').length; 
        countWord = userInput.trim().split(/\s+/).length;

        words.textContent = countWord;
        characters.textContent = countChar;
    })
}
initialize();