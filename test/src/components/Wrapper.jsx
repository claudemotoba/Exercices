import React from 'react';
import Header from './Header'

const Wrapper = ({ children }) => {
    return(
    <div>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <div>{children}</div>
    </div>
    )
}

export default Wrapper;