// "https://api.github.com/users"

fetch("https://api.github.com/users")
.then((data)=>data.json())
.then((getData)=>{
console.log(getData)

document.getElementById("userProfile").setAttribute("src",getData[0].avatar_url)
document.getElementById("userName").innerText= getData[0].login
document.getElementById("url").setAttribute("href",getData[0].html_url)

document.getElementById("userProfile1").setAttribute("src",getData[1].avatar_url)
document.getElementById("userName1").innerText= getData[1].login
document.getElementById("url1").setAttribute("href",getData[1].html_url)

document.getElementById("userProfile2").setAttribute("src",getData[2].avatar_url)
document.getElementById("userName2").innerText= getData[2].login
document.getElementById("url2").setAttribute("href",getData[2].html_url)

document.getElementById("userProfile3").setAttribute("src",getData[3].avatar_url)
document.getElementById("userName3").innerText= getData[3].login
document.getElementById("url3").setAttribute("href",getData[3].html_url)

document.getElementById("userProfile4").setAttribute("src",getData[4].avatar_url)
document.getElementById("userName4").innerText= getData[4].login
document.getElementById("url4").setAttribute("href",getData[4].html_url)

document.getElementById("userProfile5").setAttribute("src",getData[5].avatar_url)
document.getElementById("userName5").innerText= getData[5].login
document.getElementById("url5").setAttribute("href",getData[5].html_url)

document.getElementById("userProfile6").setAttribute("src",getData[6].avatar_url)
document.getElementById("userName6").innerText= getData[6].login
document.getElementById("url6").setAttribute("href",getData[6].html_url)

document.getElementById("userProfile7").setAttribute("src",getData[7].avatar_url)
document.getElementById("userName7").innerText= getData[7].login
document.getElementById("url7").setAttribute("href",getData[7].html_url)

document.getElementById("userProfile8").setAttribute("src",getData[8].avatar_url)
document.getElementById("userName8").innerText= getData[8].login
document.getElementById("url8").setAttribute("href",getData[8].html_url)

document.getElementById("userProfile9").setAttribute("src",getData[9].avatar_url)
document.getElementById("userName9").innerText= getData[9].login
document.getElementById("url9").setAttribute("href",getData[9].html_url)

document.getElementById("userProfile10").setAttribute("src",getData[10].avatar_url)
document.getElementById("userName10").innerText= getData[10].login
document.getElementById("url10").setAttribute("href",getData[10].html_url)

document.getElementById("userProfile11").setAttribute("src",getData[11].avatar_url)
document.getElementById("userName11").innerText= getData[11].login
document.getElementById("urll11").setAttribute("href",getData[11].html_url)

})

.catch((err)=>console.error(err))