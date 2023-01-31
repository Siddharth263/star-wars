let id;
let delay = 500;
let container = document.querySelector("#search-results");
let border = document.querySelector("#border");
container.style.display = 'none';
border.style.display = 'none';

let person = JSON.parse(localStorage.getItem('person')) || [];

let saveData = (el) => {
  person.push(el);
  localStorage.setItem('person', JSON.stringify(person));
  window.location.href = './showDetails.html';
};


let append = (data, query) => {
  container.style.display = null;
  container.style.cursor = 'pointer';

  border.style.display = null;
  container.innerHTML = null;
  
  data.forEach(el => {
    let name = document.createElement("p");
    name.innerText = el.name;
    name.setAttribute('id','name');

    let birthYear = document.createElement("p");
    birthYear.innerText = el.birth_year;
    birthYear.setAttribute('id', 'bY')

    let gender = document.createElement("p");
    gender.innerText = el.gender;
    gender.setAttribute('id', 'gn')

    let div1 = document.createElement("div");
    div1.append(name, birthYear);

    let div2 = document.createElement("div");
    div2.append(gender)

    let divP = document.createElement("div");
    divP.append(div1, div2);
    divP.setAttribute('id', 'container');

    divP.addEventListener('click', () => {
      saveData(el);
    })

    container.append(divP);
  });
};

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

let getData = async (query) => {

  url = `https://swapi.dev/api/people/?search=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  append(data.results, query);
};

//debouncing:

let debounce = (fn, delay) => {
  let query = document.querySelector("#query").value;
  if(query==='' || query===undefined || query===null){
    container.style.display = 'none';
    border.style.display = 'none';
  }
  else{
    clearTimeout(id);
    id = setTimeout(() => {
      fn(query);
    }, delay)
  }
};

document.querySelector("#query").addEventListener("input", function () {
  debounce(getData, delay);
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