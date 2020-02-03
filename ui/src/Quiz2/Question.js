import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) =>{
  return (
    <h2 className="questionq2">{props.content}</h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;