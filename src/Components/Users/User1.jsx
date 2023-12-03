import React, { useEffect } from 'react'
import { User } from '../User/User'
import "./User1.css";
import { useDispatch } from 'react-redux';

export const User1 = ({data,index}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"pagecheck",
      payload:0
    })
  },[])
  return (
    <div className = "usermais">
    <User index={0} pageno={1} user = {data}/>
      {data.map((item,index)=>{
        return <User index = {index+1} user = {item} check={false}/>
      })}
    </div>
  )
}
