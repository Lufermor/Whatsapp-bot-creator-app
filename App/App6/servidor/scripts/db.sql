CREATE DATABASE  IF NOT EXISTS `tfg_dam_app6` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tfg_dam_app6`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: tfg_dam_app6
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `body` text NOT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'artículo 1 updated','Cuerpo del artículo 1 updated updated updated','2023-06-10 17:45:52'),(2,'artículo 2 updated','Cuerpo del artículo 2 updated','2023-06-10 18:31:40'),(3,'artículo 3','Cuerpo del artículo 3','2023-06-10 23:27:36'),(5,'artículo 5','Cuerpo del artículo 5','2023-06-10 23:28:39'),(6,'artículo 6 updated','Cuerpo del artículo 6 updated','2023-06-12 21:36:28'),(8,'artículo 8','Cuerpo del artículo 8','2023-06-13 09:22:10'),(9,'Primer insert desde app','Body del primer insert','2023-06-13 09:38:46'),(10,'Primer insert desde app','Body del primer insert','2023-06-13 09:39:52'),(11,'Body3 updated','Cuerpo del artículo 1 updated updated updated','2023-06-13 09:40:46'),(13,'App insert 4 updated','Body 4 updated','2023-06-13 09:47:36'),(15,'App insert 4','Body 4','2023-06-13 09:48:25'),(17,'S','F','2023-06-13 10:31:16'),(18,'18','18','2023-06-13 10:32:20'),(21,'21','21','2023-06-13 10:52:38'),(22,'21','21','2023-06-13 10:54:20'),(23,'21','21','2023-06-13 10:54:49'),(24,'24','24','2023-06-13 10:56:58'),(25,'25','25','2023-06-13 10:59:06'),(26,'26','26','2023-06-13 10:59:57'),(27,'27','26','2023-06-13 11:00:55'),(28,'28','28','2023-06-13 11:05:26'),(29,'30','30','2023-06-13 11:10:27'),(30,'30','30','2023-06-13 11:12:55'),(31,'32','32','2023-06-13 11:14:43'),(32,'33','33','2023-06-13 11:15:58'),(33,'34','34','2023-06-13 11:16:23'),(34,'35','35','2023-06-13 11:17:23'),(35,'36','35','2023-06-13 11:17:57'),(36,'37','37','2023-06-13 11:18:51'),(37,'38','38','2023-06-13 11:34:00'),(38,'Clase article y db externalizadas','Cuerpo del artículo 8','2023-06-14 07:11:15'),(39,'Clase article, controladores y db externalizadas','Clase article, controladores y db externalizadas','2023-06-14 08:13:08'),(40,'Clase article, controladores y db externalizadas','Clase article, controladores, rutas y config y db externalizadas','2023-06-14 08:41:45');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14 16:41:35
