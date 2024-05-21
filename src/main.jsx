import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'
import App from './App'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './redux/store';

//history tương tự navigate dùng để chuyển hướng trang ở 1 trang không phải component
export const historyRouter = createBrowserHistory();


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

//window: ctrl + space
//mac: option + esc


