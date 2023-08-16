const search = document.getElementById("search");
const form = document.getElementById("form");
const API_URL = "https://api.github.com/users/";




const getUsers = async (user) => {
  const data = await fetch(`${API_URL}${user}`);
  const dataJson = await data.json();
  return dataJson
};

const getUserRepos = async (user) => {
  const dataRespos = await fetch(`${API_URL}${user}/repos?sort=created`);
  const dataResposJson = await dataRespos.json();
  return dataResposJson
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = await getUsers(search.value);
  const repo = await getUserRepos(search.value);
  console.log(repo)
  document.getElementById("app").innerHTML=
  `
      <div class="card">
          <img src=${user.avatar_url} class="">
          <div >
              <h4 class="userName">${user.login}</h4>
              <p class="bio">
                  ${user.bio}
              </p>
              <div class="follo">
                  <b>followers: ${user.followers}</b>
                  <b>following: ${user.following}</b>
                  <b>repositories: ${repo.length}</b>  
              </div>

  
       </div>
      </div>
      `
});


