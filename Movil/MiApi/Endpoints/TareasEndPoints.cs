using Myback.Models;
using Myback.Services;

namespace Myback.Endpoints;

public static class TareasEndpoints
{
    public static void MapTareaEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/tareas").WithTags("Tareas");

        //GET

        group.MapGet("/",(ITareasService service) =>
            Results.Ok(service.GetTask())
        );

        //Get By id

        group.MapGet("/{id}",(int id, ITareasService service) =>
        {
            var tarea = service.GetTaskById(id);

            return tarea is null ? Results.NotFound(new {mensaje = "Tarea no encontrada"}) : Results.Ok(tarea);
        });

        //POST /tareas

        group.MapPost("/", (Tarea nuevaTarea, ITareasService service) =>
        {
           var creada = service.CreateTask(nuevaTarea);
           return Results.Created($"/tareas/{creada.Id}", creada); 

        });

        //PUT /tareas/{id}

        group.MapPut("/{id}",(int id, Tarea tarea, ITareasService service) =>
            service.PutTask(id,tarea) 
                ? Results.NoContent() 
                : Results.NotFound(new { mensaje = "Tarea no Encontrada"})
        
        );

        //Delete

        group.MapDelete("/{id}", (int id, ITareasService service) =>
            service.DeleteTask(id) 
                ? Results.NoContent() 
                : Results.NotFound(new { mensaje = "Tarea no Encontrada"})
        );
    }
}