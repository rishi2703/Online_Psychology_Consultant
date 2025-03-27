import { useState } from "react"
 import { useNavigate } from "react-router-dom";


const SignIn=()=>{
  const [credentials, setCredentials] = useState({
    fullName: "",
    password: "",
  });
  const [error, setError] = useState("");
   const navigate =useNavigate();
  
 
   const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSignIn=(e)=>{
e.preventDefault();

const users = JSON.parse(localStorage.getItem("users")) || [];

const user =users.find((u)=> u.fullName === credentials.fullName && u.password === credentials.password);

if (user) {
  alert("Sign-In Successful!");
  navigate("/Counsellors");
} else {
  setError("Invalid Full Name or Password");
}
};
    return(
      <div className="signin-container">
      <h2 className="signin-heading">Sign in</h2>
      <form className="signin-form" onSubmit={handleSignIn}>
        <div className="form-group">

          <label className="form-label">Full Name</label>
          <input
            className="form-input"
            type="text"
            name="fullName"
            value={credentials.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={credentials.password}
            onChange={ handleChange}
            required
          />
        </div>
         {/* Error Message */}
         {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="signin-button" type="submit">
          Submit
        </button>
        </form>
        <p className="register-link">
        Not registered?{" "}
        <span onClick={() => navigate("/Register")} style={{ color: "blue", cursor: "pointer" }}>
          Click here
        </span>
      </p>
        </div>
    );
};
export default SignIn;