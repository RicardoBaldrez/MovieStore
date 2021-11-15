import React from 'react'
import { Link } from 'react-router-dom';

import { BtnHeader } from './styles';

export default function Button({ children, link, color, bgcolor, bgcolorHover, fontSize, width, padding, margin, disabled }) {
  return (
    <Link to={ link }>
      <BtnHeader 
        width={ width }
        color={ color }
        margin={ margin }
        bgcolor={ bgcolor }
        padding={ padding }
        fontSize={ fontSize }
        disabled={ disabled }
        bgcolorHover={ bgcolorHover }
      >
        { children }
      </BtnHeader>
    </Link>
  );
}
