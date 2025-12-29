import { useState } from "react"


function App() {
  const title = "Add user"
  const[user,setUser]=useState([])
  const[name,setname]=useState("")
  const[age,setage]=useState("")

  const[update,setUpdate]=useState(false)

  const addUser=()=>{
    const newUser={

      name:name,
      age:age}
    setUser(prevuser=>[...prevuser,newUser])

    setage("")
    setname("")
    console.log(user)
  }

  const editUser=(user)=>{
    setage(user.age)
    setname(user.name)
    setUpdate(true)

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
          {
          update?( <button onClick={()=>editUser(user,index)}>Edit user</button>):( <button onClick={addUser}>Add user</button>)
          }
         
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
              {user.map((elemt,index)=>{
                return(
                  <>
                <tr>
                <td>{elemt.name}</td>
                <td>{elemt.age}</td>
                <td className="actionButton">
                  <button onClick={()=>editUser(elemt,index)}>Editer</button>
                  <button>Supprimer</button>
                </td>
              </tr>
                  </>
                )
              })}
              

            </tbody>
          </table>

        </div>
      </div>
    </>
  )


}

export default App
