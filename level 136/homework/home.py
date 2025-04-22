# function whatday(num) { 
#   switch (num) {
#     case 1:
#       return "Sunday";
#     case 2:
#       return "Monday";
#     case 3:
#       return "Tuesday";
#     case 4:
#       return "Wednesday";
#     case 5:
#       return "Thursday";
#     case 6:
#       return "Friday";
#     case 7:
#       return "Saturday";
#     default:
#       return "Wrong, please enter a number between 1 and 7";
#   }
# }

def string_clean(s):
    numbs = '1234567890'
    result = []
    for i in s:
        if i not in numbs:
            result.append(i)
    return "".join(result)

def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"

    vowels = "aeiou"
    third_char = name[2]

    if third_char in vowels:
        return name[:4]
    else:
        return name[:3]

def convert(st):
    result = []
    for i in st:
        if i == "a":
            result.append("o")
        elif i == "o":
            result.append("u")
        else:
            result.append(i)
    return "".join(result)