import React from 'react';
import Media from './media';  // Import the Media component

const Props = () => {
  return (
    <div>
      {/* Passing a "name" prop to the Media component */}
      <Media name="This is props name" />
    </div>
  );
}

export default Props;
