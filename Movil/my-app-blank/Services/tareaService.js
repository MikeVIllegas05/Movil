import apiConexion from "../Api/client";

export async function getTasks() {
    const res = await apiConexion.get('/tareas/');
    return res.data;
}

export async function getTaskById(id) {
    const res = await apiConexion.get(`/tareas/${id}`);
    return res.data;
}

export async function createTask(task) {
    const res = await apiConexion.post('/tareas/', task);
    return res.data;
}

export async function deleteTask(id) {
    const res = await apiConexion.delete(`/tareas/${id}`);
    return res.data;
}

export async function updateTask(id, task) {
    const res = await apiConexion.put(`/tareas/${id}`, task);
    return res.data;
}
