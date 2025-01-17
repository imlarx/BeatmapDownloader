const client = require("../assets/javascripts/api/client")

async function init(){
    let login = document.querySelector("#login")
    let user = await client.login(JSON.parse(localStorage.getItem("user")))

    login.innerHTML = `
    <div class="row">
        <div class="col-md-6" style="text-align:right;">
            <div class="row">
                <div class="col-md-12"><a style="font-size:22.5px">${user.username}</a></div>
            </div>
            <div class="row">
                <div class="col-md-12"><a style="font-size:15px" class="btn btn-primary" href="../settings/index.html">settings</a></div>
            </div>
        </div>
        <div class="col-md-6">
            <img src="${user.avatar_url}" width=75px" class="rounded-circle" style="margin-bottom: auto;">
        </div>
    </div>
    `
}

init()