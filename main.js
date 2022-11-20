// NEW POST VARIABLE ==============================================================================
const postInput = document.querySelector(".post-input");
const post = document.querySelector(".post-container");
const postPar = document.querySelector(".post-par");


// TO POST WHEN CLICK ENTER =================================================================================
postInput.addEventListener("keypress", function(event){

    if (event.key === "Enter"){

        let newPost = document.createElement('div')
        newPost.classList.add('new-post');
        newPost.innerHTML = `
        <div class="news-header flex-row paragraph-box">
            <div class="flex-row">
                <div class="news-dp">
                    <img src="images/robin.png" alt="">
                </div>
                <div class="dp-name">
                    <p><strong>Robin Dela Cruz</strong></p>
                    <div class="flex-row under-name">
                        <small class="seconds">12s •</small><img src="images/globe.png" alt="" class="news-icon">
                    </div>
                </div>
            </div>
            <div class="dot-menu hover2">
                <img src="images/dotmenu.png" alt="" class="news-icon dot">
                <div class="triangle"></div>
                <small class="del-post">Delete Post</small>
            </div>
        </div>
        <div class="paragraph">
            <p class="post-par">${postInput.value}</p>
        </div>
        <div class="news-footer flex-column">
            <div class="flex-row likes">
                <div class="flex-row">
                    <img src="images/react2.png" alt="">
                    <p class="react-quan">3</p>
                </div>
                <div class="flex-row comments">
                    <p class="com-quan">2 Comments</p>
                    <p class="share-quan">1 Share</p>
                </div>
            </div>
            <div class="flex-row interact mind share">
                <div class="flex-row interact-icons like-container" id="com-react">
                    <div class="like-icon">

                    </div>
                    <p class ="like">Like</p>
                </div>
                <div class="flex-row interact-icons" id="com-react">
                    <img src="images/comment.png" alt="">
                    <p>Comment</p>
                </div>
                <div class="flex-row interact-icons" id="com-react">
                    <img src="images/share.png" alt="">
                    <p>Share</p>
                </div>
            </div>
        </div>`
        const toast = document.querySelector('.toast')
        const toastBtn = document.querySelector('.btn-toast')
        if(postInput.value === ""){
            toast.classList.add('active')
            setTimeout(function(){
                toast.classList.remove('active')
            }, 3000)
        }
        else{
            post.appendChild(newPost)
            postInput.value = ""
        }
        toastBtn.addEventListener('click', function(){
            toast.classList.remove('active')
        })

        // RANDOM NUMBERS ON NEW POST LIKE COMMENTS & SHARE =========================================================
        const seconds= newPost.querySelectorAll(".seconds");
        const shareQuan= newPost.querySelectorAll(".share-quan");
        const comQuan= newPost.querySelectorAll(".com-quan");
        const reactQuan = newPost.querySelectorAll(".react-quan");
        // RANDOM NUMBERS ARRAY ================================================================
        const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        // DELETING FOR NEW POST VARIABLES ================================================================
        const dotMenu = newPost.querySelectorAll(".dot-menu")
        let delPost = newPost.querySelector(".del-post")
        // LIKE VARIABLES =================================================================================
        const likeContainer = newPost.querySelectorAll(".like-container");

        // RANDOM NUMBERS FUNCTIONS =================================================================================
        for(i = 0; i < likeContainer.length; i++){
            reactQuan[i].textContent = generate()
            seconds[i].textContent = generate() + "s"
            shareQuan[i].textContent = generate() + " Shares"
            comQuan[i].textContent = generate() + " Comments"

        function generate(){
            let random = Math.floor(Math.random()*array.length)
            return array[random]
        }

        // DELETING FOR NEW POST =================================================================================
        
        for(j = 0; j < dotMenu.length; j++){
            dotMenu[j].addEventListener('click', function(){
                this.classList.toggle('active') 
            })
        }
        delPost.addEventListener('click', function(e){
            let target = e.target
            target.parentElement.parentElement.parentElement.remove()
        })

        // LIKE FUNCTIONS =================================================================================
        likeContainer.forEach(function(btn){
            btn.addEventListener('click', function(){
                btn.classList.toggle('active')
                for(j = 0; j < reactQuan.length; j++){
                    reactQuan[j].classList.toggle('activequan');

                }
            })
        })
        // HIDES DOT MENU AND WHATS NEW =================================================================================
        window.addEventListener('scroll', function(){
            for(j = 0; j < dotMenu.length; j++){
                dotMenu[j].classList.remove('active') 
            }
        })
        }
    }
})


