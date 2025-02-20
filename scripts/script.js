const sectionEl = document.querySelector(".recommended__section")
const buttonEl = document.querySelector(".recommended__button")
const containerEl = document.querySelector(".recommended__container")
const listEl = document.querySelector(".recommended__list")



const recomendedTracks = async () => {
    const { data } = await axios.get("https://api.reccobeats.com/v1/track/recommendation?size=5&seeds=ec926370-d21b-4640-865e-d2cfd54b3553")
    const { data1 } = await axios.get("")

    const values = data.content;

    values.forEach((value) => {
        const recommendedItems = value.artists[0].name;
        const links = value.artists[0].href
        console.log(value.artists);


        const listEl = document.createElement("ul")
        listEl.classList.add("recommended__list")
        containerEl.appendChild(listEl)

        const itemEl = document.createElement("li")
        itemEl.classList.add("recommended__item")
        listEl.appendChild(itemEl)

        itemEl.innerText = recommendedItems



    })
}


buttonEl.addEventListener("click", (event) => {
    event.preventDefault()
    recomendedTracks()


})








