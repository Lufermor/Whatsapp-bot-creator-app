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
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (2,'artículo 2 updated','Cuerpo del artículo 2 updatedjhkgjbh','2023-06-10 18:31:40'),(5,'updated desde articles.http','el cuerpo updated','2023-06-10 23:28:39'),(6,'artículo 6 updated a','Cuerpo del artículo 6 updated','2023-06-12 21:36:28'),(8,'artículo 8 ueiy','Cuerpo del artículo 8','2023-06-13 09:22:10'),(9,'Primer insert desde app','Body del primer insert','2023-06-13 09:38:46'),(11,'Body3 updated','Cuerpo del artículo 1 updated updated updated a','2023-06-13 09:40:46'),(13,'App insert 4 updated','Body 4 updated','2023-06-13 09:47:36'),(17,'Svkkj','F','2023-06-13 10:31:16'),(18,'18 u','18','2023-06-13 10:32:20'),(22,'21','21','2023-06-13 10:54:20'),(24,'24','24','2023-06-13 10:56:58'),(26,'26','26667','2023-06-13 10:59:57'),(28,'28','28','2023-06-13 11:05:26'),(29,'30','30','2023-06-13 11:10:27'),(30,'30','30','2023-06-13 11:12:55'),(31,'32','32','2023-06-13 11:14:43'),(33,'34','34','2023-06-13 11:16:23'),(34,'35','35','2023-06-13 11:17:23'),(36,'37','37','2023-06-13 11:18:51'),(37,'38','38','2023-06-13 11:34:00'),(38,'Clase article y db externalizadas','Cuerpo del artículo 8','2023-06-14 07:11:15'),(39,'Clase article, controladores y db externalizadas','Clase article, controladores y db externalizadas','2023-06-14 08:13:08'),(40,'Clase article, controladores y db externalizadas','Clase article, controladores, rutas y config y db externalizadas','2023-06-14 08:41:45'),(41,'desde articles.http','el cuerpo','2023-06-14 17:33:38'),(43,'43?','asdfadsfa 43','2023-06-15 16:24:55'),(44,'desde articles.http','el cuerpo','2023-06-15 16:57:48'),(45,'Viernes ','Akeja','2023-06-16 07:02:56'),(46,'Hay','CSS','2023-06-16 07:06:20'),(48,'Hay','CSS','2023-06-16 07:07:27'),(49,'Hehe','Add','2023-06-16 07:10:17'),(50,'Ojalá','Add','2023-06-16 07:11:04'),(51,'Review','Sigo','2023-06-16 07:18:54'),(52,'Review','Sigo','2023-06-16 07:19:07'),(53,'Review','Sigo','2023-06-16 07:20:23'),(54,'Look','Loli','2023-06-16 07:21:37'),(55,'Look','Loli','2023-06-16 07:22:16'),(56,'Look','Loli','2023-06-16 07:23:00'),(57,'Juguetes','Mi mamá','2023-06-16 07:24:17'),(58,'Juguetes','Mi mamá','2023-06-16 07:27:23'),(59,'Juguetes','Mi mamá','2023-06-16 07:27:27'),(60,'41?','Clase article, controladores, rutas y config y db externalizadas','2023-06-16 07:32:12'),(62,'Nerea','','2023-06-16 07:36:49'),(64,'Probando','Algo','2023-06-16 09:12:38'),(65,'Wtf','No','2023-06-16 09:13:36'),(66,'Pues ya','Ya h','2023-06-16 09:15:26');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bots`
--

DROP TABLE IF EXISTS `bots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bots` (
  `bot_id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `hora_inicio_actividad` time DEFAULT NULL,
  `hora_fin_actividad` time DEFAULT NULL,
  PRIMARY KEY (`bot_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `bots_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bots`
--

LOCK TABLES `bots` WRITE;
/*!40000 ALTER TABLE `bots` DISABLE KEYS */;
/*!40000 ALTER TABLE `bots` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `validar_hora_fin_actividad` BEFORE INSERT ON `bots` FOR EACH ROW BEGIN
    IF NEW.hora_fin_actividad < NEW.hora_inicio_actividad THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La hora de fin de actividad no puede ser menor que la hora de inicio de actividad.';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `cliente_id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) NOT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cliente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `validar_telefono_antes_de_insertar` BEFORE INSERT ON `clientes` FOR EACH ROW BEGIN
    IF NEW.telefono NOT REGEXP '^[0-9]$' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El número de teléfono no es válido. Debe solo contener números.';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensajes` (
  `mensaje_id` int NOT NULL AUTO_INCREMENT,
  `bot_id` int NOT NULL,
  `mensaje` text NOT NULL,
  `enviado_por_bot` tinyint(1) DEFAULT '1',
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`mensaje_id`),
  KEY `bot_id` (`bot_id`),
  CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`bot_id`) REFERENCES `bots` (`bot_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajes`
--

LOCK TABLES `mensajes` WRITE;
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `palabras_clave`
--

DROP TABLE IF EXISTS `palabras_clave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `palabras_clave` (
  `palabra_clave_id` int NOT NULL AUTO_INCREMENT,
  `bot_id` int DEFAULT NULL,
  `palabra_clave` varchar(100) NOT NULL,
  PRIMARY KEY (`palabra_clave_id`),
  KEY `bot_id` (`bot_id`),
  CONSTRAINT `palabras_clave_ibfk_1` FOREIGN KEY (`bot_id`) REFERENCES `bots` (`bot_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palabras_clave`
--

LOCK TABLES `palabras_clave` WRITE;
/*!40000 ALTER TABLE `palabras_clave` DISABLE KEYS */;
/*!40000 ALTER TABLE `palabras_clave` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantillas`
--

DROP TABLE IF EXISTS `plantillas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantillas` (
  `plantilla_id` int NOT NULL AUTO_INCREMENT,
  `bot_id` int DEFAULT NULL,
  `contenido` text NOT NULL,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`plantilla_id`),
  KEY `bot_id` (`bot_id`),
  CONSTRAINT `plantillas_ibfk_1` FOREIGN KEY (`bot_id`) REFERENCES `bots` (`bot_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantillas`
--

LOCK TABLES `plantillas` WRITE;
/*!40000 ALTER TABLE `plantillas` DISABLE KEYS */;
/*!40000 ALTER TABLE `plantillas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programacion`
--

DROP TABLE IF EXISTS `programacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programacion` (
  `programacion_id` int NOT NULL AUTO_INCREMENT,
  `bot_id` int NOT NULL,
  `hora_envio` datetime DEFAULT CURRENT_TIMESTAMP,
  `mensaje_id` int NOT NULL,
  `destinatario_id` int NOT NULL,
  PRIMARY KEY (`programacion_id`),
  KEY `bot_id` (`bot_id`),
  KEY `mensaje_id` (`mensaje_id`),
  KEY `destinatario_id` (`destinatario_id`),
  CONSTRAINT `programacion_ibfk_1` FOREIGN KEY (`bot_id`) REFERENCES `bots` (`bot_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `programacion_ibfk_2` FOREIGN KEY (`mensaje_id`) REFERENCES `mensajes` (`mensaje_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `programacion_ibfk_3` FOREIGN KEY (`destinatario_id`) REFERENCES `clientes` (`cliente_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programacion`
--

LOCK TABLES `programacion` WRITE;
/*!40000 ALTER TABLE `programacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `programacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuestas_automaticas`
--

DROP TABLE IF EXISTS `respuestas_automaticas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respuestas_automaticas` (
  `respuesta_id` int NOT NULL AUTO_INCREMENT,
  `bot_id` int NOT NULL,
  `plantilla_id` int NOT NULL,
  `palabra_clave_id` int NOT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `bot_id` (`bot_id`),
  KEY `plantilla_id` (`plantilla_id`),
  KEY `palabra_clave_id` (`palabra_clave_id`),
  CONSTRAINT `respuestas_automaticas_ibfk_1` FOREIGN KEY (`bot_id`) REFERENCES `bots` (`bot_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `respuestas_automaticas_ibfk_2` FOREIGN KEY (`plantilla_id`) REFERENCES `plantillas` (`plantilla_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `respuestas_automaticas_ibfk_3` FOREIGN KEY (`palabra_clave_id`) REFERENCES `palabras_clave` (`palabra_clave_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestas_automaticas`
--

LOCK TABLES `respuestas_automaticas` WRITE;
/*!40000 ALTER TABLE `respuestas_automaticas` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuestas_automaticas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `correo` (`correo`),
  UNIQUE KEY `telefono` (`telefono`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tfg_dam_app6'
--

--
-- Dumping routines for database 'tfg_dam_app6'
--
/*!50003 DROP PROCEDURE IF EXISTS `crear_bot` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crear_bot`(IN p_usuario_id INT, IN p_nombre VARCHAR(100), IN p_activo BOOLEAN)
BEGIN
    IF EXISTS (SELECT 1 FROM usuarios WHERE usuario_id = p_usuario_id) THEN
        INSERT INTO bots(usuario_id, nombre, activo, fecha_creacion)
        VALUES (p_usuario_id, p_nombre, p_activo, NOW());
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Usuario no encontrado';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `crear_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crear_usuario`(IN p_nombre VARCHAR(100), IN p_correo VARCHAR(100), IN p_contrasena VARCHAR(100), in p_telefono varchar(30))
BEGIN
    IF NOT EXISTS (SELECT 1 FROM usuarios WHERE correo = p_correo) THEN
        INSERT INTO usuarios(nombre, correo, contrasena, telefono, fecha_creacion) 
        VALUES (p_nombre, p_correo, p_contrasena, p_telefono, NOW());
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Este correo ya ha sido registrado';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `programar_mensaje` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `programar_mensaje`(IN p_bot_id INT, IN p_mensaje_id INT, IN p_hora_envio DATETIME, in p_destinatario_id int)
BEGIN
    IF EXISTS (SELECT 1 FROM bots WHERE bot_id = p_bot_id) AND
       EXISTS (SELECT 1 FROM mensajes WHERE mensaje_id = p_mensaje_id) AND
       EXISTS (SELECT 1 FROM clientes WHERE cliente_id = p_destinatario_id) AND
       p_hora_envio > NOW() THEN
        INSERT INTO programacion(bot_id, mensaje_id, hora_envio, destinatario_id)
        VALUES (p_bot_id, p_mensaje_id, p_hora_envio, p_destinatario_id);
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Datos no válidos para programar un mensaje';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-18  3:41:09
