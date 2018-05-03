# Bahdblog
A simple blogging application for learning ReactJS

### Live application

https://bahdblog.herokuapp.com

### Pending features to be implemented
- Add comments to application
- Create a Category page. A user visits /category/:category-slug and sees a list of articles in this specific category. 
  - The list of articles for a category can be gotten from this endpoint: https://react-blog-api.bahdcasts.com/api/articles/category/{id}
- Add button loading states for better user experiences . Whenever the user submits a form, the button should be disabled, and show `Loading ...`, and once a response is gotten from the server, the button should be re-enabled and the Loading message removed.
- Add a 404 page to the application. This page will be displayed when the user tries to visit a route that does not exist.
- Redirect the user to the 404 page if the article the user wants to see on the SingleArticle Page is not found. If the API responds with 404, redirect the user to the 404 page.
- Display a better Loading state when the article on the SingleArticle component is being fetched from the server.
- Add loading state to application when user visits Welcome Page. The user should see a loading image before the articles are actually displayed.

PS: After implementing all these features, open a pull request with the code for the implemented features, and invite me(username: `bahdcoder`) for a review.