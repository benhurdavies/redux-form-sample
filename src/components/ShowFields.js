import React from 'react';

const ShowFields = ({ fields, values, nameMap }) => (
  <table className="table                                                                                         table-bordered">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Field</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>{renderFields(fields, values, nameMap)}</tbody>
  </table>
);

function renderFields(fields, values, nameMap) {
  return fields.map(field => {
    return (
      <tr key={field}>
        <th scope="row">{nameMap && nameMap[field] ? nameMap[field] : field}</th>
        <td>{values && values[field] ? values[field] : null}</td>
      </tr>
    );
  });
}

export default ShowFields;
