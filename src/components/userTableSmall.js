import React from 'react';
import { Card, CardContent, Button, Typography, Grid, Box, styled } from '@mui/material';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)({
  width: '100%'
});

function UserTableSmall({ userList, handleViewButtonClick }) {
  return (
    <div>
      {userList &&
        userList.map((user) => (
          <StyledCard key={user.id}>
            <CardContent>
              <Grid container spacing={2}>
                {/* Left side: Row data */}
                <Grid item xs={12} md={8}>
                  <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Username: {user.username}
                  </Typography>
                  {/* Add additional user details here */}
                </Grid>
                {/* Right side: View button */}
                <Grid item xs={12} md={4}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleViewButtonClick(user)}>
                      View
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        ))}
    </div>
  );
}
UserTableSmall.propTypes = {
  userList: PropTypes.array,
  handleViewButtonClick: PropTypes.func
};
export default UserTableSmall;
