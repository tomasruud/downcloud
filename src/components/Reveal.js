import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  text-decoration: none;

  background-color: transparent;
  border: 0;

  padding: 0;
  margin: 0;

  display: block;

  line-height: inherit;

  :hover {
    color: ${(props) => props.theme.dark};
    cursor: pointer;
  }

  :active,
  :focus {
    outline: 2px solid ${(props) => props.theme.gray};
  }
`;

const Reveal = ({ open, label, children, ...props }) => {
  const [visible, setVisible] = useState(open);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <span {...props}>
      <Button onClick={toggle}>
        {label} [{visible ? "-" : "+"}]
      </Button>
      {visible && children}
    </span>
  );
};

Reveal.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  open: PropTypes.bool,
};

Reveal.defaultProps = {
  open: false,
};

export default Reveal;
