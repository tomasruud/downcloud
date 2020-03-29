import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.light};
  border: 0;

  cursor: pointer;

  padding: 0.75rem;

  border-radius: 3px;

  transition: all ease-in-out 0.2s;

  margin-right: 10px;

  :hover {
    transform: scale(1.05);
  }

  :active,
  :focus {
    transform: scale(1);
    background-color: transparent;
    color: ${(props) => props.theme.primary};
    outline: 2px solid ${(props) => props.theme.primary};
  }
`

export default Button
