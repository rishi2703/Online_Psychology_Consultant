
import problems from "./problemsData.json"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
 const navigate = useNavigate();
 const handleButton=()=>{
  navigate("/SingIn")
 }
    return (
      <div  className="dashboard-text">
        <h1 className="big-font">
        &ldquo; Online Therapy can &rdquo;
          <br />
          &ldquo; Help you &rdquo;
        </h1>
        <h1 className="big-font" style={{color:"green"}}>Heal & Thrive</h1>
        <button id="dash-btn" onClick={handleButton} >Get Stronger Now</button>
        <p></p>* Press the Button for Booking the Session
        <img src="/price.png" alt=""  className="price"/>
    


       
        <div className="service-container">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="problem-card"
          >
            <h2>{problem.title}</h2>
            <p>{problem.description}</p>
            <h4>Symptoms:</h4>
            <ol>
              {problem.symptoms.map((symptom, i) => (
                <li key={i}>{symptom}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      </div>
      
    );
  };
  
  export default Dashboard;