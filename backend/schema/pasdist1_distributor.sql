-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 30, 2021 at 09:29 AM
-- Server version: 10.3.32-MariaDB
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pasdist1_distributor`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `id` int(11) NOT NULL,
  `kodearea` varchar(5) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `kodepos` varchar(10) NOT NULL,
  `kota` varchar(50) NOT NULL,
  `keterangan` varchar(200) NOT NULL,
  `hari` varchar(25) NOT NULL,
  `kecamatan` varchar(25) NOT NULL,
  `propinsi` varchar(25) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `coa`
--

CREATE TABLE `coa` (
  `id` int(11) NOT NULL,
  `kode` varchar(10) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `coagroup` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  `defaultcoa` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `coagroup`
--

CREATE TABLE `coagroup` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `typepembayaran` int(11) NOT NULL,
  `typelaporan` int(11) NOT NULL,
  `kelompok` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coagroup`
--

INSERT INTO `coagroup` (`id`, `nama`, `typepembayaran`, `typelaporan`, `kelompok`, `created_at`, `updated_at`) VALUES
(2, 'Test', 0, 0, 0, '2021-02-02 06:38:37', '2021-02-02 06:38:37');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `kode` varchar(10) NOT NULL,
  `type` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `kota` varchar(50) NOT NULL,
  `area` int(11) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `hp` varchar(20) NOT NULL,
  `mulaitransaksi` date NOT NULL,
  `isaktif` int(11) NOT NULL,
  `maxinvoice` int(11) NOT NULL,
  `proteksi` int(11) NOT NULL,
  `bataskredit` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customertype`
--

CREATE TABLE `customertype` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customertype`
--

INSERT INTO `customertype` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(2, 'test', '2021-03-02 16:35:10', '2021-03-02 16:35:10');

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `id` int(11) NOT NULL,
  `dasar` int(11) DEFAULT NULL,
  `intruk` int(11) DEFAULT NULL,
  `minimalorder1` int(11) DEFAULT NULL,
  `maksimalorder1` int(11) DEFAULT NULL,
  `diskon1` int(11) DEFAULT NULL,
  `minimalorder2` int(11) DEFAULT NULL,
  `maksimalorder2` int(11) DEFAULT NULL,
  `diskon2` int(11) DEFAULT NULL,
  `minimalorder3` int(11) DEFAULT NULL,
  `maksimalorder3` int(11) DEFAULT NULL,
  `diskon3` int(11) DEFAULT NULL,
  `tunai` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`id`, `dasar`, `intruk`, `minimalorder1`, `maksimalorder1`, `diskon1`, `minimalorder2`, `maksimalorder2`, `diskon2`, `minimalorder3`, `maksimalorder3`, `diskon3`, `tunai`, `created_at`, `updated_at`) VALUES
(2, NULL, NULL, 5000, 7000, 20000, 15000, 22000, NULL, 23000, 25000, NULL, NULL, '2021-02-01 23:19:18', '2021-02-26 01:05:17');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `kode` varchar(5) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `kategori` int(11) NOT NULL,
  `merek` varchar(100) NOT NULL,
  `supplierid` int(11) NOT NULL,
  `jalur` varchar(100) NOT NULL,
  `mulaidipasarkan` date NOT NULL,
  `opsi` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `hargajual` int(11) NOT NULL,
  `hargapokok` int(11) NOT NULL,
  `unit1` varchar(25) DEFAULT NULL,
  `unit2` varchar(25) DEFAULT NULL,
  `unit3` varchar(25) DEFAULT NULL,
  `hargaunit1` int(11) DEFAULT NULL,
  `hargaunit2` int(11) DEFAULT NULL,
  `hargaunit3` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `kode`, `nama`, `kategori`, `merek`, `supplierid`, `jalur`, `mulaidipasarkan`, `opsi`, `status`, `hargajual`, `hargapokok`, `unit1`, `unit2`, `unit3`, `hargaunit1`, `hargaunit2`, `hargaunit3`, `created_at`, `updated_at`) VALUES
(2, 'SASR', 'Saos Sambal Refill', 3, 'SGM', 6, '-', '2020-01-24', 1, 1, 10000, 1000, 'Pcs', 'Bal', NULL, 500, 10000, NULL, '2021-01-24 00:51:58', '2021-01-24 00:51:58');

-- --------------------------------------------------------

--
-- Table structure for table `producttype`
--

