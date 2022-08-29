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
const submitForm = document.getElementById('comment-form')
const inputEl = document.getElementById('comment-input')
const flataGramAPI = 'http://localhost:3000/images/1'
console.log(inputEl, 'inputEl')
fetch(flatagramAPI)
    .then((res) => res.json())
    .then((data) => displayFlataGram(data));


function displayFlataGram(data) {
    cardImage.src = data.image;
    cardTitle.textContent = data.title;
    displayComments(data.comments)
}

function displayComments(comments) {
    commentsList.innerHTML = "";
    comments.map(comment => displayComment(comment))
}

function displayComment(comment) {
    const newLi = document.createElement('li')
    const text = document.createTextNode(comment.content)
    commentsList.appendChild(newLi).appendChild(text);
    // const newCommentEl= document.createElement('li');
    //const newComment=  newCommentEl.appendChild(document.createTextNode(comment.content))
    // commentsList.appendChild(newComment);
}

function addNewComment() {
    submitForm.addEventListener('submit', addComment)
}

function addComment(event) {
    event.preventDefault();
    const newPostedComment = inputEl.value;

    displayComment({ content: newPostedComment });
    event.target.reset()

}

addNewComment()