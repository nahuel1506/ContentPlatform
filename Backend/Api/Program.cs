using Api.Data;
using Api.Data.Seed;
using Api.Modules.Catalog.Repositories;
using Api.Modules.Catalog.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Catalog")));
builder.Services.AddScoped<ContentRepository>();
builder.Services.AddScoped<ContentService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    using var scope = app.Services.CreateScope();
    CatalogSeedData.Initialize(scope.ServiceProvider.GetRequiredService<AppDbContext>());
}

app.MapControllers();

app.Run();
