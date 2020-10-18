function getClass(className) {
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#Don't_use_eval_needlessly!
  return Function("return (" + className + ")")();
}

export default async function listUpStaticMethods(className) {
  // listUpStaticMethods("Date")
  // listUpStaticMethods("Array")
  // listUpStaticMethods("String")
  // listUpStaticMethods("Window")
  // listUpStaticMethods("Math")
  let resultList = new Set();
  let targetClass = getClass(className);
  let staticMethodsNameList = Object.getOwnPropertyNames(targetClass);

  for (let idx = 0; idx < staticMethodsNameList.length; idx++) {
    resultList.add(staticMethodsNameList[idx]);
  }

  return Array.from(resultList);
}
