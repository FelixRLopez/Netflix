/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  const randomNumber = getRandomNumber(0, 2);
  let genre;

  switch (randomNumber) {
    default:
    case 0:
      genre = "drama";
      break;
    case 1:
      genre = "fantasy";
      break;
    case 2:
      genre = "comedy";
      break;
  }

  return genre;
}

let lastRandomShow;

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let randomShow;

  do {
    switch (genre) {
      default:
      case "drama":
        randomShow = dramaShows[getRandomNumber(0, dramaShows.length - 1)];
        break;
      case "fantasy":
        randomShow = fantasyShows[getRandomNumber(0, fantasyShows.length - 1)];
        break;
      case "comedy":
        randomShow = comedyShows[getRandomNumber(0, comedyShows.length - 1)];
        break;
    }
  }
  while (lastRandomShow === randomShow);

  lastRandomShow = randomShow;

  displayShow(randomShow);
}

