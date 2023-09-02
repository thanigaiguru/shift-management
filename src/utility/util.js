export const isEmpty = value => {
    if (value == null || value == undefined) {
        return true;
    }
    if(Array.isArray(value) || typeof value == 'string'){
        return !value.length;
    }
    if(typeof value == 'object'){
        for (const key in value) {
            if (value.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }
    return false;
}