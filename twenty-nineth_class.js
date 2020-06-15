const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'


const personUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola,  yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
  const personUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(personUrl, opts, onPeopleResponse)
}


for (let id=1; id<=100; id++)
{
  obtenerPersonaje(id)

}

