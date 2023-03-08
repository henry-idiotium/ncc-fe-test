import "./style.css";

type Props = {
    item: {
        title: string;
        content: string;
        picture_name: string;
    };
};

export default function Item(props: Props) {
    const { item } = props;
    return (
        <div className="app-item">
            <h2 className="item-title">{item.title}</h2>
            <div className="item-content">
                <img
                    className="item-content-img"
                    src={`src/assets/` + item.picture_name}
                    alt={item.picture_name}
                />
                <p className="item-content-paragraph">{item.content}</p>
            </div>
        </div>
    );
}
