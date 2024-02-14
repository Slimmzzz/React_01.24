import { store } from './components/redux/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './components//router/Router'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
