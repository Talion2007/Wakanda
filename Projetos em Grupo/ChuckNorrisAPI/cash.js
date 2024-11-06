  //Código para selecionar varios Pokemãos
  function jokes(category) { 
    const axios = require('axios'); 
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`; 
      axios.get(url) 
        .then(function(response) { 
          const eita = response.data; 
          console.log("---------------")
          console.log(`Category: ${category}`); 
          console.log(`Created at: ${eita.created_at}`); 
          console.log(`Updated at: ${eita.updated_at}`); 
          console.log(`Icon URL: ${eita.icon_url}`); 
          console.log(`URL: ${eita.url}`); 
          console.log("")
          console.log(`Value: ${eita.value}`); 
          console.log("---------------")
          console.log("")
        }) 
        .catch(function(error) { 
          console.error('Erro ao buscar dados do Pokémon:', error.message); 
        }); 
    } 

    jokes('animal');
    jokes('career');
    jokes('celebrity');
    jokes('dev');
    jokes('explicit');
    jokes('fashion');
    jokes('food');
    jokes('history');
    jokes('money');
    jokes('movie');
    jokes('music');
    jokes('political');
    jokes('science');
    jokes('sport');
    jokes('travel');