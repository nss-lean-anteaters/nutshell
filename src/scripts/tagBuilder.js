

// tag is referring to the tag element that you wish to create, parent is referring to
//the element that you want to append the generated element from, and content is the text content
// of the element, and id is id of tag

const elementBuilder = (tag, parent, content, id) => {
    const parentElement = document.getElementById(`${parent}`)
    const newTag = document.createElement(`${tag}`)
    newTag.textContent = `${content}`
    newtag.id =`${id}`
    parentElement.appendChild(newTag)
}
module.exports = elementBuilder