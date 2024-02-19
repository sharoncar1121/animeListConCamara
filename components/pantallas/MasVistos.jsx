import {View, FlatList} from 'react-native'
import { EFlatList } from '../EFlatList'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../../styles/contenedores';

const DATA = [
    {
      id: 1,
      src: "https://es.web.img3.acsta.net/pictures/19/09/19/14/35/1280346.jpg",
      titulo: "MIRAI NIKKI",
      descripcion: "Romance, Drama, ficcion"
    },
    {
      id: 2,
      src: "https://pics.filmaffinity.com/Inuyasha_Serie_de_TV-281988489-large.jpg",
      titulo: "INUYASHA",
      descripcion: "Romance, Drama, Era Antigua"
    },
    {
      id: 3,
      src: "https://www.latercera.com/resizer/yECqkPZDhIyDMg-DnmtPSi-ayIU=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/NXA4UHX3SRGVFGWOP4TG6TPE3I.jpg",
      titulo: "DEATH NOTE",
      descripcion: "Psicologico, Misterio, Ficcion, Suspenso"
    },
    {
      id: 4,
      src: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a82d60d9f87131b2439208468101c4a6.jpe",
      titulo: "ORANGE",
      descripcion: "Romance, Drama"
    },
    {
      id: 5,
      src: "https://images.saymedia-content.com/.image/t_share/MTc0NDI4ODA0MTg0Mjg2ODU0/animes-like-shigatsu-wa-kimi-no-uso-your-lie-in-april.jpg",
      titulo: "SHIGATSU WA KIMI NO USO",
      descripcion: "Romance, Drama"
    },
    {
      id: 6,
      src: "https://pbs.twimg.com/media/CxTNlVpXgAAAaVE?format=jpg&name=4096x4096",
      titulo: "NARUTO",
      descripcion: "Ficcion, Pelea, Magia, Suspenso"
    },
    {
      id: 7,
      src: "https://images.justwatch.com/poster/301588506/s332/temporada-1",
      titulo: "ELFEN LIED",
      descripcion: "Gore, Suspenso"
    },
    {
      id: 8,
      src: "https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      titulo: "FULL METAL ALCHEMIST",
      descripcion: "Magia, Suspenso"
    },
    {
      id: 9,
      src: "https://static.wikia.nocookie.net/doblaje/images/6/69/Los_siete_pecados_capitales_-_Los_prisioneros_del_cielo_-_Poster.png/revision/latest?cb=20211002183327&path-prefix=es",
      titulo: "NANATZU NO TAIZAI",
      descripcion: "Magia, Sobrenatural, Ficcion"
    },
  ]
  
export const MasVistos = () => {
    return <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({item}) => <EFlatList src={item.src} titulo={item.titulo} descripcion={item.descripcion} />}
            keyExtractor={item => item.id}
          />
          <StatusBar style="auto" />
        </View>
}