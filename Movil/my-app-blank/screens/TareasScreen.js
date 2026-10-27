import { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { getTasks, getTaskById, createTask, deleteTask, updateTask } from "../Services/tareaService";

export default function TareasScreen() {
    const [tasks, setTasks] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [busquedaId, setBusquedaId] = useState("");
    const [resultado, setResultado] = useState(null);

    async function llamarTareas() {
        try {
            const datos = await getTasks();
            setTasks(datos);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        llamarTareas();
    }, []);

    function limpiarFormulario() {
        setTitulo("");
        setDescripcion("");
        setEditingId(null);
    }

    async function guardarTarea() {
        if (!titulo.trim()) {
            return;
        }
        try {
            const tarea = { titulo, descripcion };
            if (editingId) {
                await updateTask(editingId, tarea);
            } else {
                await createTask(tarea);
            }
            limpiarFormulario();
            await llamarTareas();
        } catch (err) {
            console.error(err);
        }
    }

    async function borrarTarea(id) {
        try {
            await deleteTask(id);
            await llamarTareas();
        } catch (err) {
            console.error(err);
        }
    }

    function editarTarea(task) {
        setEditingId(task.id);
        setTitulo(task.titulo);
        setDescripcion(task.descripcion);
    }

    async function buscarTarea() {
        if (!busquedaId.trim()) {
            return;
        }
        try {
            const dato = await getTaskById(busquedaId);
            setResultado(dato);
        } catch (err) {
            console.error(err);
            setResultado(null);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Titulo"
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descripcion"
                    value={descripcion}
                    onChangeText={setDescripcion}
                />
                <TouchableOpacity style={styles.btnPrimary} onPress={guardarTarea}>
                    <Text style={styles.btnText}>{editingId ? "Actualizar" : "Agregar"}</Text>
                </TouchableOpacity>
                {editingId ? (
                    <TouchableOpacity style={styles.btnSecondary} onPress={limpiarFormulario}>
                        <Text style={styles.btnText}>Cancelar</Text>
                    </TouchableOpacity>
                ) : null}
            </View>

            <View style={styles.buscar}>
                <TextInput
                    style={styles.buscarInput}
                    placeholder="Buscar por ID"
                    keyboardType="numeric"
                    value={busquedaId}
                    onChangeText={setBusquedaId}
                />
                <TouchableOpacity style={styles.btnBuscar} onPress={buscarTarea}>
                    <Text style={styles.btnText}>Buscar</Text>
                </TouchableOpacity>
            </View>

            {resultado ? (
                <View style={styles.card_search}>
                    <Text style={styles.titulo}>{resultado.titulo}</Text>
                    <Text>{resultado.descripcion}</Text>
                </View>
            ) : null}

            <ScrollView>
                {tasks.map((task) => (
                    <View key={task.id} style={styles.card}>
                        <Text style={styles.titulo}>{task.titulo}</Text>
                        <Text>{task.descripcion}</Text>
                        <View style={styles.acciones}>
                            <TouchableOpacity style={styles.btnEdit} onPress={() => editarTarea(task)}>
                                <Text style={styles.btnText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnDelete} onPress={() => borrarTarea(task.id)}>
                                <Text style={styles.btnText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    form: {
        marginBottom: 16,
    },
    buscar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 16,
    },
    buscarInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 8,
    },
    card: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        backgroundColor: "#fafafa",
    },
    card_search: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        backgroundColor: "#fff",
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 16,
    },
    acciones: {
        flexDirection: "row",
        gap: 10,
        marginTop: 12,
    },
    btnPrimary: {
        backgroundColor: "#007AFF",
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 8,
    },
    btnSecondary: {
        backgroundColor: "gray",
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 8,
    },
    btnBuscar: {
        backgroundColor: "#007AFF",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
        alignItems: "center",
    },
    btnEdit: {
        flex: 1,
        backgroundColor: "#34c759",
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
    },
    btnDelete: {
        flex: 1,
        backgroundColor: "#ff3b30",
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontWeight: "600",
    },
});
