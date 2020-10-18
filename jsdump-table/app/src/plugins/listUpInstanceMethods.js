function getClass(className) {
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#Don't_use_eval_needlessly!
  return Function("return (" + className + ")")();
}

export default async function listUpInstanceMethods(className) {
  let resultList = new Set();
  let targetClass = getClass(className)
  let targetInstance
  try {
    targetInstance = new targetClass()
  } catch (error) {
    targetInstance = Object.create(targetClass.prototype)
  }
  // グローバルなオブジェクトも受け取れるようにインスタンスからプロトタイプを逆引き
  let instanceMethodsNameList = Object.getOwnPropertyNames(Object.getPrototypeOf(targetInstance))

  for (let idx = 0; idx < instanceMethodsNameList.length; idx++) {
    resultList.add(instanceMethodsNameList[idx]);
  }

  return Array.from(resultList);
}
