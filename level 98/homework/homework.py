# 1) შექმენით ფუნქცია რომელსაც გადაეცემა მატრიცა ( 2დ მასივი ) და 
# დააბრუნებს მასივს უნიკალური ელემენტებით (ელემენტი რომელიც მთლიან მასივში ერთხელაა)


def func(matrix):
    arr = []

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            count = 0
            for k in range(len(matrix)):
                for l in range(len(matrix[k])):
                    if matrix[k][l] == matrix[i][j]:
                        count += 1
            if count == 1:
                arr.append(matrix[i][j])


    return arr         

    
print(
    func([
        [1, 2, 3],
        [2, 3, 4],
        [4, 5, 6]
    ])
) 