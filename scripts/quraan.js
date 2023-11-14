let container = document.querySelector(".container")
let loader = document.getElementById("loader")




//create a function
const biuldDom = (surahArabic, surahEng, surahNumber) => {
        // add as dynamic
        container.innerHTML += `
    
    <div class="surah-info">
        <div class="surah-names">
            <a href="http://127.0.0.1:5501/Tafsir.html?id=${surahNumber}" id="surah-en">${surahEng}</a>
            <a href="http://127.0.0.1:5501/Tafsir.html?id=${surahNumber}" id="surah-ar">${surahArabic}</a>
        </div>
        <span id="ayah-number">${surahNumber}</span>
    </div>
    `

    }
    //calling api

const getAllSurah = async() => {

    //befor calli api call loader img
    loader.style.display = "block"

    let response = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani")
    let surah = await response.json()
    loader.style.display = "none"
    surah.data.surahs.forEach(surah => {

            // console.log(surah);
            biuldDom(surah.name, surah.englishName, surah.number, )
        })
        // console.log(surah.data.surahs);
        //create a function

}

getAllSurah()

//create searchsuurah function

const searchSurah = (e) => {
    let term = e.target.value.toUpperCase()
    console.log(term);
    //get all suurah names in the (SURAH-INFO)
    let surah_info = document.querySelectorAll(".surah-info")

    //get surah one by one
    surah_info.forEach(surah => {
            //Get surah names by arabic and english
            let SurahENG = surah.querySelector("#surah-en").innerText.toUpperCase()
            let SurahARb = surah.querySelector('#surah-ar').innerText.toUpperCase()
            console.log(SurahENG);

            //search the name of surh
            if (SurahENG.indexOf(term) > -1 || SurahARb.indexOf(term) > -1) {

                surah.style.display = "flex"

            } else { surah.style.display = "none" }
        })
        // console.log(surah_info);

}

//search suurah names

document.addEventListener("input", searchSurah)