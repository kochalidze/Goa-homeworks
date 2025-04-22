# 1)
def row_weights(array):
    odd = []
    even = []
    for i in range(len(array)):
        if i % 2 == 0:
            even.append(array[i])
        else:
            odd.append(array[i])
    if len(array) == 1:
        return (array[0], 0)
    else:
        return (sum(even), sum(odd))
        
# 2)
def remove_smallest(numbers):
    if not numbers:
        return []

    smallest = min(numbers)
    found = False
    result = []
    for num in numbers:
        if num == smallest and not found:
            found = True
            continue
        result.append(num)

    return result
# 4)
def make_readable(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    remaining_seconds = seconds % 60

    return f"{hours:02}:{minutes:02}:{remaining_seconds:02}"