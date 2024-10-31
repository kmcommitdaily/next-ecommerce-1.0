'use client';

interface SearchInputProps {
  type?: string;
  placeholder?: string;
  className: string;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  type,
  placeholder,
  className,
  onFocus,
  onBlur,
}: SearchInputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={` ${className}`}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchInput;
