using Myback.Endpoints;
using Myback.Services;


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


//Servicios (inyeccion de dependecias)
builder.Services.AddSingleton<ITareasService, TareaService>();
builder.Services.AddSingleton<ILicenciaService, LicenciaService>();


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

//Exponer los endpoints
app.MapTareaEndpoint();
app.MapLicenciaEndpoint();

app.Run();

