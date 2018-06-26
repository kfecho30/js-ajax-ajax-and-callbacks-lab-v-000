$(document).ready(function (){
});

function searchRepositories() {
  let terms = $("#searchTerms").val();
  let url = `https://api.github.com/search/repositories?q=${terms}`
  $.get(url).done(displayResults).fail(displayError)
}
function displayResults(data){
  const list = data.items.map(item => {
    return (`<h2>${item.name}</h2><br>
              <p>${item.description}</p>
              <a href="${item.html_url}">Check It Out</a>
              <a href="#" onclick='showCommits()'>Show Commits</a>
              <div class='owner-info'>
                <h4>${item.owner.login}</h4>
                <img src='${item.owner.avatar_url}'/><br>
                <a href='${item.owner.html_url}'>Profile</a>
              </div>
            `)
  });
  $('#results').html(list)
}

function showCommits() {

}

function displayError(){
  $('#errors').html("<p>I'm sorry, there's been an error. Please try again.</p>")
}
