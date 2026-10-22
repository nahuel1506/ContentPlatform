# ContentPlatform

ContentPlatform es un proyecto de aprendizaje que simula el funcionamiento de una plataforma de streaming y gestión de contenido multimedia.

La idea es poder explorar un catálogo, organizar listas personales, registrar el progreso e interactuar mediante comentarios y favoritos. El proyecto también sirve para aprender a diseñar una aplicación completa, desde la base de datos y la API hasta la interfaz y su entrega.

## Alcance

La aplicación no pretende distribuir películas, series ni otros contenidos protegidos. Las funciones de reproducción se demostrarán con material de prueba, propio o autorizado. El objetivo es simular la experiencia y las reglas de una plataforma real.

## Estado actual

El repositorio contiene la documentación inicial y la configuración básica de desarrollo. El código se incorporará por funcionalidades pequeñas, con cambios que se puedan revisar y ejecutar.

## Funcionalidades previstas

- Catálogo de contenido multimedia con búsqueda y filtros.
- Registro de usuarios e inicio de sesión.
- Detalle de contenido y sus episodios u otras unidades.
- Listas personales, favoritos y seguimiento del progreso.
- Comentarios y respuestas.
- Relaciones entre contenidos, como precuelas y secuelas.
- Importación de datos para probar el catálogo con distintos volúmenes.

## Tecnologías previstas

- Backend: C# y ASP.NET Core.
- Frontend: Angular y TypeScript.
- Persistencia: Entity Framework Core y PostgreSQL.
- Entorno local: Docker Compose para PostgreSQL.
- Integración continua: GitHub Actions.

Las versiones y los comandos de ejecución se documentarán junto con el primer incremento de código.

## Documentación

- [Plan de desarrollo](docs/development-plan.md).
- [Criterios de arquitectura](docs/architecture.md).

La documentación evolucionará junto con el código. Se agregarán diagramas de componentes, de dominio y de los flujos principales cuando esas partes estén implementadas.

## Configuración local

Los secretos y las credenciales reales deben mantenerse fuera del repositorio. Cada configuración necesaria tendrá un ejemplo sin datos sensibles y pasos para crear su versión local.

Los identificadores públicos de OAuth pueden formar parte de la configuración del frontend. Las claves secretas de los proveedores pertenecen únicamente al backend y a su configuración local o de despliegue.
