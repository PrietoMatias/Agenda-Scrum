import { getDairies } from "../services/methods/diary.api"
import { useState, useEffect } from "react"
import { IDiary } from "../interfaces/Diary"

const Agenda = () => {
  const [diaries, setDiaries] = useState<IDiary[]>([]);

  const getData = async()=>{
    try {
      const diaries = await getDairies();
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
      diaries.map((d)=>{
        return <div key={d._id}>
          <h2>{d.title}</h2>
          <p>{d.description}</p>
          <p>{d.date.toString()}</p>
        </div>
      })
    }

    </>
  )
}

export default Agenda