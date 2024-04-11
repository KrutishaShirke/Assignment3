import React from 'react';

const ChildComponent = ({ dynamicProp }) => {
  return (
    <div>
      <p>Dynamic Prop: {dynamicProp}</p>
    </div>
  );
};

export default ChildComponent;
