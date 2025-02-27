let searchTerm = 'Inception'
const link = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=6e419398`;


fetch(link)
.then(response => {
    if(!response.ok){
        throw new Error('Network response was not fetcg')
    }
    return response.json();  
})

.then(data => {
    let moviename = document.getElementById('movie');
    if (data && data.Search && data.Search.length > 0) {
        moviename.textContent = data.Search[0].Title;
    console.log(data);
    }
})
.catch(err=>{
    console.log(`Error - ${err}`);
})



