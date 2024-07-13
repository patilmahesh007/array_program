 const mp=[23,24,33,65,65,75,56,34,65]

let largest=mp[0]
for(i=0;i<mp.length;i++){
    if(mp[i]>largest){
        largest = mp[i]
    }
}
console.log(largest)