import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css'; 

const Home = () => {
  return (
    <div style={{backgroundColor:'lightblue',backgroundImage:'url(sky2.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
        <h2>
          <img className='name'src='blogger.jpg'></img>BLOGGER PAGE</h2>
      <h2 style={{justifyContent:'center',textAlign:'center',display:'center'}}>Welcome to blog Page</h2>
      <div style={{justifyContent:'center',alignItems:'center',display:'flex',height:'100vh',border: 'none'}}>
       <Link to='/Login'> <Button  variant="contained"style={{height: '300px',width: '300px',textAlign: 'center',
  justifyContent:'center',backgroundSize: 'cover',border:' none',borderRadius: '300px',display: 'flex',marginRight: '10px',marginLeft: '10px',cursor: 'pointer'}}>
         <img src='icon.jpg'></img>
        </Button></Link>
        <h2 className='text'>admin page</h2>
        <Link to='/Registration'><Button variant="contained"style={{height: '300px',width: '300px',textAlign: 'center',
  justifyContent:'center',backgroundSize: 'cover',border:' none',borderRadius: '300px',display: 'flex',marginRight: '10px',marginLeft: '10px',cursor: 'pointer'}}>
          <img src='icon2.jpg'></img>
        </Button></Link>
        <h2 className='text1'>user page</h2>
      </div>
    </div>
  );
};

export default Home;
