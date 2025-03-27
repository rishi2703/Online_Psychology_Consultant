 import { ToastContainer, toast } from 'react-toastify'
//  import { useEffect } from 'react';
function Counsellors() {
 

  const counsellors = [
    {
      title: "Dr. Shailendra Tiwari",
      description: "Expert in family counseling and Relationship Issue." ,
      expreince:" 9+ year of Expreince",
      image: "/shailendrasir.jpg",
    },
    {
      title: "Dr. Sunita Gond",
      description: "Career Guidance and Child Trauma Specialist",
      expreince:" 16+ year of Expreince",
      image: "/image.png",
    },
    {
      title: "Mrs.Neha Saxena",
      description: "Specialist in Parenting guidance and  Women centric.",
      expreince:" 4+ year of Expreince",
      image: "/image.png",
    },
    {
      title: "Miss. Shruti Tiwari ",
      description: " Expertise in Mood Disorder & EmotinalRegulation .",
      expreince:" 2+ year of Expreince",
      image: "/shrutimam.png",
    },
   
  ];

  const handleBookSession = (counsellor) => {
    toast.success(`Session booked with ${counsellor.title} ✅`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };
 
  return (
    <div className="Counseller-page">
    <div className="Counseller_bgimg">
      <div className="intro-section">
        <div className="intro-texts" >
          <h1>
            Talk to Top Rated <br />
            Counselors Online
          </h1>
          <h6>
            All of our online Counsellors hold a Masters Degree in Psychology  </h6> <h6>
            and undergo over 400+ hours of rigorous training and supervision.</h6> <h6>
            With expertise in various psychotherapeutic techniques,</h6> <h6>they have
            assisted 500K+ clients to deal with the toughest </h6><h6>life challenges and
            thrive in personal and professional space.</h6>
         
        </div >
        <div className="intro-image">
          <img src="https://www.betterlyf.com/images/con-banner.svg" alt="" />
        </div>
      </div>

      {/* Counsellors Section */}

      <div className="counsellors-container">
        {counsellors.map((counsellor, index) => (
          <div key={index} className="counsellor-card">
            <img
              src={counsellor.image}
              alt={`${counsellor.title} image`}
              className="counsellor-image"
            />
            <h6>{counsellor.title}</h6>
            <p>{counsellor.description}</p>
            <p>{counsellor.expreince}</p>
        {/* profile Button */}
              <button className="profile-button">check profile</button>
              <br />
              <button className="book-session-button" onClick={() => handleBookSession(counsellor)}>
                Book Session
              </button>
          </div>
          
        ))}
         
      </div>
      <ToastContainer>

</ToastContainer>
 {/* Book Session Button */}

 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        
      </div>
      <ToastContainer />
    </div> 
    
    </div> 
    
  );
  
}
export default Counsellors;
