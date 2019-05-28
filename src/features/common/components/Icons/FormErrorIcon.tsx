import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.carvana.red.primary};
  fill: ${props => props.theme.carvana.red.primary};
`;

type ownProps = {
  className?: string;
}

const FormErrorIcon: React.FC<ownProps> = ({ className }) => {
  return (
    <Svg className={className} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <g>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </g>
    </Svg>
  );
};

FormErrorIcon.propTypes = {
  className: PropTypes.string
};

export default FormErrorIcon;
