# Documentación

La documentación describe el estado del código incluido en este repositorio. Cada cambio de comportamiento o de arquitectura incluye la actualización de sus documentos y diagramas correspondientes.

## Organización

```text
docs/
├── architecture/
│   ├── decisions/
│   └── views/
│       ├── components/
│       ├── deployment/
│       └── modules/
└── flows/
```

| Carpeta | Contenido |
| --- | --- |
| `architecture/decisions/` | Decisiones tomadas: contexto, opción elegida y consecuencias. |
| `architecture/views/components/` | Componentes del sistema, sus responsabilidades y conexiones. |
| `architecture/views/deployment/` | Procesos, contenedores, servicios y conexiones del entorno de ejecución. |
| `architecture/views/modules/` | Organización del código en módulos y capas, con sus dependencias. |
| `flows/` | Pasos de los casos de uso e interacciones entre sus participantes. |

Estas carpetas están vacías actualmente: el repositorio todavía no contiene código de aplicación ni una arquitectura implementada que representar.

## Documentos y diagramas

Cada tema se documenta en Markdown dentro de su carpeta. El diagrama y su fuente editable se guardan junto al texto que los explica, usando el mismo nombre base. Por ejemplo: `login.md`, `login.puml` y `login.svg`.

Se puede usar PlantUML o Excalidraw. La fuente editable forma parte del repositorio; para visualizar el diagrama en GitHub se incluye una exportación SVG o PNG enlazada desde el documento.

Cada vista indica qué representa y qué significan sus conexiones. Una relación entre entidades, una dependencia de código y una conexión entre servicios describen aspectos distintos del sistema.

El README principal recoge el propósito, las funcionalidades disponibles y los pasos necesarios para ejecutar la aplicación cuando existen. Los documentos de arquitectura explican las decisiones y la estructura implementada. Los planes de trabajo quedan fuera de esta documentación.
