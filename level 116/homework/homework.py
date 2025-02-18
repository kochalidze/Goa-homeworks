# 1) https://www.codewars.com/kata/52c31f8e6605bcc646000082
def two_sum(numbers, target):
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if i != j and numbers[i]+numbers[j] == target:
                return (i, j)