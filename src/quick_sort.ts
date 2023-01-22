/*
Will sort using a Pivot number, every number <= than the pivot should go to the left of the pivot
finally the pivot will be the last element sorted at the left side just after the last sorted element.
The time complexity in best case is O(nlogn) and worst case is O(n^2)
*/

function sort(arr: number[], low: number, high: number): void {

    if (low >= high) return;

    let pivot = arr[high];

    let changeIndex = low - 1;

    for (let i = low; i < high; ++i) {
        let value = arr[i];
        if (value <= pivot) {
            changeIndex++;
            arr[i] = arr[changeIndex];
            arr[changeIndex] = value;
        }
    }
    changeIndex++;
    arr[high] = arr[changeIndex];
    arr[changeIndex] = pivot;

    sort(arr, low, changeIndex - 1);
    sort(arr, changeIndex + 1, high);
}

export default function quick_sort(arr: number[]): number[] {
    sort(arr, 0, arr.length - 1);
    return arr;
}