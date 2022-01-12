export const mockStaffTableData = [
  {
    kode: "A0001",
    nama: "Victor Itoy",
    alamat: "Jl. Cieunteung No.96",
    hp: "081111111111",
    tanggal_lahir: "5 Nov 1996",
    agama: "kristen",
    mulai_kerja: "4 Nov 2005",
    tipe: "Bos Besar",
    gaji_pokok: "1000000000",
    insentif: "1000000000",
    tunjangan: "500000",
    jamsostek: "500000",
    status: "active",
    sales_coor: "Henry",
    sales_supervisor: "Anthony"
  },
  {
    kode: "A0002",
    nama: "Henry Setiawan",
    alamat: "Jl. Cieunteung No.69",
    hp: "081111111111",
    tanggal_lahir: "5 Nov 1969",
    agama: "kristen",
    mulai_kerja: "4 Nov 2005",
    tipe: "Bos Kecil",
    gaji_pokok: "1000000000",
    insentif: "1000000000",
    tunjangan: "500000",
    jamsostek: "500000",
    status: "active",
    sales_coor: "Itoy",
    sales_supervisor: "Anthony"
  },
];

export const staffColumns = [
  {
    Header: "Staff",
    columns: [
      {
        Header: "Kode",
        accessor: "kode",
      },
      {
        Header: "Nama",
        accessor: "nama",
      },
      {
        Header: "Alamat",
        accessor: "alamat",
      },
      {
        Header: "No. HP",
        accessor: "hp",
      },
      {
        Header: "Tanggal Lahir",
        accessor: "tanggallahir",
      },
      {
        Header: "Agama",
        accessor: "agama",
      },
      {
        Header: "Mulai Kerja",
        accessor: "mulaikerja",
      },
      {
        Header: "Tipe",
        accessor: "stafftypeid",
      },
      {
        Header: "Gaji Pokok",
        accessor: "gajipokok",
      },
      {
        Header: "Insentif",
        accessor: "insentif",
      },
      {
        Header: "Tunjangan",
        accessor: "tunjangan",
      },
      {
        Header: "Jamsostek",
        accessor: "jamsostek",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
  },
];

export const staffDropdownList = {
  agama: [
    {
      option: "Pilih Agama...",
      value: "",
    },
    {
      option: "Islam",
      value: "islam",
    },
    {
      option: "Kristen Protestan",
      value: "kristen",
    },
    {
      option: "Kristen Katolik",
      value: "katolik",
    },
    {
      option: "Hindu",
      value: "hindu",
    },
    {
      option: "Buddha",
      value: "buddha",
    },
  ],
  tipe: [
    {
      option: "Pilih Tipe...",
      value: "",
    },
    {
      option: "Owner",
      value: "owner",
    },
    {
      option: "Staff",
      value: "staff",
    }
  ],
  status: [
    {
      option: "Pilih Status...",
      value: "",
    },
    {
      option: "Aktif",
      value: "aktif",
    },
    {
      option: "Non-aktif",
      value: "nonaktif",
    }
  ],
};
