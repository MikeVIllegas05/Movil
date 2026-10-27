import { View, Text, Button, StyleSheet } from "react-native";

export default function InicioScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pantalla de Perfil</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginTop: 50,
    }   
});    
        