const App = () => {
  function logFormData(formData: FormData) {
    console.log(Object.fromEntries(formData));
  }
  return (
    <form
      action={logFormData}
    >
      <fieldset>
        <label htmlFor="username">UserName</label>
        <input id="username" name="username" type="text" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password" />
      </fieldset>
      <fieldset>
        <label htmlFor="age">age</label>
        <input id="age" name="age" type="number" />
      </fieldset>
      <fieldset>
        <label htmlFor="photo">photo</label>
        <input id="photo" type="file" name="photo" accept="image/*" />
      </fieldset>
      <fieldset>
        <label htmlFor="color">Favorite Color</label>
        <input id="color" type="color" name="color" />
      </fieldset>
      <fieldset>
        <label htmlFor="date">Start Date</label>
        <input id="date" type="date" name="date" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
