  //Código para selecionar varios Pokemãos
  function jokes(category) { 
    const axios = require('axios'); 
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`; 
      axios.get(url) 
        .then(function(response) { 
          const eita = response.data; 
          console.log(`Category: ${category}`); 
          console.log(`Create at: ${eita.created_at}`); 
          console.log(`Value: ${eita.value}`); 
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
     