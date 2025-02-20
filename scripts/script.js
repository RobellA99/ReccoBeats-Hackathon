const sectionEl = document.querySelector(".recommended__section")
const buttonEl = document.querySelector(".recommended__button")
const containerEl = document.querySelector(".recommended__container")
const listEl = document.querySelector(".recommended__list")
const formEl = document.querySelector(".form")



const recomendedTracks = async () => {
    try {
        const { data } = await axios.get(`https://api.reccobeats.com/v1/track/recommendation?size=5&seeds=ec926370-d21b-4640-865e-d2cfd54b3553&danceability=${danceId}&energy=${energyId}&liveness=${liveId}&loudness=${loudId}&valence=${valId}`);


        const dataResponse = data

        const values = data.content;

        values.forEach((value) => {
            const recommendedItems = value.artists[0].name;
            const links = value.artists[0].href



            const listEl = document.createElement("ul")
            listEl.classList.add("recommended__list")
            containerEl.appendChild(listEl)

            const itemEl = document.createElement("li")
            itemEl.classList.add("recommended__item")
            listEl.appendChild(itemEl)

            itemEl.innerText = recommendedItems



        })
    } catch (error) {
        console.log("error");

    }
    // const { data } = await axios.get(`https://api.reccobeats.com/v1/track/recommendation?size=5&seeds=ec926370-d21b-4640-865e-d2cfd54b3553&danceability=${}&energy=${}&liveness=${}&loudness=${}&valence=${}`)


    // const dataResponse = data

    // const values = data.content;

    // values.forEach((value) => {
    //     const recommendedItems = value.artists[0].name;
    //     const links = value.artists[0].href



    //     const listEl = document.createElement("ul")
    //     listEl.classList.add("recommended__list")
    //     containerEl.appendChild(listEl)

    //     const itemEl = document.createElement("li")
    //     itemEl.classList.add("recommended__item")
    //     listEl.appendChild(itemEl)

    //     itemEl.innerText = recommendedItems



    // })
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    recomendedTracks()


})








