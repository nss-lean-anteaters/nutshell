const $ = require("jquery")
const tagbuild = require("./tagBuilder")

tagbuild("img","nsHeader", "","","logoImage")
const logo = document.querySelector("#logoImage")
logo.setAttribute("src", "../../../images/anteater2.png")
logo.setAttribute("height","50px")
tagbuild("h3", "nsHeader", "Lean Anteaters Nutshell", "", "bannerTitle")
tagbuild("p", "bannerTitle", "", "", "headerID")
tagbuild("button", "headerID", "Register", "", "registerID")
tagbuild("button", "headerID", "Login", "", "loginID")



