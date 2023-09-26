import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('honda');
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e)=>{
        
        setIsPending(true)

        e.preventDefault();

        const blog = { title, body, author }

        fetch("http://localhost:8000/blogs/",{
        method: 'Post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(1) ir history.go(1) for forword one step or back one step
            history.push('/');
    })
    }


    return ( 
        <div className="create">
            <h2> create new blog from here </h2>
            <form onSubmit={handleSubmit}>
            <label>Enter Title:</label>
            <input type="text" required 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}  
              />


            <label>Enter Body:</label>
            <textarea 
            required
            value={body}
            onChange={(e)=> setBody(e.target.value)}
            ></textarea>

            <label>Enter Author:</label>
            <select
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="honda"> Honda </option>
                <option value="kramela"> Mario </option>
            </select>


            { !isPending && <button type="submit">Add Blog</button> }
            { isPending && <button type="submit" disabled>Adding Blog...</button> }

            <p> { title } </p>
            <p> { body } </p>
            <p> { author } </p>
            </form>
        </div>
     );
}
 
export default Create;