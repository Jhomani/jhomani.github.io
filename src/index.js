const skills = [ 
	{ porsent: 90, name: 'HTML', colors: ['#42bd30', '#e6e21f'] },
	{ porsent: 70, name: 'CSS', colors: ['#300dd7', '#21cddf']  },
	{ porsent: 80, name: 'Vue js', colors: ['#f0f', '#0ff']  },
	{ porsent: 50, name: 'React js', colors: ['#7d79ff', '#7d00c4']  },
	{ porsent: 60, name: 'Node js', colors: ['#b52525', '#e6e21f']  },
	{ porsent: 60, name: 'Laravel', colors: ['#d90c92', '#7d00c4']  },
];

const projects = [ 
	{ image: 'https://i.imgur.com/rGV0Rtu.png', name: 'Platzi Conf', description:'Adquiri conocimientos basicos de Reactjs', tecnologic: ['Reactjs'], colors: ['#42bd30'] },
	{ image: 'https://i.imgur.com/0ZjmfvG.png?1', name: 'Video Collection', description:'Desrrollando min conocimientos de Reactjs', tecnologic: ['Reactjs'], colors: ['#300dd7', '#21cddf']  },
	{ image: 'https://i.imgur.com/0ZjmfvG.png?1', name: 'Swapni', description:'Desarrolando mis conocimientos de Quasar y Laravel para App Movil',  tecnologic: ['Quasar', 'Laravel'], colors: ['#f0f', '#0ff']  },
	{ image: 'https://i.imgur.com/PdiHKh8.png', name: 'Simon Say', description: 'Dearrollando mis conocimientos de Javascript sin framework', colors: ['#7d79ff', '#7d00c4']  },
	{ image: 'https://i.imgur.com/0ZjmfvG.png?1', name: 'Adop Pets', description: 'Adquiri conocimientos de basicos Vuejs', tecnologic: ['Vuejs'], colors: ['#b52525', '#e6e21f']  },
	{ image: 'https://i.imgur.com/0ZjmfvG.png?1', name: 'WooCommerce', description: 'Adquiri conocimientos de mas profundos de Laravel y Vuejs', tecnologic: ['Laravel', 'Vuejs'], colors: ['#d90c92', '#7d00c4']  },
]

const _skills = document.getElementById('skills');

for(let skill of skills) {
	_skills.innerHTML  += 
	`
		<div class="m-3">
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
				<span class="badge text-bold mt-2" style="background: #0ff">Javascript</span>
				<hr style="border-top-color: #fff2; margin: 10px 0">
				<p class="px-1">${project.description}</p>
			</div>
			<div>
				<button class="btn btn-info btn-sm">Probarlo</button>
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
	console.log(side)
}


window.onclick = (e) => {
	if(e.target == document.getElementById('overlay')){
		const side = document.getElementsByClassName('sidebar')
		side[0].style = 'display: none'
		document.getElementById('overlay').classList.remove('overlay')
	}
}
