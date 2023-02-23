import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

function EmployeeModal(props: Props) {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Employee Data</h3>
        <div>
          <div>
            <label>Nome: {data.firstName}</label>
          </div>
          <div>
            <label>Sobrenome: {data.lastName}</label>
          </div>
          <div>
            <label>Email: {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export { EmployeeModal };