// =================================================================================================



// LOADING IN START OF WEBSITE ===================================================================
let load = document.querySelector(".loading");

setTimeout(() =>{
    load.classList.add('hide-load');
},1620)
// 9620
// ================================================================================================


// DELETES FRIEND REQUEST =========================================================================
let friend = document.querySelector(".div-friend");

function del(){
    friend.style.display = 'none';
}
// =================================================================================================




// CHANGE OVERFLOWING TEXT IN SMALLER DEVICES=======================================================
let photo = document.getElementById("photo");
var mq = window.matchMedia('(max-width: 700px)');

function render(e){
    if (e.matches){
        photo.innerText = "Photo";
        postInput.placeholder = "Whats on your mind?";
        profNav.classList.remove('block')
        for(j = 0; j < dotMenu.length; j++){
            dotMenu[j].classList.remove('active') 
        }
    }
    else{
        photo.textContent = "Photo/Video";
        postInput.placeholder = "Whats on your mind? Robin";
    }
}
render(mq);
mq.addEventListener('change', render)

// =================================================================================================


// TO DELETE A POST ================================================================
const dotMenu = document.querySelectorAll(".dot-menu")
let delPost = document.querySelectorAll(".del-post")

for(j = 0; j < dotMenu.length; j++){
    dotMenu[j].addEventListener('click', function(){
        this.classList.toggle('active') 
    })
}
delPost.forEach(function(del){
    del.addEventListener('click', function(e){
        let target = e.target
        target.parentElement.parentElement.parentElement.remove()
    })
})

// LIKE VARIABLES =================================================================================
const likeContainer = document.querySelectorAll(".like-container");

// LIKE FUNCTIONS ================================================================
likeContainer.forEach(function(btn){
    btn.addEventListener('click', function(){
        btn.classList.toggle('active')
        const reactQuan = document.querySelectorAll(".react-quan");
        reactQuan.forEach(function(quan){
                if(btn.classList.contains('active')){
                    quan.classList.add('activequan');
                }
                else{
                    quan.classList.remove('activequan');
        }
    })
        
    })
})
// likeContainer.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         let target = e.currentTarget
//         target.classList.toggle('active')
//         for(j = 0; j < reactQuan.length; j++){
//             reactQuan[j].classList.toggle('activequan');

//         }
//     })
// })

// STORIES SCROLL BUTTON =================================================================================
const storyScroll = document.querySelector('.stories-scroll')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')


btnNext.addEventListener('click', function(){
    storyScroll.scrollTo(500,0)
    btnPrev.style.display = 'flex'
    btnPrev.style.zIndex = '1'
})
btnPrev.addEventListener('click', function(){
    storyScroll.scrollTo(0,0)
    btnPrev.style.display = 'none'
    btnPrev.style.zIndex = '-1'
})
storyScroll.addEventListener("scroll", function(){
    const scrollWidth = storyScroll.pageXoffset
    console.log(scrollWidth)
    if(scrollWidth > 100){
        btnPrev.style.display = 'none'
        btnPrev.style.zIndex = '-1'
    }
    else{
        btnPrev.style.display = 'flex'
        btnPrev.style.zIndex = '1'
    }
})

// TO SHOW WHATS NEW ON TOP PROFILE  =================================================================================
const profNav = document.querySelector('.profile-nav')
const rightBar = document.querySelector('.right-bar')

profNav.addEventListener('click', function(){
    profNav.classList.toggle('block')
})

rightBar.addEventListener('scroll', function(){
    profNav.classList.remove('block')
})



const video = document.querySelectorAll('video')
// HIDES DOT MENU AND WHATS NEW =================================================================================
window.addEventListener('scroll', function(){
    profNav.classList.remove('block')
    video.forEach(function(vid){
        vid.pause()
    })
    for(j = 0; j < dotMenu.length; j++){
        dotMenu[j].classList.remove('active') 
    }
})
// =================================================================================================




