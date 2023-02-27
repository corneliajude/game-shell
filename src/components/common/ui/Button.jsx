const skins = {
    primary:
        'bg-fuchsia-600 inline-flex items-center h-full text-center py-2 px-4 text-white rounded-full hover:bg-blue-600 text-xs',
    primaryInverted:
        'border border-fuchsia-500 text-fuchsia-500 h-full inline-flex text-center py-2 px-4 text-white rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600',
}

export const Button = ({
    element = 'button',
    children,
    skin = 'primary',
    ...props
}) => {
    const skinClasses = skins[skin];
    const Element = element;

    return (
        <Element {...props} className={skinClasses}>
            {children}
        </Element>);
};