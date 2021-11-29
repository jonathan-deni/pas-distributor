import * as React from 'react'

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
    Table
} from "reactstrap";
import { useTable } from "react-table";

const CardHeaderWithButton = () => (
    <div className="card-header-container">
        <Container fluid>
          <Row>
            <Col lg={{ size: 4 }}/>
            <Col 
                lg={{ size: 4 }}
                className="card-header-title-text"
            >
                Staff
            </Col>
            <Col
                lg={{ size: 4 }}
                className="card-header-add-button"
            >
                <Button
                    color="secondary"
                >
                    + Add New Staff
                </Button>
            </Col>
          </Row>
        </Container>
    </div>
);

const mockStaffTableData = [
    {
        kode: 'A0001',
        nama: 'Victor Itoy',
        alamat: 'Jl. Cieunteung No.96',
        hp: '081111111111',
        tanggal_lahir: '5 Nov 1996',
        agama: 'kristen',
        mulai_kerja: '4 Nov 2005',
        tipe: 'Bos Besar',
        gaji_pokok: '1000000000',
        insentif: '1000000000',
        tunjangan: '500000',
        jamsostek: '500000',
        sales_coor: 'Henry',
        sales_supervisor: 'Anthony'
    },
    {
        kode: 'A0002',
        nama: 'Henry Setiawan',
        alamat: 'Jl. Cieunteung No.69',
        hp: '081111111111',
        tanggal_lahir: '5 Nov 1969',
        agama: 'kristen',
        mulai_kerja: '4 Nov 2005',
        tipe: 'Bos Kecil',
        gaji_pokok: '1000000000',
        insentif: '1000000000',
        tunjangan: '500000',
        jamsostek: '500000',
        sales_coor: 'Itoy',
        sales_supervisor: 'Anthony'
    }
];

const renderNormalCell = (cell) => (
    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
);

const renderIndexCell = (cell) => (
    <th scope="row">{cell.render('Cell')}</th>
)

const renderActionButtonCell = (cell) => (
    <td {...cell.getCellProps()}>
        <Col>
            <Row sm={{ size: 1 }}>
                <Button
                    color="secondary"
                >
                    Update
                </Button>
            </Row>
            <Row sm={{ size: 1 }}>
                <Button
                    color="secondary"
                >
                    Delete
                </Button>
            </Row>
        </Col>
    </td>
)

const StaffListTable = ({columns, data}) => {
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
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell, i) => {
                            if(i == 0) return renderIndexCell(cell)
                            if(i == row.cells.length - 1) return renderActionButtonCell(cell)
                            return renderNormalCell(cell)
                        })}
                    </tr>
                )
            })}
        </tbody>
      </Table>
    </div>
  );
};

const ListDataStaff = () => {
    const staffColumns = React.useMemo(() => [
        {
            Header: 'Staff',
            columns: [
                {
                    Header: 'Kode',
                    accessor: 'kode'
                },
                {
                    Header: 'Nama',
                    accessor: 'nama'
                },
                {
                    Header: 'Alamat',
                    accessor: 'alamat'
                },
                {
                    Header: 'No. HP',
                    accessor: 'hp'
                },
                {
                    Header: 'Tanggal Lahir',
                    accessor: 'tanggal_lahir'
                },
                {
                    Header: 'Agama',
                    accessor: 'agama'
                },
                {
                    Header: 'Mulai Kerja',
                    accessor: 'mulai_kerja'
                },
                {
                    Header: 'Tipe',
                    accessor: 'tipe'
                },
                {
                    Header: 'Gaji Pokok',
                    accessor: 'gaji_pokok'
                },
                {
                    Header: 'Insentif',
                    accessor: 'insentif'
                },
                {
                    Header: 'Tunjangan',
                    accessor: 'tunjangan'
                },
                {
                    Header: 'Jamsostek',
                    accessor: 'jamsostek'
                },
                {
                    Header: 'Sales Coor',
                    accessor: 'sales_coor'
                },
                {
                    Header: 'Sales Supervisor',
                    accessor: 'sales_supervisor'
                },
                {
                    Header: 'Action',
                    accessor: 'action'
                }
            ]
        }
    ]);

    return (
        <div className = 'staff-container'>
            <Card>
                <CardHeader>
                    <CardHeaderWithButton/>
                </CardHeader>
                <CardBody>
                    <StaffListTable columns={staffColumns} data={mockStaffTableData}/>
                </CardBody>
            </Card>
        </div>
    )
};

export default ListDataStaff;
