import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const HomeNavItem = () => (
  <NavItem>
    <NavLink href="/">Home</NavLink>
  </NavItem>
);

const ListDataNavItem = () => {
  let navigate = useNavigate();
  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
        List Data
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => navigate('/listdata/staff')}>
          Staff
        </DropdownItem>
        <DropdownItem>Staff Type</DropdownItem>
        <DropdownItem>Supplier</DropdownItem>
        <DropdownItem>Account</DropdownItem>
        <DropdownItem>COA</DropdownItem>
        <DropdownItem>Group COA</DropdownItem>
        <DropdownItem>Customer</DropdownItem>
        <DropdownItem>Customer Type</DropdownItem>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item Category</DropdownItem>
        <DropdownItem>Kendaraan</DropdownItem>
        <DropdownItem>Service Kendaraan</DropdownItem>
        <DropdownItem>Absensi</DropdownItem>
        <DropdownItem>Program</DropdownItem>
        <DropdownItem>Diskon</DropdownItem>
        <DropdownItem>Area</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
};

const PembelianNavItem = () => (
  <UncontrolledDropdown inNavbar nav>
    <DropdownToggle caret nav>
      Pembelian
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Pre Order</DropdownItem>
      <DropdownItem>Kedatangan Barang</DropdownItem>
      <DropdownItem>Retur Pembelian</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const HutangPiutangNavItem = () => (
  <UncontrolledDropdown inNavbar nav>
    <DropdownToggle caret nav>
      {`Hutang & Piutang`}
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Hutang</DropdownItem>
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Piutang
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>List Piutang</DropdownItem>
          <DropdownItem>Surat Pengantar Piutang</DropdownItem>
          <DropdownItem>Penerimaan Piutang</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const PenjualanNavItem = () => (
  <UncontrolledDropdown>
    <DropdownToggle caret nav>
      Penjualan
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Loading Barang</DropdownItem>
      <DropdownItem>Retur Penjualan</DropdownItem>
      <DropdownItem>Penyesuaian Stock</DropdownItem>
      <UncontrolledDropdown>
        <DropdownToggle className="nested-dropdown" caret nav>
          Faktur/Invoice
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Faktur / Invoice</DropdownItem>
          <DropdownItem>Pembatalan Faktur</DropdownItem>
          <DropdownItem>Surat pengantar Faktur</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const KasBankNavItem = () => (
  <UncontrolledDropdown inNavbar nav>
    <DropdownToggle caret nav>
      {`Kas & Bank`}
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Pemasukan</DropdownItem>
      <DropdownItem>Pengeluaran</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const LaporanNavItem = () => (
  <UncontrolledDropdown inNavbar nav>
    <DropdownToggle caret nav>
      Laporan
    </DropdownToggle>
  </UncontrolledDropdown>
);

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => {
    this.setState((prev) => ({
      isNavOpen: !prev.isNavOpen,
    }));
  };

  render() {
    const { isNavOpen } = this.state;
    return (
      <header>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">Pas Distributor</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              <HomeNavItem />
              <ListDataNavItem />
              <PembelianNavItem />
              <HutangPiutangNavItem />
              <PenjualanNavItem />
              <KasBankNavItem />
              <LaporanNavItem />
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
