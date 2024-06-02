import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async () => {
    try {
      await axios.post('http://localhost:8082/auth/change-password', { email, newPassword });
      setMessage('Password changed successfully.');
      setNewPassword('');
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage('Error changing password. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: '64px' }}>
        <Typography variant="h4" gutterBottom>
          Change Password
        </Typography>
        <TextField
          fullWidth
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="New Password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleChangePassword}>
          Change Password
        </Button>
        {message && <Typography variant="body1">{message}</Typography>}
      </div>
    </Container>
  );
}

export default ForgotPassword;
