
function createTexts(){
    let result = ``;
    
    let fs = require("fs");
    const testFolder = './fonts/';
    let fonts=[];

    fs.readdirSync(testFolder).forEach(file => {
        fonts.push(file)
      });

    
    fonts.forEach(font =>{
        
        font=font.trim(' ')
        let idx= font.indexOf(".")
        let url =font.slice(0,idx)
        result+=(`@font-face {
            src: url('./fonts/${font}');
            font-family: ${url};}\n`)
            
        })

    let output = fs.writeFileSync("./output.css", result)

    
    let fileNames = fonts.map(font =>{
        let idx= font.indexOf(".")
        let url =font.slice(0,idx)
        return url
    })

    console.log(fileNames)
}

createTexts()

