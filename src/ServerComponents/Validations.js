export function isValidNumber(number) {
    return !(isNaN(number) || number === '' || number == null)
}