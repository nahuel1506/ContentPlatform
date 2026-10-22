# Criterios de arquitectura

Este documento recoge la estructura prevista. Se actualizará con los componentes y dependencias concretos a medida que se incorpore el código.

## Backend

La API se organizará por funcionalidades. Dentro de cada módulo se usarán nombres directos:

- Controllers: reciben solicitudes HTTP y construyen las respuestas.
- Services: coordinan los casos de uso, las consultas y los permisos.
- Repositories: acceden a la persistencia.
- Domain: contiene las entidades y sus reglas propias.
- DTOs: definen los datos que entran y salen de la API.

Los servicios coordinan operaciones que necesitan varias entidades. Las entidades validan las reglas que pueden resolver con sus propios datos. Entity Framework Core y su contexto se encargan del mapeo a PostgreSQL.

La estructura crecerá según las necesidades del proyecto. Cada abstracción debe tener una responsabilidad concreta y facilitar la comprensión del código.

## Frontend

Angular se organizará por funcionalidades, con páginas, componentes, servicios y modelos. Las páginas coordinan los datos y los componentes de presentación reciben la información necesaria para mostrarla.

Los servicios encapsulan las llamadas a la API. La configuración compartida y la gestión de sesión tendrán una ubicación común.

## Documentación de decisiones

Las decisiones relevantes se documentarán con su contexto, la opción elegida y sus consecuencias. Por ejemplo, cómo representar distintos tipos de contenido o cómo sincronizar el estado general de consumo con el último episodio visto.

Los diagramas distinguirán entre componentes del sistema, relaciones del dominio y relaciones de la base de datos para que se pueda entender qué describe cada vista.
