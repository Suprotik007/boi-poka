const getWishedBook=()=>{
    const storedBookSTR=localStorage.getItem('wishList')

    if(storedBookSTR){
        const storedBookData=JSON.parse(storedBookSTR) 
        return storedBookData
    }
    else{
        return[]
    }
}
const addToWishList=(id)=>{
    const storedBookData=getWishedBook()
    if(storedBookData.includes(id)){
        alert('Already Added')
    }
    else{
        storedBookData.push(id)
        // console.log(storedBookData);
        const data=JSON.stringify(storedBookData)
        localStorage.setItem("wishList",data)
        
    }
}
export {addToWishList,getWishedBook}