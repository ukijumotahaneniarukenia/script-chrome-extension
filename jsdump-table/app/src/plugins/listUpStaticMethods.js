export default async function listUpStaticMethods(instanceName) {
  let resultList = new Set();
  let staticMethodsNameList;

  if (typeof instanceName === "object") {
    // デフォルトはオブジェクトで取りに行く
    staticMethodsNameList = Object.getOwnPropertyNames(instanceName);

    if (staticMethodsNameList.length === 0) {
      // デフォで取れない場合はファンクション型で取りに行く
      staticMethodsNameList = Object.getOwnPropertyNames(instanceName.constructor);
    }
  } else if (typeof instanceName === "function") {
    staticMethodsNameList = Object.getOwnPropertyNames(instanceName.prototype);
  } else {
    return;
  }

  for (let idx = 0; idx < staticMethodsNameList.length; idx++) {
    resultList.add(staticMethodsNameList[idx]);
  }

  return Array.from(resultList);
}
