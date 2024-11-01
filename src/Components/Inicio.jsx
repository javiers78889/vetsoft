import { Contacto } from "../widgets/Contacto/Contacto"
import { ConteoPersonas } from "../widgets/Conteo/Conteo"
import { Descripcion } from "../widgets/Descripcion/Descripcion"
import { Footer } from "../widgets/Footer/Footer"
import { Heroe } from "../widgets/heroe/Heroe"
import { Slider } from "../widgets/Slider/Slider"
import { Tarifas } from "../widgets/Tarifas/Tarifas"


export const Inicio = () => {
    return (
        <>

            <Heroe />
            <Slider />
            <Descripcion />
            <Tarifas />
            <ConteoPersonas />
            <Contacto />
            <Footer />
        </>
    )
}
