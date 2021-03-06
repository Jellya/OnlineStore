import '@/styles/index.css'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store.js'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}