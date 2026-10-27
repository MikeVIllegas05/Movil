using Myback.Models;

namespace Myback.Services;

public class TareaService : ITareasService
{
    private readonly List<Tarea> _tareas = new()
    {
        new Tarea { Id = 1, Titulo = "Tarea Eduardo", Descripcion = "Tarea de Mateos", Completada = false },
        new Tarea { Id = 2, Titulo = "Tarea 2 de JuanRa", Descripcion = "Tarea del chonense", Completada = true }
    };

    public IEnumerable<Tarea> GetTask() => _tareas;

    public Tarea? GetTaskById(int id)
    {
        var tarea = _tareas.FirstOrDefault(t => t.Id == id);
        return tarea;
    }

    public Tarea CreateTask(Tarea tarea)
    {
        tarea.Id = _tareas.Count > 0 ? _tareas.Max(t => t.Id) + 1 : 1;

        _tareas.Add(tarea);

        return tarea;
    }

    public bool DeleteTask(int id)
    {
        var buscar = _tareas.FirstOrDefault(t => t.Id == id);

        if(buscar == null)
            return false;

        _tareas.Remove(buscar);

        return true; 
    }

    public bool PutTask(int id, Tarea tarea)
    {
        var tareaNueva = _tareas.FirstOrDefault(t => t.Id == id);

        if(tareaNueva == null)
            return false;

        tareaNueva.Titulo = tarea.Titulo;
        tareaNueva.Descripcion = tarea.Descripcion;
        tareaNueva.Completada = tarea.Completada;

        return true;
    }
}