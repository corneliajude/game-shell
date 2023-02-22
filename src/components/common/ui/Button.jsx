const skins = {
    primary:     'bg-fuchsia-600 inline-flex h-full text-center py-2 px-4 text-white rounded-full hover:bg-blue-600 text-xs',

}

export const Button = ({ children, skin = 'primary', ...props }) => {
    const skinClasses = skins[skin];
    return <button {...props} className={skinClasses}>{children}</button>;
};