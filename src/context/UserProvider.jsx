import { useLoading } from "../hooks/useLoading"
import { useUser } from "../hooks/useUser"
import { UserContext } from "./UserContext"



export const UserProvider = ({children}) => {
    const {isLoading}= useLoading()
    const {onChange,email,password,onSubmit}= useUser()
  return (
    <UserContext.Provider value={{isLoading,onChange,onSubmit,email,password}}>
        {children}
    </UserContext.Provider>
  )
}
