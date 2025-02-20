const sectionEl = document.querySelector(".recommended__section")
const buttonEl = document.querySelector(".recommended__button")
const containerEl = document.querySelector(".recommended__container")

const formEl = document.querySelector(".form")



const recomendedTracks = async (trackId, danceability) => {
    const { data } = await axios.get(`https://api.reccobeats.com/v1/track/recommendation?size=10&seeds=${trackId}&danceability=${danceability}&energy=0.5&liveness=0.5&loudness=-30&valence=0.5`)
    // const { data } = await axios.get(`../cache/track-recommendation.json`)


    const values = data.content;

    const listEl = document.querySelector("ul")
    listEl.innerHTML = "";



    values.forEach((value) => {
        const recommendedItems = value.artists[0].name;
        const links = value.artists[0].href

        const anchorEl = document.createElement("a")
        anchorEl.classList.add("recommended__link")
        listEl.appendChild(anchorEl)

        const itemEl = document.createElement("li")
        itemEl.classList.add("recommended__item")
        anchorEl.appendChild(itemEl)

        itemEl.innerText = recommendedItems

    })
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const danceability = event.target.dancebility.value;

    const trackId = event.target.trackId.value

    // anchorEl.href = 
    // console.log(danceability);


    recomendedTracks(trackId, danceability)
})








