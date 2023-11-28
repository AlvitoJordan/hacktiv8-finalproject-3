import { Router } from "./src/router";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <FlashMessage position="top" />
    </Provider>
  );
}
