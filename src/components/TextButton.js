import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  text-decoration: none;

  border: 0;
  background: none transparent;

  padding: 0;
  margin: 0;

  :hover,
  :active {
    color: ${(props) => props.theme.dark};
    cursor: pointer;
  }
`;

const TextButton = ({ as, external, children, ...props }) => {
  let target = {};

  if (external) {
    target = {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  return (
    <Link as={as} {...target} {...props}>
      {children}
    </Link>
  );
};

TextButton.propTypes = {
  as: PropTypes.any,
  external: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

TextButton.defaultProps = {
  external: false,
  as: "a",
};

export default TextButton;
