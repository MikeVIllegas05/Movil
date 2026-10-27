using Myback.Models;

public interface ITareasService
{
    IEnumerable<Tarea> GetTask();
    Tarea? GetTaskById(int id);
    Tarea CreateTask(Tarea tarea);
    bool DeleteTask(int id);
    bool PutTask (int id, Tarea tarea);

}