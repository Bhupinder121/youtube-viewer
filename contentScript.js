chrome.runtime.onMessage.addListener((request, sender,sendResponse) => {
    if(request.action == "block"){
        activate();
    }
});


function activate() {
    let yt_videos = document.querySelectorAll(`[id="dismissible"]`);

    setTimeout(changeVideos(yt_videos), 100);

    let timer = null;
    document.addEventListener("scroll", (e) => {
        if (timer != null) {
        timer = null;
        }
        timer = setTimeout(() => {
        let yt_videos = document.querySelectorAll(`[id="dismissible"]`);
        changeVideos(yt_videos);
        }, 150);
    });
}

function changeVideos(yt_videos) {
    for (let yt_video of yt_videos) {
        let yt_image = yt_video.getElementsByTagName("yt-image");
        yt_image[0].innerHTML = `<h1 style="display: grid; place-items: center; min-height: 150px; font-size: 100px" >OFF</h1>`;
        let details = yt_video.querySelector(`#details`);
        details.innerHTML = "";
        // console.log(details);
    }
}

async function checkData() {
    const url = "http://ec2-65-2-31-108.ap-south-1.compute.amazonaws.com/getData";
    // const url = 'http://192.168.1.198:3000/getData'

    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        let task = data[i];
        if (!task.isDone) {
            activate();
            break;
        }
    }
}


console.log("content script is running!!!!");

// (() => {
    


//     // checkData();
// })();
