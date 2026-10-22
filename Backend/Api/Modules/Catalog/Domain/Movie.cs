namespace Api.Modules.Catalog.Domain;

public class Movie : Content
{
    private Movie() { }

    public Movie(string title, string description, string? coverImageUrl,
        IEnumerable<string> genres)
        : base(title, description, coverImageUrl, genres) { }
}
