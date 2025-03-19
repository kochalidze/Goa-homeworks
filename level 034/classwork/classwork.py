# 1) https://www.codewars.com/kata/5556282156230d0e5e000089
def dna_to_rna(dna):
    return dna.replace('T', 'U')


# 2) https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
def find_short(s):
    return min(len(word) for word in s.split())