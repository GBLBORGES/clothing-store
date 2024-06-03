import products from  '../assets/products'
import ClothCard from './ClothCard'


function ExistentProducts() {    
  return (
    <div className='products'>    
      <h1>Nossos Produtos</h1>
    <div className='existent-products'>
    {products.map(({name,img,price,description}) => {
      return <ClothCard key={name} name={name} price={price}  img={img} description={description}/>    
    })}
    </div>
  </div>
   )
}

export default ExistentProducts