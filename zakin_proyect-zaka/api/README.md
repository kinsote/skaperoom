# Demo Project - API

Una API de ejemplo para ver cómo montar una aplicación entera, de extremo a extremo.

## Base de datos

Para este proyecto se requiere una base de datos PostgreSQL, cuyos datos de acceso se deben especificar mediante la variable de entorno `DATABASE_URL`. Puede crearse una utilizando [Docker](https://www.docker.com/get-started) mediante el siguiente comando:

```sh
docker run --name demo-postgres -e POSTGRES_PASSWORD=mypass -v ${PWD}/schema.sql:/docker-entrypoint-initdb.d/schema.sql -p 5432:5432 -d postgres
```

Utilizando ese comando, se añadiría al `.env`:

```
DATABASE_URL=postgres://postgres:mypass@127.0.0.1:5432/postgres
```

## Usando Heroku

Este proyecto está configurado para ser desplegable a Heroku y similares. Tan solo configura el remote correspondiente, y haz push. Recuerda que debes añadirle un PostgreSQL antes del primer deploy, y aplicarle el `schema.sql`.

## Usando en local

Si ya tienes todo configurado, tan sólo instala dependencias con `npm install`, y arranca la API con `npm start`. Quedará disponible en:

[http://localhost:8080](http://localhost:8080)
