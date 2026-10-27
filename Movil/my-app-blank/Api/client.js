import axios from 'axios'

const apiConexion = axios.create({
    baseURL: 'http://localhost:5057',
    android: "http://10.0.2.2:3000",
    timeout:10000,
    header: {
        'Content-type': 'application/json',
    },
});

export default apiConexion;