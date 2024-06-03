const dailyAlbumRecContainer = document.getElementById('daily-album-rec');
    const albumData = [
      {
        image: './media/station.jpg',
        title: 'Station to Station',
        artist: 'David Bowie',
        spotifyLink: 'https://open.spotify.com/album/0MWrKayUshRuT8maG4ZAOU?si=fILYno_mQDCJ6dseIAXOvw'
      },
      {
        image: './media/Michael_Jackson_-_Bad.png',
        title: 'Bad',
        artist: 'Michael Jackson',
        spotifyLink: 'https://open.spotify.com/album/3Us57CjssWnHjTUIXBuIeH?si=vLBxiKG6SQaz5obR6y4TZw'
      },
      {
        image: './media/Juice_Wrld_-_Legends_Never_Die.png',
        title: 'Legends Never Die',
        artist: 'Juice Wrld',
        spotifyLink: 'https://open.spotify.com/album/6n9DKpOxwifT5hOXtgLZSL?si=H67YroZ-SUSwyG94ZUV21g'
      },
      {
        image: './media/aquemini.jpg',
        title: 'Aquemini',
        artist: 'Outkast',
        spotifyLink: 'https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28?si=OQZhcOa1SzybimQ8YItztQ'
      },
      {
        image: './media/appetite.webp',
        title: 'Appetite For Destruction',
        artist: 'Guns N\' Roses',
        spotifyLink: 'https://open.spotify.com/album/28yHV3Gdg30AiB8h8em1eW'
      },
      {
        image: './media/back_to_black.png',
        title: 'Back To Black',
        artist: 'Amy Winehouse',
        spotifyLink: 'https://open.spotify.com/album/097eYvf9NKjFnv4xA9s2oV'
      },
      {
        image: './media/bitches_brew.jpg',
        title: 'Bitches Brew',
        artist: 'Miles Davis',
        spotifyLink: 'https://open.spotify.com/album/3Q0zkOZEOC855ErOOJ1AdO?si=TNMcIMlmSheBSVf_nTrDEQ'
      },
      {
        image: './media/crimson.jpeg',
        title: 'In The Court Of The Crimson King',
        artist: 'King Crimson',
        spotifyLink: 'https://open.spotify.com/album/75ol9OP8bJaRqzGimpFHDm'
      },
      {
        image: './media/demon_days.png',
        title: 'Demon Days',
        artist: 'Gorillaz',
        spotifyLink: 'https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT'
      },
      {
        image: './media/drfl.png',
        title: 'Death Race For Love',
        artist: 'Juice WRLD',
        spotifyLink: 'https://open.spotify.com/album/1btu0SV2DOI5HoFsvUd78F'
      },
      {
        image: './media/fat_of_the_land.jpg',
        title: 'The Fat of the Land',
        artist: 'The Prodigy',
        spotifyLink: 'https://open.spotify.com/album/4fdgcEVMdJe0KVgupMNJAP'
      },
      {
        image: './media/redhot.webp',
        title: 'Blood Sugar Sex Magik',
        artist: 'Red Hot Chili Peppers',
        spotifyLink: 'https://open.spotify.com/album/30Perjew8HyGkdSmqguYyg'
      },
      {
        image: './media/wall.jpg',
        title: 'The Wall',
        artist: 'Pink Floyd',
        spotifyLink: 'https://open.spotify.com/album/6WaIQHxEHtZL0RZ62AuY0g'
      },
      {
        image: './media/wutang.jpg',
        title: 'Enter The Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        spotifyLink: 'https://open.spotify.com/album/3tQd5mwBtVyxCoEo4htGAV'
      },
    ];

    const selectedAlbums = new Set();

    function randomDailyAlbumRec() {
      const randomAlbums = [];
      for (let i = 0; i < 3; i++) {
        let randomAlbum;
        do {
          const randomIndex = Math.floor(Math.random() * albumData.length);
          randomAlbum = albumData[randomIndex];
        } while (selectedAlbums.has(randomAlbum));
        selectedAlbums.add(randomAlbum);
        randomAlbums.push(randomAlbum);
      }

      dailyAlbumRecContainer.innerHTML = '';
      randomAlbums.forEach((album) => {
        const albumHTML = `
      <div class="col-lg-4 col-md-4 text-center image-container">
        <img src="${album.image}" alt="${album.title}" title="${album.title}" height="300px" width="300px" class="hover-image meretezes">
        <p>${album.artist} - ${album.title}</p>
        <a href="${album.spotifyLink}" target="_blank"><span class="zene-link hover-text">Hallgasd meg itt!</span></a>
      </div>
    `;
        dailyAlbumRecContainer.innerHTML += albumHTML;
      });
    }

    window.onload = randomDailyAlbumRec;

const newsCarousel = document.querySelector('#carouselExample')



if(window.matchMedia("(min-width:576px)").matches){
  const carousel = new bootstrap.Carousel(carouselExample, {
    interval: false
  });

  var carouselWidth = $('.carousel-inner')[0].scrollWidth;
  var cardWidth=$('.carousel-item').width();
  var scrollPos=0;
  
  $('.carousel-control-next').on('click', function(){
    if(scrollPos<(carouselWidth-(cardWidth*4))){
      console.log('next');
      scrollPos=scrollPos+cardWidth;
      $('.carousel-inner').animate({scrollLeft:scrollPos},600);
    }
  });
  
  $('.carousel-control-prev').on('click', function(){
    if(scrollPos>0){
      console.log('prev');
      scrollPos=scrollPos-cardWidth;
      $('.carousel-inner').animate({scrollLeft:scrollPos},600);
    }
  });
}else{
  $(carouselExample).addClass('slide');
}