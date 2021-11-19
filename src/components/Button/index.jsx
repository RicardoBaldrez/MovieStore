import React from 'react'
import { Link } from 'react-router-dom';

import { BtnHeader } from './styles';

export default function Button({ children, link, fontSize, width, padding, margin, disabled }) {
  return (
    <Link to={ link }>
      <BtnHeader 
        width={ width }
        margin={ margin }
        padding={ padding }
        fontSize={ fontSize }
        disabled={ disabled }
      >
        { children }
      </BtnHeader>
    </Link>
  );
}
