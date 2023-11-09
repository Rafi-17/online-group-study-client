import { Link } from "react-router-dom";

const SubmittedAssignmentsRow = ({assignment}) => {
    const {title, marks, name, status, _id }= assignment;

    return (
        <tr>
      <td>
          {title}
      </td>
      <td>
        {marks}
      </td>
      <td>{name}</td>
      <td>{status}</td>
      <th>
        <Link to={`/giveMark/${_id}`}><button className="btn btn-ghost border-2 border-black bg-violet-500 rounded-md text-white btn-sm">Give Mark</button></Link>
      </th>
    </tr>
    );
};

export default SubmittedAssignmentsRow;