import { useState } from "react"


function App() {
  const title = "Add user"
  const[user,setUser]=useState([])
  const[name,setname]=useState("")
  const[age,setage]=useState("")

  const addUser=()=>{
    const newUser={name:name,age:age}
    setUser(prevuser=>[...prevuser,newUser])
    setage("")
    setname("")
    console.log(user)
  }


  return (
    <>
      <div className="container">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="Input">
          <input type="text" placeholder="name"  value={name} onChange={(e)=>setname(e.target.value)}/>
          <input type="number" placeholder="Age"  value={age} onChange={(e)=>setage(e.target.value)}/>
          <button onClick={addUser}>Add user</button>
        </div>
        <div className="userList">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>age</td>
                <td className="actionButton">
                  <button>Editer</button>
                  <button>Supprimer</button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </>
  )


}

export default App
