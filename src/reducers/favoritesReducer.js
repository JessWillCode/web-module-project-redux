


const initialState = {
    favorites: [  {
        id: 1,
        title: "Star Wars",
        director: "George Lucas",
        metascore: 92,
        genre: "Scifi",
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
      },
      {
        id: 2,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        metascore: 92,
        genre: "Fantasy",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
      }],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;