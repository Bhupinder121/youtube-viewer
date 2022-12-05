

async function fetchData(){
    const url = 'http://ec2-65-2-31-108.ap-south-1.compute.amazonaws.com/getData'
    // const url = 'http://192.168.1.198:3000/getData'
    
    const res = await fetch(url);
    const data = await res.json()
    // console.log(data)
    // console.log(decrypt(data.toString()))
    // data.map(item => !item.isDone ? (`<li>${item.taskName}</li>`) : console.log("Done"))
    // document.getElementById('tasks').innerHTML = data.map(item => !item.isDone ? (`<li>${item.taskName}</li>`) : console.log("Done"))
    let str = "";
    for(let i = 0; i < data.length; i++){
        let task = data[i];
        if(!task.isDone){
            str += `<div class="task">
            <h1>${task.taskName}</h1>
    
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" id=${task.taskID} class="button"/>
                <span class="slider round"></span>
              </label>
            </div>
          </div>`
        }
    }
    document.getElementById('tasks').innerHTML = str
    
}
fetchData();


let buttons = document.getElementsByClassName("button");




// chrome.storage.local.get(["key"]).then((result) => {
//     if(result.key != undefined){
//         button.checked = result.key;
//     }
// });

// button.addEventListener("click", ()=>{
//     console.log("clicked");
//     // let value = button.checked;
//     // chrome.storage.local.set({ key: value }).then(() => {
//     //     console.log("Value is set to " + value);
//     // });

//     // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     //     chrome.tabs.sendMessage(tabs[0].id, {greeting: button.checked});
//     //   });

// });