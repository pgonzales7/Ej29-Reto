-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2023 a las 15:07:58
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `certus2`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Actualizar` (IN `_id` INT, `_des` VARCHAR(50), `_pre` VARCHAR(50))   update datos set Descripcion = _des, Precio = _pre
where Id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Buscar` (IN `_id` INT)   select * from datos where Id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Eliminar` (IN `_id` INT)   delete from datos where Id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Nuevo` (IN `_id` INT, `_des` VARCHAR(50), `_pre` VARCHAR(50))   insert datos values (_id, _des, _pre)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Vista` ()   select * from datos$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

CREATE TABLE `datos` (
  `Id` int(11) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Precio` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`Id`, `Descripcion`, `Precio`) VALUES
(1, 'camotes', '70'),
(2, 'manzanas', '53'),
(4, 'leche', '20'),
(5, 'jamon', '50'),
(36, 'queso', '26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos`
--
ALTER TABLE `datos`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos`
--
ALTER TABLE `datos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
