import './products.css'
function ClothCard(props:any) {
  return (
    <div className="cloth-card">
      <h2>{props.name}</h2>
      <img src={props.img}/>
      <p>{props.description}</p>
      <span>{props.price}</span>
    </div>
  )
}

export default ClothCard