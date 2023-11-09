import { Link } from "react-router-dom";

const MyAssignmentsRow = ({assignment}) => {
    const {title, marks, status, _id, obtainedMark, feedback }= assignment;
    return (
        <tr>
      <td>
          {title}
      </td>
      <td>{status}</td>
      <td>
        {marks}
      </td>
      <td>{obtainedMark}</td>
      <td>{feedback}</td>
      {/* <th>
        <Link to={`/giveMark/${_id}`}><button className="btn btn-ghost border-2 border-black bg-violet-500 rounded-md text-white btn-sm">Give Mark</button></Link>
      </th> */}
    </tr>
    );
};

export default MyAssignmentsRow;