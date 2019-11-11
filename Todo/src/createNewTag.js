const createNewTaskList = (function(){
  let taskNumber = 0;
  const arrayStatus = ["完了","削除","中断","再開"];
  return function createNewTaskList () {
    taskNumber++;
    const createNewTask = document.createElement("div");
    createNewTask.className = taskNumber;
    const getTaskContent = document.getElementById("value_input").value;
    const getTaskTagName = document.getElementById("tag_input").value;
    const getTaskLimit = document.getElementById("limit_input").value;
    createNewElement(taskNumber,createNewTask,getTaskContent);
    createNewElement(taskNumber,createNewTask,getTaskTagName);
    for(i=0; i < 4; i++) {
      const content = arrayStatus[i];
      createNewElement(taskNumber,createNewTask,content,i);
    }
    createNewElement(taskNumber,createNewTask,getTaskLimit);
  }
})

const createNewTask = createNewTaskList();

const createNewElement = (taskNumber,createNewTask,content,i) => {
  const createNewTaskContent = document.createElement("div");
  createNewTaskContent.className = taskNumber;
  if (content) {
    createNewTaskContent.innerHTML = content;
  }
  if (i == 0) {
    createNewTaskContent.addEventListener("click", completeFnc, false);
  } else if (i == 1) {
    createNewTaskContent.addEventListener("click", deleteFnc, false);
  } else if (i == 2) {
    createNewTaskContent.addEventListener("click", interruptionFnc, false);
  } else if (i == 3) {
    createNewTaskContent.addEventListener("click", resumeFnc, false);
  }
  createNewTask.appendChild(createNewTaskContent);
  document.getElementById("going").appendChild(createNewTask);
}