import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.carvana.green.primary};
  fill: ${props => props.theme.carvana.green.primary};
`;

type ownProps = {
  className?: string;
};

const CheckMark: React.FC<ownProps> = ({ className }) => {
  return (
    <Svg
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </g>
    </Svg>
  );
};

export default CheckMark;
