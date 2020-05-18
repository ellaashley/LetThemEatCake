function eat_cake(x){
    var end="";
    var one="";
    var two="";
    if(x.length%2==0){
        one=x.substring(0,x.length/2);
        two=x.substring(x.length/2, x.length);
    }else{
        one=x.substring(0,x.length/2 +0.5);
        two=x.substring(x.length/2+ 0.5, x.length);
    }
    var z=0;
    for(var i=0; i<two.length; i++){
        if(two.substring(i,i+1)==one.substring(0,1)){
            z=0;
            for(var b=i;b<two.length;b++){
                if(two.substring(b,b+1)==one.substring(z,z+1)){

                }else{
                    break;
                }
                z++;
                if(b==two.length-1){
                    end= one.substring(0,z);
                }
            }
        }
    }
    if(end==""){
        return 1;
    }
    return x.length/end.length;
}