CREATE TABLE `producttype` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producttype`
--

INSERT INTO `producttype` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(3, 'Sambal', '2021-01-24 00:48:06', '2021-01-24 00:48:06');

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `id` int(11) NOT NULL,
  `kode` varchar(5) NOT NULL,
  `productid` int(11) NOT NULL,
  `namaprogram` varchar(100) NOT NULL,
  `tanggalmulai` date NOT NULL,
  `tanggalselesai` date NOT NULL,
  `jenisprogram` tinyint(4) NOT NULL,
  `hargadiskon` int(11) DEFAULT NULL,
  `innaturamin` int(11) DEFAULT NULL,
  `innaturaget` int(11) DEFAULT NULL,
  `baranglainid` int(11) DEFAULT NULL,
  `baranglainget` int(11) DEFAULT NULL,
  `baranglainmin` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `kode` varchar(5) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `kota` varchar(50) NOT NULL,
  `hp` varchar(20) NOT NULL,
  `tanggallahir` date NOT NULL,
  `agama` varchar(10) NOT NULL,
  `mulaikerja` date NOT NULL,
  `stafftypeid` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `gajipokok` int(11) NOT NULL,
  `insentif` int(11) NOT NULL,
  `tunjangan` int(11) NOT NULL,
  `jamsostek` varchar(20) NOT NULL,
  `coorid` int(11) DEFAULT NULL,
  `supervisorid` int(11) DEFAULT NULL,
  `creditlimit` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `kode`, `nama`, `alamat`, `kota`, `hp`, `tanggallahir`, `agama`, `mulaikerja`, `stafftypeid`, `status`, `gajipokok`, `insentif`, `tunjangan`, `jamsostek`, `coorid`, `supervisorid`, `creditlimit`, `created_at`, `updated_at`) VALUES
(11, 'A1', 'Victor', 'Jl. Test No. 123', 'Tangerang', '08112010900', '1996-05-12', 'Kristen', '2020-02-02', 6, 1, 1000000, 0, 0, '0', NULL, NULL, NULL, '2021-02-02 06:23:54', '2021-02-02 06:23:54');

-- --------------------------------------------------------

--
-- Table structure for table `stafftype`
--

CREATE TABLE `stafftype` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stafftype`
--

INSERT INTO `stafftype` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(6, 'Owner', '2021-01-24 00:38:03', '2021-01-24 00:38:55');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(11) NOT NULL,
  `kode` char(5) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `kota` varchar(50) NOT NULL,
  `kodetelepon` varchar(10) NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `hp` varchar(20) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `creditlimit` int(11) NOT NULL,
  `proteksi` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `kode`, `nama`, `alamat`, `kota`, `kodetelepon`, `telepon`, `hp`, `contact`, `email`, `creditlimit`, `proteksi`, `created_at`, `updated_at`) VALUES
(6, 'SGM', 'Sinar Gemilang', 'Jl. Test No. 123', 'Tasikmalaya', '021', '335094', '0811212545', 'Andreas Willy', 'test@gmail.com', 500000000, 1, '2021-01-24 00:45:48', '2021-02-26 08:01:24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roleid` int(11) NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL,
  `platnomor` varchar(10) NOT NULL,
  `tahunakusisi` varchar(5) NOT NULL,
  `jenisbbn` tinyint(4) NOT NULL,
  `type` varchar(100) NOT NULL,
  `tahun` varchar(5) NOT NULL,
  `volume` varchar(10) NOT NULL,
  `stnknomor` varchar(50) NOT NULL,
  `tanggalstnk` date NOT NULL,
  `tanggalpajak` date NOT NULL,
  `tanggalkir` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id`, `platnomor`, `tahunakusisi`, `jenisbbn`, `type`, `tahun`, `volume`, `stnknomor`, `tanggalstnk`, `tanggalpajak`, `tanggalkir`, `created_at`, `updated_at`) VALUES
(2, 'B 2020 ABC', '2020', 0, 'A', '2015', '1', '12121212', '2021-01-24', '2021-01-24', '2021-01-24', '2021-01-24 00:54:17', '2021-01-24 00:54:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kodearea` (`kodearea`);

--
-- Indexes for table `coa`
--
ALTER TABLE `coa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coagroup`
--
ALTER TABLE `coagroup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customertype`
--
ALTER TABLE `customertype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode`),
  ADD KEY `product_type` (`kategori`),
  ADD KEY `supplier_foreignkey` (`supplierid`);

--
-- Indexes for table `producttype`
--
ALTER TABLE `producttype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode`),
  ADD KEY `product_foreignkey` (`baranglainid`),
  ADD KEY `productID_foreignKey` (`productid`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode`),
  ADD KEY `staff_type` (`stafftypeid`);

--
-- Indexes for table `stafftype`
--
ALTER TABLE `stafftype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode` (`kode`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `platnomor` (`platnomor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coa`
--
ALTER TABLE `coa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coagroup`
--
ALTER TABLE `coagroup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customertype`
--
ALTER TABLE `customertype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `discount`
--
ALTER TABLE `discount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `producttype`
--
ALTER TABLE `producttype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `stafftype`
--
ALTER TABLE `stafftype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_type` FOREIGN KEY (`kategori`) REFERENCES `producttype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `supplier_foreignkey` FOREIGN KEY (`supplierid`) REFERENCES `supplier` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `productID_foreignKey` FOREIGN KEY (`productid`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_foreignkey` FOREIGN KEY (`baranglainid`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_type` FOREIGN KEY (`stafftypeid`) REFERENCES `stafftype` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
