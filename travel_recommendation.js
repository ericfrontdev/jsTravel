const apiEndpoint = "./travel_recommendation_api.json"
const input = document.querySelector("#input")
const search = document.querySelector("#search")
const clear = document.querySelector("#clear")

let jsonCountries = [] // This will hold our combined data
let jsonBeaches = []
let jsonTemples = []

// Fetch the JSON data from the server
fetch(apiEndpoint)
  .then((response) => response.json())
  .then((data) => {
    // Combine all arrays into a single array for easier searching
    jsonCountries = data.countries[1].cities
    jsonBeaches = data.beaches
    jsonTemples = data.temples
  })
  .catch((error) => console.error("Error loading the JSON file:", error))

document.getElementById("search").addEventListener("click", function () {
  const searchTerm = document.getElementById("input").value.toLowerCase()
  let filteredData = []
  let reso = []
  // Check if the searchTerm specifically requests books
  if (searchTerm === "countries" || searchTerm === "country") {
    filteredData = jsonCountries // Return all books
    reso = filteredData.map(
      (res) =>
        `
  <div class="card">
    <img class="card-image" src="${res.imageUrl}" />
    <div class="card-text">
      <h3 class="card-name">${res.name}</h3>
      <p class="card-description">${res.description}</p>
    </div>
  </div>
    `
    )
    const resultsContainer = document.getElementById("display-data")
    resultsContainer.innerHTML = reso
    console.log(resultsContainer.innerHTML)
  } else {
    // Perform the usual search across all categories if the searchTerm is not specifically "book" or "books"
    filteredData = []
  }
  if (searchTerm === "beach" || searchTerm === "beaches") {
    filteredData = jsonBeaches // Return all books
    reso = filteredData.map(
      (res) =>
        `
  <div class="card">
    <img class="card-image" src="${res.imageUrl}" />
    <div class="card-text">
      <h3 class="card-name">${res.name}</h3>
      <p class="card-description">${res.description}</p>
    </div>
  </div>
    `
    )
    const resultsContainer = document.getElementById("display-data")
    resultsContainer.innerHTML = reso
    console.log(resultsContainer.innerHTML)
  } else {
    // Perform the usual search across all categories if the searchTerm is not specifically "book" or "books"
    filteredData = []
  }
  if (searchTerm === "temple" || searchTerm === "temples") {
    filteredData = jsonTemples // Return all books
    reso = filteredData.map(
      (res) =>
        `
  <div class="card">
    <img class="card-image" src="${res.imageUrl}" />
    <div class="card-text">
      <h3 class="card-name">${res.name}</h3>
      <p class="card-description">${res.description}</p>
    </div>
  </div>
    `
    )
    const resultsContainer = document.getElementById("display-data")
    resultsContainer.innerHTML = reso
  } else {
    // Perform the usual search across all categories if the searchTerm is not specifically "book" or "books"
    filteredData = []
  }
})

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("display-data").innerHTML = ""
  document.getElementById("input").value = ""
})
