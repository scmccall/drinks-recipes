function Page() {
  return (
    <div>
      <h1>Draaaaanks</h1>
      <div>
        <p>Show all drinks</p>
        <button>Show all drinks</button>
      </div>
      <div>
        <p>Search drinks by recipe</p>
        <form>
          <label for="ingredient">Ingredient:</label>
          <input type="text" name="ingredient"></input>
          <button>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Page;