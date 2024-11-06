const axios = require("axios"); // Importa o axios para fazer requisições HTTP

// Definimos o nome ou número do Pokémon que queremos buscar (pode ser qualquer Pokémon)
const pokemonName = "bulbasaur"; // Troque 'pikachu' pelo nome ou número de outro Pokémon

// Montamos a URL da API PokéAPI, inserindo o nome do Pokémon na URL
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

// Faz uma requisição GET para a API PokéAPI usando o axios
axios
  .get(url)
  .then(function (response) {
    // Função executada se a requisição for bem-sucedida
    const pokemon = response.data; // Aqui pegamos os dados da resposta (os dados do Pokémon)

    // Exibimos o nome do Pokémon
    console.log(`Nome: ${pokemon.name}`);

    // A altura do Pokémon vem em decímetros, por isso dividimos por 10 para converter em metros
    console.log(`Altura: ${pokemon.height / 10} metros`);

    // O peso vem em hectogramas, então dividimos por 10 para converter em quilogramas
    console.log(`Peso: ${pokemon.weight / 10} kg`);

    // Extraímos as habilidades do Pokémon. Cada habilidade vem em um array, então usamos 'map'
    // O 'map' percorre todas as habilidades, e 'join' junta os nomes em uma única string
    const habilidades = pokemon.abilities
      .map(function (hab) {
        return hab.ability.name; // Pegamos apenas o nome de cada habilidade
      })
      .join(", "); // Junta todos os nomes com ', ' como separador
    console.log(`Habilidades: ${habilidades}`);

    // Da mesma forma, pegamos os tipos do Pokémon, usando 'map' e 'join'
    const tipos = pokemon.types
      .map(function (type) {
        return type.type.name; // Pegamos apenas o nome de cada tipo (por exemplo, 'electric', 'fire')
      })
      .join(", ");
    console.log(`Tipos: ${tipos}`);
  })
  .catch(function (error) {
    // Função executada se houver algum erro na requisição
    console.error("Erro ao buscar dados do Pokémon:", error.message);
  });


  //Código para selecionar varios Pokemãos
  function getPokemonData(pokemonName) { 
    const axios = require('axios'); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; 
      axios.get(url) 
        .then(function(response) { 
          const pokemon = response.data; 
          console.log(`Nome: ${pokemon.name}`); 
          console.log(`Altura: ${pokemon.height / 10} metros`); 
          console.log(`Peso: ${pokemon.weight / 10} kg`); 
          const habilidades = pokemon.abilities.map(function(hab) { 
            return hab.ability.name; 
          }).join(', '); 
          console.log(`Habilidades: ${habilidades}`); 
          const tipos = pokemon.types.map(function(type) { 
            return type.type.name; 
          }).join(', '); 
          console.log(`Tipos: ${tipos}`); 
        }) 
        .catch(function(error) { 
          console.error('Erro ao buscar dados do Pokémon:', error.message); 
        }); 
    } 
     
    // Testando a função com diferentes Pokémon 
    getPokemonData('charizard'); 
    getPokemonData('bulbasaur'); 
    getPokemonData('squirtle'); 
    getPokemonData('mewtwo');
    getPokemonData('snorlax');
