var traverseDomAndCollectElements = function (matchFunc, startEl = document.body) {
  

 let resultSet

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
if (matchFunc(startEl))resultSet.push(startEl)

  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí

  let gato = selector
  let array = []
  console.log(selector)

  //   if (selector.includes ("#")){ return("id")
  // } else if (selector.includes (".")){ return("class")
  // } else if (selector.includes ("div")){ return("tag")
  // } else return("tag.class")


  if (selector[0] === "#") return "id"
  if (selector[0] === ".") return "class"
  if (selector.includes(".")) return "tag.class"
  return "tag";




};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elemento) => {
      if (`#${elemento.id}` === selector) return true;
      return false
    }

  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      for (const clase of elemento.classList) {
      if (`.${clase}` === selector) return true;
    }
    return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {

    const [tag, className] =  selector.split(".")

    return matchFunctionMaker(tag)(elemento) && matchFunctionMaker (`.${className}`)(elemento);
    }

  } else if (selectorType === "tag") {
    matchFunction = (elemento) => {
      if (elemento.tagName.toLowerCase() === selector) return true;
      return false
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
