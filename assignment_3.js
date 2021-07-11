let s="madam i will refer your radar level redivider"
let s1=""
let s2=""
for(t of s){
    if(t!="")
    {
        s2=s2+t
        s1=t+s1
    }
    else{
        if(s1==s2){
            console.log(s1) }  
        s1=""
        s2=""
    }
}
