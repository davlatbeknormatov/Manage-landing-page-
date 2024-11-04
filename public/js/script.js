const btn = document.querySelector('#menu-btn')
const nav = document.querySelector('#menu')

btn.addEventListener('click', e => {
	btn.classList.toggle('open')
	nav.classList.toggle('hidden')
})
