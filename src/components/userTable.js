import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow, Button } from '@mui/material';

function UserTable({ userList, handleViewButtonClick }) {
  return (
    <TableBody>
      {userList &&
        userList.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              {user.firstName} {user.lastName}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleViewButtonClick(user)}>
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

UserTable.propTypes = {
  userList: PropTypes.array,
  handleViewButtonClick: PropTypes.func
};
export default UserTable;
