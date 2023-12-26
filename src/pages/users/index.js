import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  Fade,
  Box,
  useMediaQuery,
  useTheme,
  Pagination
} from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userListRequest, createuserRequest } from '../../store/users/userActions';
import UserForm from '../../components/userForm';
import UserTable from '../../components/userTable';
import UserTableSmall from '../../components/userTableSmall';

const StyledDiv = styled('div')({
  flexGrow: 1,
  padding: '16px'
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  textAlign: 'center',
  color: 'black'
});

const StyledTableContainer = styled(TableContainer)({
  marginTop: '16px'
});

const StyledCreateButton = styled(Button)({
  margin: 'auto'
});

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const usersPerPage = 10;
  const [totalPages, setTotalPages] = useState(0);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));

  const nextProps = useSelector((state) => ({
    userListData: state.User.userList,
    loading: state.User.loading,
    createUser: state.User.createUser
  }));

  // useEffect(() => {
  //   dispatch(userListRequest());
  // }, []);
  useEffect(() => {
    const limit = usersPerPage;
    const skip = (page - 1) * usersPerPage;
    const payload = {
      limit: limit,
      skip: skip
    };
    dispatch(userListRequest(payload));
  }, [page]);

  useEffect(() => {
    if (nextProps.userListData && nextProps.userListData.users) {
      setUserList(nextProps.userListData.users);
    }
    const totalUsers = nextProps.userListData?.total;
    setTotalPages(Math.ceil(totalUsers / usersPerPage));
  }, [nextProps.userListData]);
  const handleViewButtonClick = (user) => {
    navigate(`/user/${user.id}`, { state: { user: user } });
  };

  const handleCreateButtonClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateUser = (e) => {
    dispatch(createuserRequest(e));
    setOpenModal(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <StyledDiv>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <Typography variant="h4" gutterBottom>
              User List
            </Typography>
          </StyledPaper>
          <StyledCreateButton onClick={handleCreateButtonClick} variant="contained" color="primary">
            Create User
          </StyledCreateButton>
        </Grid>
        <Grid item xs={12}>
          <StyledTableContainer component={Paper}>
            <Table>
              {!isBelowMd && (
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
              )}
              {isBelowMd ? (
                <UserTableSmall userList={userList} handleViewButtonClick={handleViewButtonClick} />
              ) : (
                <UserTable userList={userList} handleViewButtonClick={handleViewButtonClick} />
              )}
            </Table>
          </StyledTableContainer>
          <Pagination
            // count={Math.ceil(userList.length / usersPerPage)}
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Grid>
      </Grid>

      {/* UserForm Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition>
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
            <UserForm onClose={handleCloseModal} onSubmit={handleCreateUser} isUpdate={false} />
          </Box>
        </Fade>
      </Modal>
    </StyledDiv>
  );
};

export default Users;
