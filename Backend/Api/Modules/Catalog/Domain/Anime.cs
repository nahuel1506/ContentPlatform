namespace Api.Modules.Catalog.Domain;

public class Anime : Content
{
    private Anime() { }

    public Anime(string title, string description, string? coverImageUrl,
        IEnumerable<string> genres)
        : base(title, description, coverImageUrl, genres) { }
}
