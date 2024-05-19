interface LinkTextProps {
  label?: string;
  icon?: string; 
  to: string;
}

const LinkText: React.FC<LinkTextProps> = ({ label, icon, to }) => {
  return (
    <span
      className="cursor-pointer flex items-center px-4 py-2 mc_yellow_text rounded hover:text-yellow-600 underline underline-offset-2"
      onClick={() => (window.location.href = to)}
    >
      {icon && (
        <img
          src={icon}
          alt={label}
          className="w-16 h-14 mr-2" 
        />
      )}
      {label}
    </span>
  );
};

export default LinkText;
