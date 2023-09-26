import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <div className="navbar">
        <h1> The Dojo Blog </h1>
            <div className="links">
                <Link to= "/"> Home</Link>
                <Link to= "/create" style = {{ 
                    color: "black",
                    backgroundColor: "#f4a236",
                    borderRadius: "8px"
                 }}> New Blog </Link>
            </div>
        </div> 
     );
}
 
export default NavBar;