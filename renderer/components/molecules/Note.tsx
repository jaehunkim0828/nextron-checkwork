import React, { useState } from 'react';

function Note() {
  const [codeInput, setcodeInput] = useState("");

  const onKeyDown = (e: any) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setcodeInput(codeInput + '      ');
    }
  }

  const codeInputHandler = (e: any) => {
    setcodeInput(e.currentTarget.value);
  }

  return (
    <textarea spellCheck = "false" value={codeInput} onKeyDown={onKeyDown} onChange={codeInputHandler} className='note'></textarea>
  )
};

export default Note;