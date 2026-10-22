# Desarrollo

Usamos GitHub Flow: `main` contiene cambios revisados que compilan; cada funcionalidad o corrección se trabaja en una rama corta.

1. Crear una rama `<tipo>/<cambio>` desde `main` actualizado, por ejemplo `feat/catalog-basics` o `fix/catalog-loading`.
2. Implementar un cambio acotado y actualizar su documentación.
3. Revisar el diff y comprobar backend y frontend.
4. Crear commits con una responsabilidad clara.
5. Publicar la rama y abrir un pull request.
6. Integrar cuando CI pase y se revise el cambio; eliminar la rama integrada.

En un proyecto individual, la revisión consiste en leer el diff y comprobar el comportamiento antes de integrar. No requiere un segundo desarrollador.

## Commits

Formato: `<tipo>: <descripción breve>`. La descripción explica el resultado del cambio.

| Tipo | Uso |
| --- | --- |
| `feat` | Funcionalidad nueva. |
| `fix` | Corrección de comportamiento. |
| `refactor` | Reorganización sin cambiar comportamiento. |
| `docs` | Documentación. |
| `ci` | Integración continua. |
| `chore` | Configuración y mantenimiento. |

Ejemplo: `feat: add catalog listing`.

Las pruebas acompañan al cambio que verifican, dentro del mismo commit o pull request. No usamos un tipo de commit separado para ellas.

## Comprobaciones

```sh
dotnet build Backend/ContentPlatform.slnx --configuration Release
cd Frontend
npm ci
npm run build
```

Los secretos y archivos locales quedan fuera de Git. Las migraciones de EF Core y `package-lock.json` forman parte del cambio que los necesita.
