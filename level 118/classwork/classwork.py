# 1) შექმენით პროგრამა რომელიც საშუალებას მოგვცემს დავიყოთ ჯგუფებად.

import random

leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]

def random_grouping(names, group_size):
    random.shuffle(names) 
    groups = [names[i:i + group_size] for i in range(0, len(names), group_size)]
    return groups

def main():
    names_input = input("სახელები: ").strip()
    students = [name.strip() for name in names_input.split(",") if name.strip()]

    if not students:
        print("შეიყვანეთ მინიმუმ ორი მოსწავლე.")
        return
    group_size = 2
    student_groups = random_grouping(students, group_size)

    print("\nჯგუფები:")
    for i, leader in enumerate(leaders):
        assigned_students = student_groups[i] if i < len(student_groups) else ["არცერთი მოსწავლე"]
        print(f"{leader}: {', '.join(assigned_students)}")

if __name__ == "__main__":
    main()
