

function hi(){
    console.log('hello wowwwwrld');
}

hi();


function factorial(n){
   
    if(n >0){
        return n*factorial(n-1);
    }

    else{
        return 1;
    }
}

console.log(factorial(4));



function fibo(n){

    if(n>=3)
    {
        return fibo(n-1) + fibo(n-2);
    }
    else if(n=2)
    {
        return 1;
    }
    else if(n=1)
    {
        return 1;
    }
}

console.log(fibo(6));


//f(n) = f(n-1) + f(n-2) (n>=3)

//f(1) = 1
//f(2) = 1 

function can(n){

    if(n==1)
    {
        return 1;
    }
    else if(n==2)
    {
        return (1 + can(n-1));
    }
    else if(n==3)
    {
        return (1+can(n-1)+can(n-2));
    }
    else if(n==4)
    {
        return(1 + can(n-1)+can(n-2)+can(n-3));
    }
    else if(n>4)
    {
        return(can(n-4)+can(n-3) + can(n-2) + can(n-1));
    }
}

/*n=1 > 1가지  (1)
n=2 > 2가지  (1+1)
n=3 > 4가지  (2+1+1)
n=4 > 8가지  (4+2+1+1)
n=5 > 15가지 (8+4+2+1)*/
  
console.log("can 값 : " + can(9));

function can2(n){
 
    return Math.pow(2,n-1);
  
}

console.log("n이 자유로울때 : "+ can2(9));


1 
2 (1을뺸다) 
3 (1을 뺀다, 2로나눈다)

4 (2로나눈다, 1을뺀다)
5 (1을뺀다, 2로나눈다, 1을뺸다)
6 (3로나눈다, 1을뺀다)

7(1을뺀다, 3으로 나눈다, 1을뺀다 )
8(2로 나눈다, 2로나눈다, 1을뺀다 )
9(3로나눈다, 1을뺀다 2로나눈다 )

10(2로나눈다, 1을뺸다, 2로나눈다, 1을뺸다)
11(1을뺸다, )
12(3로 나눈다, )

13(1을뺸다)
14(2로나눈다)
15

function make1(n){

    
    if(n/3 !=0)
    {
        n = n/3;
    }
}

1. 3으로 나눠지는지 확인
2. 2로 나눠지는지 확인
3. 둘다 안되면 -1 
4. 다시 위의 과정 반복 하다가 값이 1이상이면 리턴 


