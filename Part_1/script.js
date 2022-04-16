console.log("page loaded...")

var likeCount = [3,34]

function buttonPress(element){
    // console.log("liking")
    element.classList.add("pressed")
    likeCount[0]++
    document.querySelector(".likes p").innerText = likeCount[0]+" Likes"
}

function buttonUnpress(element){
    // console.log("liked")
    element.classList.remove("pressed")
}