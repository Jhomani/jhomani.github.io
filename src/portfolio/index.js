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
				<a href="#" class="btn btn-success btn-jhomani btn-sm">Ver detalles...</a>
			</div>
		</div>
	`
}
