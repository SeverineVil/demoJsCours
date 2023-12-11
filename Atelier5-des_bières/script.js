
fetch("https://api.punkapi.com/v2/beers/")
          .then(res => res.json())
          .then(data => {
            const beerList = document.getElementById("beers");
            const template = document.getElementById("beer_template"); 

            data.forEach(beers => {
           
              let clone = document.importNode(template.content, true);
            
              let td_elem = clone.querySelectorAll("td");
                td_elem[0].innerHTML = beers.name;
                td_elem[1].innerHTML = beers.description;
                td_elem[2].querySelector("img").src = beers.image_url;        
           
              beerList.appendChild(clone);          
             
            });
          })