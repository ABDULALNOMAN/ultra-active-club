const localStoragesetitem = (id) => {
    const localItem = {}
    
    const otherItem = localItem[id]
    if (otherItem) {
        const newOtherItem = otherItem + 1
        localItem[id]=newOtherItem
    }
    else {
        localItem[id]=1
    }
    localStorage.setItem('time', JSON.stringify(localItem))
}
export {
    localStoragesetitem
}