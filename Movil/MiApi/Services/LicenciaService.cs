using Myback.Models;

namespace Myback.Services;

public class LicenciaService : ILicenciaService
{
    private readonly Licencia _Licencia = new()
    {
            Id = 1, 
            Nombre = "Licencia Mike", 
            Foto = "Foto de Mike",
            Estado = "Activo",
            NumeroLicencia = "123456789",
            FechaNacimiento = "01/01/1990",
            FechaVencimiento = "01/01/2030",
            TipoLicencia = "Tipo A",
            Direccion = "Calle Falsa 123"
    };
    
    public Licencia GetLicencias() => _Licencia;
    
}