import * as React from "react";
import { useForm } from "react-hook-form";
import { useTable } from "react-table";

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
import {
  staffColumns,
  staffDropdownList,
} from "../../data/StaffListData";
import Constants from "../../constants/Constants";

const axios = require("axios");

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

const onClickDeleteButton = (id, setIsShowDeleteModal, setDeleteID) => () => {
  setIsShowDeleteModal(true)
  setDeleteID(id)
}

const onClickUpdateButton = (originalData, setDefaultStaffForm, setIsShowStaffModal) => () => {
  setDefaultStaffForm(originalData)
  setIsShowStaffModal(true)
}

const onClickDeleteModalButton = (id, setIsShowDeleteModal) => async () => {
  try {
    await axios.delete(
      Constants.BASE_URL + "staff/" + id
    );
    setIsShowDeleteModal(false)
  } catch (err) {
    console.log("error delete staff data ", err);
  }
}

const renderActionButtonCell = (cell, originalData, setIsShowDeleteModal, setDeleteID, setDefaultStaffForm, setIsShowStaffModal) => (
  <td {...cell.getCellProps()}>
    <Col>
      <Row sm={{ size: 1 }}>
        <Button
          onClick={onClickUpdateButton(originalData, setDefaultStaffForm, setIsShowStaffModal)}
          color="secondary"
          >
          Update
        </Button>
      </Row>
      <Row sm={{ size: 1 }}>
        <Button
          onClick = {onClickDeleteButton(originalData.id, setIsShowDeleteModal, setDeleteID)}
          color="secondary"
        >
          Delete
        </Button>
      </Row>
    </Col>
  </td>
);

const StaffListTable = ({ columns, data, setIsShowDeleteModal, setIsShowStaffModal, setDeleteID, setDefaultStaffForm }) => {
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
              {headerGroup.headers.map((column, i) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                )
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, i, cellArr) => {
                  if (i === 0) return renderIndexCell(cell);
                  if (i === row.cells.length - 1)
                    return renderActionButtonCell(
                      cell,
                      row.original,
                      setIsShowDeleteModal,
                      setDeleteID,
                      setDefaultStaffForm,
                      setIsShowStaffModal
                    );
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
  options.map((opt, index) =>
    index === 0 ? (
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
      <FormFeedback />
    </FormGroup>
  );
};

const NewStaffForm = ({ register }) => {
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
  const tanggalLahirRegister = registerFormInput(register, "tanggallahir", {
    isRequired: true,
  });
  const mulaiKerjaRegister = registerFormInput(register, "mulaikerja", {
    isRequired: true,
  });
  const gajiPokokRegister = registerFormInput(register, "gajipokok", {
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
  const tipeRegister = registerFormInput(register, "stafftypeid", {
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

const DeleteStaffConfirmModal = ({isShowDeleteModal, setIsShowDeleteModal, deleteID}) => (
  <Modal
      isOpen={isShowDeleteModal}
      size={"l"}
      scrollable={true}
      backdrop={true}
      fullscreen
    >
    <ModalHeader toggle={() => setIsShowDeleteModal(false)}>
      Confirm Delete
    </ModalHeader>
    <ModalBody>
      <div>
        Are you sure you want to delete this data?
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        onClick={onClickDeleteModalButton(deleteID, setIsShowDeleteModal)}
      >
        Delete
      </Button>
      <Button
        color="danger"
        onClick={() => setIsShowDeleteModal(false)}
      >
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
)

const onClickCloseStaffModal = (
  setIsShowAddModal,
  setDefaultStaffForm
) => () => {
  setIsShowAddModal(false)
  setDefaultStaffForm({})
}

const StaffFormModal = ({
  isShowAddModal,
  setIsShowAddModal,
  onSubmitNewStaff,
  defaultStaffForm,
  setDefaultStaffForm
}) => {
  const {register, handleSubmit, reset} = useForm({
    defaultValues: defaultStaffForm
  });

  React.useEffect(() => {
    reset(defaultStaffForm)
  }, [defaultStaffForm]);

  return (
    <Modal
      isOpen={isShowAddModal}a
      size={"xl"}
      scrollable={true}
      backdrop={true}
      fullscreen
    >
      <div className="add-staff-modal-container">
        <Form>
          <ModalHeader toggle={onClickCloseStaffModal(setIsShowAddModal, setDefaultStaffForm)}>
            Add New Staff
          </ModalHeader>
          <ModalBody>
            <NewStaffForm register={register} />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() =>
                handleSubmit((data) => onSubmitNewStaff(data))()
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

const onSubmitNewStaff = (setIsShowAddModal) => async (data) => {
  const newStaffData = {
    ...data,
    sales_coor: null,
    sales_supervisor: null,
  };
  await axios.post(Constants.BASE_URL + "staff", newStaffData, {
    header: Constants.API_HEADER,
  });
  setIsShowAddModal(false);
};

const getStaffListFromServer = async (
  setStaffListTableData
) => {
  try {
    const staffTypeData = await axios.get(
      Constants.BASE_URL + "stafftype",
      { header: Constants.API_HEADER }
    );
    const staffTypeList = staffTypeData.data;

    const staffListData = await axios.get(
      Constants.BASE_URL + "staff",
      { header: Constants.API_HEADER }
    );
    const staffList = staffListData.data.map(
      (item) =>
        ({
            ...item,
            stafftypeid: staffTypeList.find(ele => item.stafftypeid === ele.id).nama
        })
    );
    setStaffListTableData(staffList);
  } catch (err) {
    console.log("error fetch staff data ", err);
  }
};

const ListDataStaff = () => {
  const columns = React.useMemo(() => staffColumns, []);
  const [isShowStaffModal, setIsShowStaffModal] = React.useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = React.useState(false);
  const [deleteID, setDeleteID] = React.useState(0);
  const [staffListTableData, setStaffListTableData] = React.useState([]);
  const [defaultStaffForm, setDefaultStaffForm] = React.useState({})

  React.useEffect(() => {
    getStaffListFromServer(setStaffListTableData);
  }, [isShowStaffModal, isShowDeleteModal]);

  return (
    <div className="staff-container">
      <Card>
        <CardHeader>
          <CardHeaderWithButton
            onClickHeaderButton={() => setIsShowStaffModal(true)}
          />
        </CardHeader>
        <CardBody>
          <StaffListTable
            columns={columns}
            data={staffListTableData}
            setIsShowDeleteModal={setIsShowDeleteModal}
            setIsShowStaffModal={setIsShowStaffModal}
            setDeleteID={setDeleteID}
            setDefaultStaffForm={setDefaultStaffForm}
          />
        </CardBody>
      </Card>
      <StaffFormModal
        isShowAddModal={isShowStaffModal}
        setIsShowAddModal={setIsShowStaffModal}
        onSubmitNewStaff={onSubmitNewStaff(setIsShowStaffModal)}
        defaultStaffForm={defaultStaffForm}
        setDefaultStaffForm={setDefaultStaffForm}
      />
      <DeleteStaffConfirmModal
        isShowDeleteModal={isShowDeleteModal}
        setIsShowDeleteModal={setIsShowDeleteModal}
        deleteID={deleteID}
      />
    </div>
  );
};

export default ListDataStaff;
