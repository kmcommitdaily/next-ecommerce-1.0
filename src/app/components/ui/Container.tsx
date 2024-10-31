interface ContainerProps {
  children: React.ReactNode;
  className: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`max-w-max-xl mx-auto p-10 bg-red-50  min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default Container;
