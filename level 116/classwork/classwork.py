# 1) https://www.codewars.com/kata/555eded1ad94b00403000071
def digital_root(n):
    while n >= 10:
        n = sum(int(digit) for digit in str(n))
    return n
