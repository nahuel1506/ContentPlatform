namespace Api.Modules.Catalog.DTOs;

public record ContentResponse(
    Guid Id,
    string Type,
    string Title,
    string Description,
    string? CoverImageUrl,
    List<string> Genres);
