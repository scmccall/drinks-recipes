const RecipeCard = () => {
  return (
    <div class="uk-comment uk-comment-primary">
      <div class="uk-comment-header">
        <div class="uk-grid-medium uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img class="uk-comment-avatar" src="logo512.png" width="80" height="80" alt="" />
          </div>
          <div class="uk-width-expand">
            <h4 class="uk-comment-tltle uk-margin-remove"><a class="uk-link-reset" href="">Drink Name</a></h4>
          </div>
        </div>
      </div>
      <div class="uk-comment-body">
        <p>A short description of the cocktail. This may include where it came from, though this may want to be in a more prominent section.</p>
      </div>
    </div>
  );
};

const Recipes = () => {
  let exampleRecipes = [];
  for (let i = 0 ; i < 5; i++) {
    exampleRecipes.push(
    <div>
      <RecipeCard />
      <hr />
    </div>
    );
  };

  return (
    <div>
      <h1>Recipes</h1>
      {exampleRecipes}
    </div>
  )
};

export default Recipes;