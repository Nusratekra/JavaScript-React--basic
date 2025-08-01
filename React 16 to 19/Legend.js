import React from 'react';

function Legend({ legend }) {
  return (
    <div>
      <ul>
       <li>{legend.fullName} was born in {legend.birth} and lived till {legend.death}.</li>
      </ul>
    </div>
  );
}

export default Legend;
