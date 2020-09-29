const projects = [
  { 
    name: "Furcio's Client",
    description: "Este proyecto es la version cliente que lo hicimos con mi equipo de Start Web Consulting, Fue para un Licoreria, mi participacion estaba enfocado en el frontend, pero tambien ayude con algunos detalles en el backend, las tecnologias que usamos fue Vuejs & Quasar que nos facilito el trabajo, en el servidor utilizamos Laravel.",
    galery: [
      "https://i.imgur.com/1N7FLj2.png",
      "https://i.imgur.com/WzfajCL.png",
      "https://i.imgur.com/djLCKvO.png",
      "https://i.imgur.com/QcxvzLO.png",
      "https://i.imgur.com/zpOdgib.png",
      "https://i.imgur.com/nWBziam.png",
    ]
  },
  { 
    name: "onDelivery Driver",
    description: "Este proyecto es la vercion conductor que lo hicimos con mi equipo de Start Web Consulting, Fue para empresa que alberga otras empresas, mi participacion estaba enfocado en el frontend, pero tambien ayude con algunos detalles en el backend, las tecnologias que usamos fue Vuejs & Quasar que nos facilito el trabajo, en el servidor utilizamos Laravel.",
    galery: [
      "https://i.imgur.com/pe7cijk.png",
      "https://i.imgur.com/M8xP52V.png",
      "https://i.imgur.com/59a1VED.png",
      "https://i.imgur.com/59a1VED.png",
      "https://i.imgur.com/i9rUpNt.png",
      "https://i.imgur.com/dXL3V7H.png",
      "https://i.imgur.com/RzirJkD.png"
    ]
  },
  { 
    name: "onDelivary Client",
    description: "Este proyecto es la version Cliente que lo hicimos con mi equipo de Start Web Consulting, Fue para una empresa que recluta otras empresas, mi participacion estaba enfocado en el frontend, pero tambien ayude con algunos detalles en el backend(como en Furcio's), las tecnologias que usamos fue Vuejs & Quasar que nos facilito el trabajo.",
    galery: [
      "https://i.imgur.com/LSO7ahf.png",
      "https://i.imgur.com/FDeHxvy.png",
      "https://i.imgur.com/zEBt48E.png",
      "https://i.imgur.com/qn1OdVJ.png",
      "https://i.imgur.com/25YAT75.png",
      "https://i.imgur.com/7vWfaQf.png",
    ]
  },
  { 
    name: "Furcio's Admin",
    description: "Este proyecto es la version Admin Control que lo hicimos con mi equipo de Start Web Consulting, Fue para un Licoreria, mi participacion estaba enfocado en el frontend, pero tambien ayude con algunos detalles en el backend, las tecnologias que usamos fue Vuejs & Vuetify facilito el trabajo, en el servidor utilizamos Laravel.",
    galery: [
      "https://i.imgur.com/VFPxzrr.png",
      "https://i.imgur.com/JYYljNX.png",
      "https://i.imgur.com/MBLU4Ji.png",
      "https://i.imgur.com/QDsbjGi.png",
      "https://i.imgur.com/u0JcX0h.png",
      "https://i.imgur.com/cHaznUI.png",
    ]
  },
  { 
    name: "Video Collection",
    description: "Este es un proyecto personal que lo hice para mejorar mis conocimientos en Reactjs, es un proyecto que esta enfocado en el frontend, las tecnologias que use fue React & Redux, es un proyecto secillo que no me llevo mucho tiempo, pero aprendi conceptos importantes en el deasarrollo Web.",
    galery: [
      "https://i.imgur.com/eiHvzMh.png",
      "https://i.imgur.com/tcwhfHK.png",
      "https://i.imgur.com/F6ffz01.png",
      "https://i.imgur.com/4As4jYD.png",
    ]
  },
  { 
    name: "Platzi Conf",
    description: "Este es un proyecto personal que lo hice para mejorar mis conocimientos en Reactjs, es un proyecto que esta enfocado en el frontend, las tecnologias que use fue React & Redux, es un proyecto secillo que no me llevo mucho tiempo, pero aprendi conceptos importantes en el deasarrollo Web Ejemplo.- Operacion CRUD.",
    galery: [
      "https://i.imgur.com/Mu5Mqqz.png",
      "https://i.imgur.com/G1kIejG.png",
      "https://i.imgur.com/O5FZlfq.png",
      "https://i.imgur.com/AHk7TUk.png",
    ]
  },
  { 
    name: "Simon Say",
    description: "Este es un proyecto personal donde aprendi los conceptos basicos de Javascript fundamentalmente, ya que esta desarrollado con Vanila JS, lo hice aproximadamente a principos de este año, es un proyecto bastante simple que no me llevo mucho tiempo.",
    galery: [
      "https://i.imgur.com/omD1Jxj.png",
      "https://i.imgur.com/4y8IsqW.png",
      "https://i.imgur.com/9UCHjkN.png",
      "https://i.imgur.com/IajV9sA.png"
    ]
  },
  { 
    name: "Adop Pets",
    description: "Este en otro proyecto personal donde aprendi los conceptos fundamentales al utilizar Vuejs, fue uno de los primeros proyectos que hice con esta teclogia ya que en la empresa en el que trabaja utilizaban esta tecnologia..",
    galery: [
      "https://i.imgur.com/FMYLSbq.png",
      "https://i.imgur.com/VUsbfA7.png",
      "https://i.imgur.com/vaw1FHx.png",
      "https://i.imgur.com/2ZyEntk.png",
    ]
  },
] 


const title = document.getElementById('title');
const galery = document.getElementById('galery');
const description = document.getElementById('description');

const index = localStorage.getItem('id')


title.innerHTML = projects[index].name;
description.innerHTML = projects[index].description;

if(index < 3) {
  galery.style = "height: 365px !important; width:250px"
}

projects[index].galery.forEach( (item, i) => {
  if(projects[index].galery.length === 4) {
    galery.innerHTML += `
      <span class="exception" style="--i:${i + 1};"><img src=${item}></span> 
    `;
    return;
  }

  if(projects[index].galery.length === 3) {
    galery.innerHTML += `
      <span style="--i:${i + 1};"><img src=${item}></span> 
    `;
    return;
  }

  galery.innerHTML += `
    <span style="--i:${i + 1};"><img src=${item}></span> 
  `;
})

