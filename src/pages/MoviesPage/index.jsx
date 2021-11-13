import React, { useContext } from 'react'

import { UserContext } from '../../common/context/UserContext';

export default function MoviesPage() {
  const { name } = useContext(UserContext);

  return (
    <h1>MOVIES { name }</h1>
  );
}