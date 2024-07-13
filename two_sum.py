def add_Sum(arr, target):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]
    print("No solution found")
    return []

nums = [2, 7, 11, 15]
target = 9
print(add_Sum(nums, target))  
