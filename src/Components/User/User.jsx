import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiEdit } from "react-icons/fi";    
import { AiOutlineDelete } from "react-icons/ai";
import "./User.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaSave } from "react-icons/fa";

export const User = ({ index, user ,pageno}) => {
  
  const val = useSelector((state) => state.custom);
  const dispatch = useDispatch();
  
  const [edit, setedit] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [check, setCheck] = useState(0);
  const people = {
    id: id,
    name: name,
    email: email,
    role: role,
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
      setId(user.id);
    }
  }, [user]);

  useEffect(() => {
    if(val.pageno.check==1 && index!=0){
      setCheck(user.id);
      dispatch({
        type:"select",
        payload:user.id,
      })
    }
  }, [val.pageno.check]);

  useEffect(() => {
    if (user) {
      if (val.selected.includes(user.id)) {
        setCheck(user.id);
      } else {
        setCheck(-1);
      }
    }

  }, [val.selected]);

  const handleclick = () => {
      if(index!=0){
        dispatch({
          type: check == user.id ? "deselected" : "select",
          payload: user.id,
        });
      }
      else{
        dispatch({
          type:"pagecheck",
          payload:1-val.pageno.check,
        })
        
      }
  };

  const handleedit = () => {
    setedit(!edit);
    dispatch({
      type: "users",
      payload: people,
    });
  };

  const handledelete = () => {
    dispatch({
      type: "deleted",
      payload: user.id,
    });
  };

  return (
    <div className="usermain" style={{ backgroundColor: check === id || (index==0 && val.pageno.check == 1) ? "#312e2e30" : "white" }}>
      {edit ? (
        <>
          <div className="checkbox" style={{ color: index === 0 ? "gray" : "black" }}>
            <input type="checkbox" checked={(index !== 0 && check == user.id )||(index==0 && val.pageno.check == 1)} onClick={handleclick} />
          </div>
          <div className="name" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Name" : user.name}
          </div>
          <div className="email" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Email" : user.email}
          </div>
          <div className="role" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Role" : user.role}
          </div>
          <div className="action" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Actions" : (
              <>
                <div className="icons">
                  <FiEdit onClick={handleedit} />
                </div>
                <div className="icons" onClick={handledelete}>
                  <AiOutlineDelete style={{ color: "red" }} />
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="checkbox" style={{ color: index === 0 ? "gray" : "black" }}>
            <input type="checkbox" onClick={handleclick} />
          </div>
          <div className="name" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Name" : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />}
          </div>
          <div className="email" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Email" : <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />}
          </div>
          <div className="role" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Role" : <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />}
          </div>
          <div className="action" style={{ color: index === 0 ? "gray" : "black" }}>
            {index === 0 ? "Actions" : (
              <>
                <div className="icons">
                  <FaSave onClick={handleedit} />
                </div>
                <div className="icons" onClick={handledelete}>
                  <AiOutlineDelete style={{ color: "red" }} />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

