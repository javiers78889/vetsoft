import { Route, Routes } from "react-router-dom"

import { Inicio } from "../widgets/Dashboard/Inicio/Inicio"
import { Navbar } from "../widgets/Dashboard/Navbar"
import { Pacientes } from "../widgets/Dashboard/Pacientes/Pacientes"
import { Visitas } from "../widgets/Dashboard/Visitas/Visitas"
import { Medicinas } from "../widgets/Dashboard/Medicinas/Medicinas"
import { Reportes } from "../widgets/Dashboard/Reportes/Reportes"


export const Dashboard = () => {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="pacientes" element={<Pacientes/>}/>
                <Route path="visitas" element={<Visitas/>}/>
                <Route path="medicinas" element={<Medicinas/>}/>
                <Route path="reportes" element={<Reportes/>}/>

            </Routes>
                

        </>
    )
}
