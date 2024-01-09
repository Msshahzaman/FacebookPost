import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import PostComponent from './components/PostsComponent';
import PostImg from './components/PostsComponent/PostImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


function App() {
const [PostData, setPostData] = useState([])

useEffect(()=>{
getAPIData()

},[])


function getAPIData(){
  fetch('https://dummyjson.com/products')
  .then(res=>res.json())
  // .then(res=>console.log(res))
  .then(res=>setPostData(res.products))
}

if(!PostData.length){
  return <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" className='Loader' alt="" />
}


  return (
    // <div className="App">
      <div className='main-body'>

    <PostComponent allPost={PostData}/>


    
    </div>
  );
}

export default App;
