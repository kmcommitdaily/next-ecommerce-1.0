interface ButtonProps {
  children: string;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return <button className={`p-2 max-w-max  ${className}`}>{children}</button>;
};

export default Button;
