// // Javascript for the lower navigation carousel --> scroll prev and next

// source: https://www.codeply.com/p/0CWffz76Q9
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
let cards = document.querySelectorAll('#carouselCard .carousel-item');
let minSlide = 3;

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

function openOverlay(button) {
  // Auslesen der Datatribute
  const title = button.getAttribute('data-title');
  const content = button.getAttribute('data-content');
  const color = button.getAttribute('data-color');
  const hfGoals = button.getAttribute('data-hf-goals');
  const baseUrl = button.getAttribute('data-base-url');

  // Selektieren der Overlay-Elemente
  const overlay = document.getElementById('dynamic-modal');
  const overlayTitle = document.getElementById('modal-title');
  const overlayContent = document.getElementById('modal-content');
  const overlayContainer = document.getElementById('modal-container');

  // Titel setzen
  overlayTitle.innerHTML = title;

  // Zunächst den eigentlichen Content übernehmen
  let overlayHTML = content || '';

  // Wenn Ziele vorhanden sind, HTML für die SDGs anhängen
  if (hfGoals) {
    // Aus "1,2,3" wird ein Array ["1", "2", "3"]
    const goalsArray = hfGoals.split(',');

    // Hier den Block für die SDGs zusammenbauen
    let goalsHTML = `
      <div class="row justify-content-start">
        <div class="col hf-goal-tiles mb-4">
          <div class="hf-subtitle" style="font-size: 1.5rem; margin-top: 4vh;">SDGs zu dem Handlungsfeld</div>
          <div class="flex-grid">
    `;

    goalsArray.forEach(function (goal) {
      goalsHTML += `
        <div>
          <a href="${baseUrl}/${goal}">
            <img 
              src="${baseUrl}/assets/img/goals/de/${goal}.png"
              class="block img-responsive img-hf-goal"
              alt="Handlungsfelder - Goal ${goal}"
              id="goal${goal}"
            />
          </a>
        </div>
      `;
    });

    goalsHTML += `
          </div>
        </div>
      </div>
    `;

    // Content + neue SDGs
    overlayHTML += goalsHTML;
  }

  // Zusammengebautes HTML ins Overlay einfügen
  overlayContent.innerHTML = overlayHTML;

  // Hintergrundfarbe setzen
  overlayContainer.style.backgroundColor = color;

  // Overlay sichtbar machen
  overlay.classList.remove('hidden');
}

function closeOverlay() {
  document.getElementById('dynamic-modal').classList.add('hidden');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeOverlay();
  }
});

function openTab(evt, hf_id) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (var j = 0; j < tablinks.length; j++) {
    tablinks[j].className = tablinks[j].className.replace(" active", "");
  }

  document.getElementById(hf_id).style.display = "block";
  evt.currentTarget.className += " active";
}
