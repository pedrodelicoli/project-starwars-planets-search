import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider(props) {
  const [data, setData] = useState([]);
  const { children } = props;
  const contextValue = { data, setData };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
