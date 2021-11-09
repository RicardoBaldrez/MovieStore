import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { BtnHeader } from './styles';

import { ChangingComponentContext } from '../../common/context/ChangingComponent';

export default function Button({ children, link, color, bgcolor, bgcolorHover, fontSize, width, padding }) {
  const { setComponent } = useContext(ChangingComponentContext);

  return (
    <Link to={ link }>
      <BtnHeader 
        width={width}
        color={ color }
        bgcolor={ bgcolor }
        fontSize={ fontSize }
        padding={ padding }
        bgcolorHover={ bgcolorHover }
        onClick={() => setComponent('login')}
      >
        { children }
      </BtnHeader>
    </Link>
  );
}
