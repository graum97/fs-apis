const getResidents = document.querySelector("button");


const baseURL = "https://swapi.dev/api/";

const alderRes = [];

const residents = `${baseURL}/planets/?search=Alderaan/:residents`

function clickBtn(event) {
    // console.log("Button Clicked");
    axios.get(`${baseURL}/planets/?search=Alderaan`)
        .then((response) => {
            // console.log(response.data.results[0].residents);

            const resArray = response.data.results[0].residents;

            for(let i = 0; i < resArray.length; i++) {
                console.log(resArray[i]);
                axios.get(resArray[i])
                    .then((response) => {
                        console.log(response.data);
                    //    alderRes.push(response.data);
                        // console.log(alderRes);
                      let alRes = response.data

                      let h2 = document.createElement('h2');
                          h2.textContent = alRes.name;
                      
                          document.body.appendChild(h2);

                        // for(let x = 0; x < alderRes.length; x++) {
                        //     console.log(alderRes[x]);
                        //     // toString(alderRes[x]);   
                          
                        //     let h2 = document.createElement('h2');
                        //     h2.textContent = alderRes[x].name;
                        
                        //     document.body.appendChild(h2);
                        // }
                      
                    }); 
                    
                        
            }
        })



}


getResidents.addEventListener("click", clickBtn);





