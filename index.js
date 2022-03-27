const beyonceHash = {
  hits: [
    { title: 'Bootylicious', group: true, group_name: 'destinysChild', hair: ['straight', 'blonde', 'pink tips'], signature_look: 'fedora with yellow feather', video_theme: 'dressing room dance', best_line: 'Move your body up and down, make your booty touch the ground', fierceness: 7, formation: false, dancers: 20
    },
    { title: 'Single Ladies', group: false, group_name: 'none', hair: ['honey brown', 'half up, half down'], signature_look: 'black bodysuit and legs for days', video_theme: 'single ladies dance', best_line: 'if you like it then you should\'ve put a ring on it', fierceness: 10, formation: true, dancers: 2 
    },
    { title: 'Let Me Upgrade You', group: false, group_name: 'none', hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'], signature_look: 'flapper dress and bodysuit', video_theme: 'decadence, water, gold beads and pearls', best_line: 'I could do for you what Martin did for the people', fierceness: 10, formation: true, dancers: 5 
    },
    { title: 'Sorry', group: false, group_name: 'none', hair: ['braids', 'bun', 'blonde', 'waves', 'bob'], signature_look: 'braided crown with gold bikini top', video_theme: 'party bus and Serena Williams in bodysuit', best_line: 'Boi bye', fierceness: 10, formation: false, dancers: 1 
    },
    { title: 'Say My Name', group: true, group_name: 'destinysChild', hair: ['blonde', 'curly', 'braid', 'pony tail'], signature_look: 'none', video_theme: 'color blocked scenes with group', best_line: 'say my name, say my name', fierceness: 7, formation: true, dancers: 6 
    },
    { title: 'Feeling Myself', group: true, group_name: 'Nicki Minaj featuring Beyonce', hair: ['blonde', 'waves'], signature_look: 'sporty bodysuit', video_theme: 'Coachella music festival', best_line: 'Im felling myself', fierceness: 9, formation: false, dancers: 0 
    }
  ],
  movies: [
    { title: 'Austin Power\'s Goldmember', year: 2002, rating: 5},
    { title: 'Dreamgirls', year: 2006, rating: 7},
    { title: 'Obsessed', year: 2009, rating: 6},
    { title: 'Cadillac Records', year: 2008, rating: 8},
    { title: 'Life is But a Dream', year: 2013, rating: 6},
    { title: 'The Pink Panther', year: 2006, rating: 4},
    { title: 'Epic', year: 2013, rating: 7},
    { title: 'The Fighting Temptations', year: 2003, rating: 5}
  ]
};

// 1. Print all the songs
function printAllSongs(){
  console.log(beyonceHash.hits)
}

// 2. Print all the movies
function printAllMovies(){
  console.log(beyonceHash.movies)
}

// 3. Return an array of all Beyonce's hit song titles
function hitSongTitles() {
  return beyonceHash.hits.map(hit => hit.title)
}

// 4. Return an array of all Beyonce's fierceness ratings
function allFiercenessRatings() {
  return beyonceHash.hits.map(hit => hit.fierceness)
}

// 5. Return all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme
function songsWithBodySuits() {
  return beyonceHash.hits.filter(hit => hit.signature_look.includes("bodysuit") || hit.video_theme.includes("bodysuit"))
}

// 6. Return an array with all of the songs where Beyonce's fierceness is greater than or equal to a given number
function getSongsByFiercenessGTE() {
  return beyonceHash.hits.filter(hit => hit.fierceness >= 10)
}

// 7. Return an array with all of the movies Beyonce made after or during a given year
function getMoviesByDateGTE() {
  return beyonceHash.movies.filter(movie => movie.year >= 2009)
}

// 8. Return all hit songs where Beyonce was in a group
function groupHits() {
  return beyonceHash.hits.filter(hit => hit.group === true)
}

// 9. Return a hit song where Beyonce's hair is blonde
function findBlondeHit() {
  return beyonceHash.hits.filter(hit => hit.hair.includes("blonde"))
}

// 10. Return the hit song "Sorry"
function sorry() {
  return beyonceHash.hits.find(hit => hit.title === "Sorry")
}

// 11. Return a given song
function getSong() {
  return beyonceHash.hits.find(hit => hit.title)
}

// 12. Return all hit songs where Beyonce's fierceness rating is 10
function fiercestHits() {
  return beyonceHash.hits.filter(hit => hit.fierceness === 10)
}

// 13. Return the sum of Beyonce's fierceness value for all of her hit songs
function hitFiercenessSum() {
  return allFiercenessRatings().reduce((sum, totalFierce) => sum + totalFierce)
}

// 14. Return the average fierceness value for all Beyonce's hit songs
function hitFiercenessAverage() {
  return hitFiercenessSum() / beyonceHash.hits.length
}

// 15. Return the sum of Beyonce's rating value for all of her movies
function ratingSum() {
  return beyonceHash.movies.map(movie => movie.rating).reduce((sum, totalRate) => sum + totalRate)
}

// 16. Return the average rating value for all of her movies
function ratingAverage() {
  return ratingSum() / beyonceHash.movies.length
}

// 17. Return the sum of the total number of dancers in all of the hit song videos
function hitDancerSum() {
  return beyonceHash.hits.map(hit => hit.dancers).reduce((sum, totalDancers) => sum + totalDancers)
}

// 18. Return an array of Beyonce's hairstyles without repeats
function uniqueHairstyles() {
  return [...new Set(beyonceHash.hits.map(hit => hit.hair).reduce((array, hair) => array.concat(hair), []))]
}

// 19. Return an object where the properties are song names and the value is an object which contains that song's fierceness and the average fierceness for all songs
function songFiercenessByName() {
  return beyonceHash.hits.map(hit => {
    return {
      songName: hit.title,
      fierceness: hit.fierceness,
      averageFierceness: hitFiercenessAverage()
    }
  })
}

// 20. Return an object where the properties are movie names and the value is an object which contains that movie's rating and the average rating for all movies
function movieRatingsByName() {
  return beyonceHash.movies.map(movie => {
    return {
      movieName: movie.title,
      rating: movie.rating,
      averageRating: ratingAverage() 
    }
  })
}

// 21. Return an object with Beyonce's hairstyles as the keys and a tally of each hairstyle, eg. `{ "blonde": 3, ... }`
function hairStyleFrequency() {
  return uniqueHairstyles().map(hairStyle => {
    const total = beyonceHash.hits.map(hit => hit.hair).flat().filter(total => (total === hairStyle)).length
    return {hairStyle, total}
  }) 
    
}





//Testing 

printAllSongs()
printAllMovies()
console.log(hitSongTitles())
console.log(allFiercenessRatings())
console.log(songsWithBodySuits())
console.log(getSongsByFiercenessGTE())
console.log(getMoviesByDateGTE())
console.log(groupHits())
console.log(findBlondeHit())
console.log(sorry())
console.log(getSong())
console.log(fiercestHits())
console.log(hitFiercenessSum())
console.log(hitFiercenessAverage())
console.log(ratingSum())
console.log(ratingAverage())
console.log(hitDancerSum())
console.log(uniqueHairstyles())
console.log(songFiercenessByName())
console.log(movieRatingsByName())
console.log(hairStyleFrequency())


