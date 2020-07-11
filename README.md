# hackaton-sem15

~ PREGUNTAS
¿Cuales son las responsabilidades de un manejador de rutas?
  Las responsabilidades de un manejador de rutas es definir las rutas en nuestra web, 
  para hacer saber a nuestros usuarios en que vista de nuestra pagina
  se encuentran ubicados.
  Por ejemplo: https://facebook/profile → ese '/profile' quiere decir que en la web 
  se encuentra en la vista de perfil del usuario.

¿Para que sirve un manejador de rutas?
  Un manejador de rutas sirve para definir las rutas y las funciones a ejecutarse.
  Tambien ayuda a definir rutas protegidas, para que asi se mantenga el flujo de la web
  o de la applicación web.
  
Describan el proceso en el ambito de front para realizar un buen login, y que pasa atras, que se hace ? 
¿Como se realiza un login, en el ambito de front?
  Primero para realizar un login en el ambito de front debemos validar que los datos que seran ingresados en nuestro formulario de login seran correctos, que el usuario ingrese sus credenciales correctamente, una vez que el usuario halla dado click en el boton de 'login', los datos ingresados nosotros haremos la validacion si el usuario y contraseña son correctos.
  Por detras se hace la validacion de los datos ingresados (consulta) a la base de datos y si es correcto pues lo redireccionara a la pagina de inicio.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
