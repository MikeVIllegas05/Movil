using Myback.Models;
using Myback.Services;

namespace Myback.Endpoints;

public static class LicenciasEndpoint
{
    public static void MapLicenciaEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/licencia").WithTags("Licencia");

        //GET
         group.MapGet("/",(ILicenciaService service) =>
            Results.Ok(service.GetLicencias())
        );
    }
}