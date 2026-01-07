
def findMax(array, ith):
    return sorted(array, reverse=True)[ith-1]

    
def main():
    array = [1,35, 52, 42, 13, 34]
    print(findMax(array, 2))

main()