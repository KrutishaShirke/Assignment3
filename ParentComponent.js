import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dynamicProp, setDynamicProp] = useState('');

  const handleInputChange = (event) => {
    setDynamicProp(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={dynamicProp}
        onChange={handleInputChange}
      />
      <ChildComponent dynamicProp={dynamicProp} />
    </div>
  );
};

export default ParentComponent;
