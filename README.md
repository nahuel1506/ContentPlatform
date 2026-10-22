# ContentPlatform

Proyecto de aprendizaje que simula una plataforma de streaming y gestión multimedia. Las demostraciones utilizan material de prueba; la aplicación no distribuye contenido protegido.

Permite listar animes y películas y abrir su detalle con título, descripción y géneros. Usa .NET 10, Angular 22 y PostgreSQL.

## Ejecutar

Requisitos: .NET SDK 10.0.402, Node.js 24.15 o superior de la rama 24 y Docker Compose.

Preparar el entorno local desde la raíz (PowerShell):

```powershell
Copy-Item .env.example .env
Copy-Item Backend/Api/appsettings.Development.example.json Backend/Api/appsettings.Development.json
docker compose up -d
dotnet tool restore
dotnet ef database update --project Backend/Api
```

Los ejemplos usan una contraseña de desarrollo. Si la cambiás, actualizala tanto en `.env` como en `appsettings.Development.json`. Ambos archivos locales están ignorados por Git.

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

[Arquitectura y flujos](docs/README.md) · [Desarrollo y commits](CONTRIBUTING.md).
