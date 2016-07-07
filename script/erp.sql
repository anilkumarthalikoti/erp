-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Jul 07, 2016 at 07:03 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `erp`
--

-- --------------------------------------------------------

--
-- Table structure for table `erp_branch`
--

CREATE TABLE IF NOT EXISTS `erp_branch` (
  `schoolId` decimal(10,0) DEFAULT NULL,
  `branchId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `branchName` varchar(150) DEFAULT NULL,
  `isactive` varchar(1) DEFAULT NULL,
  `phoneno` varchar(20) DEFAULT NULL,
  `faxno` varchar(50) DEFAULT NULL,
  `modifiedby` varchar(150) DEFAULT NULL,
  `modifiedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`branchId`),
  UNIQUE KEY `branchId` (`branchId`),
  UNIQUE KEY `branchName` (`branchName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `erp_branch`
--


-- --------------------------------------------------------

--
-- Table structure for table `erp_course`
--

CREATE TABLE IF NOT EXISTS `erp_course` (
  `courseId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `courseName` varchar(200) NOT NULL,
  `prority` int(2) NOT NULL,
  `isActive` varchar(1) NOT NULL DEFAULT 'Y',
  `modifiedby` varchar(150) DEFAULT NULL,
  `modifiedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`courseId`),
  UNIQUE KEY `courseId` (`courseId`),
  UNIQUE KEY `courseName` (`courseName`),
  UNIQUE KEY `prority` (`prority`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `erp_course`
--


-- --------------------------------------------------------

--
-- Table structure for table `erp_languages`
--

CREATE TABLE IF NOT EXISTS `erp_languages` (
  `languageId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `languageName` varchar(200) NOT NULL,
  `isActive` varchar(1) NOT NULL DEFAULT 'Y',
  `modifiedby` varchar(150) DEFAULT NULL,
  `modifiedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`languageId`),
  UNIQUE KEY `languageId` (`languageId`),
  UNIQUE KEY `languageName` (`languageName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `erp_languages`
--


-- --------------------------------------------------------

--
-- Table structure for table `erp_mappings`
--

CREATE TABLE IF NOT EXISTS `erp_mappings` (
  `mappingId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `branchId` decimal(10,0) NOT NULL,
  `courseId` decimal(10,0) NOT NULL,
  `languageId` decimal(10,0) NOT NULL,
  `isActive` varchar(1) NOT NULL DEFAULT 'Y',
  `modifiedby` varchar(150) DEFAULT NULL,
  `modifiedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`mappingId`),
  UNIQUE KEY `mappingId` (`mappingId`),
  UNIQUE KEY `branchId` (`branchId`,`courseId`,`languageId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `erp_mappings`
--


-- --------------------------------------------------------

--
-- Table structure for table `erp_modules`
--

CREATE TABLE IF NOT EXISTS `erp_modules` (
  `module_id` int(2) NOT NULL,
  `module_name` varchar(50) NOT NULL,
  `enabled` varchar(1) NOT NULL DEFAULT 'Y',
  `priority` int(2) NOT NULL,
  PRIMARY KEY (`module_id`),
  UNIQUE KEY `module_name` (`module_name`,`priority`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `erp_modules`
--

INSERT INTO `erp_modules` (`module_id`, `module_name`, `enabled`, `priority`) VALUES
(1, 'DASHBOARD', 'Y', 1),
(2, 'ADMISSION', 'Y', 2),
(3, 'FINANCE', 'Y', 3),
(4, 'USER', 'Y', 4),
(5, 'STUDENT', 'Y', 5),
(6, 'ATTENDANCE', 'Y', 6),
(7, 'ACADEMICS', 'Y', 7),
(8, 'TRANSPORT', 'Y', 8),
(9, 'LIBRARY', 'Y', 9),
(10, 'SETUP', 'Y', 10),
(11, 'ADMINISTRATOR', 'Y', 11);

-- --------------------------------------------------------

--
-- Table structure for table `erp_pages`
--

CREATE TABLE IF NOT EXISTS `erp_pages` (
  `module_id` int(2) NOT NULL,
  `page_id` int(11) NOT NULL,
  `pagename` varchar(150) NOT NULL,
  `page_action` varchar(500) NOT NULL,
  `page_enabled` varchar(1) NOT NULL DEFAULT 'Y',
  `priority` int(1) NOT NULL,
  PRIMARY KEY (`page_action`),
  UNIQUE KEY `page_id` (`page_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `erp_pages`
--

INSERT INTO `erp_pages` (`module_id`, `page_id`, `pagename`, `page_action`, `page_enabled`, `priority`) VALUES
(1, 1, 'MY DASHBOARD', '/dashboard/dashboard', 'Y', 1),
(1, 2, 'INBOX', '/dashboard/inbox', 'Y', 2),
(1, 3, 'REMINDERS', '/dashboard/reminders', 'Y', 3),
(10, 106, 'ACADEMIC YEAR', '/setup/acyear', 'Y', 6),
(10, 100, 'SCHOOL', '/setup/addschool', 'Y', 1),
(10, 101, 'BRANCH', '/setup/branch', 'Y', 2),
(10, 102, 'COURSE', '/setup/course', 'Y', 3),
(10, 103, 'LANGUAGES', '/setup/languages', 'Y', 4),
(10, 104, 'MAPPINGS', '/setup/mappings', 'Y', 5),
(10, 107, 'FEE MONTHS', '/setup/months', 'Y', 7);

-- --------------------------------------------------------

--
-- Table structure for table `erp_school`
--

CREATE TABLE IF NOT EXISTS `erp_school` (
  `schoolId` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `schoolName` varchar(150) DEFAULT NULL,
  `regcode` varchar(100) DEFAULT NULL,
  `website` varchar(250) DEFAULT NULL,
  `phoneno` varchar(20) DEFAULT NULL,
  `faxno` varchar(50) DEFAULT NULL,
  `modifiedby` varchar(150) DEFAULT NULL,
  `modifiedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`schoolId`),
  UNIQUE KEY `schoolId` (`schoolId`),
  UNIQUE KEY `schoolName` (`schoolName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `erp_school`
--


-- --------------------------------------------------------

--
-- Table structure for table `usr_logins`
--

CREATE TABLE IF NOT EXISTS `usr_logins` (
  `loginid` varchar(150) NOT NULL,
  `loginpwd` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `dashboardview` int(2) NOT NULL,
  `isadmin` varchar(1) DEFAULT NULL,
  `isactive` varchar(1) DEFAULT NULL,
  `emailId` varchar(200) DEFAULT NULL,
  `contactNo` varchar(20) DEFAULT NULL,
  `modifiedby` varchar(150) DEFAULT NULL,
  `modifiedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`loginid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usr_logins`
--

INSERT INTO `usr_logins` (`loginid`, `loginpwd`, `name`, `dashboardview`, `isadmin`, `isactive`, `emailId`, `contactNo`, `modifiedby`, `modifiedtime`) VALUES
('admin', 'admin', 'admin', 1, 'Y', 'Y', NULL, NULL, NULL, '2016-07-03 23:07:58');
