let person = JSON.parse(localStorage.getItem('person')) || [];

/*

data format received:-
data --> 0(obj)

[{…}]
0:
birth_year: "41.9BBY"
created: "2014-12-10T16:20:44.310000Z"
edited: "2014-12-20T21:17:50.327000Z"
eye_color: "blue"
films: (3) ['https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/']
gender: "male"
hair_color: "blond"
height: "188"
homeworld: "https://swapi.dev/api/planets/1/"
mass: "84"
name: "Anakin Skywalker"
skin_color: "fair"
species: []
starships: (3) ['https://swapi.dev/api/starships/39/', 'https://swapi.dev/api/starships/59/', 'https://swapi.dev/api/starships/65/']
url: "https://swapi.dev/api/people/11/"
vehicles: (2) ['https://swapi.dev/api/vehicles/44/', 'https://swapi.dev/api/vehicles/46/']

*/

person.forEach(el=>{
  let name = document.querySelector("h1");
  name.innerText = el.name;

  let birthYear = document.querySelector("#bY");
  birthYear.innerText = `Birth Year: ${el.birth_year}`;

  let gender = document.querySelector("#gN");
  gender.innerText = `Gender: ${el.gender}`;

  let height = document.querySelector("#heI");
  height.innerText = `Height: ${el.height}`;

  let eyeColor = document.querySelector('#eC');
  eyeColor.innerText = `Eye Color: ${el.eye_color}`;

  let mass = document.querySelector('#mS');
  mass.innerText = `Mass: ${el.mass}`;

  let hairColor = document.querySelector("#hC");
  hairColor.innerText = `Hair Color: ${el.hair_color}`;
});

// video play and pause control:
let video = document.getElementById("bgVideo");
let play = document.getElementById("music-button");
play.addEventListener("click", myFunction);

function myFunction() {
  if (video.paused) {
    video.play();
    document.getElementById('play-button').style.display = "none";
    document.getElementById('pause-button').style.display = 'block';
  } else {
    video.pause();
    document.getElementById('play-button').style.display = "block";
    document.getElementById('pause-button').style.display = "none";
  }
}