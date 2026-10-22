using Api.Modules.Catalog.DTOs;
using Api.Modules.Catalog.Repositories;

namespace Api.Modules.Catalog.Services;

public class ContentService(ContentRepository repository)
{
    public List<ContentResponse> GetAll()
    {
        return repository.GetAll()
            .Select(content => new ContentResponse(
                content.Id,
                content.GetType().Name,
                content.Title,
                content.Description,
                content.CoverImageUrl,
                content.Genres))
            .ToList();
    }
}
