import React from 'react';

interface ChildInterface {
  name: string;
  id: number;
  bio?: string;
}

const Child = ({ name, id, bio = 'Bio empty' }: ChildInterface) => {
  return (
    <div>
      <h3>
        Name: {name}, Id: {id}
      </h3>
      <p>{bio}</p>
    </div>
  );
};

export default Child;
