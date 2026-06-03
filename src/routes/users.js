
/*
const express = require('express');
const router = express.Router();

//GET users  localhost:3000/users
router.get('/' , 
    (req, res) => {
        res.json(
            {users: ['Daniel' , 'Scarlazzetta']}
        );
    }
);
//GET users whith id locaholst:3000/users:id
router.get('/:id', 
    (req, res) => {
        res.json(
            {id: req.params.id}
        );
    }
 );

module.exports = router;*/



//Modificacion para mostar más datos
const express = require('express');
const router = express.Router();

// Base de datos temporal en memoria
let users = [
  { id: 1, nombre: 'Daniel Abraham', edad: 33 },
  { id: 2, nombre: 'Franco Scalazzetta', edad: 3 },
  { id: 3, nombre: 'Salvador lalapipo', edad: 99 },
];

// GET /usuarios — obtener todos - GetAll
router.get(
  '/', (req, res) => {
    res.json(users);
  }
);



//GET 
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
});


module.exports = router;




/* Ejemplificar el POST


agregar el ostman, explicar la ruta raiz / 
{ "nombre": "María", "edad": 25 }
// POST /users — crear nuevo usuario
router.post('/', (req, res) => {
  const { nombre, edad } = req.body;

  // Generamos un id autoincremental simple
  const nuevoId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const nuevoUsuario = { id: nuevoId, nombre, edad };
  users.push(nuevoUsuario);

  res.status(201).json(nuevoUsuario);
});
*/

/*

Update

// PUT /users/:id — actualizar usuario
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const { nombre, edad } = req.body;

  // Actualizamos solo los campos que llegaron
  if (nombre !== undefined) user.nombre = nombre;
  if (edad !== undefined) user.edad = edad;

  res.json(user);
});
*/


/*
agregar el delete

// DELETE /users/:id — eliminar usuario
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const eliminado = users.splice(index, 1)[0];

  res.json({ mensaje: 'Usuario eliminado', usuario: eliminado });
});

*/