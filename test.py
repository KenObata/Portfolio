


def is_subset(list_A, list_B):

    for i in range(len(list_A)):
        
        if(list_A[i] not in list_B):
            return False

    return True

list_A =["abc", "def"]
list_B = ["abc", "def","ghi", "xyz"]


#N sum of 1+2+3=6 exept multiple of 2,3,5

def summation(N):
    sum = 0
    
    for i in range(N+1):
        if(i % 2 != 0 and i % 3 != 0 and i % 5 !=0 ):
            sum += i
""""
        else:
            sum += i
""""

    return sum

N = 5


#---------------------------

Array_A=[10,11,15]
#1-100

def missing_number(Array):
    target_array = [i for range(1,101)]

    for i in range(len(Array)):
        target_array.remove(target_array[Array[i]-1])


    return target_array
        





