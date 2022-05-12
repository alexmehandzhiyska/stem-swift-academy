import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1 className="heading">Page Not Found</h1>
      <p className="mt-40 text-center text-blue-500 text-3xl font-bold">Go to <Link className="italic" to="/">Home page</Link></p>
    </>
  );
}

export default NotFound;