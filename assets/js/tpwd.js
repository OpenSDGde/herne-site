{
  let items = document.querySelectorAll('#carouselLowerNavigation .carousel-item')

  items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
    }
  })

  // cards carousel on frontpage
  // let width = screen.width;
  let cards = document.querySelectorAll('#carouselCard .carousel-item')
  let minSlide = 3

  // if (width >= 1200) {
  // 	minSlide = 3;
  // } else if (width >= 768 && width < 1200 ) {
  // 	minSlide = 2;
  // } else {
  // 	minSlide = 1;
  // }

  cards.forEach((cc) => {
    let next = cc.nextElementSibling
    for (var i = 1; i < minSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = cards[0]
      }
      let cloneChild = next.cloneNode(true)
      cc.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
    }
  })

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeOverlay()
    }
  })

  function closeOverlay() {
    document.getElementById('dynamic-modal').classList.add('hidden');
  }

  function openTab(evt, hf_id) {
    var tabcontent = document.getElementsByClassName('tabcontent')
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }

    var tablinks = document.getElementsByClassName('tablinks')
    for (var j = 0; j < tablinks.length; j++) {
      tablinks[j].className = tablinks[j].className.replace(' active', '')
    }

    document.getElementById(hf_id).style.display = 'block'
    evt.currentTarget.className += ' active'
  }
}
