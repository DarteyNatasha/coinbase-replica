const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles = "px-4 py-2 rounded-full font-semibold transition-colors duration-200";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
        ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
