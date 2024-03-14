## Ejecutar en modo de desarrollo

Para ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Abre una terminal en el directorio raíz de tu proyecto.

3. Ejecuta el siguiente comando:

```javascript
npm start
``` 

o 

```javascript
yarn start
``` 

Este comando iniciará la aplicación en modo de desarrollo. Puedes acceder a ella en tu navegador web visitando la URL http://localhost:8080.

## Ejecutar en modo de producción

Para ejecutar la aplicación en modo de producción, sigue estos pasos:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Abre una terminal en el directorio raíz de tu proyecto.

3. Ejecuta el siguiente comando para construir la aplicación:

```javascript
npm run build
``` 

o 

```javascript
yarn build
``` 

Este comando generará una versión optimizada de la aplicación en la carpeta `build`.

4. Luego, sirve la aplicación utilizando un servidor web estático. Puedes usar herramientas como Serve o http-server. Por ejemplo, si tienes Serve instalado globalmente, puedes ejecutar:

```javascript
serve -s dist
```

Esto servirá la aplicación en modo de producción en tu localhost. Puedes acceder a ella en tu navegador web visitando la URL que se muestra en la terminal.
