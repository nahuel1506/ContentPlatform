# Estilo visual

La interfaz combina una portada con un contenido destacado y un catálogo de pósters. El contenido aporta el color; el resto usa fondos oscuros neutros y un acento turquesa para acciones y selección.

## Base

- Colores, espaciado lateral y ancho máximo: `Frontend/src/styles.css`.
- Tipografía de sistema, cuerpo de 16 px y títulos de página contenidos.
- Bordes discretos y radios de 4 px. Sin brillos, monogramas decorativos ni flechas sobre las tarjetas.
- Foco de teclado visible y controles con nombres accesibles.

## Pantallas

- **Inicio:** primer contenido disponible como destacado, descripción breve, acceso al detalle y una fila horizontal de portadas.
- **Explorar:** buscador, filtros por tipo y género, y cuadrícula adaptable de pósters.
- **Detalle:** portada vertical, título, tipo, géneros y descripción.
- **Tarjeta:** imagen 2:3, título y tipo debajo. La tarjeta completa enlaza al detalle.

Los filtros se aplican en el navegador a la lista cargada. Las imágenes originales de muestra en `Frontend/public/images/catalog/` reemplazan las portadas ausentes o que no cargan; no modifican los datos del catálogo.

[Origen y prompts de las imágenes](artwork-prompts.json).
