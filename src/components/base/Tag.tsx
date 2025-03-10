import React from 'react';

function Tag(props: { tag: string }) {
  return (
    <span
      className={
        'bg-light py-1 px-4 rounded-full bg-opacity-60 border border-light text-primary font-medium'
      }
    >
      {props.tag}
    </span>
  );
}

export default Tag;
