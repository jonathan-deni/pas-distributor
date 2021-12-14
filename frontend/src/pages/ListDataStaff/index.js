import * as React from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { useTable } from "react-table";
import {
  mockStaffTableData,
  staffColumns,
  staffDropdownList,
} from "../../data/StaffListData";
import { useForm } from "react-hook-form";

const CardHeaderWithButton = ({ onClickHeaderButton }) => (
  <div className="card-header-container">
    <Container fluid>
      <Row>
        <Col lg={{ size: 4 }} />
        <Col lg={{ size: 4 }} className="card-header-title-text">
          Staff
        </Col>
        <Col lg={{ size: 4 }} className="card-header-add-button">
          <Button color="secondary" onClick={onClickHeaderButton}>
            + Add New Staff
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

const renderNormalCell = (cell) => (
  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
);

const renderIndexCell = (cell) => <th scope="row">{cell.render("Cell")}</th>;

const renderActionButtonCell = (cell) => (
  <td {...cell.getCellProps()}>
    <Col>
      <Row sm={{ size: 1 }}>
        <Button color="secondary">Update</Button>
      </Row>
      <Row sm={{ size: 1 }}>
        <Button color="secondary">Delete</Button>
      </Row>
    </Col>
  </td>
);

const StaffListTable = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  return (
    <div className="card-body-container">
      <Table bordered {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => {
                // if (i !== 0) {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
                // }
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  if (i === 0) return renderIndexCell(cell);
                  if (i === row.cells.length - 1)
                    return renderActionButtonCell(cell);
                  return renderNormalCell(cell);
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const registerFormInput = (register, name, obj) => register(name, obj);

const _renderDropdownOptions = (options) =>
  options.map((opt, index) => index === 0 ? (
      <option value="" disabled selected>
        {opt.option}
      </option>
    ) : (
      <option value={opt.value}>{opt.option}</option>
    )
);

const InputFormWithType = ({
  register,
  label,
  placeholder,
  type,
  prefixText,
  options,
}) => {
  const { ref, ...rest } = register;
  return (
    <FormGroup>
      <Label>{label}</Label>
      <InputGroup>
        {prefixText && <InputGroupText>{prefixText}</InputGroupText>}
        {options ? (
          <Input {...rest} placeholder={placeholder} type={type} innerRef={ref}>
            {_renderDropdownOptions(options)}
          </Input>
        ) : (
          <Input
            {...rest}
            placeholder={placeholder}
            type={type}
            innerRef={ref}
          />
        )}
      </InputGroup>
      <FormFeedback/>
    </FormGroup>
  );
};

const NewStaffForm = ({ formMethods: { register } }) => {
  const kodeRegister = registerFormInput(register, "kode", {
    isRequired: true,
  });
  const nameRegister = registerFormInput(register, "nama", {
    isRequired: true,
  });
  const alamatRegister = registerFormInput(register, "alamat", {
    isRequired: true,
  });
  const kotaRegister = registerFormInput(register, "kota", {
    isRequired: true,
  });
  const hpRegister = registerFormInput(register, "hp", {
    isRequired: true,
  });
  const tanggalLahirRegister = registerFormInput(register, "tanggal_lahir", {
    isRequired: true,
  });
  const mulaiKerjaRegister = registerFormInput(register, "mulai_kerja", {
    isRequired: true,
  });
  const gajiPokokRegister = registerFormInput(register, "gaji_pokok", {
    isRequired: true,
  });
  const insentifRegister = registerFormInput(register, "insentif", {
    isRequired: true,
  });
  const tunjanganRegister = registerFormInput(register, "tunjangan", {
    isRequired: true,
  });
  const jamsostekRegister = registerFormInput(register, "jamsostek", {
    isRequired: true,
  });
  const agamaRegister = registerFormInput(register, "agama", {
    isRequired: true,
  });
  const tipeRegister = registerFormInput(register, "tipe", {
    isRequired: true,
  });
  const statusRegister = registerFormInput(register, "status", {
    isRequired: true,
  });

  return (
    <div>
      <Row>
        <Col>
          <InputFormWithType
            register={kodeRegister}
            label="Kode"
            placeholder="Kode"
            type="text"
          />
        </Col>
        <Col>
          <InputFormWithType
            register={nameRegister}
            label="Nama"
            placeholder="Nama"
            type="text"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputFormWithType
            register={alamatRegister}
            label="Alamat"
            placeholder="Alamat"
            type="textarea"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputFormWithType
            register={kotaRegister}
            label="Kota"
            placeholder="Kota"
            type="text"
          />
        </Col>
        <Col>
          <InputFormWithType
            register={hpRegister}
            label="No Handphone"
            placeholder="No Handphone"
            type="text"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputFormWithType
            register={tanggalLahirRegister}
            label="Tanggal Lahir"
            placeholder="Tanggal Lahir"
            type="date"
          />
        </Col>
        <Col>
          <InputFormWithType
            register={agamaRegister}
            label="Agama"
            placeholder="Agama"
            type="select"
            options={staffDropdownList.agama}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputFormWithType
            register={mulaiKerjaRegister}
            label="Mulai Kerja"
            placeholder="Mulai Kerja"
            type="date"
          />
        </Col>
        <Col>
          <InputFormWithType
            register={tipeRegister}
            label="Tipe"
            type="select"
            options={staffDropdownList.tipe}
          />
        </Col>
        <Col>
          <InputFormWithType
            register={statusRegister}
            label="Status"
            type="select"
            options={staffDropdownList.status}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputFormWithType
            register={gajiPokokRegister}
            label="Gaji Pokok"
            placeholder="Gaji Pokok"
            type="number"
            prefixText="Rp"
          />
        </Col>
        <Col>
          <InputFormWithType
            register={insentifRegister}
            label="Insentif"
            placeholder="Insentif"
            type="number"
            prefixText="Rp"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputFormWithType
            register={tunjanganRegister}
            label="Tunjangan"
            placeholder="Tunjangan"
            type="number"
            prefixText="Rp"
          />
        </Col>
        <Col>
          <InputFormWithType
            register={jamsostekRegister}
            label="Jamsostek"
            placeholder="Jamsostek"
            type="number"
            prefixText="Rp"
          />
        </Col>
      </Row>
    </div>
  );
};

const AddNewStaffModal = ({ isShowAddModal, setIsShowAddModal, onSubmitNewStaff }) => {
  const formMethods = useForm();
  return (
    <Modal
      isOpen={isShowAddModal}
      size={"xl"}
      scrollable={true}
      backdrop={true}
      fullscreen={true}
    >
      <div className="add-staff-modal-container">
        <Form>
          <ModalHeader toggle={() => setIsShowAddModal(false)}>
            Add New Staff
          </ModalHeader>
          <ModalBody>
            <NewStaffForm formMethods={formMethods} />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() =>
                formMethods.handleSubmit(data => onSubmitNewStaff(data))()
              }
            >
              Save
            </Button>
          </ModalFooter>
        </Form>
      </div>
    </Modal>
  );
};

const onSubmitNewStaff = (
  staffListTableData,
  setStaffListTableData,
  setIsShowAddModal
) => (data) => {
  const newStaffData = {
    ...data,
    sales_coor: "Itoy",
    sales_supervisor: "Anthony"
  }
  const newStaffListTableData = [
    ...staffListTableData,
    newStaffData
  ]
  setStaffListTableData(newStaffListTableData)
  setIsShowAddModal(false)
}

const ListDataStaff = () => {
  const columns = React.useMemo(() => staffColumns, []);
  const [isShowAddModal, setIsShowAddModal] = React.useState(false);
  const [staffListTableData, setStaffListTableData] = React.useState(mockStaffTableData);

  return (
    <div className="staff-container">
      <Card>
        <CardHeader>
          <CardHeaderWithButton
            onClickHeaderButton={() => setIsShowAddModal(true)}
          />
        </CardHeader>
        <CardBody>
          <StaffListTable columns={columns} data={staffListTableData} />
        </CardBody>
      </Card>
      <AddNewStaffModal
        isShowAddModal={isShowAddModal}
        setIsShowAddModal={setIsShowAddModal}
        onSubmitNewStaff={onSubmitNewStaff(staffListTableData, setStaffListTableData, setIsShowAddModal)}
      />
    </div>
  );
};

export default ListDataStaff;
