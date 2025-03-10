import React, { useState } from 'react';
import classNames from 'classnames/dedupe';
import InputWrapper from './InputWrapper';

interface Props {
  tags: { id: string; name: string }[];
  label?: string;
}

const MultiSelectTags = ({ tags, label }: Props) => {
  const [state, setState] = useState<{ [id: string]: boolean }>({});
  return (
    <InputWrapper label={label}>
      <div className={'space-x-2 flex'}>
        {tags.map((tag) => (
          <div
            key={tag.id}
            className={classNames(
              'border-2 border-gray-200 px-4 py-3 min-w-16 rounded-full text-gray-400 cursor-pointer font-semibold',
              state[tag.id] ? 'text-gray-700 border-gray-700' : '',
            )}
            onClick={() =>
              setState((s) => ({
                ...s,
                [tag.id]: !s[tag.id],
              }))
            }
          >
            {tag.name}
          </div>
        ))}
      </div>
    </InputWrapper>
  );
};

export default MultiSelectTags;
