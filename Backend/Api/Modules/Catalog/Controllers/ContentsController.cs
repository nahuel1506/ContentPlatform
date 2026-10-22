using Api.Modules.Catalog.DTOs;
using Api.Modules.Catalog.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Modules.Catalog.Controllers;

[ApiController]
[Route("api/contents")]
public class ContentsController(ContentService service) : ControllerBase
{
    [HttpGet]
    public ActionResult<List<ContentResponse>> GetAll()
    {
        return Ok(service.GetAll());
    }
}
