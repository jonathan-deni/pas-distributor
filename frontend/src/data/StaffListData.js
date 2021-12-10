export const mockStaffTableData = [
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

export const staffColumns = [
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
];