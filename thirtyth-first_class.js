const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const opts = { crossDomain: true }


function obtenerPersonaje_v2(id, callback)
{
  const url =  `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, callback)
  .fail( () => {
      console.log(`Ocurrio Error no se pudo obtener el personaje ${id}`)
  })
}


obtenerPersonaje_v2(1,function (personaje) {
  console.log(`Hola,yo soy ${personaje.name}`)

  obtenerPersonaje_v2(2,function (personaje) {
    console.log(`Hola,yo soy ${personaje.name}`)

    obtenerPersonaje_v2(3,function (personaje) {
      console.log(`Hola,yo soy ${personaje.name}`)

      obtenerPersonaje_v2(4,function (personaje) {
        console.log(`Hola,yo soy ${personaje.name}`)

        obtenerPersonaje_v2(5,function (personaje) {
             console.log(`Hola,yo soy ${personaje.name}`)

          obtenerPersonaje_v2(6,function (personaje) {
                   console.log(`Hola,yo soy ${personaje.name}`)

              obtenerPersonaje_v2(7,function (personaje) {
                        console.log(`Hola,yo soy ${personaje.name}`)
         })
       })
     })
    })
   })
 })
})

