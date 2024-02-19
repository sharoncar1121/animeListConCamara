import {View, FlatList} from 'react-native'
import { EFlatList } from '../EFlatList'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../../styles/contenedores';

const DATA = [
    {
      id: 1,
      src: "https://static.wikia.nocookie.net/doblaje/images/f/f1/Frieren-_Beyond_Journey%27s_End_.jpg/revision/latest?cb=20231020174341&path-prefix=es",
      titulo: "FRIEREN",
      descripcion: "Magia, Drama"
    },
    {
      id: 2,
      src: "https://www.tebeosfera.com/T3content/img/T3_numeros/2/0/6Akr-h_020.jpg",
      titulo: "MASHLE",
      descripcion: "Magia, Comedia"
    },
    {
      id: 3,
      src: "https://play-lh.googleusercontent.com/proxy/NSeSBvtTPhqOSenylpxqQL4VeqUuln_InXQeU1VjtDklrAr7Hpi7vVF_9APnTD_LUhJjlcToeA7V4OV_5_hmbT8-w796bOjnWe4K7_tCVSiKzFyrJ2S_xv4l5LonZ6uCD1uXSteEerRWrw4sEPYs51ReLCoQcgxn9FAXsw=w240-h480-rw",
      titulo: "VIOLET",
      descripcion: "Romance, Drama"
    },
    {
      id: 4,
      src: "https://images.cdn1.buscalibre.com/fit-in/360x360/5a/b4/5ab40a7eb0968e3c13a3961d9b466ca3.jpg",
      titulo: "SOLO LEVELING",
      descripcion: "Pelea, Ficcion, Gore"
    },
    {
      id: 5,
      src: "https://pbs.twimg.com/media/FAdlmmHWEAcfMFk?format=jpg&name=4096x4096",
      titulo: "JUJUTSU KAISEN",
      descripcion: "Magia, Suspenso, Drama"
    },
    {
      id: 6,
      src: "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
      titulo: "DEMON SLAYER",
      descripcion: "Ficcion, Pelea, Magia, Suspenso"
    },
  ]
  
export const Nuevos = () => {
    return <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({item}) => <EFlatList src={item.src} titulo={item.titulo} descripcion={item.descripcion} />}
            keyExtractor={item => item.id}
          />
          <StatusBar style="auto" />
        </View>
}