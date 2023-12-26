import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Avatar,
  Typography,
  Paper
} from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { validateEmail, validatePhoneNumber } from '../helpers/validations';
import BlankProfile from '../assets/images/blank-profile.png';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledContainer = styled('div')`
  margin-top: ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin: 10px;
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.primary};
    heigt: '80px';
  }
`;

const StyledForm = styled('form')`
  && {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

const StyledSubmitButton = styled(Button)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0, 2)};
  }
`;

const UserForm = ({ isUpdate, existingUserData, onSubmit, handleDeleteUser }) => {
  const [formData, setFormData] = useState({
    id: isUpdate ? existingUserData.id : '',
    role: isUpdate ? existingUserData.role : '',
    firstName: isUpdate ? existingUserData.firstName : '',
    lastName: isUpdate ? existingUserData.lastName : '',
    username: isUpdate ? existingUserData.username : '',
    phone: isUpdate ? existingUserData.phone : '',
    email: isUpdate ? existingUserData.email : '',
    image: isUpdate ? existingUserData.image : ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields before submitting
    const emailError = validateEmail(formData.email);
    const phoneNumberError = validatePhoneNumber(formData.phone);

    if (emailError || phoneNumberError) {
      setErrors({
        email: emailError,
        phone: phoneNumberError
      });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <StyledContainer>
      <StyledAvatar>
        <img
          src={formData.image || BlankProfile}
          alt="Profile"
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        />
      </StyledAvatar>
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h5">
          User info
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Firstname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select value={formData.role} onChange={handleChange} name="role">
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>

          <Typography component="h1" variant="h5">
            Contact info
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            helperText={errors.email}
            error={Boolean(errors.email)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            helperText={errors.phone}
            error={Boolean(errors.phone)}
          />

          <StyledSubmitButton type="submit" fullWidth variant="contained">
            {isUpdate ? 'Update' : 'Create'}
          </StyledSubmitButton>
          {isUpdate ? (
            <StyledSubmitButton
              type=""
              startIcon={<DeleteIcon />}
              fullWidth
              onClick={() => handleDeleteUser(existingUserData.id)}
              variant="outlined">
              Delete
            </StyledSubmitButton>
          ) : (
            <StyledSubmitButton type="reset" fullWidth variant="outlined">
              Cancel
            </StyledSubmitButton>
          )}
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
};

UserForm.propTypes = {
  isUpdate: PropTypes.bool,
  existingUserData: PropTypes.object,
  onSubmit: PropTypes.func,
  handleDeleteUser: PropTypes.func
};

export default UserForm;
