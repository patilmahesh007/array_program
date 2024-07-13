const mp=[23,24,33,65,65,75,56,34,65]
 
let odd=mp[0]
for(i=0;i<mp.length;i++){
    if(i%2!==0){
odd += mp[i]
    }
}
console.log(odd)