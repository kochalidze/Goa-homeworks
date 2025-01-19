# 2) https://www.codewars.com/kata/6071ef9cbe6ec400228d9531
def calculator(txt):

    left, operator, right = txt.split()

    left_count = len(left)
    right_count = len(right)

    if operator == '+':
        result = left_count + right_count
    elif operator == '-':
        result = left_count - right_count
    elif operator == '*':
        result = left_count * right_count
    elif operator == '//':
        result = left_count
    else:
        raise ValueError("Invalid operator")

    return '.' * result