export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  appearance?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:cursor-pointer";

const variants = {
  primary: {
    filled: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  },
  secondary: {
    filled: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  },
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = ({
  children,
  variant = "primary",
  appearance = "filled",
  size = "md",
  type = "button",
  disabled = false,
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant][appearance]}
        ${sizes[size]}
      `}
    >
      {icon}
      {children}
    </button>
  );
};
