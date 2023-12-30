document.querySelector('#menu').addEventListener('click',()=> {
    document.querySelector('nav ul').classList.toggle('showmenu');
});
function readMore(articleId) {
    // Redirect to the article page
    window.location.href = 'article.html';
  }
  
  