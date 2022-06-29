import "./Item.css"
const Item = ({card}) => {
 const {name,image,options} = card;
  return (
    <div className="card">
     <img className="card-logo" src={image} alt="" />
     <h3 className="card-title">{name}</h3>
    </div>
  );
};
export default Item;