import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </div>
  );
}
