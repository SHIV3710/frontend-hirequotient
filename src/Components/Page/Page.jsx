import React from 'react'
import "./Page.css";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

export const Page = () => {

    const dispatch = useDispatch();

        const handlepage = (val) => {
            if(val==6 || val==0) return;
                dispatch({
                    type:"change",  
                    payload:val,
                })
        }
        const handleprnx = (value) => {
            dispatch({
                type:"changesss",
                payload:value,
            })
        }

        
    const val  = useSelector(state => state.custom);
    const n = Math.ceil(val.user.length/10);
    
  return (
    <div className="pagemain">
        <div className="count">
        {val.selected.length} out of {val.length} row(s) selected.
        </div>
        <div className="pages">
            <div className="pagecount">
                Pages {val.pageno.val} of {Math.max(1,Math.ceil(val.length/10))}
            </div>
            <div className="noofpages">
            <div className="icon" onClick={() => handlepage(1)}><MdOutlineKeyboardDoubleArrowLeft/></div>
            <div className="icon" onClick={() => handlepage(val.pageno.val-1)}><MdOutlineKeyboardArrowLeft/></div>
            {
                Array.from({ length: Math.max(1,Math.ceil(val.length/10)) }, (_, i) => (
                    <div key={i} className="icon" onClick={() => handlepage(i+1)} style={{backgroundColor:i+1==val.pageno.val?"gray":"white",color:i+1==val.pageno.val?"white":"black"}}>
                    {i + 1}
                    </div>
                ))
            }
            <div className="icon" onClick={() => handlepage(val.pageno.val+1)}><MdOutlineKeyboardArrowLeft style={{transform:"scaleX(-1)"}}/></div>
            <div className="icon" onClick={() => handlepage(n)}><MdOutlineKeyboardDoubleArrowLeft style={{transform:"scaleX(-1)"}}/></div>
            </div>
        </div>
    </div>
  )
}
