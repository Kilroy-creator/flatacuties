const BASE_URL = "http://localhost:3000/characters";

const listEl = document.getElementById("animal-list");
const detailsEl = document.getElementById("animal-details");

// Fetch animals on load
fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    data.forEach(animal => renderAnimalName(animal));
  })
  .catch(err => console.error("Error fetching animals:", err));

function renderAnimalName(animal) {
  const li = document.createElement("li");
  li.textContent = animal.name;
  li.addEventListener("click", () => showDetails(animal));
  listEl.appendChild(li);
}

function showDetails(animal) {
  // Clear and re-render details
  detailsEl.innerHTML = `
    <h3>${animal.name}</h3>
    <img src="${animal.image}" alt="${animal.name}">
    <p>Votes: <span id="vote-count">${animal.votes}</span></p>
    <button id="vote-btn">Add Vote</button>
    <button id="reset-btn">Reset</button>
  `;

  let votes = animal.votes;

  // Attach fresh event listeners
  const voteBtn = document.getElementById("vote-btn");
  const resetBtn = document.getElementById("reset-btn");
  const voteCount = document.getElementById("vote-count");

  voteBtn.addEventListener("click", () => {
    votes++;
    voteCount.textContent = votes;
  });

  resetBtn.addEventListener("click", () => {
    votes = 0;
    voteCount.textContent = votes;
  });
}

// Bonus: Add new animal
document.getElementById("add-animal-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const newAnimal = {
    name: e.target.name.value,
    image: e.target.image.value,
    votes: 0
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAnimal)
  })
    .then(res => res.json())
    .then(data => {
      renderAnimalName(data);
      e.target.reset();
    })
    .catch(err => console.error("Error adding animal:", err));
});
