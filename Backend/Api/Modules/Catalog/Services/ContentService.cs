using Api.Modules.Catalog.DTOs;
using Api.Modules.Catalog.Domain;
using Api.Modules.Catalog.Repositories;

namespace Api.Modules.Catalog.Services;

public class ContentService(ContentRepository repository)
{
    public List<ContentResponse> GetAll()
    {
        return repository.GetAll()
            .Select(ToResponse)
            .ToList();
    }

    public ContentResponse? GetById(Guid id)
    {
        var content = repository.Find(content => content.Id == id);
        return content is null ? null : ToResponse(content);
    }

    private static ContentResponse ToResponse(Content content)
    {
        return new ContentResponse(
            content.Id,
            content.GetType().Name,
            content.Title,
            content.Description,
            content.CoverImageUrl,
            content.Genres);
    }
}
