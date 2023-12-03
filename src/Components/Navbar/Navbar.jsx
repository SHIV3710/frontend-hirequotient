import React , {useState} from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import "./Navbar.css";
import { useDispatch , useSelector} from 'react-redux';


export const Navbar = () => {
  const val = useSelector(state => state.custom);
  const dispatch = useDispatch();
  const setsearch = (e) => {
    dispatch({
      type:"searched",
      payload:e,
    })
    if(val.user.length>0)
    {
      dispatch({
        type:"change",
        payload:1,
      })
    }
  }


  const handlebulkdelete = () => {
      dispatch({
        type:"deletebulk",
        payload:1,

      })
      dispatch({
        type:"change",
        payload:1,
      })
  }
  

  return (
    <div className='navmain'>
            <input className="value" type="text" 
              placeholder='Enter Value...'
              onChange={(e)=>{setsearch(e.target.value)}}
            />
        <div className="delete" onClick={handlebulkdelete}>
            <AiOutlineDelete/>
        </div>
    </div>
  )
}
