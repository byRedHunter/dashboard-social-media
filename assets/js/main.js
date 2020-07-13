const $toggle = document.querySelector('#toggle')
const $toggleButton = document.querySelector('#toggle-btn')
const $body = document.querySelector('body')

const $toggleText = document.querySelector('.toggle-text')
let text = 'Dark Mode'

function darkLightMode() {
	if (text === 'Dark Mode') {
		text = 'Light Mode'
	} else {
		text = 'Dark Mode'
	}

	$toggle.classList.toggle('right')
	$body.classList.toggle('lightMode')

	$toggleText.textContent = text
}

$toggle.addEventListener('click', () => {
	darkLightMode()
})
