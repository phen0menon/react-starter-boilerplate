import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import UserInfo from './UserInfo';

const UserInfoPage = () => (
  <Fragment>
    <Helmet title="User info" />
    <UserInfo />
  </Fragment>
);

export default UserInfoPage;
