import { useState } from 'react';
import {View, Image, StyleSheet, Pressable, Modal, Text, TouchableOpacity, Alert} from 'react-native'
import { CModal } from './CModal';


export const EFlatList = ({src, titulo, descripcion}) => {
    const [modalVisible, setModalVisible] = useState(false)

    return <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Sigue viendo nuestro contenido!');
            setModalVisible(!modalVisible);
            }}>
            <CModal
            titulo={titulo} descripcion={descripcion} modalVisible={modalVisible} setModalVisible={setModalVisible} textoBoton = "Ver ahora" textoBoton2 = "Descargar"
             />
        </Modal>
        <View style={{paddingTop: 50, flexDirection: "row"}}>
        <Image 
            style={{width: 65, height: 65, marginRight: 10, borderRadius: 25}}
            source={{uri: src}}
        />
        <View style={{flexDirection: "column"}}>
        <Text>
            {titulo}
        </Text>
        <Text>
            {descripcion}
        </Text>
        </View>
    </View>
    </TouchableOpacity>
}
