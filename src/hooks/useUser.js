import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialLog = {
    "email": "",
    "password": "",
}
export const useUser = () => {
    const [usuario, setUsuario] = useState(initialLog)
    const { email, password } = usuario
    const navigate = useNavigate()

    const onChange = (e) => {
        console.log(e.target.name)

        setUsuario({ ...usuario, [e.target.name]: [e.target.value] })

    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(usuario)
        navigate('/dashboard')

    }
    return {
        onChange,
        email,
        password,
        
        onSubmit

    }
}
