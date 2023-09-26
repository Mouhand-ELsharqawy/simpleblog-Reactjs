import { useHistory,useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/"+id)

    const history = useHistory();

    const handleDelteBlog = ()=>{
        fetch("http://localhost:8000/blogs/"+id,{
            method:"DELETE"
        }).then(()=>{
            console.log('blog deleted')
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details"> 
            <h2> Blog Details By Id: { id }</h2>
            {error && <div> {error.message} </div> }
            { isPending && <div> Loading... </div> }
            { blog &&
             <div>
                <h3> {blog.title} </h3>
                <h4> written by { blog.author } </h4>
                <div> { blog.body } </div>   
                <button onClick={handleDelteBlog}
                >delete blog</button>
             </div> 
            }
        </div>
     );
}
 
export default BlogDetails;