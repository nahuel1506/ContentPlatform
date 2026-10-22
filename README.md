# ContentPlatform

Proyecto de aprendizaje que simula una plataforma de streaming y gestión multimedia. Las demostraciones utilizan material de prueba; la aplicación no distribuye contenido protegido.

Actualmente incluye una API en .NET 10 y una interfaz en Angular 22 que muestra el estado de conexión con el backend.

## Ejecutar

Requisitos: .NET SDK 10.0.402 y Node.js 24.15 o superior de la rama 24.

API, desde la raíz:

```sh
dotnet run --project Backend/Api --launch-profile http
```

Frontend, en otra terminal:

```sh
cd Frontend
npm ci
npm start
```

Abrir [localhost:4200](http://localhost:4200). La API escucha en `http://localhost:5228`; el proxy de Angular redirige las llamadas a `/api`.

## Documentación

[Arquitectura y flujos](docs/README.md).
