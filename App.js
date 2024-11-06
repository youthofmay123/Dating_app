import RootComponent from './src/view/index';
import { Provider } from 'react-redux';
import store from './src/redux/store';
export default function App() {
    return (
        <Provider store={store}>
            <RootComponent />
        </Provider>
    );
}
