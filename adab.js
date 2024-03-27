// Remplacer ces exemples par vos données réelles
const playlistData = [
    { title: "شرح رسالة فصول في الآداب لابن عقيل", author: "الشيخ خالد المشيقح", url: "https://ia801500.us.archive.org/19/items/Sharh_Risala_fi_Adaab/01.mp3" },
    { title: "SAID", author: "KAMAL", url: "https://ia801500.us.archive.org/19/items/Sharh_Risala_fi_Adaab/01.mp3" },
    { title: "SAMIR", author: "FARID", url: "https://ia801500.us.archive.org/19/items/Sharh_Risala_fi_Adaab/01.mp3" },
  ];
  
  const audioPlayer = document.querySelector('.audio-player');
  const playlistBody = document.getElementById('playlist');
  const searchBar = document.getElementById('search-bar');
  const authorFilter = document.getElementById('author-filter');
  
  // Fonction pour créer une ligne de tableau
  function createPlaylistItem(item) {
    const row = document.createElement('tr');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const playButton = document.createElement('i');
  
    titleCell.textContent = item.title;
    authorCell.textContent = item.author;
    playButton.classList.add('fas', 'fa-play');
  
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(playButton);
  
    // Ajouter un événement click pour jouer l'audio
    row.addEventListener('click', () => {
      const audioElement = audioPlayer.querySelector('audio');
      audioElement.src = item.url;
      audioElement.play();
  
      // Mettre à jour l'affichage du titre et de l'auteur en cours
      const titleEl = audioPlayer.querySelector('.mb-0');
      titleEl.textContent = item.title;
      const authorEl = audioPlayer.querySelector('.text-muted');
      authorEl.textContent = item.author;
    });
  
    return row;
  }
  
  // Remplir la playlist
  playlistData.forEach(item => {
    const row = createPlaylistItem(item);
    playlistBody.appendChild(row);
  });
  
  // Fonction de filtrage par auteur
  function filterPlaylist() {
    const selectedAuthor = authorFilter.value;
    const rows = playlistBody.querySelectorAll('tr');
  
    rows.forEach(row => {
      const authorCell = row.querySelector('td:nth-child(2)');
      const author = authorCell.textContent;
  
      if (selectedAuthor === 'all' || selectedAuthor === author) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  // Fonction de recherche
  function searchPlaylist() {
    const searchTerm = searchBar.value.toLowerCase();
    const rows = playlistBody.querySelectorAll('tr');
  
    rows.forEach(row => {
      const titleCell = row.querySelector('td:nth-child(1)');
      const title = titleCell.textContent.toLowerCase();
  
      if (title.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  // Evénements
  authorFilter.addEventListener('change', filterPlaylist);
  searchBar.addEventListener('keyup', searchPlaylist);
  
  // Initialisation
  filterPlaylist();