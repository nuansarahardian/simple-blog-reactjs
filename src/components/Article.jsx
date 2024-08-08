import posts from "../posts.json"
import { useContext } from "react";
import { GlobalContext } from "../context";


const ArticleStatus = (props) => {
    return props.isNew && <span> --Baru !!</span>;

}

function Article(props) {
    const { user, detail } = useContext(GlobalContext);
    return (
        <>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <small>{props.tags.join(", ")}</small>
            <ArticleStatus isNew={props.isNew} />
            {/* {props.isNew ? " --Baru" : " lama"} */}
            <div>ditulis oleh {user.username}, pada tahun {detail.year}</div>


        </>

    )



}
export default Article;