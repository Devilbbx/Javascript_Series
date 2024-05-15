{console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);}

{console.log("2">1);
console.log("02" > 1);}

{console.log(null>0);
//output=> false
console.log(null ==0);
//output=> false
console.log(null >= 0);}
//output=> true

/*  The reason is that an equality check == and comparison >,<, >=,=< work differently
Comparisons convert null to a nnumber ,treating it as 0.
That's why (3)null >= 0 is true (1)null >0 is false.   */

{console.log(undefined>0)
//output=> false
console.log(undefined==0)
//output=> false
console.log(undefined>0)
//output=> false
}

// ===
console.log("2"===2);// it also check the datatypes