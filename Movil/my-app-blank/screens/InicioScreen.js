import { View, Text, Button, StyleSheet } from "react-native";

export default function InicioScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Inicio</Text>
            <Button
                title="Ir a Detalle"
                onPress={() => navigation.navigate('Detalle')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
        