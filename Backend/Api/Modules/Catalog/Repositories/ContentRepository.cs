using Api.Data;
using Api.Modules.Catalog.Domain;
using Microsoft.EntityFrameworkCore;

namespace Api.Modules.Catalog.Repositories;

public class ContentRepository(AppDbContext context)
{
    public List<Content> GetAll()
    {
        return context.Contents
            .AsNoTracking()
            .OrderBy(content => content.Title)
            .ToList();
    }
}
