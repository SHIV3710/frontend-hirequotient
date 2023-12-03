    import { createReducer } from '@reduxjs/toolkit';

    const initial = {
        pageno : {
            val:1,
            check:0,
            checked:false,
        },
        selected : [],
        search: "",
        delete:-1,
        user:[],
        length:0,
    };

    export const customerReducer = createReducer(initial,{
        change: (state,action) => {
            state.pageno.val = action.payload;
        },
        pagecheck: (state, action) => {
            state.pageno.check = action.payload;
            if(state.pageno.check==0){
                state.selected=[];
            }
        },
        
        changesss:(state,action) => {
            state.pageno += action.payload;
        },
        select: (state, action) => {
            const itemToAdd = action.payload;
            
            if (!state.selected.includes(itemToAdd)) {
              state.selected.push(itemToAdd);
            }
          },
        deselected: (state, action) => {
            const ind = state.selected.indexOf(action.payload);
            state.selected.splice(ind,1);
          },
           
        searched:(state,action) => {
            state.search = action.payload;
        },
        deleted:(state,action) =>{
            state.delete = action.payload;
            const index = state.selected.indexOf(action.payload);
            state.selected.splice(index,1);
            const userToAdd = state.user.find(user => user.id === action.payload);
            const idx = state.user.indexOf(userToAdd);
            state.user.splice(idx,1);
            state.delete=-1;
        },
        users:(state,action)=>{
            state.user = state.user.map((item, index) =>
            item.id === action.payload.id ? action.payload : item
            );

        },
        allusers:(state,action)=>{
            state.user = action.payload;
        },
        deletebulk: (state, action) => {
            const updatedUsers = state.user.filter(item => !state.selected.includes(item.id));
              state.user =  updatedUsers;
              state.selected = [];
              state.pageno.check = 0;
        },
        checklength:(state,action) => {
            state.length = action.payload;
        }
    });