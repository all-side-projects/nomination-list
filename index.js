var data, i;

function getanswer(t) {
    $.get("https://www.omdbapi.com/?s=" + t + "&type=movie&apikey=ba1f4581", function (rawdata) {
        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var title = data.Search[0].Title;
        var year = data.Search[0].Year;

        // These few lines of comments: can be used to add pictures of each movies

        // var imdburl = "https://www.imdb.com/title/" + data.Search[0].imdbID + "/";

        // var posterurl = data.Search[0].Poster;
        // document.getElementById('nominate');
        // .style.visibility = "visible";
    
        // var theTitle = document.createElement("h5")
        // var theYear = document.createElement("p").innerHTML=`${year}`; 
    
        // document.getElementById("answer").appendChild(theTitle);
        // document.getElementById("answer").appendChild(theYear);
        
        //Answers
        nomList = document.getElementById('answer');
        nomList.innerHTML = `<br><h5>${title}</h5><p>(${year})`;

        var nominate = document.createElement("button");
        var bttName = document.createTextNode("Nominate");
        nominate.appendChild(bttName);
        document.getElementById("answer").appendChild(nominate);

        //gets all the element li under the ol element
        var parent = document.getElementById("nom");
        var allLi = parent.getElementsByTagName("li");
        var allBut = parent.getElementsByTagName("button");

        //addNomnations
        nominate.addEventListener("click", addNominations);
        // if (nomList.textContent === this.textContent){
        //     return alert("This movie is already on your nomination list");
        // }
        NodeList

        function addNominations() {
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