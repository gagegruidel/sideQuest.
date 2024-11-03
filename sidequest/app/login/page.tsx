export default function Login() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }