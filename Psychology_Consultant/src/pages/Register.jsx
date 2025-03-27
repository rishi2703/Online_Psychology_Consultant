import { useState } from "react"
import { useNavigate } from "react-router-dom"
 import { ToastContainer, toast } from 'react-toastify'
 
const Register =()=>{

     const[formData, setFormData] = useState({
      fullName:'',
      phone:'',
      password:'',
      confirmPassword:'',
      email:'',

});
const [error, setError] =useState('');


       const navigate =useNavigate();

      const handleChange = (e)=>{
        const {name,value} = e.target

        setFormData((prevData)=>({
          ...prevData,
          [name]:value
        }))
      }

      const handleRegister = (e) => {

        e.preventDefault(); 

      

        if(formData.password.length<8){
          setError('Password must be 8 character long')
          return;
        }
        if(formData.password !== formData.confirmPassword ){
          setError('Password and Confirm Password Must be same')
          return;
        }
        if(!/[!@#$%^&*()<>."]/.test(formData.password)){
          setError('Password have atLeast One Special Character')
          return;
        }
        if(!/[A-Z]/.test(formData.password)){
          setError('Password have atLeast One Capital Character')
          return;
        }
      
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers =[
          ...existingUsers,{
            fullName:formData.fullName,
            email:formData.email,
            password:formData.password,
            phone:formData.phone
          }
        ];
         // Save updated users to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));


        setError('')
        setFormData({
      fullName:'',
      phone:'',
      password:'',
      confirmPassword:'',
      email:'',
        })

     
        toast.success('Register Successful! ✅', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setTimeout(()=>{
          navigate("/SingIn")
        },4000);
           
      };
      
    return(
<>
<div className="reg-Container" >
<div className="reg-main" >

    <form action="" onSubmit={handleRegister} >
<h2 className="reg-heading"><strong> Registration</strong>
   
</h2>

{/* Name feild */}
<label htmlFor="">Full Name</label>
<input
             className="reg-input"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

{/*Phone Number feild */}
<label htmlFor="">Phone Number</label>
<input 
type="Number"
name="phone"
value={formData.phone}
onChange={handleChange}
className=""
required />


{/* Email feild */}
<label htmlFor="">Email</label>
<input 
type="Email" 
name="email"
value={formData.email}
onChange={handleChange}
className=""
/>

{/* Password feild */}
<label htmlFor="">Password</label>
<input
            // className="form-input"
            type="password"
            name="password"
value={formData.password}
onChange={handleChange}
            required
          />

{/* Check password feild */}
<label htmlFor="">Check Password</label>
<input
 type="password" 
 name='confirmPassword'
 placeholder="Confirm Password"
 value={formData.confirmPassword}
 onChange={handleChange}
 />
 {
  error &&(
    <p style={{color:'red'}}>{error}</p>
  )
 }
<button type="submit" className="reg-button">Register</button>
    </form>
</div>
<ToastContainer>

</ToastContainer>
</div>

</>
    

    )
}
export default Register;