var pages = [
        'https://goblincat.neocities.org/comics',
        'https://goblincat.neocities.org/games',
        'https://goblincat.neocities.org/charadesign',
        'https://goblincat.neocities.org/siteupdates',
        'https://goblincat.neocities.org/bjd',
        'https://goblincat.neocities.org/cosplayandcrafts',
        'https://goblincat.neocities.org/petsites',
        'https://goblincat.neocities.org/graveyard',
        'https://goblincat.neocities.org/bookshelf',
        'https://goblincat.neocities.org/beastfall',
        'https://goblincat.neocities.org/blog/blog',
        'https://goblincat.neocities.org/adopts',
        'https://goblincat.neocities.org/houseofwindows',
        'https://goblincat.neocities.org/unicornfield',
        'https://goblincat.neocities.org/dragonnest',
        'https://goblincat.neocities.org/dollz',
        'https://goblincat.neocities.org/links',
        'https://goblincat.neocities.org/blog/gymleader'
    ];

function randomPage() {
        var x = false;
        
        if (x == false) {
          console.log(location.href);
          var i = parseInt(Math.random() * pages.length);
          if(pages[i] != location.href){
            x= true;
          }
          
        }
      location.href = pages[i];
        
    }

