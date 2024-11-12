const App = () => {
  function logFormData(formData: FormData) {
    console.log(Object.fromEntries(formData));
  }
  return (
    <form action={logFormData}>
      <input type="hidden" name="orgId" value="123"/>
      <label htmlFor="type">Account Type</label>

      <select id="type">
        <option value="">- Please select an option</option>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="parent">Parent</option>
        <option value="student">Student</option>
      </select>
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
      <fieldset>
        <legend>Visibility</legend>

        <div>
          <input type="radio" id="public" name="visibility" />
          <label htmlFor="public">public</label>
        </div>

        <div>
          <input type="radio" id="private" name="visibility" />
          <label htmlFor="private">private</label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="date">Start Date</label>
        <input id="date" type="date" name="date" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
