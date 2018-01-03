var A=[1,3,6,4,1,2]; 
var valor;
var pos=[];
var k=0;
var z=0;
for (i=0;i<A.length;i++)
{   
    if (A[i]>=0)
    {   
        pos[k]=A[i];
        k++
    }
}
function compara(a,b) {
    return a-b;
}
pos.sort(compara);
for (i=0;i<pos.length;i++)
{
    if(pos[0]>1)
    {
        valor=1;
        break;
    }
    if (pos[i]!=pos[i+1])
    { 
        if (!(pos[i]==pos[i+1]-1))
            {
                valor=pos[i]+1;
                break;
            }
        valor=pos[pos.length-1]+1;
    }    
}
if(pos.length==0)
    valor=1;