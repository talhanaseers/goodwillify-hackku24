import React from 'react';
import Button from 'react-bootstrap/Button';

function AppLogin() {
  const buttonStyle = {
    borderRadius: '6px', // Adjust button border radius
    backgroundColor: '#2E2C2C', // Adjust button background color
    borderColor: '#EEEEEE', // Adjust button border color
    color: 'white', // Adjust button text color
    fontWeight: 'bold', // Adjust button text weight
    padding: '10px 20px', // Adjust button padding
    fontSize: '16px' // Adjust button font size
  };

  return (
    <div>
      <Button variant="none" style={buttonStyle}>
        Login or Create an Account to Start Making a Difference
      </Button>
    </div>
  );
}

export default AppLogin;