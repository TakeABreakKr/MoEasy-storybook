import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { style } from '@vanilla-extract/css';

import { SearchIcon } from '../../icon';
import { inputWrapper, inputVariants, inputCtlWrapper } from '../../input/input.css';

type SearchButtonProps = ComponentPropsWithoutRef<'button'>;

const searchButton = style({
  justifyContent: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  color: '#bbbbbb',
});

/**
 * 기본 버튼 컴포넌트
 */
const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button className={clsx(inputVariants(), inputWrapper, searchButton, className)} ref={ref} {...props}>
      {children}
      <span className={inputCtlWrapper}>
        <SearchIcon width={24} height={24} />
      </span>
    </button>
  );
});
SearchButton.displayName = 'SearchButton';

export { SearchButton };
