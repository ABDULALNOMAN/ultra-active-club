const localStoragesetitem = (id) => {
    let localItem = {}
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
const localStorageGetitem = () => {
    let localItem = {}
    const GetItem = localStorage.getItem('time')
    if (GetItem) {
        localItem = JSON.parse(GetItem)
    }
    else {
        localItem = {}
    }
    return localItem
}
export {
    localStoragesetitem,
    localStorageGetitem
}