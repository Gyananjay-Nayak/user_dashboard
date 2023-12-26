import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getuserRequest, updateUserRequest, deleteUserRequest } from '../../store/actions';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import UserForm from '../../components/userForm';
import { useNavigate } from 'react-router-dom';

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

const UserDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getuserRequest(id));
  }, [dispatch, id]);

  const userDetails = useSelector((state) => state.User.userDetails);
  console.log(userDetails);
  if (!userDetails) {
    // Handle loading state or error
    return <div>Loading...</div>;
  }

  const handleUpdateUser = (e) => {
    console.log('update user', e);
    dispatch(updateUserRequest(e));
  };
  const handleDeleteUser = (id) => {
    dispatch(deleteUserRequest(id));
    navigate(`/user`);
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <UserForm
          onSubmit={handleUpdateUser}
          isUpdate={true}
          existingUserData={userDetails}
          handleDeleteUser={handleDeleteUser}
        />
      </StyledPaper>
    </StyledContainer>
  );
};

export default UserDetails;
