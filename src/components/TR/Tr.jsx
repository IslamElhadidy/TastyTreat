import React from 'react'
import { Link } from 'react-router-dom'
import './Tr.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/CartSlice'

const Tr = ({item}) => {

    const dispatsh = useDispatch()

    const deleteItem = () => {
      dispatsh(cartAction.removeItem(item.id))
    }

  return (
    <>
        <tr>
            <td><Link to={`/foods/${item.id}`}><img style={{width:'50px'}} src={item.image01} alt="" /></Link></td>
            
            <td className='title'>{item.title}</td>
            <td>{item.price} $</td>
            <td>{item.quantity}</td>
            <td><i class="ri-chat-delete-fill" style={{color:'#df2020' , fontSize:'20px', cursor:'pointer'}} onClick={deleteItem}></i></td>
        </tr>
    </>
  )
}

export default Tr