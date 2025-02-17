const getBookFromLocalStorage = () =>{
    const readList = localStorage.getItem("read-list");
    if(readList){
        return JSON.parse(readList)
    }
    else return [];
}

const addBookToLocalStorage = (id) =>{
    let storedList = getBookFromLocalStorage()
    if (storedList.includes(id)){
        alert("Book already exists in your wish list")
    }
    else{
        storedList.push(id)
        storedList = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedList)
    }
}

export {addBookToLocalStorage}