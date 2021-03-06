const projects = [ 
	{ 
    id: 0,
		image: 'https://i.imgur.com/zpOdgib.png',
		name: "Furcio's Client", 
		description:'Projecto de Equipo de SWC en el que participe.',  
		tecnologic: ['Reactjs'], 
		colors: ['#41aecc'], 
		action: [ "https://jhomani-video.herokuapp.com", "https://github.com/Jhomani/ReactBasic"]
	},
	{ 
    id: 3,
		image: 'https://i.imgur.com/VFPxzrr.png', 
		name: "Furcio's Admin", 
		description:'Projecto de Equipo de SWC en el que participe.',  
		tecnologic: ['Laravel', 'Vuejs'], 
		colors: ['#ff2d20', '#2ba26c'],
		action: ["https://jhomani-videos.herokuapp.com", "https://github.com/Jhomani/admin-panel"]
  },
	{ 
    id: 1,
		image: 'https://i.imgur.com/59a1VED.png',
		name: 'onDelivery Driver', 
		description:'Projecto de Equipo de SWC en el que participe.',  
		tecnologic: ['Reactjs'], 
		colors: ['#41aecc'], 
		action: [ "https://jhomani-video.herokuapp.com", "https://github.com/Jhomani/ReactBasic"]
	},
	{ 
    id: 2,
		image: 'https://i.imgur.com/FDeHxvy.png',
		name: "onDelivery-Client",
		description:'Projecto de Equipo de SWC en el que participe.',  
		tecnologic: ['Quasar', 'Laravel'], 
		colors: ['blue', '#ff2d20'],
		action: ["https://quiz-jhomani.herokuapp.com/", "https://github.com/Jhomani/quiz"]
  },
	{ 
    id: 4,
		image: 'https://i.imgur.com/0ZjmfvG.png?1', 
		name: 'Video Collection', 
		description:'Desrrollando min conocimientos de Reactjs', 
		tecnologic: ['Reactjs'], 
		colors: ['#41aecc'],  
		action: ["https://jhomani-videos.herokuapp.com", 'https://github.com/Jhomani/reactProject']
	},
	{ 
    id: 6,
		image: 'https://i.imgur.com/PdiHKh8.png', 
		name: 'Simon Say', 
		description: 'Dearrollando mis conocimientos de Javascript sin framework', 
		tecnologic: ['Javascript'], 
		colors: ['#e8e400'],
		action: ["https://jhomani.github.io/simon-says/", "https://github.com/Jhomani/simon-says"]
  },
	{ 
    id: 7,
		image: 'https://i.imgur.com/HNmXxdV.png', 
		name: 'Adop Pets', 
		description: 'Adquiri conocimientos de basicos Vuejs', 
		tecnologic: ['Vuejs'], 
		colors: ['#2ba26c'],
		action: ["https://adopt-pets-jho.herokuapp.com/", "https://github.com/Jhomani/adopt-pets"]
  },
	{ 
    id: 5,
		image: 'https://i.imgur.com/rGV0Rtu.png',
		name: 'Platzi Conf', 
		description:'Adquiri conocimientos basicos de Reactjs', 
		tecnologic: ['Reactjs'], 
		colors: ['#41aecc'], 
		action: [ "https://jhomani-video.herokuapp.com", "https://github.com/Jhomani/ReactBasic"]
	},
]

const skills = [ 
	{ porsent: 90, name: 'HTML & CSS', colors: ['#42bd30', '#e6e21f'] },
	{ porsent: 80, name: 'MySQL', colors: ['#300dd7', '#21cddf']  },
	{ porsent: 80, name: 'Vue js', colors: ['#f0f', '#0ff']  },
	{ porsent: 60, name: 'React js', colors: ['#7d79ff', '#7d00c4']  },
	{ porsent: 60, name: 'PHP & Laravel', colors: ['#d90c92', '#7d00c4']  },
	{ porsent: 50, name: 'Node js', colors: ['#b52525', '#e6e21f']  },
];


const _projects = document.getElementById('projects')
for(let project of projects) {
	_projects.innerHTML += `
		<div class="projects-cart px-2 pb-3 m-3 mt-5">
			<div class=" position-relative">
				<img 
					src="${project.image}" 
          width="260px" 
          height="146px"
					alt="img"
					class="rounded"
					style="margin-top: -15px; object-fit: cover; object-position: top"
				>
				<h5 
					class="position-absolute py-1" 
					style="bottom: -8px; left: 7px; right: 7px; background: rgba(0, 0, 0, .7); font-weight: 700;"
					>${project.name}</h5>
			</div>
			<div style="text-align: start;">
				<span class="badge text-bold mt-2" style="background: ${project.colors[0]}">${project.tecnologic[0]}</span>
				${project.tecnologic[1] 
					? `<span class="badge text-bold mt-2" style="background: ${project.colors[1]}">${project.tecnologic[1]}</span>` 
					: ''
				}
				<hr style="border-top-color: #fff2; margin: 10px 0">
				<p class="px-1">${project.description}</p>
			</div>
			<div>
				<button onclick=openDetails(${project.id}) class="btn-price btn-jhomani btn-sm">Ver detalles...</button>
			</div>
		</div>
	`
}
const _skills = document.getElementById('skills');

for(let skill of skills) {
	_skills.innerHTML  += 
	`
		<div class="col-12 col-sm-6 my-3">
			<h4>${skill.name}</h4>
			<div class="bar-skill">
				<div 
					style="
						position: absolute;
						border-radius: 10px;
						top: 0;
						left: 0;
						height: 100%;
						width: ${skill.porsent}%;
						text-align: center;
						background: linear-gradient(to right, 
							${skill.colors[0]}, ${skill.colors[1]});
					"
				>${skill.porsent}%</div>
			</div>
		</div>
	`
}


function openDetails(id) {
  localStorage.clear();
  localStorage.setItem('id', id);
  window.location = '/src/portfolio/single-project.html'
}
