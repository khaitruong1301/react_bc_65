import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'
import App from './App'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './redux/store';
//Cài đặt react query
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
//Cài đặt react query devtool
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

//history tương tự navigate dùng để chuyển hướng trang ở 1 trang không phải component
export const historyRouter = createBrowserHistory();

const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position='right' />
    </QueryClientProvider>
  </Provider>
)

//window: ctrl + space
//mac: option + esc


