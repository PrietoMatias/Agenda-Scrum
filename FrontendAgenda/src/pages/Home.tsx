import { useState } from "react"
import Agenda from "../components/Agenda";
import Contactos from "../components/Contactos";
import Perfil from "../components/Perfil";

const Home = () => {
  const [agenda, setAgenda] = useState(false);
  const [contactos, setContactos] = useState(false);
  const [perfil, setPerfil] = useState(false);

  const handleAgenda = () => {
    setAgenda(true);
    setContactos(false);
    setPerfil(false);
  }

  const handleContactos = () => {
    setAgenda(false);
    setContactos(true);
    setPerfil(false);
  }

  const handlePerfil = () => {
    setAgenda(false);
    setContactos(false);
    setPerfil(true);
  }


  return (
    <>
    <nav>
      <li><a onClick={handleAgenda}>Agenda</a></li>
      <li><a onClick={handleContactos}>Contactos</a></li>
      <li><a onClick={handlePerfil}>Perfil</a></li>
    </nav>
    {agenda && <Agenda />}
    {contactos && <Contactos />}
    {perfil && <Perfil />}
    </>
  )
}

export default Home