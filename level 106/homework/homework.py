# 1) https://www.codewars.com/kata/529b418d533b76924600085d
import re

def pascal_to_snake(input_string):
    if isinstance(input_string, (int, float)):
        return str(input_string)
    elif not isinstance(input_string, str):
        raise ValueError("Input must be a string or a number.")
    snake_case = re.sub(r'(?<!^)(?=[A-Z])', '_', input_string).lower()
    return snake_case


# 2) https://www.codewars.com/kata/580a4734d6df748060000045
def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr, reverse=True):
        return "yes, descending"
    else:
        return "no"
