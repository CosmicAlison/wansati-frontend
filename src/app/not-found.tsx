export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "4rem" }}>
      <h1 style={{ fontSize: "3rem" }}>404 – Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Go back home
      </a>
    </div>
  );
}