// ForumPage.js
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
} from '@mui/material';
import axios from 'axios';
import TokenService from '../utils/tokenAccess';

const UserAdmin = () => {
    const [users, setUsers] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddUser = async () => {
    }

    const handlePostClick = (userEmail) => {
        console.log(userEmail)
        // const post = users.find((p) => p._id === postId);
        // setSelectedPost(post);
        // navigate(`/post/${postId}`);
    };

    return (
        <Container maxWidth="sm">
            <Typography marginTop={2} variant="h4" align="center" gutterBottom>
                مدیریت کاربر‌ها
            </Typography>
            <List>
                {users.map((user) => (
                    <ListItem key={user.email}>
                        <Link to={`/user-admin/${user.email}`} onClick={() => handlePostClick(user.email)}>
                            <strong>{user.email}</strong>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6" align="center" gutterBottom>
                <Button variant="contained" color="primary" onClick={() => setIsDialogOpen(true)}>
                    ایجاد کاربر جدید
                </Button>
            </Typography>

            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <DialogContent>
                    <TextField
                        label="نام کاربری"
                        variant="outlined"
                        fullWidth
                        // multiline
                        rows={4}
                        margin="normal"
                    // value={newPostText}
                    // onChange={(e) => setNewPostText(e.target.value)}
                    />
                    <TextField
                        label="ایمیل"
                        variant="outlined"
                        fullWidth
                        // multiline
                        rows={4}
                        margin="normal"
                    // value={newPostText}
                    // onChange={(e) => setNewPostText(e.target.value)}
                    />
                    <TextField
                        label="رمز عبور"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    // value={newPostTopic}
                    // onChange={(e) => setNewPostTopic(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsDialogOpen(false)} color="secondary">
                        لغو
                    </Button>
                    <Button onClick={handleAddUser} color="primary">
                        ایجاد
                    </Button>
                </DialogActions>
            </Dialog>

            {/* {error && (
                <Typography variant="body1" color="error" gutterBottom>
                    {error}
                </Typography>
            )} */}

        </Container>
    );
};

export default UserAdmin;
