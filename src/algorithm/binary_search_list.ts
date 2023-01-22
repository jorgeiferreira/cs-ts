/**
 * This search assume the whole list is sorted
 * it always goes to the middle to see if the value is searching is there
 * is not got to the left or right depeding of the value lower or higher than the searching value
 * then repeat the same.
 * 
 * the Time complexity is O(log n) since we're just returning the value.
 * If we scan something else after the value is found it could change to 0 (n log n)
 * 
 * **/

export default function benary_search_list(list: number[], search: number): number {
    let low = 0;
    let high = list.length;
    do {
        let midIndex = Math.floor(low + ((high - low) / 2));
        var value = list[midIndex]

        if (value === search) {
            return midIndex;
        }
        if (search < value) {
            high = midIndex;
        }
        else {
            low = midIndex + 1;
        }
    } while (low < high);

    return -1;
}