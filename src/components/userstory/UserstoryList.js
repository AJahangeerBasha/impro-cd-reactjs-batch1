import React, {Component, PropTypes} from 'react';
import UserStoryListRow from './UserStoryListRow';

var Router = require('react-router');
var Link = Router.Link;

const UserStoryList = ({userstories}) => {
    return (
        <table className="table UserListTable">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {userstories.map(userstory =>
                    <UserStoryListRow key={userstory.id} userstory={userstory}/>
                )}
            </tbody>
    </table>
    );
};

UserStoryList.propTypes = {
  userstories: PropTypes.array.isRequired
};

export default UserStoryList;


