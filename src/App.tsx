import "./App.css";
import Item from "./components/Item";
import Sidebar from "./components/sidebar";

function App() {
    const itemMock = {
        title: "Lorem ipsum dolor sit amet",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
        picture_name: "item-",
    };

    const items = [...Array(3).keys()].map((i) => {
        const item = structuredClone(itemMock);
        item.picture_name = item.picture_name + (i + 1) + ".png";
        return item;
    });

    return (
        <div className="App">
            <Sidebar />
            <div className="app-content">
                <div className="app-content-container">
                    <div className="app-content-wrapper">
                        <div className="top-content">
                            <div className="app-logo">
                                <img
                                    src="/src/assets/logo.png"
                                    alt="app logo"
                                />
                            </div>
                            <div className="app-important-paragraph">
                                <h3>Lorem ipsum dolor sit asmet?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed tristique consequat
                                    placerat. Vestibulum auctor pellentesque
                                    sem, eu posuere erat hendrerit quis.
                                    Maecenas vel consequat turpis. Nam
                                    facilisis, ligula in mattis sodales, augue
                                    justo tristique nulla, sed lacinia ante eros
                                    ut mi. Morbi vitae diam augue. Aliquam vel
                                    mauris a nibh auctor commodo. Praesent et
                                    nisi eu justo eleifend convallis. Quisque
                                    suscipit maximus vestibulum. Phasellus
                                    congue mollis orci, sit amet luctus augue
                                    tristique eu. Donec vulputate odio neque,
                                    sed semper turpis pellentesque a.
                                </p>
                            </div>
                        </div>
                        <div className="bottom-content">
                            {items.map((item, i) => (
                                <Item key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <footer className="app-footer">
                    <div className="app-footer-wrapper">
                        <div className="copyright">
                            <span>Copyright © 2021</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
