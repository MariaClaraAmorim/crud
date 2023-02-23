import { useState } from "react";
import { IEmployee } from "./Employee.type";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

function EditEmployee(props: Props) {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };
  return (
    <>
      <div className="form-container">
        <div>
          <h3>Adicionar</h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
          <div>
            <label>Nome: </label>
            <input
              type="text"
              value={firstName}
              onChange={onFirstNameChangeHnd}
            />
          </div>
          <div>
            <label>Sobrenome: </label>
            <input
              type="text"
              value={lastName}
              onChange={onLastNameChangeHnd}
            />
          </div>
          <div>
            <label>Email: </label>
            <input type="text" value={email} onChange={onEmailChangeHnd} />
          </div>
          <div>
            <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
            <input type="submit" value="Atualizar" />
          </div>
        </form>
      </div>
    </>
  );
}

export { EditEmployee };
