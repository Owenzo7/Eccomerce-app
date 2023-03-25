import ItemCard from "../ItemCard/itemcard.component";
import "./Item-list.styles.css";

const Itemlists = ({ Items }) => (
  <div className="card-list">
    {Items.map((item) => {
      return <ItemCard item={item} />;
    })}
  </div>
);

export default Itemlists;
