

// tag is referring to the tag element that you wish to create, parent is referring to
//the id of the element that you want to append the generated element from, and
//content is the text content of the element you are adding, and id is id of the tag added

const elementBuilder = (tag, parentId, content, id) => {
    const parentElement = document.getElementById(`${parentId}`)
    const newTag = document.createElement(`${tag}`)
    newTag.textContent = `${content}`
    newTag.id =`${id}`
    parentElement.appendChild(newTag)
}
module.exports = elementBuilder