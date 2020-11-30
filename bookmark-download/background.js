function formatDateTime(date, format) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
  return format;
}

chrome.browserAction.onClicked.addListener(function (tab) {
  // 拡張機能アイコンクリック時に起動
  // https://developer.chrome.com/extensions/bookmarks#method-getTree
  function ddd(targetItemList, targetResultList){
    targetItemList.map((item)=>{
      let childList = item.children || [];
      if (childList.length === 0) {
        let result = {
          id:item.id,
          index:item.index,
          parentId:item.parentId,
          title:item.title,
          dateAdded:item.dateAdded,
          url:item.url || ''
        }
        targetResultList.push(result)
        return
      }else{
        let result = {
          id:item.id,
          index:item.index,
          parentId:item.parentId,
          title:item.title,
          dateAdded:item.dateAdded,
          url:item.url || ''
        }
        targetResultList.push(result)
        childList.map((child)=>{
          let result = {
            id:child.id,
            index:child.index,
            parentId:child.parentId,
            title:child.title,
            dateAdded:child.dateAdded,
            url:child.url || ''
          }
          targetResultList.push(result)
          let childchildList = child.children || [];
          if (childchildList.length !== 0) {
            return ddd(child.children, targetResultList)
          }
        })
      }
    })
  }
  chrome.bookmarks.getTree((bookmarkList)=>{
    let resultList=[]
    ddd(bookmarkList, resultList)
    const timeStamp = formatDateTime(new Date(), "yyyy-MM-ddTHH-mm-ss");

    const blob = new Blob([JSON.stringify(resultList)], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    document.body.appendChild(a);

    a.download = "bookmark-dump-" + timeStamp + ".json";

    a.href = url;

    a.click();

    a.remove();

    URL.revokeObjectURL(url);
  })
});
