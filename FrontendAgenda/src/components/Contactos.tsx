import { useState, useEffect } from "react"
import { IContact } from "../interfaces/Contacts";
import { getAllContacts } from "../services/methods/contacts.api";
const Contactos = () => {
  const [contactos, setContactos] = useState<IContact[]>([]);
  const [info, setInfo] = useState(false);

  const getData = async():Promise<void>=>{
    try {
      const data = await getAllContacts();
      setContactos(data);
    } catch (error) {
      console.log(error)
      throw new Error('Error: ' + error);
    }
  }
  useEffect(()=>{
    getData();
  },[])

  const handleInfo = async()=>{
    setInfo(true);
  }

  return (
    <>
    <h2>Contactos</h2>
    {
      contactos.map((c) => (
        <div key={c._id}>
          <h3>{c.contactName}</h3>
          <p>{c.contactSurname}</p>
          <button onClick={handleInfo}>View Info</button>
          {info && c.contacts.map((i) => (
            <div key={i.email}>
              <p>{i.numberPhone}</p>
              <p>{i.email}</p>
              <p>{i.location}</p>
              <p>{i.socialMedia}</p>
            </div>
          ))}
        </div>
      ))
    }
    </>
  )
}

export default Contactos