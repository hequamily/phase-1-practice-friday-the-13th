const name = document.getElementById(`name`)
const movieList = document.getElementById(`movie-list`)
const URL = `http://localhost:3000/movies`

fetch(URL)
.then(resp => resp.json())
.then(data => renderData(data))

function renderData(data){
    data.forEach(movie => {
        let image = document.createElement(`img`)
        image.src = movie.image
        movieList.append(image)
        
        
        description.textContent = movie.description
        image.addEventListener(`click`, function(event) {
            event.preventDefault()
            let description = document.getElementById(`description`)
            description.textContent = movie.description
            let title = document.getElementById(`title`)
            title.textContent = movie.title
            
            let imageSlot = document.getElementById(`detail-image`)
            imageSlot.src = movie.image
            
            let bloodAmount = document.getElementById(`amount`)
            bloodAmount.textContent = `${movie.blood_amount}`
            bloodAmount.textContent = movie.blood_amount
            
            let yearRelease = document.getElementById("year-released")
            yearRelease.textContent = movie.release_year
            console.log(yearRelease)
            console.log(movie)
        })
    })
    const watchedBttn = document.getElementById(`watched`)
    
    watchedBttn.addEventListener(`click`, () => {
                  if (watchedBttn.textContent === "Watched"){
                      watchedBttn.textContent = "Unwatched"
                  } else if (watchedBttn.textContent === `Unwatched`){
                        watchedBttn.textContent = `Watched`
                    }
                }      
    )}
            
            
        
    
    
    
    
    //     watchedBttn.textContent
        // if (watchedBttn === )
    
    //     if ( watchedBttn.value === "Open Curtain" )
    //     watchedBttn.value = "Close Curtain";
    // else
    //     watchedBttn.value = "Open Curtain";
    
    
                //     console.log(`hit`)
                //     watchedBttn.textContent = movie.submit
                //     watchedBttn.append(watchedBttn)
                //     console.log(bloodAmount)
//     console.log(watchedBttn)
//    watchedBttn.addEventListener(`click`, function(event) {
    // console.log(movie)
//     )
// }
// console.log(movieList)
// console.log(image)
// movieList.append(data)