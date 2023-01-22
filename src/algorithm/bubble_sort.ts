/**
 * Bubble sort goes from left to right comparing n with n-1 values 
 * if left side is greater than right 
 * then swap the position
 * this get repeated until the array is sorted
 * Bubble sorting follow O(n^2) time complexity
 * 
 * **/

export default function bubble_sort(arr: number[]): number[] {
    var result = arr.slice(0);
    let n = result.length;
    do {
        for (let i = 0; i < n - 1; i++) {
            var currentValue = result[i];
            if (currentValue > result[i + 1]) {
                result[i] = result[i + 1];
                result[i + 1] = currentValue;
            }
        }
        n = n - 1;
    } while (n > 1);

    return result;
}