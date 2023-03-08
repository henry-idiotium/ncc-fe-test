import "./style.css";

export default function Sidebar() {
    return (
        <>
            <div className="app-sidebar">
                <a href="#" className="nav-item nav-home">
                    <span>Home</span>
                </a>
                <a href="#" className="nav-item">
                    <span>Services</span>
                </a>
                <a href="#" className="nav-item">
                    <span>News</span>
                </a>
                <a href="#" className="nav-item">
                    <span>Blog</span>
                </a>
            </div>
        </>
    );
}
