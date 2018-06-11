function playKey(e){
		const soundName = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const element = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if(!soundName)
			return;
		soundName.currentTime = 0; //rewind audio to initial state
		soundName.play();
		element.classList.add('playing');
	}

	function removeTransition(e){
		if(e.propertyName !== 'transform')
			return;
		this.classList.remove('playing');
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	window.addEventListener('keydown', playKey);