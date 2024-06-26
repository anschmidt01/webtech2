-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 24. Mrz 2023 um 23:31
-- Server-Version: 10.4.25-MariaDB
-- PHP-Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `buecher`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `buecher`
--

CREATE TABLE `buecher` (
  `id` int(255) NOT NULL,
  `titel` varchar(200) DEFAULT NULL,
  `kurzbeschreibung` varchar(1000) DEFAULT NULL,
  `genre` text DEFAULT NULL,
  `status` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `buecher`
--

INSERT INTO `buecher` (`id`, `titel`, `kurzbeschreibung`, `genre`, `status`) VALUES
(4, 'Die letzten Tage des Patriarchats', 'Buch über Feminismus', 'Sachbuch', 'angefangen'),
(5, 'Harry Potter und der Stein der Weisen', 'Erlebnisse des Harry Potter', 'Roman', 'gelesen'),
(6, 'Die Tribute von Panem', 'Fantasy Buch über die Hungerspiele', 'Roman', 'gelesen'),
(7, 'Wir beide, irgendwann', 'Liebesgeschichte über das Internet', 'Roman', 'gelesen'),
(8, 'Erebos', 'Computerspiel', 'Thriller', 'gelesen'),
(9, 'Die Bestimmung', 'Über eine zerbrochene Welt', 'Roman', 'Wunschliste'),
(10, 'Frostkuss', 'Liebesgeschichte', 'Roman', 'angefangen'),
(13, 'Test1', 'Test1', 'Roman', 'gelesen'),
(15, 'Test2', 'Test2', 'Sachbuch', 'gelesen'),
(16, 'fr', '0', 'fs', 'Wunschliste'),
(21, 'Harry Potter und der Orden des Phoenix', 'Harry Potter Geschichte', 'Roman', 'Wunschliste'),
(23, 'Test 33', 'huehuih2u21', 'dhdcih', ''),
(24, 'hdekhe', 'jhdkh', 'hfkshj', '');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `buecher`
--
ALTER TABLE `buecher`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `buecher`
--
ALTER TABLE `buecher`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
