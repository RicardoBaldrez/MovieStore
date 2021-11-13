import React, { useContext } from 'react'

import { UserContext } from '../../common/context/UserContext';

export default function MoviesPage() {
  const { name, balance } = useContext(UserContext);

  return (
    <h1>MOVIES { name } R${ balance }</h1>
  );
}