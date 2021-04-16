import { Link } from "react-router-dom";

export default function Pet({review, id}) {
    const {name} = review
    console.log(name)

  return (
    <div>
      <h1>Pet:</h1>      
      <Link to={`/carelink/pet/${id}`}><h3>{name}</h3></Link>
    </div>
  );
}
