import "./css/app.css";
import HomePage from './pages/home';
import Layout from "./components/layout";
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Layout>
          <HomePage />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
