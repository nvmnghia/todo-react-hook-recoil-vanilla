import React, { useState } from 'react';

//================================================================================
// Validation
//================================================================================

// Original TypeScript
// interface ValidationResult {
//   // 3 states
//   // - undefined: not yet validated (when the user first types)
//   // - true: valid
//   // - false: invalid
//   valid?: boolean;
//   errorMessage: string;
// }

const validate = (content) => {
  if (content.length === 0) {
    return { valid: false, errorMessage: 'Content is empty' };
  }

  if (content.trim().length === 0) {
    return {
      valid: false,
      errorMessage: 'Content only contains whitespaces',
    };
  }

  return { valid: true, errorMessage: '' };
};

//================================================================================
// Add Todo
//================================================================================

const DEFAULT_STATE = {
  content: '',
  valid: undefined,
  errorMessage: '',
};

export default function AddTodo(props) {
  const [content, setContent] = useState(DEFAULT_STATE.content);
  const [valid, setValid] = useState(DEFAULT_STATE.valid);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_STATE.errorMessage);

  const handleInput = ({
    target: { value },
  }) => {
    if (valid === undefined) {
      // Don't validate just yet when the user first type
    } else {
      const validationResult = validate(value);
      setValid(validationResult.valid);
      setErrorMessage(validationResult.errorMessage);
    }
    setContent(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let _valid = valid;

    if (_valid === undefined) {
      // Validate for the first time
      const validationResult = validate(content);
      _valid = validationResult.valid;

      setValid(validationResult.valid);
      setErrorMessage(validationResult.errorMessage);
    }

    if (_valid) {
      props.add(content);

      setContent(DEFAULT_STATE.content);
      setValid(DEFAULT_STATE.valid);
      setErrorMessage(DEFAULT_STATE.errorMessage);
    }
  };

  let bsInputValidationState = '';
  if (valid !== undefined) {
    bsInputValidationState = valid ? 'is-valid' : 'is-invalid';
  }

  return (
    // TODO: Must a form be used here?
    <form
      className='row row-cols-md-auto g-3 align-items-top'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='col-md-auto flex-grow-1'>
        <input
          autoFocus
          type='text'
          className={`form-control ${bsInputValidationState}`}
          value={content}
          onInput={handleInput}
          aria-describedby='invalid-input'
          placeholder='Note something'
        />
        <div id='invalid-input' className='invalid-feedback'>
          {errorMessage}
        </div>
      </div>

      <div className='col-md-auto col-xs-12'>
        <button className='btn btn-primary w-100'>Add</button>
      </div>
    </form>
  );
}
