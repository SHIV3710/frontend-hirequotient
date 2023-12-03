import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Page } from './Components/Page/Page';
import { User } from './Components/User/User';
import { useDispatch ,useSelector } from 'react-redux';
import { User1} from './Components/Users/User1';
import { User2} from './Components/Users/User2';
import { User3} from './Components/Users/User3';
import { User4} from './Components/Users/User4';
import { User5} from './Components/Users/User5';

function App() {
  const dispatch = useDispatch();
  const [usr, setusr] = useState([]);

  async function logMovies() {
    const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
    const data = await response.json();
    setusr(data);
    dispatch({
      type: "allusers",
      payload: data,
    })
  }

  let val = useSelector(state => state.custom);

  useEffect(() => {
    logMovies();
  }, [])

  const del = val.delete;
  const user = val.user;

  useEffect(() => {
    const result = user.filter(item => item.id !== del);
    if (user.length > 0) {
      dispatch({
        type: "lengthed",
        payload: result.length,
      })
      dispatch({
        type: "allusers",
        payload: result,
      })
    }
  }, [del])

  const [searchResult, setSearchResult] = useState([]); 

  useEffect(() => {
    const result = val.user.filter(
      (item) => item.name.toLowerCase().startsWith(val.search.toLowerCase()) || item.email.toLowerCase().startsWith(val.search.toLowerCase()) || item.role.toLowerCase().startsWith(val.search.toLowerCase())
    );
      setSearchResult(result); 

      dispatch({
        type:"checklength",
        payload:result.length,
      })
  }, [val.search])

  let res = [];

  res = searchResult.slice(0 + 10 * (val.pageno.val - 1), 10 + 10 * (val.pageno.val - 1));

  if(val.search.length==0){
    res = user.slice(0 + 10 * (val.pageno.val - 1), 10 + 10 * (val.pageno.val - 1));
    dispatch({
      type:"checklength",
      payload:user.length,
    })
  }

  let content;

  if (val.pageno.val === 1) {
    content = (
        <User1 data={res} index={val.pageno.val}/>
    );
  } else if (val.pageno.val === 2) {
    content = (
      <>
       <User2 data={res} index={val.pageno.val}/>
      </>
    );
  } else if (val.pageno.val === 3) {
    content = (
      <>
        <User3 data={res} index={val.pageno.val}/>
      </>
    );
  } else if (val.pageno.val === 4) {
    content = (
      <>
        <User4 data={res} index={val.pageno.val}/>
      </>
    );
  } else if (val.pageno.val === 5) {
    content = (
      <>
        <User5 data={res} index={val.pageno.val}/>
      </>
    );
  }

  return (
    <div className='MAIN'>
      <Navbar/>
      <div className="users">
        {content}
      </div> 
      <Page/> 
    </div>
  );
}

export default App;
