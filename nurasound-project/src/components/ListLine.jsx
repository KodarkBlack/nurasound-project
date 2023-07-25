import React from 'react';
import PropTypes from "prop-types";

const ListLine = ({ className }) => {
  return (
    <ul className={'${className'}>
      <a href="">
        <li>Products</li>
      </a>
      <a href="">
        <li>Subscription</li>
      </a>
      <a href="">
        <li>Why Nura?</li>
      </a>
      <a href="">
        <li>Support</li>
      </a>
    </ul>
  )
};

ListLine.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ListLine
