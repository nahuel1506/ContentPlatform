# Módulos y capas

El backend agrupa el código por funcionalidad. El catálogo contiene controllers, services, repositories, DTOs y entidades de dominio.

El controller atiende HTTP, el service coordina la consulta y construye la respuesta, y el repository consulta PostgreSQL mediante `AppDbContext`. Las entidades validan sus propios datos. La consulta actual es síncrona.

En Angular, `features/catalog` agrupa la página, el servicio HTTP y el modelo de respuesta. La página gestiona los estados de carga, error y lista vacía.
