import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Signin.css'
const Signin= () => {
  let initialValue;
  if (localStorage.getItem('User') === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('User'));
  }
  console.log(initialValue);

  const [Data, setData] = useState({});
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data);
  };

  const handleSubmit = () => {
    const user_id = value.length === 0 ? 1 : value[value.length - 1].id + 1;

    const allData = {
      id: user_id,
      ...Data,
    };
    const details = [...value, allData];
    localStorage.setItem('User', JSON.stringify(details));
  };

  return (
    <div className='body'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className='admin-container'style={{backgroundImage:'url(sky.jpg)',height:'50vh',width:'500px',marginLeft:'100px',borderRadius:'50px',marginTop:'400px'}}>
      <h1 align='Center'style={{color:'blue'}}>SignUp</h1>
      <div className='box'>
      <TextField
        id='outlined-basic'
        label='First name'
        name='firstname'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        id='outlined-basic'
        label='Last name'
        name='lastname'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        id='outlined-basic'
        label='Enter your Email'
        name='email'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        id='outlined-basic'
        label='Enter the Password'
        name='password'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        id='outlined-basic'
        label='Confirm Password'
        name='password'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      {/* Use the Link component to navigate to the admin page */}
      <Link to='/Registration'>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Submit
        </Button>
      </Link>
    </div>
    </div>
    </div>
  );
}
export default Signin;