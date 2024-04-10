import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'
import toast from 'react-hot-toast';
import { Link , useNavigate} from 'react-router-dom'
const Add = () => {
      const users = {
            fname:"",
            lname:"",
            email:"",
            password:""
      }
      const [user,setUser] = useState(users);

      const navigate = useNavigate();


      const inputHandler = (e) =>{
            const {name,value} = e.target;
            setUser({...user,[name]:value})
            // console.log(user);
            // console.log(value);
      }


      const submitForm = async(e) =>{
            e.preventDefault();
            await axios.post("https://crud-server-e5da.onrender.com/api/create",user)
            .then((response)=>{
                  // console.log(response);
                  toast.success(response.data.msg, {position:"top-right"})
                  navigate("/")
            }).catch(error => console.log(error))
      }


  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add New user</h3>
      <form  className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                  <label htmlFor="fname">First name</label>
                  <input type="text" onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='enter your first name' />
            </div>
            <div className="inputGroup">
                  <label htmlFor="lname">Last name</label>
                  <input type="text" onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='enter your last name' />
            </div>
            <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                  <input type="email" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='enter your Email' />
            </div>
            <div className="inputGroup">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='enter your Password' />
            </div>
            <div className="inputGroup">
                  <button type='submit'>Add User</button>
            </div>
      </form>
    </div>
  )
}

export default Add
