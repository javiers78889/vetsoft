import { Barrita } from "./Barrita"
import { BarritaFoot } from "./BarritaFoot"
import { Tabla } from "./TablaPacientes/Tabla"


export const Pacientes = () => {
    return (
        <section className="bg-gray-50 dark:bg-green-900 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                  <Barrita/>
                   <Tabla/>
                    <BarritaFoot/>
                </div>
            </div>
        </section>

    )
}
