import { useState, useEffect } from "react"
import { getUserInfo } from "../services/methods/user.api"
import { IUser } from "../interfaces/User"

const Perfil = () => {
  const [user, setUser] = useState<IUser>()


  const getData = async()=>{
    try {
      const data = await getUserInfo();
      setUser(data);
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener la información del usuario: ' + error);
    }
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <>
    <h2>Información del usuario</h2>
    <div>
      <p>Nombre: {user?.name}</p>
      <p>Apellido: {user?.surname}</p>
      <p>Email: {user?.email}</p>
    </div>
    </>
  )
}

export default Perfil