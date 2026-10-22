using Api.Data;
using System.Linq.Expressions;
using Api.Modules.Catalog.Domain;
using Microsoft.EntityFrameworkCore;

namespace Api.Modules.Catalog.Repositories;

public class ContentRepository(AppDbContext context)
{
    public Content? Find(Expression<Func<Content, bool>> expression)
    {
        return context.Contents.AsNoTracking().FirstOrDefault(expression);
    }

    public List<Content> GetAll()
    {
        return context.Contents
            .AsNoTracking()
            .OrderBy(content => content.Title)
            .ToList();
    }
}
