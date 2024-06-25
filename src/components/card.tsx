interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-transparent font-mono font-semibold h-fit gap-2 border-medium hover:border-indigo-500 hover:text-indigo-800 transition-colors ease-in duration-100 px-3 py-1.5 text-small rounded-medium border-default text-foreground aspect-video">
      {children}
    </div>
  );
};
