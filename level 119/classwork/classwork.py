# 2) https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
def multi_table(number):
    return "\n".join(f"{i} * {number} = {i * number}" for i in range(1, 11))


# 3) https://www.codewars.com/kata/5acbc3b3481ebb23a400007d
def repeat_nums(lst):
    return "-".join(str(num) * num for num in lst)


# 4) https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
def wave(word):
    return [word[:i] + word[i].upper() + word[i+1:] for i in range(len(word)) if word[i].isalpha()]
