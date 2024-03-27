// Données des fichiers audio
var audioData = [
  { title: 'Audio 1', author: 'Author 1', url: 'https://archive.org/download/Sharh_Risala_fi_Adaab/01.mp3' },
  { title: 'Audio 2', author: 'Author 2', url: 'url_audio_2.mp3' },
  { title: 'Audio 3', author: 'Author 3', url: 'url_audio_3.mp3' }
];

// Génération dynamique du tableau HTML
var tableBody = document.querySelector('tbody');
audioData.forEach(audio => {
  var row = document.createElement('tr');
  var titleCell = document.createElement('td');
  titleCell.textContent = audio.title;
  var authorCell = document.createElement('td');
  authorCell.textContent = audio.author;
  var actionCell = document.createElement('td');
  var playButton = document.createElement('button');
  playButton.classList.add('btn', 'btn-link', 'play-btn');
  playButton.innerHTML = '<i class="fas fa-play"></i>';
  playButton.dataset.url = audio.url; // Stockage de l'URL dans l'attribut data
  actionCell.appendChild(playButton);
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
});

// JavaScript code for audio player functionality
document.querySelectorAll('.play-btn').forEach(item => {
  item.addEventListener('click', event => {
    var audioUrl = event.currentTarget.dataset.url;
    // Jouer l'audio correspondant à l'URL
    console.log('Playing audio:', audioUrl);
  });
});
