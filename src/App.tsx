const App = () => {
  return (
    <form action="/api/login">
      <label htmlFor="username">UserName</label>
      <input id="username" name="username"/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
