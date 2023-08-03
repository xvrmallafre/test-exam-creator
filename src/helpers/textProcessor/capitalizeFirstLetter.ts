export const capitalizeFirstLetter = (str: string): string => {
    str = str.toString();

    if (!str) return str;
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}