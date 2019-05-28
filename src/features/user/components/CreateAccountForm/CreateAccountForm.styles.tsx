import styled from 'styled-components';

type classes = {
  className?: 'is-info' | 'is-error'
}

export const StyledForm = styled.form<classes>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
  > div {
    width: 400px;
  }
`;
