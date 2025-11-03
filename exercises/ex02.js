// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  if(list.isEmpty()){
    return
  }

  let runner = list.getHead()

  while(runner !== null){
    let nextNode = runner.next
    
    if(runner.data === value){
      const prevNode = runner.prev

      if(runner === list.getHead()){
        list.setHead(nextNode)
        if(nextNode){
          nextNode.prev = null
        }
      } else {
        if(prevNode){
          prevNode.next = nextNode
        }
        if(nextNode){
          nextNode.prev = prevNode
        }
      }
      list.size -= 1
    }
    runner = nextNode
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5