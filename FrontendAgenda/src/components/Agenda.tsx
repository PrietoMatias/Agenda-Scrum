import { getDairies } from "../services/methods/diary.api"
import { useState, useEffect } from "react"
import { IDiary } from "../interfaces/Diary"

const Agenda = () => {
  const [diaries, setDiaries] = useState<IDiary[]>([]);

  const getData = async()=>{
    try {
      const diaries = await getDairies();
      console.log(diaries)
      setDiaries(diaries);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])


  return (
    <>
      <h1>Agenda</h1>
      {
        Array.isArray(diaries) && diaries.length > 0 ? (
          diaries.map((d) => (
            <div key={d._id}>
              <h2>{d.title}</h2>
              <p>{d.description}</p>
              <p>{d.date.toString()}</p>
            </div>
          ))
        ) : (
          <h2>No hay diarios para mostrar</h2>
        )
      }
    </>
  );
  
}

export default Agenda