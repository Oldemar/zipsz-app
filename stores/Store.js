import userStore from './UserStore'
import appStore from './AppStore'
import orderStore from './OrderStore'


class Store {

    AppStore = appStore;
    UserStore = userStore;
    OrderStore = orderStore;

}
const store = window.store = new Store();

export default store;
