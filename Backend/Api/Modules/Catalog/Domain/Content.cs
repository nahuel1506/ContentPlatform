namespace Api.Modules.Catalog.Domain;

public abstract class Content
{
    public Guid Id { get; private set; }
    public string Title { get; private set; } = string.Empty;
    public string Description { get; private set; } = string.Empty;
    public string? CoverImageUrl { get; private set; }
    public List<string> Genres { get; private set; } = [];

    protected Content() { }

    protected Content(
        string title,
        string description,
        string? coverImageUrl,
        IEnumerable<string> genres)
    {
        if (string.IsNullOrWhiteSpace(title) || title.Trim().Length > 150)
            throw new ArgumentException("El título debe tener entre 1 y 150 caracteres.");

        if (string.IsNullOrWhiteSpace(description))
            throw new ArgumentException("La descripción es obligatoria.");

        if (!string.IsNullOrWhiteSpace(coverImageUrl) &&
            (!Uri.TryCreate(coverImageUrl, UriKind.Absolute, out var uri) ||
             (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps)))
            throw new ArgumentException("La URL de portada no es válida.");

        Id = Guid.NewGuid();
        Title = title.Trim();
        Description = description.Trim();
        CoverImageUrl = string.IsNullOrWhiteSpace(coverImageUrl)
            ? null
            : coverImageUrl.Trim();
        Genres = genres
            .Where(genre => !string.IsNullOrWhiteSpace(genre))
            .Select(genre => genre.Trim())
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();
    }
}
