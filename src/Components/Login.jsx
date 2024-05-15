
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  let initialValue;
  if (localStorage.getItem('User') === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('User'));
  }
  console.log(initialValue);

  const [Data, setData] = useState({});
  const [value, setValue] = useState(initialValue);
  const [signupSuccess, setSignupSuccess] = useState(false); // Track signup success

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

    // Set signupSuccess to true after successful submission
    setSignupSuccess(true);
  };

  return (
    <div className= 'body'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className='admin-container' style={{backgroundImage:'url(sky2.jpg)',height:'50vh',width:'500px',marginLeft:'100px',borderRadius:'50px',marginTop:'400px'}}>
      <h1 align='Center' style={{color:'blue'}}>Registration Form</h1>
      <br></br>
      <br></br>
      <div className='box'>
      <TextField
        id='outlined-basic'
        label='Username'
        name='name'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      <br></br>
      <TextField
        id='outlined-basic'
        label='Enter the Password'
        name='password'
        variant='outlined'
        onChange={handleChange}
      />
      <br />
      <br />
      <br></br>
      {/* Render a Link to the admin page if signup was successful */}
      {signupSuccess ? (
        <Link to='/Admin'>
          <Button variant='contained' color='success'>
            Go to Admin Page
          </Button>
        </Link>
      ) : (
        // Render the submit button if signup is not yet successful
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Submit
        </Button>
      )}
      <br></br>
      <h4>
        Already have an account? <Link to='/SignUp'>SignUp</Link>
      </h4>
    </div>
    </div>
    </div>
  );
};

export default Login;