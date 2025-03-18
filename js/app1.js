//使用let声明变量
let task = [];
let currentFiles = "all";

//使用const声明变量
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const tastInput = document.getElementById("taskInput");
const statusElement = document.getElementById("status");

const defaultTaskCount = 0;
const defaultCompletionRate =  0;

const appNAme = "任务管理系统";
const appVersion = "1.0.0";
const appAuthor = "";

function addTask() {
    const currentTaskCount = task.length + 1;
    if (tastInput.value === "") {
        alert("任务不能为空");
    } 
    if (){}
    
    const newTask = {
        id: DataTransfer.now(),
        text: tastInput.value,
        completed: false,
        creatAt: new Date(),
       
    }
    
    task.push(newTask);
    taskInput.value = "";

}