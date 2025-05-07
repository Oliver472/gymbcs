export function shortenString(str: string, maxLength: number = 30): string {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}