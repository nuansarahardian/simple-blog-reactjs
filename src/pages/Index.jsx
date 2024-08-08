import { useState } from "react";
import postData from "../posts.json"
import Article from "../components/Article";
import Search from "../components/Search";


function Home() {
    const [posts, setPosts] = useState(postData);
    const [keterangan, setKeterangan] = useState("");


    const onSearchChange = (value) => {
        const lowerCaseValue = value.toLowerCase();
        const filteredPosts = postData.filter((item) =>
            item.title.toLowerCase().includes(lowerCaseValue));
        setPosts(filteredPosts);

        console.log(filteredPosts.length)

        if (filteredPosts.length <= 0) {
            console.log('kosong')

            setKeterangan(<small> tidak ditemukan artikel dengan keterangan: {value}</small>);
        } else {
            setKeterangan(<small> ditemukan {filteredPosts.length} data dengan pencarian kata: {value} </small>);
        }



    }
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => setExternalPosts(json))
    // }, []);
    return (
        <>

            <h1>Nuansa Here</h1>
            <div>{keterangan}</div>
            <Search Input={onSearchChange} />
            {posts.map((props, key) => (
                <Article {...props} key={key} />
            )

            )
            }

            {/* {posts.map((blog, key) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} key={key} />
                )
                
            )} */}
            {/* {posts.map(function (blog, key) {
                return <Article title={blog.title} tags={blog.tags} date={blog.date} key={key} />
            }

            )} */}
            {/* {posts.map((blog, key) => (
                <div key={key}>

                    <h4>{blog.title} </h4>
                    <small>{blog.tags} </small>
                </div>
                // <small> </small>
                // <div>{blog.date} </div>
            )

            )} */}



        </>
    )

}
export default Home;