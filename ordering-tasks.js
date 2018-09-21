let orderTasks = tasks => {
  let orderedTasks = [];
  tasks.forEach(task => {
    let index = orderedTasks.indexOf(task.node);
    if (index === -1) {
      orderedTasks.push(task.node);
    }
    console.log(orderedTasks);
    index = orderedTasks.indexOf(task.node);
    task.depends.forEach(dependTask => {
      let dependTaskIndex = orderedTasks.indexOf(dependTask);
      if (dependTaskIndex === -1) {
        orderedTasks.unshift(dependTask);
      }
      if (dependTaskIndex > index) {
        orderedTasks.splice(dependTaskIndex, 1);
        orderedTasks.unshift(dependTask);
      }
    })
  })
  return orderedTasks;
}

// let tasks = [
//   { node: 'a', depends: ['b', 'c'] },
//   { node: 'b', depends: [] },
//   { node: 'c', depends: ['b'] },
// ];
let tasks = [
  { node: 'chores', depends: ['mop', 'interview'] },
  { node: 'mop', depends: ['sweep', 'dinner'] },
  { node: 'interview', depends: ['algfriyay', 'dinner']},
  { node: 'sweep', depends: []},
  { node: 'dinner', depends: []},
  { node: 'algfriyay', depends: []}
]

console.log(orderTasks(tasks));