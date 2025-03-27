import { useEffect, useState } from "react";
import "../pages/ConfessionBox.css"
function Confession(){
  const [confessions, setConfessions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const[editIndex, setEditIndex]= useState(null);


  // LOad DAta from LocalStorage

  useEffect(()=>{
    const storedConfessions = localStorage.getItem("confessions");
    if (storedConfessions) {
      setConfessions(JSON.parse(storedConfessions));
    }
  }, []);

  // Save Data At Local Storage
  const saveToLocalStorage = (data) => {
    localStorage.setItem("confessions", JSON.stringify(data));
    setConfessions(data);
  };
  //  ADD a new data to LocalStorage
 
  const addConfession = () => {
    if (!title.trim() || !description.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }
  
  const newConfession = { Title: title, Description: description };
  saveToLocalStorage([...confessions, newConfession]);
  setTitle("");
  setDescription("");
};

// Edit confession
const editConfession = (index) => {
  setTitle(confessions[index].Title);
  setDescription(confessions[index].Description);
  setEditIndex(index);
};

// Update confession
const updateConfession = () => {
  if (!title.trim() || !description.trim()) {
    alert("Title and Description cannot be empty!");
    return;
  }

  let updatedConfessions = [...confessions];
  updatedConfessions[editIndex] = { Title: title, Description: description };
  saveToLocalStorage(updatedConfessions);
  setTitle("");
  setDescription("");
  setEditIndex(null);
};

// Delete confession
const deleteConfession = (index) => {
  const filteredConfessions = confessions.filter((_, i) => i !== index);
  saveToLocalStorage(filteredConfessions);
};
  return (
    <>
      <div className="Confession-container">
      <div className="Confession-box">
      <p className="heading">Confession Box</p>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {editIndex !== null ? (
          <button className="update-btn" onClick={updateConfession}>
            Update Confession
          </button>
        ) : (
          <button className="add-btn" onClick={addConfession}>
            Add Confession
          </button>
        )}
      </div>
      
        
      </div>

      <h1 className="Show-Confession">All Confessions</h1>
      <div className="confession-list">
        {confessions.map((confession, index) => (
          <div key={index} className="confession-card">
            <h4> <b>Title</b>: {confession.Title}</h4>
            <p> <b>Describtion:</b> {confession.Description}</p>
            <div className="button-group">
              <button className="edit-btn" onClick={() => editConfession(index)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteConfession(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );

};

export default Confession;


