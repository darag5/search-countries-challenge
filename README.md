# search-countries-challenge

search-countries-challenge es una plataforma desarrollada con el stack MEAN cuyo propósito es realizar una búsqueda de países utilizando como filtro de busqueda al menos 3 caracteres (Ver Imagen 1). En caso de haber resultados con el filtro introducido en un input de busqueda, mostrará la lista resultante (hasta 5 países) con la siguiente información: Nombre del país, Población y Porcentaje de Habitantes sobre la suma total de la población de cada país (Ver Imagen 2). En caso de no encontrar resultados se mostrará "No se encontraron resultados" (Ver Imagen 3).

![Imagen 1](./screenshots/all-countries.png)
![Imagen 2](./screenshots/filtered-countries.png)
![Imagen 3](./screenshots/no-results.png)

## Requisitos Previos

Para levantar correctamente este proyecto se requieren minimamente los siguientes requisitos:

- [Node.js](https://nodejs.org/)
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (o una instancia local de MongoDB)

## Instalación

1. Clona el repositorio: `git clone https://github.com/darag5/search-countries-challenge.git`
2. Navega al directorio de la aplicación: `cd search-countries-challenge`
3. Instala pnpm: `npm install -g pnpm` o visita el sitio oficial de [pnpm](https://pnpm.io/) para otras alternativas de instalación
4. Instala las dependencias:
   4.1 Naveva hasta la carpeta `client` e instala las dependencias: `pnpm install`
   4.1 Naveva hasta la carpeta `server` e instala las dependencias: `pnpm install`

## Configuración

1. Crea un archivo `.env` en el directorio server.
2. Abre el archivo `.env` y setear las siguientes variables de entorno con tus datos:

   ```env
   # Archivo .env

   # Configuración de MongoDB Atlas
   MONGODB_URI=your_mongodb_uri_here

   # Configuración del servidor Express
   PORT=3000
   ```

## Correr las migraciones

## Ejecutar Tests

## Ejecución

1. Inicia el cliente:
   1.1 Navega hasta la carpeta `client` y ejecute: `ng serve`
2. Inicie el server:
   2.1 Navega hasta la carpeta `server` y ejecute: `pnpm run dev`
3. Visita `http://localhost:4200` en tu navegador.

## Estructura del Proyecto

- `server/`: Contiene el código del servidor Express.js.
- `client/`: Contiene el código de la aplicación Angular.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Contacto

- Autor: Delma Araceli Gonzalez
- Correo Electrónico: ara.gonzalez92@gmail.com
