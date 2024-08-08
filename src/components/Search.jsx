import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");
    const changeSearch = () => {
        props.Input(search);
        console.log(search)

    }
    const searchKeyDown = (e) => {
        if (e.key === "Enter") {
            changeSearch();
        }
    }


    return (
        <>
            <div>
                Cari artikel : <input onInput={(event) => (setSearch(event.target.value))} onKeyDown={searchKeyDown} />
                <button onClick={changeSearch} >Submit</button>
                {/* <div>{Keterangan}</div> */}
                {/* <div>{search}</div> */}
                {/* <div>{props.totalPosts}</div> */}


            </div>


        </>
    )

}
export default Search;