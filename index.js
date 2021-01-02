/**
 * 1. space 여러개 먹히는것.
 * 2. key enter 
 * 3. alert 말고 생성 버튼 value === "" input box disabled
 * 4. todolist box형태로, 삭제, 수정 Fn
 */

const button = document.getElementById('createBtn')
button.addEventListener("click",()=>{
    const value = document.getElementById("InputBox").value
    if(value === ""){
        alert("할일을 적웆세요")
    }else{
        const TodoBox = document.getElementById("ContentBody")
        const list = document.createElement("li")
        const attribute = document.createAttribute("class")
        attribute.value = "TodoList"
        list.setAttributeNode(attribute)
        list.textContent = value
        TodoBox.appendChild(list)
        document.getElementById("InputBox").value = ""
    }
})




