const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const div = document.querySelector("div");

for (i = 1; i <= 151; i++){
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    newDiv.innerText = `#${i}`;
    newDiv.appendChild(newImg);
    div.appendChild(newDiv);

}