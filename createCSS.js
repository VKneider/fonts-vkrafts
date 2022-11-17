
function createScript(){
    let result = ``;
    
    let fs = require("fs");
    const testFolder = './fonts/script/';
    let fonts=[];

    fs.readdirSync(testFolder).forEach(file => {
        fonts.push(file)
      });

    
    fonts.forEach(font =>{
        
        font=font.trim(' ')
        let idx= font.indexOf(".")
        let url =font.slice(0,idx)
        result+=(`@font-face {
            src: url('./fonts/script/${font}');
            font-family: ${url};}\n`)
            
        })

    let output = fs.writeFileSync("./outputScript.css", result)

    
    let fileNames = fonts.map(font =>{
        let idx= font.indexOf(".")
        let url =font.slice(0,idx)
        return url
    })

    console.log(fileNames)
}


function createImprenta(){
    let result = ``;
    
    let fs = require("fs");
    const testFolder = './fonts/imprenta/';
    let fonts=[];
    
    fs.readdirSync(testFolder).forEach(file => {
        fonts.push(file)
    });
    
    
    fonts.forEach(font =>{
        
        font=font.trim(' ')
        let idx= font.indexOf(".")
        let url =font.slice(0,idx)
        result+=(`@font-face {
            src: url('./fonts/imprenta/${font}');
            font-family: ${url};}\n`)
            
        })
        
        let output = fs.writeFileSync("./outputImprenta.css", result)
        
        
        let fileNames = fonts.map(font =>{
            let idx= font.indexOf(".")
            let url =font.slice(0,idx)
            return url
        })
        
        console.log(fileNames)
    }
    
    
    createScript();
    createImprenta();