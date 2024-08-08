import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
    const [externalPosts, setExternalPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setExternalPosts(json))
    }, []);

    const totalPages = Math.ceil(externalPosts.length / postsPerPage);

    const currentData = externalPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    )
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }




    return (
        <>
            <h2>Blogs</h2>
            {currentData.map((item, key) => (
                <div key={key}>
                    <Link to={`/blog/${item.id}`}>-{item.title}</Link>
                </div>
            ))}
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </>
    )

}

export default Blog;