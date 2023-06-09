// console.log(document.body);

// for (let index = 0; index < document.body.childNodes.length; index++) {
//     console.log(document.body.childNodes[index]);
// }

// childNodes will give you all nodes including elements, textnode, commentnode
console.log(document.body.childNodes[0]);   // children - to get all child elements
console.log(document.body.firstChild);  // firstElementChild - to get only first element, not node
console.log(document.body.childNodes[document.body.childNodes.length - 1]);
console.log(document.body.lastChild);  // lastElementChild

// childNodes is not an array, it's a collection/iterable. You cannot use array functions like filter, map, etc.
for (const node of document.body.childNodes) {  // children
    console.log(node);
}

// convert iterable to array using Array.from() function
const nodes = Array.from(document.body.childNodes);

console.log('parent of body', document.body.parentNode);    // parentElementNode
console.log('nextSibling of head', document.head.nextSibling);    // nextElementSibling
console.log('nextElementSibling of head', document.head.nextElementSibling);
console.log('previousSibling of body', document.body.previousSibling);  // previousElementSibling


