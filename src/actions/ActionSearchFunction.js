export function changeArray(type,newData){
    if(type==="CHANGEARRAY"){
        return{
            type:type,
            value:{
                firstArray:newData,
            }
        }
    }
}