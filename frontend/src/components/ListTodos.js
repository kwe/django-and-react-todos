  import React, { useState, useEffect} from 'react'
  import axios from 'axios'

  function ListTodos() {
    const [data, setData] = useState([])

    useEffect(() => {
      async function loadData(){
        const result = await axios(
          "http://localhost:8000/api"
        );
        setData(result.data)
      }
      loadData()
    },[])

    return(
      <div>
        <ul>
          {data.map( t => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      </div>
    )

  }

  export default ListTodos