using Api.Modules.Catalog.Domain;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Content> Contents => Set<Content>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Content>()
            .HasDiscriminator<string>("ContentType")
            .HasValue<Anime>("Anime")
            .HasValue<Movie>("Movie");

        modelBuilder.Entity<Content>()
            .Property(content => content.Title)
            .HasMaxLength(150);

    }
}
