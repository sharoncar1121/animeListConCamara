import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export function Camara() {
  const [permiso, setPermiso] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturaImagen, setCapturaImagen] = useState(null); 
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setPermiso(status === 'granted');
    })();
  }, []);

  const rotarCamara = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const tomarFoto = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        console.log('Foto capturada:', uri);
        setCapturaImagen(uri); 
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {permiso === false && <Text>No hay acceso a la camara</Text>}
      {permiso === null && <View />}
      {permiso && (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={rotarCamara}>
              <Text style={styles.text}>Rotar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={tomarFoto}>
              <Text style={styles.text}>Tomar foto</Text>
            </TouchableOpacity>
          </View>
          {capturaImagen && ( 
            <View style={styles.preview}>
              <Image source={{ uri: capturaImagen }} style={styles.previewImage} />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  preview: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    width: 150,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
