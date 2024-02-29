function loadPost(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=>displayPost(data))
}


function displayPost(posts){
    const postContainer=document.getElementById(`post-container`)
    console.log(posts)
for(const post of posts ){
const div=document.createElement(`div`)
div.classList.add(`post`)

div.innerHTML=`<h4>User Id:  ${post.userId}</h4>
<h5>title: ${post.title}</h5>
<p>Post Description:${post.body} </p>`;

postContainer.appendChild(div)


}

}




loadPost()