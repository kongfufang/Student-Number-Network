window.onload = function () {
	function topchange() {
		let current_index = 0
		let timer = setInterval(autoChange, 3000)
		const button_li = document.querySelector('.button').querySelectorAll('li')
		const img_li = document.querySelector('.banner_pic').querySelectorAll('li')
		for (let i = 0; i < button_li.length; i++) {
			button_li[i].onmouseover = function () {
				if (timer) {
					clearInterval(timer)
				}
				for (let j = 0; j < button_li.length; j++) {
					if (button_li[j] == this) {
						current_index = j
						button_li[j].className = "current"
						img_li[j].className = "current"
					}
					else {
						button_li[j].className = "btn"
						img_li[j].className = "pic"
					}
				}
			}
			button_li[i].onmouseout = function () {
				timer = setInterval(autoChange, 3000)
			}
		}
		function autoChange() {
			++current_index
			if (current_index == button_li.length) {
				current_index = 0
			}
			for (let i = 0; i < button_li.length; i++) {
				if (i == current_index) {
					button_li[i].className = "current"
					img_li[i].className = "current"
				}
				else {
					button_li[i].className = "btn"
					img_li[i].className = "pic"
				}
			}
		}
	}
	topchange()
	function school() {
		let speed = 50
		const img_box = document.querySelector('.img_box')
		img_box.innerHTML += img_box.innerHTML
		const span = img_box.querySelectorAll('span')
		let timer = setInterval(rolling, speed)
		img_box.onmouseover = function () {
			clearInterval(timer)
		}
		img_box.onmouseout = function () {
			timer = setInterval(rolling, speed)
		}
		function rolling() {
			if (img_box.scrollLeft > span[0].offsetWidth) {
				img_box.scrollLeft = 0
			}
			else {
				++img_box.scrollLeft
			}
		}

	}
	school()
	function tableChange() {
		const li_all = document.querySelector('.step').querySelectorAll('li')
		const img_all = document.querySelector('.English .img').querySelectorAll('span')
		let current_index = 0
		let timer = setInterval(autoChange, 3000)
		for (let i = 0; i < li_all.length; i++) {
			li_all[i].onmouseover = function () {
				if (timer) {
					clearInterval(timer)
				}
				for (let j = 0; j < li_all.length; j++) {
					if (li_all[j] == this) {
						img_all[j].className = "sp"
						current_index = j
					}
					else {
						img_all[j].className = ""
					}
				}
			}
			li_all[i].onmouseout = function () {
				timer = setInterval(autoChange, 3000)
			}
		}
		function autoChange() {
			++current_index
			if (current_index == li_all.length) {
				current_index = 0
			}
			for (let i = 0; i < li_all.length; i++) {
				img_all[i].className = ""
			}
			img_all[current_index].className = 'sp'
		}

	}
	tableChange()
}