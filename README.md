# Unidad_3_node_semana_12
 
# 1.- Crear el proyecto en node
    Crear un proyecto con nodeJS, con el siguente
    comando en la terminal

    npm init -y
# 1.1.- Cuando Descargamos el proyecto de otro lado:
    Vamos a usar el siguente comando para instalar dependencias de
    NodeMules

    npm i

# 2.- Instalar Express(para trabajar JavaScript como servidor)
    Realizar la instalacion de un paquete
    de desarrollo:

    npm install express

# 3.- Crear estructura de carpetas para el proyecto:
    -Primero definimos la carpeta madre(src)
    -Crear el Main de la aplciación, que es el app.js
    -Creamos dos carpetas, una es para el ruter(definir rutas) y la otra es para los middleware(puente).

    src/
    ----app.js <- Este es el main de la aplicación
    ----routes/
            ----users.js
    ----middlewares/
            ----logger.js

# 4.- Creación de Logger.js
    Creamos el puentes de la aplicación.

    logger.js

# 5.- Creaxcion de una ruta
    Crearemos un usuario con datos parseados(meterlos a la mala) en la ruta. La ruta la usaremos para manejar las URL.

    users.js

# 6.- Creación del Main
    Definimos el cerebro de la aplicacón

    app.js
    
# 7.- 




## Creacion del CRUD Extender un rato paso a paso nomas or el postman










Paso 7: Arreglar el GET (con array completo de objetos)
Paso 8: POST — crear usuario
Paso 9: PUT — actualizar usuario
Paso 10: DELETE — eliminar usuario

siguente fase qla: modificacion en el Middleware para crear la validacipn

Paso 11: validateUser.js — validar campos antes del POST/PUT

Ultima fase: 
como poder migrar a Json

Paso 12: Crear users.json
Paso 13: Adaptar users.js para usar fs