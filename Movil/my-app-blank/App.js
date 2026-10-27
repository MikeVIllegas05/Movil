import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import InicioScreen from "./screens/InicioScreen";
import DetalleScreen from "./screens/DetalleScreen";
import FormularioScreen from "./screens/FormularioScreen";
import PerfilScreen from "./screens/PerfilScreen";
import LicenciaScreen from "./screens/LicenciaScreen";
import TareasScreen from "./screens/TareasScreen"


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if(route.name === "Inicio"){
              iconName = 'home';
            } else if(route.name === "Detalle"){
              iconName = 'search';
            } else if(route.name === "Perfil"){
              iconName = 'person';
            } else if(route.name === "Licencia"){
              iconName = 'id-card';
            } else if(route.name === "Tareas"){
              iconName = "";
            }

            return <Ionicons name={iconName} color={color} size={size}/>
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray'
        })}      
      >
        <Tab.Screen name="Inicio" component={InicioScreen}/>
        <Tab.Screen name="Detalle" component={DetalleScreen}/>
        <Tab.Screen name="Formulario" component={FormularioScreen}/>
        <Tab.Screen name="Perfil" component={PerfilScreen}/>
        <Tab.Screen name="Licencia" component={LicenciaScreen}/>
        <Tab.Screen name="Tareas" component={TareasScreen}/>
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Inicio">
    //     <Stack.Screen name="Inicio" component={InicioScreen}/>
    //     <Stack.Screen name="Detalle" component={DetalleScreen}/>
    //     <Stack.Screen name="Formulario" component={FormularioScreen}/>
    //     <Stack.Screen name="Perfil" component={PerfilScreen}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}

