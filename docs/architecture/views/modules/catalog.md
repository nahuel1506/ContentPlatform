# Catálogo

`GET /api/contents` devuelve identificador, tipo, título, descripción, portada y géneros, ordenados por título. La base incluye dos contenidos ficticios de demostración.

`GET /api/contents/{id}` devuelve esos mismos datos para un contenido. Si no existe, responde `404`. El título de cada tarjeta enlaza a `/catalog/{id}`, donde Angular consulta este endpoint y muestra el detalle.

```mermaid
flowchart LR
  Page["CatalogPage"] --> Http["ContentService · Angular"]
  Http --> Controller["ContentsController"]
  Controller --> Service["ContentService · API"]
  Service --> Repository["ContentRepository"]
  Repository --> Context["AppDbContext"]
  Context --> Database[("PostgreSQL")]
```

Las flechas indican llamadas. El repository recupera entidades `Anime` o `Movie`, ambas derivadas de `Content`; el service las convierte a `ContentResponse`.

En desarrollo, Angular redirige `/api` a `localhost:5228` mediante su proxy. PostgreSQL escucha en `127.0.0.1:5434` y conserva sus datos en un volumen Docker.
