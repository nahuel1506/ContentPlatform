using Api.Modules.Catalog.Domain;

namespace Api.Data.Seed;

public static class CatalogSeedData
{
    public static void Initialize(AppDbContext context)
    {
        if (context.Contents.Any())
            return;

        context.Contents.AddRange(
            new Anime(
                "Viaje al horizonte",
                "Un grupo de exploradores recorre un mundo desconocido. Contenido de prueba.",
                null,
                ["Aventura"]),
            new Movie(
                "La última señal",
                "Una investigadora recibe una señal inesperada. Contenido de prueba.",
                null,
                ["Ciencia ficción"]));

        context.SaveChanges();
    }
}
