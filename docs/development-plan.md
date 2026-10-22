# Plan de desarrollo

Cada incremento debe tener un objetivo concreto y dejar una base ejecutable para el siguiente. La documentación y las comprobaciones se incorporan junto con la funcionalidad que explican.

## 1. Base del repositorio

- Presentación del proyecto y su alcance.
- Exclusión de secretos, archivos generados y configuración de herramientas personales.
- Criterios iniciales de arquitectura.

## 2. Catálogo mínimo

- Crear la API y el proyecto Angular.
- Configurar PostgreSQL para desarrollo local y documentar su conexión.
- Definir el contenido y una consulta mínima de catálogo.
- Mostrar el resultado en el frontend.
- Agregar integración continua para restaurar dependencias y compilar ambos proyectos.

## 3. Usuarios y acceso

- Registro, inicio y cierre de sesión.
- Permisos para operaciones de administración.
- Perfiles con datos públicos definidos explícitamente.
- Acceso externo con Google y Discord, incluyendo sus reglas de vinculación.

## 4. Contenido e interacción

- Detalle del contenido y sus unidades, comenzando por episodios.
- Reproducción de material de demostración autorizado.
- Comentarios, respuestas y reacciones a comentarios.

## 5. Biblioteca personal

- Estados de consumo y favoritos.
- Progreso y acceso al último episodio visto.
- Sección para continuar viendo.
- Visibilidad pública o privada de las listas.

## 6. Relaciones e importación

- Relaciones entre contenidos y validación de su dirección.
- Importación desde fuentes externas, respetando sus condiciones de uso.
- Consultas y paginación adecuadas para catálogos grandes.

## Forma de trabajo

Los commits agrupan cambios relacionados y explican el comportamiento que incorporan. Las funcionalidades más grandes se desarrollan en ramas y se revisan mediante pull requests.

Las pruebas se centran en reglas y flujos importantes. Los diagramas describen el código de cada etapa y se mantienen como archivos de texto versionados, preferentemente en PlantUML.

El despliegue automático se definirá después de elegir un entorno de alojamiento y configurar sus secretos. La primera automatización será la integración continua.
