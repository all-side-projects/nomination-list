var data, i;

function getmovie(t) {
    $.get("https://www.omdbapi.com/?s=" + t + "&type=movie&apikey=ba1f4581", function (rawdata) {
        // recieves the data from the omdb api
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var title = data.Search[0].Title;
        var year = data.Search[0].Year;

        // These few lines of comments: can be used to add pictures of each movies

        // var imdburl = "https://www.imdb.com/title/" + data.Search[0].imdbID + "/";
        // var posterurl = data.Search[0].Poster;     
    
        //outputs the result of the data
        nomList = document.getElementById('movie');
        nomList.innerHTML = `<br><h5>${title}</h5><p>(${year})`;

        var nominate = document.createElement("button");
        var bttName = document.createTextNode("Nominate");
        nominate.appendChild(bttName);
        document.getElementById("movie").appendChild(nominate);

        //gets all the element li under the ol element
        var parent = document.getElementById("nom");
        var allBut = parent.getElementsByTagName("button");

        //add Nomnations: includes removing the nomination button and adding  
        nominate.addEventListener("click", addNominations);
        function addNominations() {
            // gives an alert if the list is more than 5
            if(parent.children.length > 4){
                return alert("You are only allowed to nominate at most 5 movies");
            }

            var liNode = document.createElement("li"); 
            nominate.parentNode.removeChild(nominate);
            var actualNom = document.createTextNode(nomList.textContent);
            
            var deleteBut = document.createElement("button");
            var deleteVal = document.createTextNode("Delete");
            deleteBut.appendChild(deleteVal);  
            
            liNode.appendChild(actualNom);
            liNode.appendChild(deleteBut);

            document.getElementById("nom").appendChild(liNode);


            //remove Nominations
            for(i = 0; i < allBut.length; i++){
                allBut[i].addEventListener("click", function(){
                    parent.removeChild(this.parentNode);
                }, false);
            }
        }
    });
}