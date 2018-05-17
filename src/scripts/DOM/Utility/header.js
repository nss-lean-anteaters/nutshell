const $ = require("jquery")
const tagbuild = require("./tagBuilder")

tagbuild("h1", "nsHeader", "Lean Anteaters Nutshell", "", "bannerTitle")
tagbuild("p", "bannerTitle", "", "", "headerID")
tagbuild("button", "headerID", "Register", "", "registerID")
tagbuild("button", "headerID", "Login", "", "loginID")



