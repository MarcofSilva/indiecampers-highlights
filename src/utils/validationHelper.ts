export function stringIsNumber(str: string) : boolean {
    if (str.trim() === '') {
        return false;
    }

    return !Number.isNaN(Number(str));
}