#In Python we can loop thru the string, no need to make it an array
def stringYield(str):
    returnArray = []
    i = 0
    j = len(str) - 1
    while(i <= j):
        if(i == j):
            returnArray.append(f"({str[i]},)")
        else:
            returnArray.append(f"({str[i]},{str[j]})")
        i += 1
        j -= 1
    return returnArray

print(stringYield("123R456"))