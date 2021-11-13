import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { BtnHeader } from './styles';

import { ChangingComponentContext } from '../../common/context/ChangingComponent';

export default function Button({ children, link, color, bgcolor, bgcolorHover, fontSize, width, padding, margin }) {
  const { setComponent } = useContext(ChangingComponentContext);

  return (
    <Link to={ link }>
      <BtnHeader 
        width={width}
        color={ color }
        margin={ margin }
        bgcolor={ bgcolor }
        padding={ padding }
        fontSize={ fontSize }
        bgcolorHover={ bgcolorHover }
        onClick={() => setComponent('login')}
      >
        { children }
      </BtnHeader>
    </Link>
  );
}
