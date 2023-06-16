
// const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke = () => {
//   jokeContainer.classList.remove("fade");
//   fetch(url)
//     .then(data => data.json())
//     // .then(item => console.log(item));
//     .then(item => {
//       jokeContainer.textContent = item.joke;
//       jokeContainer.classList.add("fade");
//     })
//     .catch(error => console.log(error));
// };

// btn.addEventListener("click", getJoke);
// getJoke();

 
  const jokeContainer = document.getElementById("joke");
  const gifContainer = document.querySelector(".wrapper img");
  const btn = document.getElementById("btn");
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  const gifUrl = "https://media.tenor.com/jNcYEscYhwoAAAAC/stuart-bob.gif"; 

  let getJoke = (event) => {
    event.preventDefault();
    jokeContainer.classList.remove("fade");
    gifContainer.src = gifUrl; // Update the src attribute with the new GIF URL
    fetch(url)
      .then(data => data.json())
      .then(item => {
        jokeContainer.textContent = item.joke;
        jokeContainer.classList.add("fade");
      })
      .catch(error => console.log(error));
  };

  btn.addEventListener("click", getJoke);


