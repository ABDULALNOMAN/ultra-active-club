const localStoragesetitem = (id) => {
    let localItem = id
    localStorage.setItem('time', JSON.stringify(localItem))
}
const localStorageGetitem = () => {
    const GetItem = localStorage.getItem('time')
    const Item = GetItem
    return Item
}
export {
    localStoragesetitem,
    localStorageGetitem
}