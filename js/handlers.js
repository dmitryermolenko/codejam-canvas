var matrixWrapper = document.querySelector('.matrix');
var codwarsWrapper = document.querySelector('.codwars');
var rollingscopesWrapper = document.querySelector('.rollingscopes');
var matrixRadio = document.querySelector('input[value=matrix]');
var codwarsRadio = document.querySelector('input[value=codwars');
var rollingscopesRadio = document.querySelector('input[value=rollingscopes]');

matrixRadio.addEventListener('click', function () {
   matrixWrapper.classList.remove('hidden');
   codwarsWrapper.classList.add('hidden');
   rollingscopesWrapper.classList.add('hidden');

});

codwarsRadio.addEventListener('click', function () {
	codwarsWrapper.classList.remove('hidden');
	matrixWrapper.classList.add('hidden');
	rollingscopesWrapper.classList.add('hidden');
});

rollingscopesRadio.addEventListener('click', function () {
   rollingscopesWrapper.classList.remove('hidden');
   matrixWrapper.classList.add('hidden');
   codwarsWrapper.classList.add('hidden');
});
