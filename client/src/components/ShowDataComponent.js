import React from 'react';

const ShowDataComponent = ({label, data}) => {
  return (
    <div>
      <h2>{label}</h2>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default ShowDataComponent;
