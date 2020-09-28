// const skills = [ 
// 	{ porsent: 90, name: 'HTML', colors: ['#42bd30', '#e6e21f'] },
// 	{ porsent: 70, name: 'CSS', colors: ['#300dd7', '#21cddf']  },
// 	{ porsent: 80, name: 'Vue js', colors: ['#f0f', '#0ff']  },
// 	{ porsent: 60, name: 'React js', colors: ['#7d79ff', '#7d00c4']  },
// 	{ porsent: 60, name: 'Laravel', colors: ['#d90c92', '#7d00c4']  },
// 	{ porsent: 50, name: 'Node js', colors: ['#b52525', '#e6e21f']  },
// ];

// const language = [ 
// 	{ porsent: 80, name: 'Ingles(Lectura)', colors: ['#f0f', '#0ff']  },
// 	{ porsent: 80, name: 'Ingles(Escrituta)', colors: ['#42bd30', '#e6e21f'] },
// 	{ porsent: 60, name: 'Ingles(Habla)', colors: ['#300dd7', '#21cddf']  },
// ];

// const _skills = document.getElementById('skills');

// for(let skill of skills) {
// 	_skills.innerHTML  += 
// 	`
// 		<div class="col-12 col-sm-6">
// 			<h4>${skill.name}</h4>
// 			<div class="bar-skill">
// 				<div 
// 					style="
// 						position: absolute;
// 						border-radius: 10px;
// 						top: 0;
// 						left: 0;
// 						height: 100%;
// 						width: ${skill.porsent}%;
// 						text-align: center;
// 						background: linear-gradient(to right, 
// 							${skill.colors[0]}, ${skill.colors[1]});
// 					"
// 				>${skill.porsent}%</div>
// 			</div>
// 		</div>
// 	`
// }


// const _language = document.getElementById('language');

// for(let skill of language) {
// 	_language.innerHTML  += 
// 	`
// 		<div class="m-3 col-12">
// 			<h4>${skill.name}</h4>
// 			<div class="bar-skill">
// 				<div 
// 					style="
// 						position: absolute;
// 						border-radius: 10px;
// 						top: 0;
// 						left: 0;
// 						height: 100%;
// 						width: ${skill.porsent}%;
// 						text-align: center;
// 						background: linear-gradient(to right, 
// 							${skill.colors[0]}, ${skill.colors[1]});
// 					"
// 				>${skill.porsent}%</div>
// 			</div>
// 		</div>
// 	`
// }


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

const style = document.getElementsByTagName('style')[0];
// style.innerHTML = `
//   :root { --primary : #0f0 !important }
// `