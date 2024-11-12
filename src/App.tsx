const App = () => {
  function logFormData(formData: FormData) {
    console.log(Object.fromEntries(formData));
  }
  return (
    <form action={logFormData}>
      <div>
        <label htmlFor="username">UserName</label>
        <input id="username" name="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password" />
      </div>
      <div>
        <label htmlFor="age">age</label>
        <input id="age" name="age" type="number" />
      </div>
      <div>
        <label htmlFor="photo">photo</label>
        <input id="photo" type="file" name="photo" accept="image/*" />
      </div>

      <div>
        <label htmlFor="color">Favorite Color</label>
        <input id="color" type="color" name="color" />
      </div>

      <label htmlFor="waiver">
        <input type="checkbox" id="waiver" />
        Waiver Signed
      </label>

      <div>
        <label htmlFor="date">Start Date</label>
        <input id="date" type="date" name="date" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
