// write your code here
// var likeCount = document.querySelector('#like-count');

// function count() {
//     likeCount.value = parseInt(likeCount.value) + 1;
// }


var counter = 0;
const likesCounter = document.querySelector("#like-count");
const likesButton = document.querySelector("#like-button");
likesButton.addEventListener("click", function () {
    counter += 1;
    likesCounter.innerHTML = counter + " likes";
});

const flatagramAPI = "http://localhost:3000/images/1"
const cardImage = document.getElementById('card-image');
const cardTitle = document.getElementById('card-title');
const commentsList = document.getElementById('comments-list')

const flataGramAPI = 'http://localhost:3000/images/1'

fetch(flatagramAPI)
    .then((res) => res.json())
    .then(displayFlataGram);

function displayFlataGram(data) {
    cardImage.src = data.image;
    cardTitle.textContent = data.title;

    displayComments(data.comments)
}

function displayComments(comments) {
    commentsList.innerHTML = "";
    comments.forEach(displayComment)
}

function displayComment(comment) {
    const newComment = document.createElement('li');
    newComment.textContent = comment.content;
    commentsList.append(newComment);
}