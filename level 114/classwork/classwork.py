# 2) გააკეთეთ 'manual' join (py)
table1 = [
    {"id": 1, "name": "Anna"},
    {"id": 2, "name": "John"},
    {"id": 3, "name": "Tom"},
]
table2 = [
    {"user_id": 1, "purchase": "Laptop"},
    {"user_id": 2, "purchase": "Phone"},
    {"user_id": 4, "purchase": "Tablet"},
]
result = []
for i in table1:
    for j in table2:
        if i["id"] == j["user_id"]:
            result.append({**i, **j})

print("Manual Join Result: ")
for n in result:
    print(n)


# 3) https://www.codewars.com/kata/5648b12ce68d9daa6b000099
def number(bus_stops):
    sum=0
    for i in bus_stops:
        sum+=i[0]-i[1]
    return sum

# 4) https://www.codewars.com/kata/563e320cee5dddcf77000158
def get_average(marks):
    return sum(marks) // len(marks)

# 5) https://www.codewars.com/kata/57a0885cbb9944e24c00008e
def remove_exclamation_marks(s):
    return s.replace('!', '')

# 6) https://www.codewars.com/kata/568d0dd208ee69389d000016
def number(bus_stops):
    return sum(on - off for on, off in bus_stops)