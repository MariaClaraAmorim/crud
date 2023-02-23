import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import { EmployeeModal } from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

function EmployeeList(props: Props) {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);
  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>

      <table>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {list.map((employee) => {
          return (
            <tbody>
              <tr key={employee.id}>
                <td data-label="Nome">{`${employee.firstName} ${employee.lastName}`}</td>
                <td data-label="Sobrenome">{employee.email}</td>
                <td data-label="Email">
                  {" "}
                  <div>
                    <input
                      className="btnActions"
                      type="button"
                      value="View"
                      onClick={() => viewEmployee(employee)}
                    />
                    <input
                      className="btnActions"
                      type="button"
                      value="Edit"
                      onClick={() => onEdit(employee)}
                    />
                    <input
                      className="btnActions"
                      type="button"
                      value="Delete"
                      onClick={() => onDeleteClickHnd(employee)}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
}

export { EmployeeList };
