import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile from "../assets/profile.png";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box, Grid, Icon, Paper, styled
} from '@mui/material';
import axios from 'axios';
import TokenService from '../utils/tokenAccess';

const Profile = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newFullName, setNewFullName] = useState('');
  const [newBio, setNewBio] = useState('');

  useEffect(() => {
    
  }, []); 

  const handleProfileSubmit = async () => {
  }

  return (
    <Container maxWidth="sm">
      <Typography marginTop={2} variant="h4" align="center" gutterBottom>
        پروفایل
      </Typography>
      <TextField
        label="نام کاربری"
        variant="outlined"
        fullWidth
        // multiline
        rows={4}
        margin="normal"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <TextField
        label="ایمیل"
        variant="outlined"
        fullWidth
        // multiline
        rows={4}
        margin="normal"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      
      <TextField
        label="رمز عبور"
        variant="outlined"
        fullWidth
        // multiline
        rows={4}
        margin="normal"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <TextField
        label="نام کامل"
        variant="outlined"
        fullWidth
        // multiline
        rows={4}
        margin="normal"
        value={newFullName}
        onChange={(e) => setNewFullName(e.target.value)}
      />
      <TextField
        label="بیو"
        variant="outlined"
        fullWidth
        // multiline
        rows={4}
        margin="normal"
        value={newBio}
        onChange={(e) => setNewBio(e.target.value)}
      />
      <Typography marginTop={2} variant="h6" align="center" gutterBottom>
        <Button variant="contained" color="primary" onClick={handleProfileSubmit}>
          ارسال
        </Button>
      </Typography>
    </Container>

  );
};

export default Profile;
