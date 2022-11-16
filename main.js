let container = document.getElementById('container')

const t = document.querySelector(".toggle");
t.addEventListener("click", () => {
  t.classList.toggle("is-active");
});



const navMenu = document.querySelector(".nav-menu");

t.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    t.setAttribute("aria-label", "Cerrar menú");
  } else {
    t.setAttribute("aria-label", "Abrir menú");
  }
});

let input = document.getElementById('text')
let inputName;



input.addEventListener('input', generateScriptDivs)

let fontScript = [
    'AdorableMommia',  'Andaresta_Demo',
    'Backline',        'CallingHeart',
    'CatalishHuntera', 'Fishtail',
    'Flower',          'HalycoonScript',
    'Harland Roselyn', 'Hello Valentina',
    'Muthiara',        'Sarllina',
    'SintaScript',     'SouthGate',
    'SummerDaisy',     'TheBoldStyleRegular'
]

function generateScriptDivs(){
    container.innerHTML="";
    console.log("x")
    if(input.value.length==0){inputName="VKrafts"} else {inputName=input.value; }
    
    for(let i=0;i<fontScript.length;i++){
        let son = document.createElement('div')

        son.classList.add("centrado")
        son.classList.add("font")
        son.innerHTML=`${i} - ${inputName}`;    
        son.style.fontFamily=fontScript[i];    
        container.appendChild(son)
    }

}

generateScriptDivs()














