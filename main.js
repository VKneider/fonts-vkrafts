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
  'CatalishHuntera', 'Dean',
  'desktop',         'Fishtail',
  'Floristya',       'Flower',
  'Gragina',         'HalycoonScript',
  'Handy_Script',    'Harland_Roselyn',
  'Hello_Valentina', 'Hunters',
  'Jacky_betty',     'Love_mom',
  'Lulu_Lala',       'Magic_Winter_Script',
  'makinglovem',     'Muthiara',
  'Princeska',       'Sarllina',
  'Shanela-Regular', 'SintaScript',
  'Sometime',        'SouthGate',
  'Sugar_Dream',     'SummerDaisy',
  'The_Athalitta',   'TheBoldStyleRegular'
]


let fontImprenta = [
  'Academic_M54',
  'Acids',
  'Averus',
  'Avigea',
  'Avocado_Cake_Demo',
  'BAUHS93',
  'Better_Together_Caps',
  'Blakecats',
  'Bloomer_DEMO',
  'Bubblegum',
  'Candy_Beans',
  'CFJackStory-Regular',
  'Christmas_Memories_Font_by_Kelik_7NTypes',
  'Chunkey',
  'Cool_Baby_Flat',
  'Curly_Sweety',
  'Cute_and_Cake',
  'Dainty_Catsy',
  'Dakwart_Letter',
  'Dashing_Unicorn',
  'Deliciously_Sans',
  'Droop_Sheep',
  'FARMHOUSE_BOLD',
  'Florida',
  'FRESH_FOOD',
  'Garden_Signboard',
  'Garden_Signboard',
  'Githo',
  'GROBOLD',
  'Hamster_Sweet',
  'HEAVYHEA',
  'Hello_Rainbow_OTF',
  'Hello_Sunshine',
  'ICE_CREAM_SODAWATER_03',
  'ICECREAMSODAWATER02',
  'Kid_Marker',
  'Kongo',
  'La_Foonte_Sans',
  'Magenta_Black',
  'Magic_Winter_Sans',
  'Magical_Snow',
  'Make_Me_Happy',
  'mickey',
  'Minecrafter1',
  'Minecrafter2',
  'oreos',
  'PumpkinCheesecake',
  'Savaneta',
  'Signboard',
  'Squirk',
  'Storelights',
  'SUBSCRIBER-Regular',
  'SugarpunchDEMO',
  'Sunrise_International_Demo'
]



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

}

function generateImprentaDivs(){

  container.innerHTML="";
  
  if(input.value.length==0){inputName="VKrafts"} else {inputName=input.value; }
  
  for(let i=0;i<fontImprenta.length;i++){
      let son = document.createElement('div')

      son.classList.add("centrado")
      son.classList.add("font")
      son.innerHTML=`${i} - ${inputName}`;    
      son.style.fontFamily=fontImprenta[i];    
      container.appendChild(son)
  }

}


generateScriptDivs();















