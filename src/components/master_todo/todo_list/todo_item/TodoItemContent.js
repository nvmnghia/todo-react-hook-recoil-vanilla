/* eslint-disable react/prop-types */
import React from 'react';

const TodoContent = ({ content }) => <>{content}</>;

const TodoEditor = (props) => {
  const handleChange = ({
    target: { value },
  }) => {
    props.onChange(value);
  };

  return (
    <textarea
      className='w-100'
      value={props.tmpContent}
      onChange={handleChange}
    ></textarea>
  );
};

export { TodoContent, TodoEditor };
