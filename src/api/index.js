export const getApplications = async () => {
    let result = null
    await fetch('https://jsonplaceholder.typicode.com/posts?_limit=110')
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

export const createPost = async (post) => {
    let result = null
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then((json) => result = json);
    return result

}