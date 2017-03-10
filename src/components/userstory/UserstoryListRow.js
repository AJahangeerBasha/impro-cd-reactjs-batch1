import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserStoryListRow = ({userstory}) => {
  return (
    <tr key={ userstory.id }>
      <td><Link to={'/userstory/edit/' + userstory.id}>{userstory.title}</Link></td>
      <td>{ userstory.description }</td>
      <td>{ userstory.status }</td>
      <td className="action"> 
        <Link className="btn btn-danger" to={'/userstory/delete/' + userstory.id}>Delete</Link>
      </td>
    </tr>
  );
};

UserStoryListRow.propTypes = {
  userstory: PropTypes.object.isRequired
};

export default UserStoryListRow;
