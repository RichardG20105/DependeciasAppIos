import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navegador from './src/navegador/Navegador';
import { ProveedorPermisos } from './src/contexto/ContextoPermisos';
import { ActivityIndicator, Image, LogBox, Text, View, StyleSheet, Dimensions } from 'react-native';
import { ProovedorSesion } from './src/contexto/ContextoSesion';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

const {width} = Dimensions.get('window')
const EstadoApp = ({ children}:any)=>{
  return (
      <ProveedorPermisos>
          {children}
      </ProveedorPermisos>
  )
}

const App = () => {
  const [EstadoCarga, setEstadoCarga] = useState(false)

  useEffect(() => {
    setEstadoCarga(true)
  }, [])
  
  useEffect(() => {
    setTimeout(() =>{setEstadoCarga(false)},1500)
  }, [EstadoCarga])
  
  return (
    <NavigationContainer>
      <EstadoApp>
        <ProovedorSesion>
      {!EstadoCarga && 

          <Navegador />}
          { EstadoCarga && 
    <View style ={{
      top: 250
    }}>
    <Image style={{width: 100, height: 150, left:width*0.40, marginBottom: 10}} source={require('./src/assets/InicioSesion/LogoSesion.png')} resizeMode={'stretch'}/>
    <Text style={style.TextoCarga}>LODES - ESPOCH</Text>
  <ActivityIndicator
  size={50}
  color="#FF6347"
  />
</View>
}
        </ProovedorSesion>
      </EstadoApp>
    </NavigationContainer>
  ) 
}

const style = StyleSheet.create({
  
  TextoCarga: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: 'bold',
    paddingBottom: 20
}
})
export default App;