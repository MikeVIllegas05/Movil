import { View, Text, Button, StyleSheet } from "react-native";

export default function DetalleScreen({ navigation }) {
    return (
        <View style={style.container}>
            <Text style={style.title}>Pantalla de los Detalles</Text>
            <Button
                title="Regresar al Inicio"
                onPress={() => navigation.navigate('Inicio')}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        marginTop: 50,
    },
});    
        