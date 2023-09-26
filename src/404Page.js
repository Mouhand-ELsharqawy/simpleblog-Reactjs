import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundPage = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p> Page Not Found </p>
            <Link to="/">Back To Home </Link>
        </div>
     );
}
 
export default NotFoundPage;