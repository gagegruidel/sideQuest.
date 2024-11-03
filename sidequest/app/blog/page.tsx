export default function Blog() {
    return (
      <div className="container">
        <h1>Blog</h1>
        <form>
          <label>
            Title:
            <input type="text" required />
          </label>
          <label>
            Content:
            <textarea required></textarea>
          </label>
          <button type="submit">Post</button>
        </form>
        <h2>Previous Posts</h2>
        {/* Display blog posts here */}
      </div>
    );
  }