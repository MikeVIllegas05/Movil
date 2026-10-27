import apiConexion from "../Api/client";

export async function getLicencias() {
    const res = await apiConexion.get('/getLicencias');
    return res.data;
}
