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
import { mockStaffTableData, staffColumns } from "../../data/StaffListData";
import { FormProvider, useForm } from "react-hook-form";

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

const useStaffForm = () => {
  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  return formMethods;
};

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
                if (i !== 0)
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
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

const NewStaffForm = () => (
  <div>
    <Row>
      <Col>
        <FormGroup floating={true}>
          <Label>Kode</Label>
          <Input id="kode" name="kode" placeholder="Kode" type="text" />
          <FormFeedback>Kode harus diisi</FormFeedback>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup floating={true}>
          <Label>Nama</Label>
          <Input id="nama" name="nama" placeholder="Nama" type="text" />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        <FormGroup floating={true}>
          <Label>Alamat</Label>
          <Input
            id="alamat"
            name="alamat"
            placeholder="Alamat"
            type="textarea"
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        <FormGroup floating={true}>
          <Label>Kota</Label>
          <Input id="kota" name="kota" placeholder="Kota" type="text" />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup floating={true}>
          <Label>No Handphone</Label>
          <Input id="hp" name="hp" placeholder="No Handphone" type="text" />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        <FormGroup floating={true}>
          <Label>Tanggal Lahir</Label>
          <Input
            id="tanggal_lahir"
            name="tanggal_lahir"
            placeholder="Tanggal Lahir"
            type="date"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup floating={true}>
          <Label>Agama</Label>
          <Input id="agama" name="agama" type="select">
            <option value="" disabled selected>
              Pilih Agama...
            </option>
            <option value="islam">Islam</option>
            <option value="kristen">Kristen Protestan</option>
            <option value="katolik">Kristen Katolik</option>
            <option value="hindu">Hindu</option>
            <option value="budha">Budha</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        <FormGroup floating={true}>
          <Label>Mulai Kerja</Label>
          <Input
            id="mulai_kerja"
            name="mulai_kerja"
            placeholder="Mulai Kerja"
            type="date"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup floating={true}>
          <Label>Tipe</Label>
          <Input id="tipe" name="tipe" type="select">
            <option value="" disabled selected>
              Pilih Tipe...
            </option>
            <option value="islam">Owner</option>
            <option value="kristen">Staff</option>
          </Input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup floating={true}>
          <Label>Status</Label>
          <Input id="status" name="status" type="select">
            <option value="" disabled selected>
              Pilih Status...
            </option>
            <option value="islam">Aktif</option>
            <option value="kristen">Non-aktif</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        <FormGroup floating={true}>
          <Label>Gaji Pokok</Label>
          <InputGroup>
            <InputGroupText>Rp</InputGroupText>
            <Input name="gaji_pokok" placeholder="Gaji Pokok" type="text" />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup floating={true} >
          <Label>Insentif</Label>
          <InputGroup>
            <InputGroupText>Rp</InputGroupText>
            <Input name="insentif" placeholder="Insentif" type="text" />
          </InputGroup>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        <Label>Tunjangan</Label>
        <InputGroup>
          <InputGroupText>Rp</InputGroupText>
          <Input name="tunjangan" placeholder="Tunjangan" type="text" />
        </InputGroup>
      </Col>
      <Col>
        <Label>Jamsostek</Label>
        <InputGroup>
          <InputGroupText>Rp</InputGroupText>
          <Input name="jamsostek" placeholder="Jamsostek" type="text" />
        </InputGroup>
      </Col>
    </Row>
  </div>
);

const AddNewStaffModal = ({ isShowAddModal, setIsShowAddModal }) => {
  const formMethods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  return (
    <Modal
      isOpen={isShowAddModal}
      size={"xl"}
      scrollable={true}
      backdrop={true}
      fullscreen={true}
    >
      <FormProvider {...formMethods}>
        <Form onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
          <ModalHeader toggle={() => setIsShowAddModal(false)}>
            Add New Staff
          </ModalHeader>
          <ModalBody>
            <NewStaffForm />
          </ModalBody>
          <ModalFooter>
            <Input type="submit"></Input>
          </ModalFooter>
        </Form>
      </FormProvider>
    </Modal>
  );
};

const ListDataStaff = () => {
  const columns = React.useMemo(() => staffColumns, []);
  const [isShowAddModal, setIsShowAddModal] = React.useState(false);
  const formMethods = useStaffForm();
  return (
    <div className="staff-container">
      <Card>
        <CardHeader>
          <CardHeaderWithButton
            onClickHeaderButton={() => setIsShowAddModal(true)}
          />
        </CardHeader>
        <CardBody>
          <StaffListTable columns={columns} data={mockStaffTableData} />
        </CardBody>
      </Card>
      <AddNewStaffModal
        isShowAddModal={isShowAddModal}
        setIsShowAddModal={setIsShowAddModal}
        formMethods={formMethods}
      />
    </div>
  );
};

export default ListDataStaff;
