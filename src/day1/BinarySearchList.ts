export default function bs_list(haystack: number[], needle: number): boolean {
    let left : number = 0;
    let right : number = haystack.length - 1;
    while (left <= right) {
        let mid : number = Math.floor((left + right) / 2);
        if (haystack[mid] === needle) {
            return true;
        }
        if (haystack[mid] < needle) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}