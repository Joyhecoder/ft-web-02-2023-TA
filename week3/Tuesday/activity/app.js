const postsUL = document.getElementById('postsUL')

for(let i=0; i < posts.length; i++){
    const li = document.createElement('li')
    const titleDiv = document.createElement('div')
    const bodyDiv = document.createElement('div')

    titleDiv.innerHTML = `Title: ${posts[i].title}`
    bodyDiv.innerHTML = `Body: ${posts[i].body}`

    postsUL.appendChild(li)
    li.appendChild(titleDiv)
    li.appendChild(bodyDiv)
}