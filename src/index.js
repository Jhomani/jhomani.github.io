const skills = [ 
	{ porsent: 90, name: 'HTML', colors: ['#42bd30', '#e6e21f'] },
	{ porsent: 70, name: 'CSS', colors: ['#300dd7', '#21cddf']  },
	{ porsent: 80, name: 'Vue js', colors: ['#f0f', '#0ff']  },
	{ porsent: 60, name: 'React js', colors: ['#7d79ff', '#7d00c4']  },
	{ porsent: 60, name: 'Laravel', colors: ['#d90c92', '#7d00c4']  },
	{ porsent: 50, name: 'Node js', colors: ['#b52525', '#e6e21f']  },
];

const language = [ 
	{ porsent: 80, name: 'Ingles(Lectura)', colors: ['#f0f', '#0ff']  },
	{ porsent: 80, name: 'Ingles(Escrituta)', colors: ['#42bd30', '#e6e21f'] },
	{ porsent: 60, name: 'Ingles(Habla)', colors: ['#300dd7', '#21cddf']  },
];

const projects = [ 
	{ 
		image: 'https://i.imgur.com/0ZjmfvG.png?1', 
		name: 'Video Collection', 
		description:'Desrrollando min conocimientos de Reactjs', 
		tecnologic: ['Reactjs'], 
		colors: ['#41aecc'],  
		action: ["https://jhomani-videos.herokuapp.com", 'https://github.com/Jhomani/reactProject']
	},
	{ 
		image: 'https://i.imgur.com/9hJ4bdD.png',
		name: "Quiz Online",
		description:'Desarrolando mis conocimientos en Vuejs',  
		tecnologic: ['Vuejs'], 
		colors: ['#2ba26c'],
		action: ["https://quiz-jhomani.herokuapp.com/", "https://github.com/Jhomani/quiz"]
  },
	{ 
		image: 'https://i.imgur.com/PdiHKh8.png', 
		name: 'Simon Say', 
		description: 'Dearrollando mis conocimientos de Javascript sin framework', 
		tecnologic: ['Javascript'], 
		colors: ['#e8e400'],
		action: ["https://jhomani.github.io/simon-says/", "https://github.com/Jhomani/simon-says"]
  },
	{ 
		image: 'https://i.imgur.com/HNmXxdV.png', 
		name: 'Adop Pets', 
		description: 'Adquiri conocimientos de basicos Vuejs', 
		tecnologic: ['Vuejs'], 
		colors: ['#2ba26c'],
		action: ["https://adopt-pets-jho.herokuapp.com/", "https://github.com/Jhomani/adopt-pets"]
  },
	{ 
		image: 'https://i.imgur.com/WIbg7q6.png', 
		name: "Admin Panel", 
		description: 'Adquiri conocimientos de mas profundos de Laravel y Vuejs', 
		tecnologic: ['Laravel', 'Vuejs'], 
		colors: ['#ff2d20', '#2ba26c'],
		action: ["https://jhomani-videos.herokuapp.com", "https://github.com/Jhomani/admin-panel"]
  },
	{ 
		image: 'https://i.imgur.com/rGV0Rtu.png',
		name: 'Platzi Conf', 
		description:'Adquiri conocimientos basicos de Reactjs', 
		tecnologic: ['Reactjs'], 
		colors: ['#41aecc'], 
		action: [ "https://jhomani-video.herokuapp.com", "https://github.com/Jhomani/ReactBasic"]
	},
]

const _skills = document.getElementById('skills');

for(let skill of skills) {
	_skills.innerHTML  += 
	`
		<div class="m-3 col-12 col-sm-5">
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


const _projects = document.getElementById('projects')
for(let project of projects) {
	_projects.innerHTML += `
		<div class="projects-cart px-2 pb-3 m-3 mt-5">
			<div class=" position-relative">
				<img 
					src="${project.image}" 
					width="260px" 
					alt="img"
					class="rounded"
					style="margin-top: -15px;"
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
				<a href="${project.action[0]}" target="_blank" class="btn btn-jhomani btn-sm">Probarlo</a>
				<a href="${project.action[1]}" target="_blank" class="btn btn-jhomani-repo btn-sm ml-3">Repositorio</a>
			</div>
		</div>
	`
}

const _language = document.getElementById('language');

for(let skill of language) {
	_language.innerHTML  += 
	`
		<div class="m-3 col-12">
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


function openSidebar () {
	const side = document.getElementsByClassName('sidebar')
	side[0].style = 'display: block'
	document.getElementById('overlay').classList.add('overlay')
}

function closeSidebar () {
	const side = document.getElementsByClassName('sidebar')
	side[0].style = 'display: none'
	document.getElementById('overlay').classList.remove('overlay')
}


window.onclick = (e) => {
	if(e.target == document.getElementById('overlay')){
		const side = document.getElementsByClassName('sidebar')
		side[0].style = 'display: none'
		document.getElementById('overlay').classList.remove('overlay')
	}
}
