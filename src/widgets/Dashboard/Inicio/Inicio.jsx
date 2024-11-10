import { Estadisticas } from "./Estadisticas"
import { Foto } from "./Foto"
import { Redes } from "./Redes"

export const Inicio = () => {
  return (
    <>
      <section className="relative  ">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <Foto/>
          <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">
            Jenny Wilson
          </h3>
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">
            A social media influencers and singer
          </p>
         <Redes/>
        </div>
      </section>
      <Estadisticas />
    </>

  )
}
