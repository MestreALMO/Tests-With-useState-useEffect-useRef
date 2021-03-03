import React, { FC, ReactElement, useState, useRef } from 'react';

const UseRef: FC<{ initialInfo?: ClientRect }> = ({
  initialInfo,
}): ReactElement => {
  const [buttonInfo, setButtonInfo] = useState(initialInfo);

  const buttonElement = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonElement.current !== null) {
      setButtonInfo(buttonElement.current.getBoundingClientRect());
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick()} ref={buttonElement}>
        Button A
      </button>
      <p>Top: {buttonInfo?.height}</p>
      <p>Bottom: {buttonInfo?.width}</p>
    </div>
  );
};

export default UseRef;
