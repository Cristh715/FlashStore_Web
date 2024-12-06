-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: boefwtgj1nlcj5vcnbol-mysql.services.clever-cloud.com    Database: boefwtgj1nlcj5vcnbol
-- ------------------------------------------------------
-- Server version	8.0.22-13

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-493368661';

--
-- Table structure for table `Categorias`
--

DROP TABLE IF EXISTS `Categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categorias` (
  `categoria_id` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(20) DEFAULT NULL,
  `descripcion` text,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categorias`
--

LOCK TABLES `Categorias` WRITE;
/*!40000 ALTER TABLE `Categorias` DISABLE KEYS */;
INSERT INTO `Categorias` VALUES (1,'Smartphones','Teléfonos inteligentes móviles'),(2,'Smartwatch','Relojes inteligentes'),(3,'Tablets','Dispositivos de pantalla táctil'),(4,'Accesorios','Accesorios para dispositivos tecnológicos');
/*!40000 ALTER TABLE `Categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cuentas`
--

DROP TABLE IF EXISTS `Cuentas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cuentas` (
  `cuenta_id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  PRIMARY KEY (`cuenta_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `Cuentas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cuentas`
--

LOCK TABLES `Cuentas` WRITE;
/*!40000 ALTER TABLE `Cuentas` DISABLE KEYS */;
INSERT INTO `Cuentas` VALUES (2,NULL,'cristh715@gmail.com','$2a$05$29kgCJK4loAJIt8kbkg4gecBhpfsGTYRZX5MjFgAYo2SGNQF9qx12'),(3,NULL,'chesney.marchena@unmsm.edu.pe','$2a$05$HaYV3eIxNkX22w9SKZryOeyHFbhwYKaiCP5Q/gqEZ5B3D0NVvUNWe'),(4,NULL,'eros.anaya@unmsm.edu.pe','$2a$05$bWgeB9QvoCpCbhfHGR/4EOMdWUN22e3AJDP4WWQ0Xh8h1tCk2jOcm'),(5,NULL,'crithian@atuncar.com','$2a$05$Ln7./qMN3gCF7JSfnaBn1uKcMs26b7Ka7sTRGMhoVo40ZrA5O7gHG'),(6,5,'myemail@example.com','$2a$05$/8EKegwtOegskArZo0fJKO1EIKTVLv1Q4mDv2.hX/sFthidse8PKG'),(7,6,'exampleuser@example.com','$2a$05$LLhzYhjbvkl4EE/hKKqj2On8sOGIVhDvYVWqkQMqTFkqMHxbYD67e'),(8,7,'roberto.rodriguez@gmail.com','$2a$05$w35nyOzmjGI6q2vbi/PQ8.ZYSSriZcIOFS8hKUH5yquPuwm7ig.s2'),(9,8,'roberto.rodriguez@gmail.com','$2a$05$iBIMFB.ArcOYHn0Lw5H.SuMSmaFyI9jwpuwudMDBrwHy1W1EBzPa2'),(10,9,'roberto.rodriguez@gmail.com','$2a$05$WuCtQul5H6pvKv7N83jnCubMUkaFCPKhC6GoIcij7.vBH2paQrL.6'),(11,10,'andres_torres@gmail.com','$2a$05$ljC0g2IpwzxA1ZZtk84Osu6YlWPvFH7ntc1eBxXROMW4IMr6Fh236'),(12,11,'eros@eros.eros','$2a$05$.CPxhK7nUnoInsfrb61zD.BZf10YGwfx8zUrHZ5cq4op2kWbPhhxO'),(13,12,'itachi@itachi.com','$2a$05$q0VdvrWHEs6pUieRFxFlMOYknczUhoSpazfmi/kCbGMSIQYPUCvTm'),(14,13,'marco.lopez@gmail.com','$2a$05$FByKmu0qV8/yBkvByIr8O.AYgo8QhRVLf9AC9JIOL00oMmTkwJV8m'),(15,14,'asdascac@gmail.com','$2a$05$xB.gPt89geeqBuZurGMIIuSRb2KwTA4ox0xAWvNTA9n6B/PGiFP2O'),(16,15,'jesus.chang@gmail.com','$2a$05$/luDP/6uxsLKhYXB7.14juTrh8uBYk9856DLXxlPHL1HYba5dLswy'),(17,16,'jesus.chang@gmail.com','$2a$05$MoFNPN2Qq4eZppynZTuLs.I4v7p4ndtOBlcaygqArpuF2xn.GZ33W'),(18,17,'marco@gmail.com','$2a$05$VUmzND6IvaP9nZBCtCQQu.XB0KwYb/PswGAd8c1KzZYkxMTGyV1Ue'),(19,18,'admin@admin.com','$2a$05$5nWEbEdOZmiELa53O8FRNe57xnr7QTeakVjO/I3JroGzxea3cyks2'),(20,19,'admin@admin.com','$2a$05$0lQ/sykGD/2ALUWk42HyxeQlPVTy4jK8CAqJTlcC8P/yBJWp0IAfS'),(21,20,'admin@admin.com','$2a$05$Hp/A1xn4lqcLopeJXwi1ru9Hjx9UJaRYVsLrE698gJkAYAAu9yASe'),(22,21,'admin@admin.com','$2a$05$gSb7E3gLl0VHwfFD4X4mNurngnZjwTMolM6R8whDfs/cCacaxQrvG'),(23,22,'admin@admin.com','$2a$05$f8JtlUkHKlw0RrtyDJmS7ew.yzqOAkzsKbjwhzAhFn6KI6r3HbjXG'),(24,23,'pn@pn.com','$2a$05$7AVYAo4Msi0tL6.BIyPUjOQSdZbJXzRxJLEWIMBLlvTj/v20GLcia'),(26,25,'jeremy@jeremy.com','$2a$05$Pjv5U6alRSxPJMRDI27c1eTVowKNn7oV1NmVu2P9GCFtmaDE0ho9K'),(27,26,'a@a.a','$2a$05$x1UdYXmtqNqEwGSp5sk4zelu/QUgVQOW2ysRwQofANMRbgDipLHny'),(28,27,'chesney.marchena@gmail.com','$2a$05$HESJLoxSIMGBiv6CwzBmYOD1ASkqWVSkiPCrwaznVZ5EK.B6QuwaG'),(29,28,'john.cena@gmail.com','$2a$05$PALBQcW215b1hityN16hweccWDhzD62cN7bIEcaV0tKphQ0Ew3h3.'),(30,29,'marcolopez@gmail.com','$2a$05$D0W5gjbToVZPPvfa8S0zZO2hj.CHvxoYE/hCYkGAj.KlQT7GPDB/W'),(31,30,'christopherperezbazan@gmail.com','$2a$05$tte8eV1ikDaraDWzO0kpXeuEtvmqlvehDkAILAwqCaK2qav1H9gRK'),(32,31,'juan@gmail.com','$2a$05$0WcGWGLl5YkMSDCppwmgPun83BSip6Jl3pHr.7FWNaUd0wMBbbypK'),(33,32,'juan@gmail.com','$2a$05$4SyDPfLHeyAjrDFHF5/WPuqWGl2WiJlwlnBf0gaTlqCODoWGLdx3i'),(34,33,'juan@gmail.com','$2a$05$0Q7EZWoAC1/zbopGBhFO7em6BO/a/cNkzT0.ggQ060focl6dejD0u'),(35,34,'juan@gmail.com','$2a$05$o06oVnS2/55/DilHEgn42.B/KK2wTf5k0DL5H0Oe.vdFWSNLsPwRW'),(36,35,'karlos@gmail.com','$2a$05$CwW2cfFxekrOyYeht3RT/urTT4vLVvEgn9sVPTOA2LM5QOHoBKNfS'),(37,36,'homelochino@gmail.com','$2a$05$C2ZroNj6lmOxbSvTMT0MieLItOJtsqnf/qNO/Nxf/MQHfkqHIssDm'),(38,37,'asd64@asd','$2a$05$jV7141qisKtquaAih/DYbuJIQvD5W/b929oZKO26GVsyXUFCZrgRe'),(39,38,'hola@hola.com','$2a$05$ZRpJdKDyJN/oquDjLlSFS.bM.Z3lwjQ3pbeWImmiDq3iiIhcX7TVS'),(40,39,'eros@er234234s.eros','$2a$05$x81FCA.uuoRVb6j3L8uZbug2Ejw1owcFzciMifwJ59WNVsFf4PpCy'),(41,40,'gf@hotmail.com','$2a$05$MD0E.ioj5XoSPA6A7qw2EeFcLjPgC6cGBJx85DaMBNa4pdmQ/f306'),(42,41,'victor.layme1@unmsm.edu.pe','$2a$05$N7Rt/VsDbjv5MvY9usbXBeQqHxYNLZdVd4ScJEcJ64bHpmcpUElHi'),(43,42,'victor.layme1@unmsm.edu.pe','$2a$05$wx8yxLnJsjFofxrE8xz6Pu/cajL9QqCFemD2.7DS56J0KOaqLNUTC'),(44,43,'victor.layme1@unmsm.edu.pe','$2a$05$afAcflAp.EzB3qzjBc2FxuqCw3cbfPsDpUnLVAxgjqdRgeaMY/THS'),(45,44,'pepito@gmail.com','$2a$05$WLsvBNI0qKEKZ.gXAg/.kOouwJpZUpcLIjkDR3F7kPfnsxMYa85ZO');
/*!40000 ALTER TABLE `Cuentas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DetallesPedido`
--

DROP TABLE IF EXISTS `DetallesPedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DetallesPedido` (
  `detalle_id` int NOT NULL AUTO_INCREMENT,
  `pedido_id` int DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  `cantidad` int NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  PRIMARY KEY (`detalle_id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `DetallesPedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `Pedidos` (`pedido_id`),
  CONSTRAINT `DetallesPedido_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DetallesPedido`
--

LOCK TABLES `DetallesPedido` WRITE;
/*!40000 ALTER TABLE `DetallesPedido` DISABLE KEYS */;
INSERT INTO `DetallesPedido` VALUES (1,1,3,1,2099.97),(2,1,1,2,4549.97),(3,2,3,1,2099.97),(4,2,1,2,4549.97),(5,3,3,1,2099.97),(6,3,1,2,4549.97),(7,4,1,2,4549.97),(8,4,3,1,2099.97),(9,5,81,1,1499.97),(10,5,12,1,3499.97),(11,5,14,1,1749.97),(12,6,12,1,3499.97),(13,6,81,1,1499.97),(14,6,14,1,1749.97),(15,7,14,1,1749.97),(16,8,37,2,2099.97),(17,9,40,1,1299.97),(18,9,20,3,1049.97),(19,10,14,1,1749.97),(20,11,12,1,3499.97),(21,12,14,1,1749.97),(22,12,20,1,1049.97),(23,13,20,1,1049.97);
/*!40000 ALTER TABLE `DetallesPedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Especificaciones`
--

DROP TABLE IF EXISTS `Especificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Especificaciones` (
  `especificacion_id` int NOT NULL AUTO_INCREMENT,
  `dimensiones` varchar(100) DEFAULT NULL,
  `peso` varchar(50) DEFAULT NULL,
  `pantalla` varchar(100) DEFAULT NULL,
  `procesador` varchar(100) DEFAULT NULL,
  `memoria` varchar(100) DEFAULT NULL,
  `camara_trasera` varchar(100) DEFAULT NULL,
  `camara_frontal` varchar(100) DEFAULT NULL,
  `bateria` varchar(100) DEFAULT NULL,
  `sistema_operativo` varchar(100) DEFAULT NULL,
  `conectividad` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`especificacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Especificaciones`
--

LOCK TABLES `Especificaciones` WRITE;
/*!40000 ALTER TABLE `Especificaciones` DISABLE KEYS */;
INSERT INTO `Especificaciones` VALUES (1,'160 x 75 x 8 mm','180 g','6.7 pulgadas Dynamic AMOLED','Exynos 2100','8 GB RAM + 128 GB','108 MP','40 MP','4500 mAh','Android 12','Wi-Fi, 5G'),(2,'158 x 73 x 7 mm','170 g','6.5 pulgadas Super AMOLED','Exynos 990','6 GB RAM + 256 GB','64 MP','32 MP','4000 mAh','Android 12','Wi-Fi, 5G'),(3,'155 x 70 x 8 mm','160 g','6.1 pulgadas OLED','Exynos 980','8 GB RAM + 128 GB','48 MP','25 MP','3800 mAh','Android 12','Wi-Fi, 5G'),(4,'163 x 78 x 9 mm','185 g','6.8 pulgadas Super AMOLED','Exynos 850','4 GB RAM + 64 GB','12 MP','8 MP','5000 mAh','Android 12','Wi-Fi, 4G'),(5,'156 x 72 x 8 mm','170 g','6.4 pulgadas AMOLED','Exynos 980','6 GB RAM + 128 GB','64 MP','32 MP','4300 mAh','Android 12','Wi-Fi, 5G'),(6,'161 x 74 x 8 mm','190 g','6.78 pulgadas AMOLED','Snapdragon 888','8 GB RAM + 256 GB','108 MP','32 MP','4600 mAh','MIUI 13 (basado en Android 12)','Wi-Fi, 5G'),(7,'160 x 77 x 9 mm','200 g','6.81 pulgadas IPS LCD','Snapdragon 870','8 GB RAM + 128 GB','64 MP','16 MP','4500 mAh','MIUI 13 (basado en Android 12)','Wi-Fi, 5G'),(8,'157 x 75 x 8 mm','180 g','6.67 pulgadas AMOLED','Snapdragon 865','12 GB RAM + 256 GB','108 MP','32 MP','5000 mAh','MIUI 13 (basado en Android 12)','Wi-Fi, 5G'),(9,'159 x 76 x 8 mm','185 g','6.55 pulgadas AMOLED','Snapdragon 870','8 GB RAM + 128 GB','48 MP','16 MP','4800 mAh','MIUI 13 (basado en Android 12)','Wi-Fi, 5G'),(10,'164 x 78 x 9 mm','195 g','6.67 pulgadas AMOLED','Snapdragon 865','8 GB RAM + 256 GB','108 MP','32 MP','5200 mAh','MIUI 13 (basado en Android 12)','Wi-Fi, 5G'),(11,'146 x 71 x 7 mm','164 g','6.1 pulgadas Super Retina XDR OLED','A15 Bionic','4 GB RAM + 128 GB','12 MP','12 MP','2800 mAh','iOS 15','Wi-Fi, 5G'),(12,'147 x 72 x 7 mm','169 g','6.1 pulgadas Liquid Retina HD LCD','A14 Bionic','4 GB RAM + 64 GB','12 MP','12 MP','3046 mAh','iOS 15','Wi-Fi, 5G'),(13,'146 x 70 x 7 mm','162 g','6.1 pulgadas Liquid Retina HD LCD','A13 Bionic','4 GB RAM + 256 GB','12 MP','12 MP','3110 mAh','iOS 15','Wi-Fi, 4G'),(14,'146 x 71 x 7 mm','168 g','6.1 pulgadas Super Retina XDR OLED','A14 Bionic','6 GB RAM + 128 GB','12 MP','12 MP','3046 mAh','iOS 15','Wi-Fi, 5G'),(15,'148 x 74 x 7 mm','175 g','6.1 pulgadas Super Retina XDR OLED','A15 Bionic','6 GB RAM + 256 GB','12 MP','12 MP','2800 mAh','iOS 15','Wi-Fi, 5G'),(16,'156 x 74 x 8 mm','185 g','6.78 pulgadas OLED','Kirin 9000','8 GB RAM + 256 GB','50 MP','32 MP','4200 mAh','HarmonyOS 3','Wi-Fi, 5G'),(17,'160 x 76 x 8 mm','195 g','6.81 pulgadas OLED','Kirin 9000E','6 GB RAM + 128 GB','50 MP','32 MP','4500 mAh','HarmonyOS 3','Wi-Fi, 5G'),(18,'155 x 72 x 7 mm','180 g','6.6 pulgadas OLED','Kirin 990','8 GB RAM + 256 GB','40 MP','32 MP','4000 mAh','HarmonyOS 3','Wi-Fi, 5G'),(19,'158 x 75 x 8 mm','190 g','6.67 pulgadas OLED','Kirin 985','6 GB RAM + 128 GB','48 MP','32 MP','4300 mAh','HarmonyOS 3','Wi-Fi, 5G'),(20,'160 x 73 x 8 mm','180 g','6.5 pulgadas OLED','Kirin 980','8 GB RAM + 256 GB','40 MP','32 MP','4000 mAh','HarmonyOS 3','Wi-Fi, 5G'),(21,'160 x 75 x 8 mm','185 g','6.7 pulgadas AMOLED','Snapdragon 888','8 GB RAM + 128 GB','108 MP','32 MP','4500 mAh','ColorOS 12 (basado en Android 12)','Wi-Fi, 5G'),(22,'157 x 73 x 7 mm','170 g','6.5 pulgadas AMOLED','Snapdragon 865','6 GB RAM + 256 GB','64 MP','32 MP','4000 mAh','ColorOS 12 (basado en Android 12)','Wi-Fi, 5G'),(23,'155 x 72 x 8 mm','165 g','6.4 pulgadas AMOLED','Snapdragon 750G','8 GB RAM + 128 GB','48 MP','16 MP','4300 mAh','ColorOS 12 (basado en Android 12)','Wi-Fi, 5G'),(24,'162 x 77 x 9 mm','190 g','6.8 pulgadas AMOLED','Snapdragon 870','8 GB RAM + 256 GB','50 MP','32 MP','5000 mAh','ColorOS 12 (basado en Android 12)','Wi-Fi, 5G'),(25,'158 x 74 x 8 mm','180 g','6.6 pulgadas AMOLED','Snapdragon 765G','6 GB RAM + 128 GB','64 MP','32 MP','4500 mAh','ColorOS 12 (basado en Android 12)','Wi-Fi, 5G'),(26,'160 x 75 x 8 mm','185 g','6.7 pulgadas OLED','Snapdragon 870','8 GB RAM + 128 GB','108 MP','32 MP','4500 mAh','Android 12','Wi-Fi, 5G'),(27,'157 x 73 x 7 mm','170 g','6.5 pulgadas OLED','Snapdragon 750G','6 GB RAM + 256 GB','64 MP','32 MP','4000 mAh','Android 12','Wi-Fi, 5G'),(28,'155 x 72 x 8 mm','165 g','6.4 pulgadas OLED','Snapdragon 765G','8 GB RAM + 128 GB','48 MP','16 MP','4300 mAh','Android 12','Wi-Fi, 5G'),(29,'162 x 77 x 9 mm','190 g','6.8 pulgadas OLED','Snapdragon 888','8 GB RAM + 256 GB','50 MP','32 MP','5000 mAh','Android 12','Wi-Fi, 5G'),(30,'158 x 74 x 8 mm','180 g','6.6 pulgadas OLED','Snapdragon 765','6 GB RAM + 128 GB','64 MP','32 MP','4500 mAh','Android 12','Wi-Fi, 5G'),(31,'45 x 45 x 10.8 mm','52 g','1.4 pulgadas Super AMOLED','Exynos W920','2 GB RAM + 16 GB','-','-','361 mAh','Wear OS','Bluetooth, Wi-Fi'),(32,'46.5 x 46.5 x 11.1 mm','52 g','1.4 pulgadas Super AMOLED','Exynos W920','2 GB RAM + 16 GB','-','-','361 mAh','Wear OS','Bluetooth, Wi-Fi'),(33,'44 x 44 x 10.9 mm','30 g','1.4 pulgadas Super AMOLED','Exynos 9110','2 GB RAM + 4 GB','-','-','247 mAh','Tizen OS','Bluetooth, Wi-Fi'),(34,'41 x 42.5 x 11.3 mm','48 g','1.2 pulgadas Super AMOLED','Exynos 9110','2 GB RAM + 8 GB','-','-','247 mAh','Tizen OS','Bluetooth, Wi-Fi'),(35,'39.5 x 39.5 x 10.5 mm','25 g','1.1 pulgadas Super AMOLED','Exynos 9110','2 GB RAM + 4 GB','-','-','230 mAh','Tizen OS','Bluetooth, Wi-Fi'),(36,'41 x 41 x 10.7 mm','32 g','1.7 pulgadas LTPO OLED','S7','2 GB RAM + 32 GB','-','-','Not specified','watchOS 8','Bluetooth, Wi-Fi, LTE'),(37,'40 x 40 x 10.7 mm','30.5 g','1.7 pulgadas LTPO OLED','S6','2 GB RAM + 32 GB','-','-','Not specified','watchOS 7','Bluetooth, Wi-Fi, LTE'),(38,'44 x 38 x 10.7 mm','39.7 g','1.78 pulgadas LTPO OLED','S6','2 GB RAM + 32 GB','-','-','Not specified','watchOS 7','Bluetooth, Wi-Fi, LTE'),(39,'40 x 34 x 10.7 mm','30.8 g','1.57 pulgadas LTPO OLED','S5','2 GB RAM + 32 GB','-','-','Not specified','watchOS 6','Bluetooth, Wi-Fi, LTE'),(40,'38 x 42 x 11.4 mm','42.4 g','1.65 pulgadas LTPO OLED','S3','2 GB RAM + 16 GB','-','-','Not specified','watchOS 4','Bluetooth, Wi-Fi, LTE'),(41,'51 x 51 x 14.1 mm','96 g','1.4 pulgadas MIP LCD','Not specified','2 GB RAM + 32 GB','-','-','Solar charging','Garmin OS','Bluetooth, Wi-Fi, GPS'),(42,'47 x 47 x 13.7 mm','50 g','1.2 pulgadas MIP LCD','Not specified','2 GB RAM + 16 GB','-','-','Not specified','Garmin OS','Bluetooth, Wi-Fi, GPS'),(43,'45 x 45 x 12.2 mm','49 g','1.3 pulgadas AMOLED','Not specified','2 GB RAM + 4 GB','-','-','Not specified','Garmin OS','Bluetooth, Wi-Fi, GPS'),(44,'45 x 45 x 12.9 mm','53 g','1.3 pulgadas MIP LCD','Not specified','2 GB RAM + 16 MB','-','-','Not specified','Garmin OS','Bluetooth, Wi-Fi, GPS'),(45,'34 x 34 x 10.8 mm','24 g','1.04 pulgadas TFT LCD','Not specified','2 GB RAM + 4 MB','-','-','Not specified','Garmin OS','Bluetooth, Wi-Fi, GPS'),(46,'48 x 48 x 14 mm','63 g','1.43 pulgadas AMOLED','Not specified','2 GB RAM + 16 GB','-','-','790 mAh','HarmonyOS','Bluetooth, Wi-Fi, LTE'),(47,'47 x 47 x 14.8 mm','52 g','1.39 pulgadas AMOLED','Not specified','1.5 GB RAM + 4 GB','-','-','455 mAh','LiteOS','Bluetooth, Wi-Fi, GPS'),(48,'46 x 30 x 10.7 mm','21 g','1.64 pulgadas AMOLED','Not specified','1.5 GB RAM + 4 GB','-','-','180 mAh','LiteOS','Bluetooth, Wi-Fi, GPS'),(49,'53 x 46 x 10.8 mm','43 g','1.39 pulgadas AMOLED','Not specified','1.5 GB RAM + 2 GB','-','-','455 mAh','LiteOS','Bluetooth, Wi-Fi, GPS'),(50,'46 x 46 x 10.7 mm','41 g','1.39 pulgadas AMOLED','Not specified','1.5 GB RAM + 2 GB','-','-','455 mAh','LiteOS','Bluetooth, Wi-Fi, GPS'),(51,'40.5 x 40.5 x 12.1 mm','52 g','1.58 pulgadas AMOLED','Not specified','1.5 GB RAM + 4 GB','-','-','Not specified','Fitbit OS','Bluetooth, Wi-Fi'),(52,'40.48 x 40.48 x 12.35 mm','40 g','1.58 pulgadas AMOLED','Not specified','1.5 GB RAM + 4 GB','-','-','Not specified','Fitbit OS','Bluetooth, Wi-Fi'),(53,'37.3 x 29.4 x 12.2 mm','27 g','1.04 pulgadas AMOLED','Not specified','N/A','-','-','7 días','Fitbit OS','Bluetooth, Wi-Fi'),(54,'37 x 47 x 12.1 mm','30 g','1.47 pulgadas AMOLED','Not specified','N/A','-','-','10 días','Fitbit OS','Bluetooth, Wi-Fi'),(55,'36.23 x 28.2 x 8 mm','23 g','1.04 pulgadas AMOLED','Not specified','N/A','-','-','5 días','Fitbit OS','Bluetooth, Wi-Fi'),(56,'254.4 x 165.3 x 6.3 mm','465 g','11 pulgadas TFT LCD','Snapdragon 8 Gen 1','8 GB RAM + 256 GB','8 MP','8 MP','7040 mAh','Android 12','Wi-Fi, 4G, 5G'),(57,'287.5 x 185 x 5.9 mm','575 g','12.4 pulgadas Super AMOLED','Snapdragon 8 Gen 1','8 GB RAM + 256 GB','13 MP','8 MP','10090 mAh','Android 12','Wi-Fi, 4G, 5G'),(58,'254.2 x 154.3 x 7 mm','608 g','11 pulgadas TFT LCD','Snapdragon 750G','6 GB RAM + 128 GB','8 MP','5 MP','10090 mAh','Android 11','Wi-Fi, 4G, 5G'),(59,'244.5 x 159.5 x 5.7 mm','465 g','10.4 pulgadas TFT LCD','Exynos 9611','4 GB RAM + 128 GB','8 MP','5 MP','7040 mAh','Android 10','Wi-Fi, 4G'),(60,'243 x 165 x 7.6 mm','310 g','10.1 pulgadas IPS LCD','MediaTek Helio P22T','3 GB RAM + 64 GB','5 MP','2 MP','5100 mAh','Android 10','Wi-Fi, 4G'),(61,'247.6 x 178.5 x 5.9 mm','682 g','12.9 pulgadas Liquid Retina XDR','Apple M1','16 GB RAM + 256 GB','12 MP','12 MP','40000 mAh','iPadOS 15','Wi-Fi, 4G, 5G'),(62,'247.6 x 178.5 x 5.9 mm','466 g','11 pulgadas Liquid Retina','Apple A15 Bionic','8 GB RAM + 256 GB','12 MP','12 MP','28000 mAh','iPadOS 15','Wi-Fi, 4G, 5G'),(63,'250.6 x 174.1 x 7.5 mm','458 g','10.2 pulgadas Retina','Apple A14 Bionic','3 GB RAM + 64 GB','8 MP','7 MP','8827 mAh','iPadOS 15','Wi-Fi, 4G'),(64,'247.6 x 178.5 x 6.1 mm','293 g','10.2 pulgadas Retina','Apple A15 Bionic','4 GB RAM + 128 GB','12 MP','12 MP','18500 mAh','iPadOS 15','Wi-Fi, 4G'),(65,'247.6 x 178.5 x 5.9 mm','466 g','11 pulgadas Liquid Retina','Apple M1','8 GB RAM + 256 GB','12 MP','12 MP','45000 mAh','iPadOS 15','Wi-Fi, 4G, 5G'),(66,'259.9 x 159.3 x 6.9 mm','609 g','12.6 pulgadas OLED','Kirin 9000E','8 GB RAM + 256 GB','50 MP','32 MP','10050 mAh','HarmonyOS 3','Wi-Fi, 4G, 5G'),(67,'257.4 x 178.5 x 6.5 mm','485 g','12.4 pulgadas OLED','Snapdragon 865','6 GB RAM + 128 GB','13 MP','8 MP','7250 mAh','HarmonyOS 3','Wi-Fi, 4G, 5G'),(68,'240.2 x 159 x 7.2 mm','450 g','10.4 pulgadas OLED','Kirin 710A','3 GB RAM + 64 GB','8 MP','2 MP','5100 mAh','EMUI 10','Wi-Fi, 4G'),(69,'240.2 x 159 x 7.2 mm','460 g','10.1 pulgadas OLED','Kirin 810','4 GB RAM + 128 GB','8 MP','8 MP','7250 mAh','EMUI 10','Wi-Fi, 4G'),(70,'250.4 x 159.4 x 7.7 mm','310 g','10.1 pulgadas OLED','MediaTek MT8768','2 GB RAM + 64 GB','5 MP','2 MP','5100 mAh','EMUI 10','Wi-Fi, 4G'),(71,'286.7 x 184.5 x 6.5 mm','565 g','12.6 pulgadas OLED','Snapdragon 870','8 GB RAM + 256 GB','13 MP','8 MP','10200 mAh','Android 11','Wi-Fi, 4G, 5G'),(72,'244.5 x 153.3 x 7.6 mm','485 g','11 pulgadas OLED','Snapdragon 730G','6 GB RAM + 128 GB','13 MP','8 MP','8600 mAh','Android 10','Wi-Fi, 4G'),(73,'242 x 169.2 x 7.3 mm','420 g','10.1 pulgadas OLED','MediaTek Helio P22T','4 GB RAM + 128 GB','5 MP','2 MP','5000 mAh','Android 10','Wi-Fi, 4G'),(74,'199.1 x 155.1 x 9.2 mm','305 g','8 pulgadas IPS LCD','MediaTek Helio A22','2 GB RAM + 64 GB','5 MP','2 MP','5000 mAh','Android 9','Wi-Fi, 4G'),(75,'241.5 x 171 x 8.5 mm','660 g','10.1 pulgadas TFT LCD','MediaTek MT8321','1 GB RAM + 64 GB','2 MP','2 MP','3590 mAh','Android 9','Wi-Fi, 4G'),(76,'280.6 x 208.3 x 14.5 mm','835 g','12.3 pulgadas PixelSense','Intel Core i7','32 GB RAM + 256 GB','10 MP','8 MP','43000 mAh','Windows 11','Wi-Fi, 4G, 5G'),(77,'258.1 x 171 x 8.3 mm','544 g','10.5 pulgadas PixelSense','Intel Core i3','8 GB RAM + 256 GB','8 MP','5 MP','30000 mAh','Windows 11','Wi-Fi, 4G'),(78,'287 x 208 x 7.3 mm','774 g','13 pulgadas PixelSense','Microsoft SQ2','16 GB RAM + 256 GB','10 MP','5 MP','38000 mAh','Windows 10','Wi-Fi, 4G'),(79,'247.6 x 178.5 x 5.9 mm','544 g','10.2 pulgadas PixelSense','Intel Core m3','8 GB RAM + 256 GB','8 MP','5 MP','2970 mAh','Windows 10','Wi-Fi, 4G'),(80,'287 x 208 x 7.3 mm','775 g','13 pulgadas PixelSense','Intel Core i5','8 GB RAM + 256 GB','8 MP','5 MP','7800 mAh','Windows 10','Wi-Fi, 4G'),(81,'265 x 163 x 9.8 mm','465 g','10.1 pulgadas IPS LCD','Octa-core','3 GB RAM + 64 GB','2 MP','2 MP','6300 mAh','Fire OS','Wi-Fi, 4G'),(82,'191 x 115 x 8.7 mm','355 g','8 pulgadas IPS LCD','Quad-core','3 GB RAM + 64 GB','2 MP','2 MP','4000 mAh','Fire OS','Wi-Fi'),(83,'192 x 115 x 9.6 mm','286 g','8 pulgadas IPS LCD','Quad-core','2 GB RAM + 64 GB','2 MP','2 MP','2980 mAh','Fire OS','Wi-Fi'),(84,'192 x 115 x 9.6 mm','286 g','8 pulgadas IPS LCD','Quad-core','1 GB RAM + 64 GB','2 MP','2 MP','2980 mAh','Fire OS','Wi-Fi'),(85,'265 x 163 x 9.8 mm','660 g','10.1 pulgadas IPS LCD','Octa-core','3 GB RAM + 64 GB','2 MP','2 MP','6300 mAh','Fire OS','Wi-Fi, 4G'),(86,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(87,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(88,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(89,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(90,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(91,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(92,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(93,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(94,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(95,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(96,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(97,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(98,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(99,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(100,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Especificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Favoritos`
--

DROP TABLE IF EXISTS `Favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Favoritos` (
  `usuario_id` int DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `Favoritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios` (`usuario_id`),
  CONSTRAINT `Favoritos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`producto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favoritos`
--

LOCK TABLES `Favoritos` WRITE;
/*!40000 ALTER TABLE `Favoritos` DISABLE KEYS */;
INSERT INTO `Favoritos` VALUES (11,12),(11,36),(17,85),(17,84),(27,20),(30,14),(31,14);
/*!40000 ALTER TABLE `Favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MetodosPago`
--

DROP TABLE IF EXISTS `MetodosPago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MetodosPago` (
  `metodo_pago_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`metodo_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MetodosPago`
--

LOCK TABLES `MetodosPago` WRITE;
/*!40000 ALTER TABLE `MetodosPago` DISABLE KEYS */;
INSERT INTO `MetodosPago` VALUES (1,'Tarjeta Visa'),(2,'Tarjeta Mastercard'),(3,'Tarjeta American Express');
/*!40000 ALTER TABLE `MetodosPago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pedidos`
--

DROP TABLE IF EXISTS `Pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pedidos` (
  `pedido_id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `fecha_pedido` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(50) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `metodo_pago_id` int DEFAULT NULL,
  PRIMARY KEY (`pedido_id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `metodo_pago_id` (`metodo_pago_id`),
  CONSTRAINT `Pedidos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuarios` (`usuario_id`),
  CONSTRAINT `Pedidos_ibfk_2` FOREIGN KEY (`metodo_pago_id`) REFERENCES `MetodosPago` (`metodo_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pedidos`
--

LOCK TABLES `Pedidos` WRITE;
/*!40000 ALTER TABLE `Pedidos` DISABLE KEYS */;
INSERT INTO `Pedidos` VALUES (1,1,'2024-07-10 02:15:07','Pendiente',11199.91,2),(2,1,'2024-07-10 03:41:20','Pendiente',11199.91,2),(3,1,'2024-07-10 04:13:11','Pendiente',11199.91,2),(4,1,'2024-07-10 04:17:26','Pendiente',11199.91,2),(5,17,'2024-07-11 16:53:44','Pendiente',6749.91,1),(6,17,'2024-07-11 16:55:40','Pendiente',6749.91,1),(7,17,'2024-07-11 16:58:54','Pendiente',1749.97,1),(8,11,'2024-07-11 17:55:24','Pendiente',4199.94,1),(9,27,'2024-07-11 18:40:49','Pendiente',4449.88,1),(10,28,'2024-07-11 22:27:33','Pendiente',1749.97,1),(11,11,'2024-07-11 23:19:23','Pendiente',3499.97,1),(12,31,'2024-11-01 04:07:40','Pendiente',2799.94,1),(13,31,'2024-11-15 06:17:43','Pendiente',1049.97,1);
/*!40000 ALTER TABLE `Pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Productos`
--

DROP TABLE IF EXISTS `Productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Productos` (
  `producto_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `categoria_id` int DEFAULT NULL,
  `especificacion_id` int DEFAULT NULL,
  `marca` varchar(10) DEFAULT NULL,
  `imagen` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`producto_id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `especificacion_id` (`especificacion_id`),
  CONSTRAINT `Productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `Categorias` (`categoria_id`),
  CONSTRAINT `Productos_ibfk_2` FOREIGN KEY (`especificacion_id`) REFERENCES `Especificaciones` (`especificacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Productos`
--

LOCK TABLES `Productos` WRITE;
/*!40000 ALTER TABLE `Productos` DISABLE KEYS */;
INSERT INTO `Productos` VALUES (1,'Samsung Galaxy S21 Ultra','El último buque insignia de Samsung',4549.97,50,1,1,'Samsung','https://storage.comprasmartphone.com/smartphones/samsung-galaxy-s21-ultra.png'),(2,'Samsung Galaxy S20 FE','Potente smartphone de Samsung a un precio asequible',3149.97,100,1,2,'Samsung','https://plusmobilerd.com/wp-content/uploads/2016/03/Samsung-galaxy-s20-fe_cd8db75c-e7f5-4915-b5d5-b97d991dd16a_1800x.webp'),(3,'Samsung Galaxy A52','Smartphone de gama media con características premium',2099.97,80,1,3,'Samsung','https://media.croma.com/image/upload/v1662418353/Croma%20Assets/Communication/Mobiles/Images/233623_r0spvm.png'),(4,'Samsung Galaxy A32','Smartphone de gama media con gran batería',1399.97,120,1,4,'Samsung','https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp'),(5,'Samsung Galaxy M42','Smartphone asequible con conectividad 5G',1049.97,150,1,5,'Samsung','https://playfuldroid.com/wp-content/uploads/Samsung-Galaxy-M42-Render-1-1536x1024.png'),(6,'Xiaomi Mi 11 Ultra','El buque insignia más potente de Xiaomi',3849.97,30,1,6,'Xiaomi','https://i.ibb.co/R01QSRY/Xiaomi-Mi-11-Ultra.png'),(7,'Xiaomi Mi 11 Lite','Smartphone delgado y ligero con cámara potente',2449.97,70,1,7,'Xiaomi','https://smartmovilrd.com/wp-content/uploads/2023/04/mi-11-lite.png'),(8,'Xiaomi Redmi Note 10 Pro','Smartphone de gama media con gran pantalla y batería',1399.97,100,1,8,'Xiaomi','https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_94345200/fee_786_587_png'),(9,'Xiaomi Redmi Note 9','Smartphone asequible con rendimiento sólido',1049.97,150,1,9,'Xiaomi','https://i.ibb.co/BBLxhrN/Xiaomi-Redmi-Note-9.png'),(10,'Xiaomi Poco X3 Pro','Smartphone gaming con excelente relación calidad-precio',874.97,200,1,10,'Xiaomi','https://i.ibb.co/ZN8BdPJ/Xiaomi-Poco-X3-Pro.png'),(11,'iPhone 13 Pro Max','El último y más grande iPhone de Apple',4549.97,40,1,11,'Apple','https://i.ibb.co/n63tqgx/i-Phone-13-Pro-Max.png'),(12,'iPhone 13','Nuevo modelo de iPhone con mejoras en cámara y rendimiento',3499.97,60,1,12,'Apple','https://i.ibb.co/5rWCbTM/i-Phone-13.png'),(13,'iPhone SE (2022)','Versión actualizada del iPhone SE con chip A15 Bionic',2099.97,80,1,13,'Apple','https://i.ibb.co/cFTDdhg/i-Phone-SE-2022.png'),(14,'iPhone 12 Mini','El iPhone más compacto con todas las funciones',1749.97,100,1,14,'Apple','https://www.entel.pe/wp-content/uploads/2023/06/iphone-12-mini-1.png'),(15,'iPhone XR','Smartphone asequible con rendimiento sólido y pantalla Liquid Retina',1399.97,120,1,15,'Apple','https://www.entel.pe/wp-content/uploads/2023/10/iphone-xr-1.png'),(16,'Huawei P50 Pro','El último buque insignia de Huawei con cámara Leica',3849.97,30,1,16,'Huawei','https://i.ibb.co/PmD2CcP/Huawei-P50-Pro.png'),(17,'Huawei Mate 40 Pro','Potente smartphone con procesador Kirin 9000',3149.97,50,1,17,'Huawei','https://i.ibb.co/M1bWMtc/Huawei-Mate-40-Pro.png'),(18,'Huawei Nova 8 Pro','Smartphone elegante con cámara frontal dual',2099.97,70,1,18,'Huawei','https://i.ibb.co/VwkzSKp/Huawei-Nova-8-Pro.png'),(19,'Huawei Enjoy 20 Pro','Smartphone asequible con 5G y pantalla de 90Hz',1399.97,100,1,19,'Huawei','https://i.ibb.co/59tR1hn/Huawei-Enjoy-20-Pro.webp'),(20,'Huawei Y9a','Smartphone de gama media con diseño elegante',1049.97,120,1,20,'Huawei','https://i.ibb.co/gJ1vMxG/Huawei-Y9a.png'),(21,'Oppo Find X3 Pro','El último buque insignia de Oppo con cámara microscópica',3849.97,30,1,21,'Oppo','https://i.ibb.co/1GdH8vd/Oppo-Find-X3-Pro.png'),(22,'Oppo Reno 6 Pro','Smartphone elegante con cámara de retratos AI',3149.97,50,1,22,'Oppo','https://i.ibb.co/rdpFDx3/Oppo-Reno-6-Pro.webp'),(23,'Oppo A74','Smartphone asequible con gran batería y pantalla AMOLED',2099.97,70,1,23,'Oppo','https://i.ibb.co/nMP3jS5/Oppo-A74.png'),(24,'Oppo A53s','Smartphone de gama media con cámara triple y batería de 5000mAh',1399.97,100,1,24,'Oppo','https://i.ibb.co/T8XsvJD/Oppo-A53s.png'),(25,'Oppo A15','Smartphone básico con pantalla grande y cámara AI',1049.97,120,1,25,'Oppo','https://i.ibb.co/rdpFDx3/Oppo-Reno-6-Pro.webp'),(26,'Motorola Edge 20 Pro','El último buque insignia de Motorola con pantalla OLED de 144Hz',3849.97,30,1,26,'Motorola','https://i.ibb.co/GQrk8DZ/Motorola-Edge-20-Pro.png'),(27,'Motorola Moto G60','Smartphone asequible con cámara de 108 MP',3149.97,50,1,27,'Motorola','https://i.ibb.co/988h6ZN/Motorola-Moto-G60.png'),(28,'Motorola Moto G30','Smartphone de gama media con batería de 5000mAh',2099.97,70,1,28,'Motorola','https://i.ibb.co/Tc3qbvT/Motorola-Moto-G30.png'),(29,'Motorola Moto E7','Smartphone básico con gran pantalla y batería extraíble',1399.97,100,1,29,'Motorola','https://i.ibb.co/cwS9mP8/Motorola-Moto-E7.png'),(30,'Motorola Moto G10','Smartphone básico con pantalla HD+ y cámara de 48 MP',1049.97,120,1,30,'Motorola','https://i.ibb.co/J78mxSZ/Motorola-Moto-G10.png'),(31,'Samsung Galaxy Watch 4','Smartwatch con sistema operativo Wear OS',2499.97,50,2,31,'Samsung','https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/29/PMP00003284928/imagen2-1.png'),(32,'Samsung Galaxy Watch 4 Classic','Smartwatch premium con bisel giratorio',3149.97,30,2,32,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/pe/2108/gallery/pe-galaxy-watch4-classic-399640-sm-r890nzkalta-481688876?$650_519_PNG$'),(33,'Samsung Galaxy Watch Active 2','Smartwatch deportivo con seguimiento avanzado',1799.97,80,2,33,'Samsung','https://images.samsung.com/is/image/samsung/pe-galaxy-watch-active2-r820-sm-r820nzkapeo-frontblack-179669505?$650_519_PNG$'),(34,'Samsung Galaxy Watch 3','Smartwatch elegante con bisel giratorio',2349.97,60,2,34,'Samsung','https://images.samsung.com/is/image/samsung/pe/galaxy-note20/gallery/pe-galaxy-watch3-r850-sm-r850nzdalta-frontmysticbronze-thumb-275072761'),(35,'Samsung Galaxy Watch Active','Smartwatch ligero para un estilo de vida activo',1449.97,100,2,35,'Samsung','https://images.samsung.com/is/image/samsung/latin-galaxy-watch-active-r500-sm-r500nzsattt-frontsilver-153875882?$650_519_PNG$'),(36,'Apple Watch Series 7','Última generación del Apple Watch con pantalla siempre encendida',3249.97,40,2,36,'Apple','https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png'),(37,'Apple Watch SE','Smartwatch económico con muchas funciones del Series 7',2099.97,60,2,37,'Apple','https://mac-center.com/cdn/shop/collections/Apple_Watch_SE_2_generacion_en_Mac_Center_Colombia_1.webp?v=1701107967'),(38,'Apple Watch Series 6','Smartwatch con medición avanzada de salud y fitness',2699.97,50,2,38,'Apple','https://claroperupoc.vtexassets.com/arquivos/ids/252010/Vista-apllewatch-s6grafito.png?v=637940377572430000'),(39,'Apple Watch Series 5','Smartwatch con pantalla always-on Retina',2249.97,70,2,39,'Apple','https://claroperupoc.vtexassets.com/arquivos/ids/252012/Apple_Watch_Gold_1.png?v=637940388724730000'),(40,'Apple Watch Series 3','Smartwatch básico con seguimiento de actividad',1299.97,100,2,40,'Apple','https://claroperu.vtexassets.com/arquivos/ids/182043/Apple_parquerock_12.png?v=637867396689430000'),(41,'Garmin Fenix 7','Smartwatch premium para deportes y aventuras',3549.97,30,2,41,'Garmin','https://www.garmin.co.in/minisite/fenix/images/fenix7-device-7x.png'),(42,'Garmin Forerunner 945','Smartwatch para corredores y triatletas',2749.97,50,2,42,'Garmin','https://ph.garmin.com/m/ph/g/products/Forerunner945-black-image-01.png'),(43,'Garmin Venu 2','Smartwatch con pantalla AMOLED y funciones de salud avanzadas',1999.97,80,2,43,'Garmin','https://garmin.com.pe/wp-content/uploads/2022/01/CREATE-WORKOUTS-e-274x400.png'),(44,'Garmin Instinct Solar','Smartwatch resistente con carga solar',1599.97,100,2,44,'Garmin','https://www.garmin.com.my/m/my/g/products/instinct-solar-graphite-cf-xl.png'),(45,'Garmin Lily','Smartwatch elegante para mujeres con seguimiento de salud femenina',1399.97,120,2,45,'Garmin','https://ca.shop.runningroom.com/media/catalog/product/cache/623252543a71a417af50138275bda2d9/l/i/lily_hr_4000.1.png'),(46,'Huawei Watch 3 Pro','Smartwatch premium con HarmonyOS y pantalla AMOLED',2899.97,40,2,46,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/huawei-watch-gt-3-pro/img/heart-an/huawei-watch-gt-3-pro-titanium-sleeping-management.png'),(47,'Huawei Watch GT 2 Pro','Smartwatch con diseño premium y seguimiento deportivo',2199.97,60,2,47,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt-2-pro/Night-Black.png'),(48,'Huawei Watch Fit','Smartwatch con pantalla AMOLED rectangular y monitor de SpO2',1499.97,80,2,48,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/wearables/watch-fit-special-edition/list/black.png'),(49,'Huawei Watch GT 2e','Smartwatch deportivo con hasta 2 semanas de duración de batería',1199.97,100,2,49,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt-2e/img/pc/huawei-watch-gt-2e-pc-professional-workout-data-vo2max.png'),(50,'Huawei Watch GT 2','Smartwatch con pantalla AMOLED y hasta 2 semanas de duración de batería',999.97,120,2,50,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt2/img/assis_call_mobi.jpg'),(51,'Fitbit Sense','Smartwatch avanzado con medición de ECG y seguimiento de estrés',2399.97,50,2,51,'Fitbit','https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense-2/hero-static/shadow-grey/sense2-black-device-front.png'),(52,'Fitbit Versa 3','Smartwatch con integración de asistente de voz y monitorización del sueño',1799.97,70,2,52,'Fitbit','https://crdms.images.consumerreports.org/prod/products/cr/models/402031-smartwatches-fitbit-versa-3-10015274.png'),(53,'Fitbit Charge 5','Rastreador de actividad avanzado con ECG y medición del EDA',1499.97,90,2,53,'Fitbit','https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/hero-static/charge5-black-device-3qtr.png'),(54,'Fitbit Inspire 2','Rastreador de actividad básico con hasta 10 días de autonomía',999.97,120,2,54,'Fitbit','https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/inspire2/herostatic/black/proxima-black-device-3qt.png'),(55,'Fitbit Luxe','Smartwatch elegante con seguimiento de salud y bienestar',899.97,150,2,55,'Fitbit','https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/luxe/hero-static/lunar-white/luxe-lunar-white-device-front.png'),(56,'Samsung Galaxy Tab S8 Ultra','Tablet con pantalla AMOLED de 14.6 pulgadas y S Pen',11999.97,20,3,56,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/es/sm-x900nzaaeub/gallery/es-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzaaeub-thumb-534234697'),(57,'Samsung Galaxy Tab S8+','Tablet con pantalla AMOLED de 12.4 pulgadas y S Pen',9999.97,30,3,57,'Samsung','https://images.samsung.com/pe/galaxy-tab-s8/feature/galaxy-tab-s8-ultra-graphite-kv-mo.jpg'),(58,'Samsung Galaxy Tab S7 FE','Tablet con pantalla TFT de 12.4 pulgadas y S Pen',5999.97,50,3,58,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/latin/sm-t730nzkltpa/gallery/latin-galaxy-tab-s7-fe-t730-sm-t730nzkltpa-477464317?$650_519_PNG$'),(59,'Samsung Galaxy Tab S6 Lite','Tablet con pantalla TFT de 10.4 pulgadas y S Pen',2999.97,80,3,59,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/pe/sm-p620nzaepeo/gallery/pe-galaxy-tab-s6-lite-sm-p620-sm-p620nzaepeo-540946200?$650_519_PNG$'),(60,'Samsung Galaxy Tab A7 Lite','Tablet económica con pantalla TFT de 8.7 pulgadas',1499.97,100,3,60,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/mx/sm-t220nzabmxo/gallery/mx-galaxy-tab-a7-lite-wifi-t220-sm-t220nzabmxo-459837100?$624_624_PNG$'),(61,'iPad Pro 12.9\" (2023)','Tablet con pantalla Liquid Retina XDR de 12.9 pulgadas y M1',14999.97,20,3,61,'Apple','https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111841_ipad-pro-4gen-mainimage.png'),(62,'iPad Air (2022)','Tablet con pantalla Liquid Retina de 10.9 pulgadas y chip A15 Bionic',8499.97,30,3,62,'Apple','https://smartechica.pe/files/IPAD-AIR-11-2022-COLOR-GRIS.png'),(63,'iPad (2022)','Tablet económica con pantalla Retina de 10.2 pulgadas y chip A14 Bionic',4999.97,50,3,63,'Apple','https://smartechica.pe/files/IPAD-10MA-GEN-2022-COLOR-AZUL.png'),(64,'iPad Mini (2021)','Tablet compacta con pantalla Liquid Retina de 8.3 pulgadas y chip A15 Bionic',5999.97,80,3,64,'Apple','https://msperu.com/wp-content/uploads/2021/09/iPad-mini-2021-8.3-256-GB-Wi-Fi-5G-1070.png'),(65,'iPad Pro 11\" (2021)','Tablet con pantalla Liquid Retina de 11 pulgadas y chip M1',10999.97,100,3,65,'Apple','https://storage.googleapis.com/guvery-cdn/public_images/items/249.png'),(66,'Huawei MatePad Pro 12.6','Tablet premium con pantalla OLED de 12.6 pulgadas y Kirin 9000E',9999.97,20,3,66,'Huawei','https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro-12-6/img/pc/huawei-matepad-pro-12.6-kv-pc-2.png'),(67,'Huawei MatePad 11','Tablet con pantalla LCD de 10.95 pulgadas y Snapdragon 865',6999.97,30,3,67,'Huawei','https://shop-cdn.huawei.com/my/pms/uomcdn/MYHW/pms/202309/gbom/6942103106033/428_428_7F1B2BCE14C26072911F5B6B0B96891Fmp.png'),(68,'Huawei MatePad T10s','Tablet económica con pantalla LCD de 10.1 pulgadas y Kirin 710A',2999.97,50,3,68,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/tablets/matepad-t-10s/list-img-blue.png'),(69,'Huawei MatePad 10.4','Tablet básica con pantalla LCD de 10.4 pulgadas y Kirin 810',2499.97,80,3,69,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-se/images/hero/huawei-matepad-se.png'),(70,'Huawei MatePad T8','Tablet compacta con pantalla LCD de 8 pulgadas y MediaTek MT8768',1499.97,100,3,70,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-t-8/list-image.png'),(71,'Lenovo Tab P12 Pro','Tablet premium con pantalla OLED de 12.6 pulgadas y Snapdragon 870',8499.97,20,3,71,'Lenovo','https://p4-ofp.static.pub//fes/cms/2024/05/23/lefimcgz6hruf28ataiwkq6bypncw5185040.png'),(72,'Lenovo Tab P11 Pro','Tablet con pantalla OLED de 11.5 pulgadas y Snapdragon 730G',6999.97,30,3,72,'Lenovo','https://p2-ofp.static.pub/fes/cms/2022/08/01/ycumf4z4oia108az0pq0kzvf17wdws486228.png'),(73,'Lenovo Tab M10 HD Gen 2','Tablet económica con pantalla LCD de 10.1 pulgadas y MediaTek Helio P22T',2999.97,50,3,73,'Lenovo','https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTc0MjE4fGltYWdlL3BuZ3xoOTkvaGUyLzExMDAzNTcxMTQyNjg2LnBuZ3w4ZGQwZjVlMDliZWVkZTg1MzVlZjQ3YTY5M2M2MThlZTk0ZDQzMzY3MWQ1M2FkZTU0ZTNiY2MwY2RiY2UyZDYz/lenovo-tablet-tab-m10-hd-2nd-gen-hero.png'),(74,'Lenovo Tab M8','Tablet básica con pantalla LCD de 8 pulgadas y MediaTek Helio A22',1999.97,80,3,74,'Lenovo','https://i5.walmartimages.com/seo/Lenovo-Tab-M8-3rd-Gen-8-Tablet-32GB-Storage-3GB-Memory-Android-11-HD-Display_6f498b89-7464-4bd2-81f5-964d42a12cd9.c4814f2927adb5e96bd88ff0d665913e.png'),(75,'Lenovo Tab M7','Tablet compacta con pantalla LCD de 7 pulgadas y MediaTek MT8321',999.97,100,3,75,'Lenovo','https://p2-ofp.static.pub//fes/cms/2024/05/27/zg6tqgaucdey861v00hdy835rld3br463116.png'),(76,'Surface Pro 8','Tablet 2 en 1 con pantalla PixelSense de 13 pulgadas y procesador Intel Core de 11a gen',11999.97,20,3,76,'Microsoft','https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surface-Pro-9-RE52e6b:VP1-539x349?fmt=png-alpha'),(77,'Surface Go 3','Tablet compacta con pantalla PixelSense de 10.5 pulgadas y procesador Intel Core i3',4999.97,30,3,77,'Microsoft','https://crdms.images.consumerreports.org/prod/products/cr/models/404838-10-to-11-inch-laptops-microsoft-surface-go-3-core-i3-10024212.png'),(78,'Surface Pro X','Tablet 2 en 1 con pantalla PixelSense de 13 pulgadas y procesador Microsoft SQ2',8999.97,50,3,78,'Microsoft','https://upload.wikimedia.org/wikipedia/commons/d/d5/Surface_Pro_X.png'),(79,'Surface Go 2','Tablet compacta con pantalla PixelSense de 10.5 pulgadas y procesador Intel Core m3',3999.97,80,3,79,'Microsoft','https://crdms.images.consumerreports.org/prod/products/cr/models/406477-12-to-13-inch-laptops-microsoft-surface-laptop-go-2-128gb-10029959.png'),(80,'Surface Pro 7','Tablet 2 en 1 con pantalla PixelSense de 12.3 pulgadas y procesador Intel Core de 10a gen',8999.97,100,3,80,'Microsoft','https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/legacy_bdt/71aIilyiKcL-removebg-preview.png?tf=750x'),(81,'Amazon Fire HD 10','Tablet económica con pantalla IPS de 10.1 pulgadas y procesador octa-core',1499.97,20,3,81,'Amazon','https://m.media-amazon.com/images/G/01/kindle/journeys/obm87zLmbZZ2FnF3yH3CQlaK2mz74NJ95jimp31nmMSk3D/ZjMyNGFmNWMt._CB578474781_.png'),(82,'Amazon Fire HD 8 Plus','Tablet económica con pantalla IPS de 8 pulgadas y procesador quad-core',999.97,30,3,82,'Amazon','https://crdms.images.consumerreports.org/prod/products/cr/models/401459-8-inch-screen-and-smaller-tablets-amazon-fire-hd-8-plus-10016069.png'),(83,'Amazon Fire HD 8','Tablet económica con pantalla IPS de 8 pulgadas y procesador quad-core',799.97,50,3,83,'Amazon','https://www.principledtechnologies.com/benchmarkxprt/spotlight/wp-content/uploads/2017/08/face.png'),(84,'Amazon Fire 7','Tablet económica con pantalla IPS de 7 pulgadas y procesador quad-core',499.97,80,3,84,'Amazon','https://comsucre.com.ec/wp-content/uploads/2021/12/2-TG.TB_.5809.png'),(85,'Amazon Fire HD 10 Kids Pro','Tablet para niños con pantalla HD de 10.1 pulgadas y robusta funda',999.97,100,3,85,'Amazon','https://m.media-amazon.com/images/G/15/kindle/journeys/guvfWRF2BgCQxj2FZnSk2GCEDdD8UB2B5C7hBhi7KEfYWo3D/NGYxNDliY2It._CB578338159_.png'),(86,'Samsung Galaxy Tab S8 Ultra Book Cover','Funda oficial para Samsung Galaxy Tab S8 Ultra',149.99,50,4,86,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/pe/2202/gallery/pe-galaxy-tab-s8-ultra-bookcover-ef-bx900-ef-bx900pbegww-530968423?$650_519_PNG$'),(87,'Samsung Galaxy Tab S8+ Book Cover','Funda oficial para Samsung Galaxy Tab S8+',99.99,100,4,87,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/es/2202/gallery/es-galaxy-tab-s8-ultra-bookcover-ef-bx900-ef-bx900pbegeu-thumb-530988838?$360_360_PNG$'),(88,'Samsung Galaxy Tab S7 FE Book Cover','Funda oficial para Samsung Galaxy Tab S7 FE',69.99,150,4,88,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/us/ef-bt730pgeguj/gallery/us-galaxy-tab-s7-fe-bt730-ef-bt730pgeguj-494124053?$720_576_PNG$'),(89,'Samsung Galaxy Tab S6 Lite Book Cover','Funda oficial para Samsung Galaxy Tab S6 Lite',49.99,200,4,89,'Samsung','https://images.samsung.com/is/image/samsung/pe-galaxy-tab-s6-lite-book-cover-ef-bp610plegww-frontblue-262473927?$650_519_PNG$'),(90,'Samsung Galaxy Tab A7 Lite Book Cover','Funda oficial para Samsung Galaxy Tab A7 Lite',29.99,250,4,90,'Samsung','https://images.samsung.com/is/image/samsung/p6pim/pe/ef-bt220psegww/gallery/pe-galaxy-tab-a7-lite-bookcover-bt220-ef-bt220psegww-thumb-457012610?$360_360_PNG$'),(91,'Apple Pencil (2nd Generation)','Lápiz digital para iPad Pro y iPad Air (2022)',129.99,50,4,91,'Apple','https://mac-center.com.pe/cdn/shop/products/IMG-5830817.png?v=1660919963'),(92,'Apple Smart Keyboard Folio','Teclado y funda para iPad Pro 12.9\" (2023)',249.99,100,4,92,'Apple','https://msperu.com/wp-content/uploads/2021/04/apple-smart-keyboard-folio-for-129-ipad-pro.png'),(93,'Apple Magic Keyboard','Teclado con trackpad para iPad Pro 11\" y iPad Air (2022)',299.99,150,4,93,'Apple','https://mac-center.com.pe/cdn/shop/products/IMG-5263119_1445x.png?v=1660920254'),(94,'Apple AirTag','Rastreador para objetos con tecnología de Apple',29.99,200,4,94,'Apple','https://ww2.movistar.cl/blog/wp-content/uploads/2022/02/apple-airtag.png'),(95,'Apple Pencil (1st Generation)','Lápiz digital para modelos de iPad compatibles',99.99,250,4,95,'Apple','https://mac-center.com.pe/cdn/shop/products/IMG-5637925_9d94222b-e511-4625-bace-575ea42a95bf_1445x.png?v=1666273501'),(96,'Huawei M-Pencil','Lápiz digital para Huawei MatePad Pro 12.6 y otras tablets Huawei',79.99,50,4,96,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/m-pencil-2nd-generation/list.png'),(97,'Huawei Smart Magnetic Keyboard','Teclado magnético para Huawei MatePad 11',129.99,100,4,97,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/accessories/smart-magnetic-keyboard-compatible-with-matepad-pro-11/list/blue.png'),(98,'Huawei Flip Cover','Funda con tapa para Huawei MatePad T10s',39.99,150,4,98,'Huawei','https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/p50-pro-smart-view-flip-cover/list/blank.png'),(99,'Huawei M-Pencil Lite','Lápiz digital económico para tablets Huawei',49.99,200,4,99,'Huawei','https://media.extra.com/i/aurora/100366415_100_03?fmt=auto&w=720'),(100,'Huawei Bluetooth Mouse','Mouse inalámbrico para tablets Huawei',29.99,250,4,100,'Huawei','https://img01.huaweifile.com/sg/ms/pe/pms/product/6901443298020/428_428_0D8C0948C68689ED85B5ED555141FE66AA395A685242C0D1mp.png');
/*!40000 ALTER TABLE `Productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Roles` (
  `rol_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Roles`
--

LOCK TABLES `Roles` WRITE;
/*!40000 ALTER TABLE `Roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `Roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` text,
  `telefono` varchar(15) DEFAULT NULL,
  `rol_id` int DEFAULT NULL,
  `apellido` varchar(45) NOT NULL,
  PRIMARY KEY (`usuario_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `Usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `Roles` (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'Cristhian Paolo',NULL,'999999999',NULL,'Apellido'),(2,'Chesney Itachi',NULL,'21200299',NULL,'Marchena Tejada'),(3,'Marco Jeremi',NULL,'123456789',NULL,'Lopez León'),(4,'cristhian',NULL,'934851563',NULL,'atuncar'),(5,'John','123 Main St','555-555-5555',NULL,'Doe'),(6,'Jane','456 Elm Street','123-456-7890',NULL,'Smith'),(7,'Roberto',NULL,'983 744 910',NULL,'Rodríguez Sifuentes'),(8,'Roberto',NULL,'983 744 910',NULL,'Rodríguez Sifuentes'),(9,'Roberto',NULL,'983 744 910',NULL,'Rodríguez Sifuentes'),(10,'Andres',NULL,'999 111 222',NULL,'Torres Alvarado'),(11,'eros',NULL,'eros',NULL,'eros'),(12,'itachi',NULL,'111222333',NULL,'uchiha pelao'),(13,'Marco Jeremi',NULL,'999999999',NULL,'Lopez León'),(14,'ca',NULL,'950300043',NULL,'asaasas'),(15,'Jesus',NULL,'94554174',NULL,'Chang'),(16,'Jesus',NULL,'94554174',NULL,'Chang'),(17,'Marco',NULL,'999999999',NULL,'Taichi'),(18,'admin',NULL,'123456789',NULL,'admin'),(19,'admin',NULL,'123456789',NULL,'admin'),(20,'admin',NULL,'123456789',NULL,'admin'),(21,'admin',NULL,'123456789',NULL,'admin'),(22,'admin',NULL,'123456789',NULL,'admin'),(23,'1',NULL,'1',NULL,'1'),(25,'jeremy',NULL,'965846258',NULL,'jeremy'),(26,'a',NULL,'983856175',NULL,'a'),(27,'Chesney Taichi',NULL,'999999999',NULL,'Marchena Tejada'),(28,'John Jairo',NULL,'983744910',NULL,'Cena Quispe'),(29,'marco',NULL,'123',NULL,'Lopez'),(30,'cris',NULL,'933815551',NULL,'perez'),(31,'juan',NULL,'999177112',NULL,'perez'),(32,'juan',NULL,'999177112',NULL,'perez'),(33,'juan',NULL,'999177112',NULL,'perez'),(34,'juan',NULL,'999177112',NULL,'perez'),(35,'karlos',NULL,'989111222',NULL,'guzman'),(36,'Homelo',NULL,'95959595',NULL,'Chino'),(37,'asd',NULL,'asd',NULL,'asd'),(38,'juan ',NULL,'983744910',NULL,'perez'),(39,'1234124',NULL,'asfasdfs',NULL,'1441234'),(40,'Gian',NULL,'947494028',NULL,'Alejandro'),(41,'victor',NULL,'999776908',NULL,'layme'),(42,'victor',NULL,'999776908',NULL,'layme'),(43,'victor',NULL,'999776908',NULL,'layme'),(44,'pepito',NULL,'987756123',NULL,'smith');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `VistaHistorialPedidos`
--

DROP TABLE IF EXISTS `VistaHistorialPedidos`;
/*!50001 DROP VIEW IF EXISTS `VistaHistorialPedidos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VistaHistorialPedidos` AS SELECT 
 1 AS `usuario_id`,
 1 AS `imagen`,
 1 AS `nombre`,
 1 AS `fecha_pedido`,
 1 AS `nombre_producto`,
 1 AS `cantidad`,
 1 AS `precio_unitario`,
 1 AS `total_producto`,
 1 AS `nombre_categoria`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `VistaHistorialPedidos`
--

/*!50001 DROP VIEW IF EXISTS `VistaHistorialPedidos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u5q5n7kztk7md1yu`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VistaHistorialPedidos` AS select `u`.`usuario_id` AS `usuario_id`,`prod`.`imagen` AS `imagen`,`u`.`nombre` AS `nombre`,`p`.`fecha_pedido` AS `fecha_pedido`,`prod`.`nombre` AS `nombre_producto`,`dp`.`cantidad` AS `cantidad`,`dp`.`precio_unitario` AS `precio_unitario`,(`dp`.`cantidad` * `dp`.`precio_unitario`) AS `total_producto`,`cat`.`nombre_categoria` AS `nombre_categoria` from ((((`Usuarios` `u` join `Pedidos` `p` on((`u`.`usuario_id` = `p`.`usuario_id`))) join `DetallesPedido` `dp` on((`p`.`pedido_id` = `dp`.`pedido_id`))) join `Productos` `prod` on((`dp`.`producto_id` = `prod`.`producto_id`))) join `Categorias` `cat` on((`prod`.`categoria_id` = `cat`.`categoria_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-01 22:35:00
