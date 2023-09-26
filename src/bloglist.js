import { Link } from "react-router-dom";
const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h1> { title } </h1>
        { blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <Link to ={'/blogs/'+blog.id} style = {{ 
                    textDecoration: "none"
                 }}> 
                    <h2> {blog.title} </h2>
                    <h2 style={{ 
                        color:"black"
                     }}> { blog.author } </h2>
                </Link>
            </div>    
        ))}
        </div>
     );
}
 
export default BlogList;