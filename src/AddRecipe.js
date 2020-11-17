function AddRecipe() {
  return (
    <div class="uk-container">

      <form class="uk-form-horizontal">

        <FormBox label="Name" inputType="text" placeholder="Example Name" />
        <FormBox label="Creator" inputType="text" placeholder="Example Creator" />
        <FormBox label="Year" inputType="number" placeholder="Example Year" />
        <FormBox label="Source" inputType="text" placeholder="Example Source" />

        <hr class="uk-divider-icon" />



      </form>
    </div>
  );
};

function FormBox (props) {
  const formID = `form-${props.label}`;
  return (
    <div class="uk-margin">
      <label class="uk-form-label" for={formID}>{props.label}</label>
      <div class="uk-form-controls">
        <input class="uk-input" id="form-drink-name" type={props.inputType} placeholder={props.placeholder} />
      </div>
  </div>
  );
};

const ingredientsCount = 2;

function IngredientsSection () {
  let ingredient = [];
  for (ingredient in ingredientsCount.
  return (
  );
};

export default AddRecipe