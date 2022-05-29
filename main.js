
function getData() {

    let query = document.querySelector("#query").value

    let url = `https://swapi.dev/api/people/?search=${query}`

    // fetch always return a promise
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        // console.log(res.results)
        display(res.results)
    }).catch(function (err) {
        console.log(err)
    })
    

    // make function async for using this syntax 

    // try{
    //     let res = await fetch(url)
    //     let data = await res.json()
    //     display(data.results)
    // }
    // catch(err){
    //     console.log(err)
    // }

  


}

let id;

function display(data) {

    let result = document.querySelector("#results")
    result.innerHTML = null

    data.forEach(function (elem) {
        let result = document.querySelector("#results")

        let p = document.createElement("p")
        p.innerText = elem.name

        result.append(p)
    })

}

function debouncing(func, delay) {

    if(id){
        clearTimeout(id)
    }

    id = setTimeout(function () {
        func()
    }, delay)

}