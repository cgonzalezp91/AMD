#Pure Recursion
array1 = [1,2,3,4,5,6,7,8,9]

maxOutput = 0
def max(array, index=0, maxOutput=0):
    if (len(array) == index):
        return maxOutput
    if(array[index] > maxOutput):
        maxOutput = array[index]
    return max(array, index+1, maxOutput)

print(max(array1))