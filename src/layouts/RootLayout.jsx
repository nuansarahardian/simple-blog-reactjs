import { Link, Outlet } from "react-router-dom";
import About from "../pages/about";

function RootLayout() {
    return (
        <>
            <Link to="/"> Home </Link> |
            <Link to="/about"> About </Link> |
            <Link to="/blog"> Blog </Link>
            <Outlet></Outlet>
        </>
    )
}

export default RootLayout;