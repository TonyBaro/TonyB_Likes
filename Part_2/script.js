console.log("page loaded...")

var likeCount = [5,34]

function drawLikes(){
    document.querySelector(".likes p").innerText = likeCount[0]+" Likes"
}
drawLikes()

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