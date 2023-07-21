import { setAlertsAction } from "../redux/actions/dataAction";
import store from "../redux/store";
import requestServer from "../utils/getServer";

const dataStore = async () => {
  const response = await requestServer('get-alerts')
  console.log('executou');
  store.dispatch(setAlertsAction(response)) 
}

export default dataStore;
