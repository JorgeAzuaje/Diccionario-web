//Tipografias
const arialBtn = document.getElementById('arial');
const helveticaBtn = document.getElementById('helvetica');
const georgiaBtn = document.getElementById('georgia');
const robotpBtn = document.getElementById('robotp');
const verdanaBtn = document.getElementById('verdana');
const body = document.querySelector('body');

arialBtn.addEventListener('click', () => {
  body.style.fontFamily = 'Arial, sans-serif';
});

helveticaBtn.addEventListener('click', () => {
  body.style.fontFamily = 'Helvetica, sans-serif';
});

georgiaBtn.addEventListener('click', () => {
  body.style.fontFamily = 'Georgia, serif';
});

robotpBtn.addEventListener('click', () => {
  body.style.fontFamily = 'Roboto, sans-serif';
});

// //Modo claro, modo oscuro 
const toggleModeBtn = document.getElementById('toggle-mode-btn');
		const cuerpo = document.body;

		function toggleMode() {
			cuerpo.classList.toggle('dark-mode');
			if (cuerpo.classList.contains('dark-mode')) {
				toggleModeBtn.textContent = 'Modo Claro';
			} else {
				toggleModeBtn.textContent = 'Modo Oscuro';
			}
		}

		toggleModeBtn.addEventListener('click', toggleMode);

// Parte de la api
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
const searchBtn = document.querySelector('#search-btn');
const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>';

function renderSearchResult(result) {
  searchResults.innerHTML = '';
  const word = result.word;
  const meanings = result.meanings;


  const wordHeading = document.createElement('h2');
  wordHeading.textContent = word;
  searchResults.appendChild(wordHeading);


  meanings.forEach(meaning => {
    const partOfSpeech = meaning.partOfSpeech;
    const definitions = meaning.definitions;
  

    const partOfSpeechHeading = document.createElement('h3');
    partOfSpeechHeading.textContent = partOfSpeech;
    searchResults.appendChild(partOfSpeechHeading);


    definitions.forEach(definition => {
      const definitionDiv = document.createElement('div');
      definitionDiv.classList.add('definition');
   

      const definitionText = document.createElement('p');
      definitionText.textContent = definition.definition;
      definitionDiv.appendChild(definitionText);

      if (definition.example) {
        const exampleText = document.createElement('p');
        exampleText.textContent
      }
    })
  })
};