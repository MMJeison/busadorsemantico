import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import MainRoutes from "./routes/Routes";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </PersistGate>
  );
}

export default App;
