function partition(arr : number[], low : number, high : number) : number  {
    const pivot = arr[high];
    let idx = low -1;
    for(let i = low; i < high; i++) {
        if(arr[i] < pivot) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }
    idx++;
    [arr[idx], arr[high]] = [arr[high], arr[idx]];
    return idx;
} // split the array and return the index of the pivot
function qs(arr : number[], left : number, right : number) : void {
    if(left < right) {
        const pivot = partition(arr, left, right);
        qs(arr, left, pivot - 1);
        qs(arr, pivot + 1, right);
    }
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}