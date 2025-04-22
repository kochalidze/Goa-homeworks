def is_letter(s):
    letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if len(s) == 1 and s in letters:
        return True
    return False


def count_zeros(x):
    count = 0
    for i in range(1, x + 1):
        count += str(i).count("0")
    return count


def count_red_beads(n):
    if n < 2:
        return 0
    else:
        return n*2 - 2