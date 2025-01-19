
# https://www.codewars.com/kata/54e6533c92449cc251001667
def unique_in_order(sequence):
    """
    Function that removes consecutive duplicates from a sequence and returns a list.

    Args:
        sequence (str, list, tuple): The input sequence.

    Returns:
        list: A list of unique elements preserving original order.
    """
    if not sequence:
        return []

    result = [sequence[0]]  # Start with the first element.
    for current in sequence[1:]:
        if current != result[-1]:
            result.append(current)
    return result

# Examples
print(unique_in_order('AAAABBBCCDAABBB'))  # ['A', 'B', 'C', 'D', 'A', 'B']
print(unique_in_order('ABBCcAD'))         # ['A', 'B', 'C', 'c', 'A', 'D']
print(unique_in_order([1, 2, 2, 3, 3]))   # [1, 2, 3]
print(unique_in_order((1, 2, 2, 3, 3)))   # [1, 2, 3]
