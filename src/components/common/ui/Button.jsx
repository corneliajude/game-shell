const skins = {
    primary:
        'bg-fuchsia-600 inline-flex items-center h-full text-center py-2 px-4 text-white rounded-full hover:bg-blue-600 text-xs',
    primaryInverted:
        'border border-fuchsia-500 text-fuchsia-500 h-full inline-flex text-center py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600',
    danger:
        'bg-red-600 inline-flex items-center h-full text-center py-2 px-4 text-white rounded-full hover:bg-red-500 text-xs',
    success:
        'bg-green-600 inline-flex items-center h-full text-center py-2 px-4 text-white rounded-full hover:bg-green-500 text-xs',
};

export const Button = ({
    element = 'button',
    children,
    skin = 'primary',
    className = '',
    ...props
}) => {
    const skinClasses = skins[skin];
    const Element = element;

    return (
        <Element {...props} className={`${skinClasses} ${className}`}>
            {children}
        </Element>);
};