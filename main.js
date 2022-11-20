let container = document.getElementById('container')
let flag= true;

const t = document.querySelector(".toggle");
t.addEventListener("click", () => {
  t.classList.toggle("is-active");
});

let caligrafia = document.getElementById("script")
caligrafia.addEventListener('click', ()=>{
  
  flag=true;
  generateScriptDivs()
})

let imprenta = document.getElementById("imprenta")
imprenta.addEventListener('click',(e) =>{
  
  flag=false;
  generateImprentaDivs();
  

})



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



input.addEventListener('input', ()=>{

  if(flag==true){generateScriptDivs()}else{generateImprentaDivs()}
})

let fontScript = [
  'AdorableMommia',  'Andaresta_Demo',
  'Backline',        'CallingHeart',
  'CatalishHuntera', 'desktop',
  'Fishtail',        'Flower',
  'HalycoonScript',  'Harland Roselyn',
  'Hello Valentina', 'Hunters',
  'Lulu Lala',       'makinglovem',
  'Muthiara',        'Princeska',
  'Sarllina',        'SintaScript',
  'Sometime',        'SouthGate',
  'Sugar Dream',     'SummerDaisy',
  'The Athalitta',   'TheBoldStyleRegular'
]


let fontImprenta = [
  'Academic M54',
  'Acids',
  'Averus',
  'Avigea',
  'Avocado Cake Demo',
  'BAUHS93',
  'Better Together Caps',
  'Blakecats',
  'Bloomer DEMO',
  'Bubblegum',
  'Candy Beans',
  'CFJackStory-Regular',
  'Dashing Unicorn',
  'Florida',
  'FRESH FOOD',
  'GROBOLD',
  'HEAVYHEA',
  'Hello Sunshine',
  'ICE CREAM SODAWATER 02',
  'ICE CREAM SODAWATER 03',
  'Kid Marker',
  'Magical Snow',
  'Make Me Happy',
  'Minecrafter1',
  'Minecrafter2',
  'PumpkinCheesecake',
  'Signboard',
  'Squirk',
  'SUBSCRIBER-Regular',
  'SugarpunchDEMO',
  'Sunrise International Demo'
]

function addEvents(){
  var elements = document.getElementsByClassName('font')

  for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', (e) => { e.preventDefault(); createImage(e) })
  }

}


async function copyToClipBoard(e) {
  e.preventDefault();
  let call = await html2canvas(e.srcElement);
  await call.toBlob(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]))
  alert('hi')
  return true;
}



async function createImage(e) {

  let call = await html2canvas(e.srcElement);
  screenshot = call.toDataURL("image/png");
  var link = document.createElement("a")
  link.download = "fuente-vkrafts";
  link.href = screenshot;
  link.id="hola"
  document.body.appendChild(link)
  link.click();
  document.body.removeChild(link);
  alert("Imagen Descargada")
}

function generateScriptDivs(){
    container.innerHTML="";
    
    if(input.value.length==0){inputName="VKrafts"} else {inputName=input.value; }
    
    for(let i=0;i<fontScript.length;i++){
        let son = document.createElement('div')

        son.classList.add("centrado")
        son.classList.add("font")
        son.innerHTML=`${i} - ${inputName}`;    
        son.style.fontFamily=fontScript[i];    
        container.appendChild(son)
    }
    addEvents()
}

function generateImprentaDivs(){

  container.innerHTML="";
  
  if(input.value.length==0){inputName="VKrafts"} else {inputName=input.value; }
  
  for(let i=0;i<fontImprenta.length;i++){
      let son = document.createElement('div')

      son.classList.add("centrado")
      son.classList.add("font")
      son.id="hi"
      son.innerHTML=`${i} - ${inputName}`;    
      son.style.fontFamily=fontImprenta[i];    
      container.appendChild(son)
  }
  addEvents()
}

generateScriptDivs();

//EVENTOS NUEVOS

