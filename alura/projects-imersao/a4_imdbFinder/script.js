const btn = document.getElementById("btn");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "204f43f6f3mshd620f159e60f07fp18a161jsnf99147e33bfe",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

const url = "https://imdb8.p.rapidapi.com/auto-complete?q=";

let findIt = () => {
  document.querySelector(".movies").innerHTML = "";
  autoComplete = document.getElementById("autoComplete").value;

  const finalUrl = url + autoComplete.toLowerCase();
  fetch(finalUrl, options)
    .then((response) => response.json())
    .then((data) => {
      const list = data.d;
      list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2>`;
        document.querySelector(".movies").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
