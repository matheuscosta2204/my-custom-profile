export const limitStringLenght = (str, length, withDots=false) => {
    if(str.length <= length) {
        return str;
    } else {
        if(!withDots) {
            return str.substring(0, length);
        } else {
            return `${str.substring(0, length)}...`;
        }
    }
}