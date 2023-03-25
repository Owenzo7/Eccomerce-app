const ItemCard = ({ item }) => {
  const { id, description, image, title } = item;

  <div className="card-container" key={id}>
    <img alt={`item${title}`} src={image} width={180} height={180} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>;
};

export default ItemCard;
