import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Child from './child';
import UseRef from './useref';

const Dashboard: React.FC = () => {
  // useState()
  const [click, setClick] = useState(0);

  // <useEffect()>
  const [clickA, setClickA] = useState(0);
  const [clickB, setClickB] = useState(0);

  useEffect(() => {
    if (clickA === 0) {
      console.log('Component loaded!');
    } else {
      console.log('Button A was clicked!');
    }
  }, [clickA]);
  // </useEffect()>

  return (
    <>
      <Container>
        <h1>Hello World</h1>
        <p>Template</p>
        <br />
        <a href="Page2">Sign up</a>

        <br />
        <br />

        <h2>Child file</h2>

        <Child name="Billy" id={123} />

        <br />
        <br />

        <h2>useState()</h2>

        <p>Click: {click}</p>
        <button type="button" onClick={() => setClick(0)}>
          reset
        </button>
        <button type="button" onClick={() => setClick(click + 1)}>
          + 1
        </button>
        <button type="button" onClick={() => setClick(click - 1)}>
          - 1
        </button>

        <br />
        <br />

        <h2>useEffect()</h2>

        <p>A Clicks: {clickA}</p>
        <p>B Clicks: {clickB}</p>
        <button type="button" onClick={() => setClickA(clickA + 1)}>
          Button A
        </button>
        <button type="button" onClick={() => setClickB(clickB + 1)}>
          Button B
        </button>
        <p id="click-a" />

        <br />
        <br />
        <UseRef />
      </Container>
    </>
  );
};

export default Dashboard;
