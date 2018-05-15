function nukeDom (){
    document.removeChild(document.documentElement);
}

function nukeElement (id){
    const element = document.getElementById(id)
    console.log(element)
    element.parentNode.removeChild(element)
}
