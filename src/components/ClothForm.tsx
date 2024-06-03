import { useState } from "react"
import './products.css'
import ClothCard from "./ClothCard"
import products from "../assets/products"

interface Product {
  name: string;
  size: string;
  description: string;
  price: number;
  img: string;
}


function CloathForm() {
  const [cloth, setCloth] = useState<Product[]>(products)
  const [name , setName] = useState<string | undefined>('')
  const [price , setPrice] = useState<number | string | undefined>(0)
  const [img , setImg] = useState<string | undefined>('')
  const [description , setDescription] = useState<string | undefined>('')
  const [size , setSize] = useState<string | undefined>('')
  const event = (e:any) => {
    e.preventDefault()
    setCloth((prev:Product[] | any) => [...prev,{name,size,description,price,img}])    
  }
  
  return (
    <div>
      <h2>adicione um produto</h2>
      <form className="form-container">
      <input type="text"
        value={name}
        placeholder="Nome do produto"
        onChange={(e) => setName(e.target.value)}
        />
        <input type="text"
        placeholder="Tamanho do produto(p,m,g)"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        />
        <input type="text"
        placeholder="descrição do Produto"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <input type="text"
        placeholder="link da imgm do produto"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        />
        <input type="number"
        placeholder="valor do produto"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={(e) => event(e) } >criar</button>
      </form>
      <div className='products'>    
      <h1>Nossos Produtos</h1>
    <div className='existent-products'>
    {cloth.map(({name,img,price,description}) => {      
      return <ClothCard key={name} name={name}  price={price} description={description} img={img}/>    
    })}
    </div>
  </div>
            
    </div>
    
)
}


export default CloathForm