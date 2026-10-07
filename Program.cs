
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//CORS
builder.Services.AddCors( options =>
{
   options.AddPolicy("AllowAll", policy =>
   {
       policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
   }); 
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    //Swagger UI
    app.UseSwagger();
    app.UseSwaggerUI();
}

//CORS
app.UseCors("AllowAll");
//app.UseHttpsRedirection();

//Lista que actua como base de datos
var tareas = new List<Tarea>
{
    new Tarea { Id = 1, Titulo = "Tarea Eduardo", Descripcion = "Tarea de Mateos", Completada = false },
    new Tarea { Id = 2, Titulo = "Tarea 2 de JuanRa", Descripcion = "Tarea del chonense", Completada = true }
};

//Exponer endpoints
//GET
app.MapGet("/getTareas", () =>
{
   return Results.Ok(tareas); 
});

//Get por Id
app.MapGet("/tareas/{id}", (int id) =>
{
    var tarea = tareas.FirstOrDefault(t => t.Id == id);

    if(tarea == null)
    {
        return Results.NotFound( new { mensaje = "Tarea no encontrada"});
    }

    return Results.Ok(tarea);
});

app.MapPost("/tareas", (Tarea nuevaTarea) =>
{
    //Generar ID
    nuevaTarea.Id = tareas.Count > 0 ? tareas.Max(t => t.Id) + 1 : 1;

    tareas.Add(nuevaTarea);

    //201
    return Results.Created($"/tareas/{nuevaTarea.Id}", nuevaTarea);
});

//Delete
app.MapDelete("/tareas/{id}", (int id) =>
{
    var tarea = tareas.FirstOrDefault(t => t.Id == id);

    if(tarea == null)
        return Results.NotFound( new { mensaje ="Tarea no encontrada"});

    tareas.Remove(tarea);

    return Results.NoContent(); //204 - Eliminado    
});

//PUT
app.MapPut("/tareas/{id}", (int id, Tarea actualizarTarea) =>
{
    var tarea = tareas.FirstOrDefault(t => t.Id == id);

    if(tarea == null)
        return Results.NotFound( new { mensaje ="Tarea no encontrada"});

    tarea.Titulo = actualizarTarea.Titulo;
    tarea.Descripcion = actualizarTarea.Descripcion;
    tarea.Completada = actualizarTarea.Completada;

    return Results.NoContent(); //204 
});

app.Run();

public class Tarea
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Descripcion { get; set; } = string.Empty;
    public bool Completada { get; set; }
}