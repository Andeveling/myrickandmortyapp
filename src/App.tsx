import { Characters, Header, Layout } from '@/components'
import { ContextProvider } from '@/Context'

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Header />
        <Characters />
      </Layout>
    </ContextProvider>
  )
}

export default App
