import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.6561993,
          longitude:  115.2098209
        },
        title: 'Denpasar Cineplex',
        subtitle: 'Jalan M.H. Thamrin No.69, Pemecutan, Denpasar Bar., Kota Denpasar, Bali 10350,http://www.denpasarcineplex.com/,(0361) 8497688'
      },
      {
        key:2,
        latlng: {
          latitude:-8.7357108,
          longitude:  115.1662909
        },
        title: 'cinemaxx LIPPO MALL kuta',
        subtitle: 'Lippo Mall Kuta Unit LG-15, Jl. Kartika Plaza Lingkungan Segara, Kuta, Kabupaten Badung, Bali 80361,http://www.cinemaxxtheater.com/,(0361) 8978097'
      },
      {
        key:3,
        latlng: {
          latitude: -8.7229694,
          longitude: 115.1822629
        },
        title: 'Galeria XXI Cineplex',
        subtitle: 'Komplek Mall Bali Galleria, Jl. By Pass Ngurah Rai, Kuta, Kabupaten Badung, Bali 80361,http://www.21cineplex.com/,(0361) 767021'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.6732896,
          longitude: 115.2422361
        },
        title: 'Cinemaxx plaza renon',
        subtitle: '2nd & 3rd Floor Plaza Renon, Panjer, Sel., Jl. Raya Puputan I, Sumerta Kelod, East Denpasar, Denpasar City, Bali 80239,http://cinemaxxtheater.com/,-'
      },
      {
        key:5,
        latlng: {
          latitude:-8.6698207,
          longitude: 115.212191
        },
        title: 'Cinema XXI level 21',
        subtitle: 'Lt.4, Jl. Teuku Umar No.1, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali 80113,21cineplex.com,21cineplex.com'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Lokasi Nonton Cinema Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
