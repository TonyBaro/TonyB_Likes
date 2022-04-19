console.log("page loaded...")

var likeCount = [5,15,5]

function drawLikes(){
    console.log("drawing likes")
    document.getElementById("likes1").innerText = likeCount[0]+" Likes"
    document.getElementById("likes2").innerText = likeCount[1]+" Likes"
    document.getElementById("likes3").innerText = likeCount[2]+" Likes"
}
drawLikes()

function buttonPress(element){
    // console.log("liking")
    element.classList.add("pressed")
    drawLikes()
}

function buttonUnpress(element){
    // console.log("liked")
    element.classList.remove("pressed")
}

function likesUp(x){
    // console.log("liking 1")
    likeCount[x]++

}
