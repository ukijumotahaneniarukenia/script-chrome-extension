export default async function listUpInstanceMethods(instance) {
  let resultList = new Set();
  // グローバルなオブジェクトも受け取れるようにインスタンスからプロトタイプを逆引き
  let instanceMethodsNameList = Object.getOwnPropertyNames(
    Object.getPrototypeOf(instance)
  );

  for (let idx = 0; idx < instanceMethodsNameList.length; idx++) {
    resultList.add(instanceMethodsNameList[idx]);
  }

  return Array.from(resultList);
}
