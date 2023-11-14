let container = document.querySelector(".container")

//url ka markuu local yahay ayaa la adeegsadaa sidaan
//url ka soo hel page kaan kujiro
let url = window.location.href
console.log(url);

//kalajar linkigaaga
let urlvaribls = url.split("?")
    // console.log(urlvaribls);

//sii kala jar id ga
let exactSurah = urlvaribls[1].split("=") //id ga 2 kadhig oo kalajar

//0:  "ID"
//1: suurah number
console.log(exactSurah);


//create biuldDOM function

let ayah_Counter = 0
const biuldDOM = (ayah, ayahNumber) => {

    //use ayahSplit to cut bisin and ayah
    if (ayah_Counter < 1) {
        let aayahSplit = ayah.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ ")

        container.innerHTML += `<div id='bisin'><a href="#" lang="ar" dir="rtl">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</a></div>`;

        //display ayah
        container.innerHTML += `<div id='aayah' style="padding-bottom:450px"><a href="#" lang="ar" dir="rtl">${aayahSplit[1]}
        <img src="./images/ayah.png" id="ayah-sign"><span id="ayah-number">${ayahNumber}</span></a></div>`;



        console.log(aayahSplit); //kareb ayaad kasta bisinka

    } else { // display other ayah
        container.innerHTML += `<div id='aayah' style="padding-bottom:450px"><a href="#" lang="ar" dir="rtl">${ayah}
        <img src="./images/ayah.png" id="ayah-sign"><span id="ayah-number">${ayahNumber}</span></a></div>`;
    }


    ayah_Counter++
}

//Get surah whe you click suurah name
//URL kaan waxa uu soocelin doonaa surada iyo aayada heeda
const reading = async(num) => {
    let response = await fetch(`http://api.alquran.cloud/v1/surah/${num}`);
    let surah = await response.json()
    console.log(surah);

    //Loop over the return url data
    surah.data.ayahs.forEach(current_surah => {

        biuldDOM(current_surah.text, current_surah.number)
            // console.log(current_surah.text, current_surah.number);
    })
}

reading(exactSurah[1])