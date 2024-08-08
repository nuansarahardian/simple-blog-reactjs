import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
    const params = useParams();
    const [post, setPost] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);

    return (
        <>
           
            <h2>{post.title}</h2>
            <small>{post.body}</small>
        </>
    )
}
export default SinglePost;