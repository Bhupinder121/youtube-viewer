console.log("background script is running!!!!")

async function checkData(tab) {
    const url = "http://ec2-65-2-31-108.ap-south-1.compute.amazonaws.com/getData";
    // const url = 'http://192.168.1.198:3000/getData'

    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        let task = data[i];
        if (!task.isDone) {
            let obj = {action: "block"}
            
            chrome.tabs.sendMessage(tab, obj);
            break;
        }
    }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(changeInfo.status == "complete"){
        console.log(changeInfo.status)
    
        if(tab.url != undefined && tab.url.includes("youtube.com") ){
            console.log(changeInfo)
            checkData(tabId);
            
        }
    }
});

