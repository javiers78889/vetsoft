import { useLoading } from './hooks/useLoading'
import { ConteoPersonas } from './widgets/Conteo/Conteo'
import { Descripcion } from './widgets/Descripcion/Descripcion'
import { Footer } from './widgets/Footer/Footer'
import { Heroe } from './widgets/heroe/Heroe'
import { Loading } from './widgets/Loading/Loading'
import { Slider } from './widgets/Slider/Slider'
import { Tarifas } from './widgets/Tarifas/Tarifas'
function App() {

  const { isLoading } = useLoading()
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Heroe />
          <Slider />
          <Descripcion />
          <Tarifas />
          <ConteoPersonas/>
          <Footer />
        </>
      )}



    </>
  )
}

export default App
