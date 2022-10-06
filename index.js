const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "assets/images/avatar-vangogh.jpg",
        post: "assets/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes:4,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "assets/images/avatar-courbet.jpg",
        post: "assets/images/post-courbet.jpg",
        comment: "Only positive vibes💅✌🏻",
        likes: 125,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "assets/images/avatar-ducreux.jpg",
        post: "assets/images/post-ducreux.jpg",
        comment: "What is Beethoven's Favorite Fruit? BA-NA-NA-NAAA" ,
        likes: 15892,
        liked : false
    }
]

const mainEl = document.getElementById("main")

let heart = "assets/images/icon-heart.png"
let comment = "assets/images/icon-comment.png"
let dm = "assets/images/icon-dm.png"
let likeIcon = "assets/images/like.png"




let html = ""
for(let i = 0; i < posts.length; i++){
    html += `
        <section class="main-container">
            <div class="post">
                <div class="user-info">
                    <img src="${posts[i].avatar}" alt="courbet's avatar" class="avatar">
                    <div class="post-info">
                        <h3 class="name">${posts[i].name}</h3>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <div>
                <svg class="heart-icon">
                    <use xlink:href="#icon-heart"></use>
                </svg>
                    <img src="${posts[i].post} "class="user-post"" >
                   
                </div>
                <div class="icons">
                    <img src="${heart}" class="icon like-btn" id="like-post" ></img>
                    <img src="${comment}"  alt="comment icon" class="icon">
                    <img src="${dm}" alt="dm icon" class="icon">
                </div>
                <p class="post-desc counter">${posts[i].likes} likes</p>
                <p><span class="post-desc">${posts[i].username}</span> ${posts[i].comment}</p>

            </div>
        </section>
    `
}


mainEl.innerHTML = html

let counterEl = document.getElementsByClassName("counter")
let userPost = document.getElementsByClassName("user-post")
let likeBtn = document.getElementsByClassName("like-btn")
const heartIcon = document.getElementsByClassName('heart-icon');



for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function () {
        if (posts[i].liked == false) {
            like(i)            
           changeLikesNumber(counterEl[i], i)
        } else if (posts[i].liked == true) {
            removeLike(i)
            changeLikesNumber(counterEl[i], i)
        }
    })
}

// double clicked to liked post on feed.
for (let i = 0; i < userPost.length; i++) {
    userPost[i].addEventListener("dblclick", function () {
        if (posts[i].liked == false) {
            like(i)
            changeLikesNumber(counterEl[i], i)
            likeAnimation(i)
        }              
    })
}

// increment like (+)
function like(i) {
    posts[i].liked = true
    posts[i].likes += 1
    likeBtn[i].src = likeIcon
    
    
}

// decrement like (-)
function removeLike(i) {
    posts[i].liked = false
    posts[i].likes -= 1
    likeBtn[i].src = heart
    
}

function changeLikesNumber(element, index) {
    element.innerHTML = `${posts[index].likes} likes`
    
}

function likeAnimation(i){
        heartIcon[i].classList.add('like');
            setTimeout(() => {
                heartIcon[i].classList.remove('like');
              }, 1200);
    }
    

