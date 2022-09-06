export const getPosts = async () => {
    let result = null
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => result = data)
    return result
}

export const getPost = async (id) => {
    let result = null
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => result = json)
    return result
}