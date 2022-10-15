import { ContextProvider } from '@/Context'
import { store } from '@/redux'
import { Home } from '@/views'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharacterDetails, Header, Layout } from '@/components'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/character/:id' element={<CharacterDetails />} />
              <Route path='*' element={<h1>No found</h1>} />
            </Routes>
          </Layout>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
