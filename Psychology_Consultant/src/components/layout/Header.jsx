import {Link} from 'react-router-dom'
export const Header = ()=>{
    return (
        <>
          
            <div className="navbar">
             
                <ul>
                    <li className="nav-item">
                      <Link to="/Dashboard" className="nav-link">
                      Home</Link>  
                    </li>
                  
                    <li className="nav-item">
                      <Link to="/Confession" className="nav-link">
                      Confession Box</Link>  
                    </li>
                    <li className="nav-item">
                      <Link to="/SingIn" className="nav-link">
                      Sign in</Link>  
                    </li>


                </ul>

            </div>
           
        </>
    )
}