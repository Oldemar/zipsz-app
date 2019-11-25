import { observable, action, decorate } from 'mobx'
import { Dimensions } from 'react-native'

class AppStore {

  WIDTH = Dimensions.get('window').width;
  HEIGHT = Dimensions.get('window').height;
  cameraConfigs = {
    zoomValue: 0,
  };

    isLoadingComplete = false;
    changeLoadingStatus = () => {
        this.isLoadingComplete = !this.isLoadingComplete
    };
    region = {
        latitude : 0,
        longitude : 0,
        latitudeDelta : 0.922,
        longitudeDelta : 0.0421,
    };
    initializeCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0155,
          longitudeDelta: 0.0155,
        };
        this.region = region;
        } ),
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    };
}

decorate(AppStore, {
  HEIGHT: observable,
  WIDTH: observable,
  region: observable,
  isLoadingComplete: observable,
  changeLoadingStatus: action,
  initializeCurrentLocation: action,
});

const appStore = new AppStore();

export default appStore;
