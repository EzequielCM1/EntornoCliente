'use strict';

function arraysIguales(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

// Ejemplo
console.log(arraysIguales([1,2,3], [1,2,3])); // true
console.log(arraysIguales([1,2,3], [1,3,2])); // false
