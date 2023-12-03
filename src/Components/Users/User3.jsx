import React, { useEffect } from 'react'
import { User } from '../User/User'
import "./User1.css";
import { useDispatch } from 'react-redux';

export const User3 = ({data,index}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"pagecheck",
      payload:0
    })
  },[])
  return (
    <div className = "usermais">
    <User index={0} pageno={3}/>
      {data.map((item,index)=>{
        return <User index = {index+1} user = {item}/>
      })}
    </div>
  )
}
