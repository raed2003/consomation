

import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct, removeproduct } from './Redux/Action';
import Example from './Update';

function App() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getproduct())
  },[dispatch])
  const products = useSelector(state=>state.products)
  console.log(products)
  const[search,setSearch]=useState("")
  return (
    <div className="App" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
      <Form.Control onChange={(e)=>setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="search"/>
     {products.filter(e=>e.title.includes(search)).map(e=>
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={e.image} />
       <Card.Body>
         <Card.Title>{e.title}</Card.Title>
         <Card.Text>
          { e.category}
         </Card.Text>
         <Card.Text>
          { e.description}
         </Card.Text>
         <Card.Text>
         price:{ e.price}$
         </Card.Text>
         <Card.Text>
         rating:{e.rating.rate}
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
       <Button variant='danger' onClick={()=>dispatch(removeproduct(e.id))}>Delete</Button>
       <Example product={e}/>
     </Card>)}
        
    </div>
  );
}

export default App;
