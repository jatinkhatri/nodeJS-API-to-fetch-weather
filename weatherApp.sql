-- Adminer 4.8.1 MySQL 8.0.31-0ubuntu0.20.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `cities`;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_name` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `cities` (`id`, `city_name`) VALUES
(1,	'Toronto'),
(2,	'Brampton'),
(3,	'Mumbai');

DROP TABLE IF EXISTS `city_weather`;
CREATE TABLE `city_weather` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city_id` bigint NOT NULL,
  `weather_data` text NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `city_weather` (`id`, `city_id`, `weather_data`, `updated_at`) VALUES
(4,	1,	'{\"coord\":{\"lon\":-79.4163,\"lat\":43.7001},\"weather\":[{\"id\":802,\"main\":\"Clouds\",\"description\":\"scattered clouds\",\"icon\":\"03d\"}],\"base\":\"stations\",\"main\":{\"temp\":273.38,\"feels_like\":269.45,\"temp_min\":272.32,\"temp_max\":273.88,\"pressure\":1020,\"humidity\":66},\"visibility\":10000,\"wind\":{\"speed\":3.58,\"deg\":254,\"gust\":7.15},\"clouds\":{\"all\":44},\"dt\":1674918762,\"sys\":{\"type\":2,\"id\":2040045,\"country\":\"CA\",\"sunrise\":1674909523,\"sunset\":1674944533},\"timezone\":-18000,\"id\":6167865,\"name\":\"Toronto\",\"cod\":200}',	1674918801),
(5,	0,	'{\"coord\":{\"lon\":77.2167,\"lat\":28.6667},\"weather\":[{\"id\":711,\"main\":\"Smoke\",\"description\":\"smoke\",\"icon\":\"50n\"}],\"base\":\"stations\",\"main\":{\"temp\":288.2,\"feels_like\":287.64,\"temp_min\":288.2,\"temp_max\":288.2,\"pressure\":1013,\"humidity\":72},\"visibility\":2100,\"wind\":{\"speed\":0,\"deg\":0},\"clouds\":{\"all\":0},\"dt\":1674918752,\"sys\":{\"type\":1,\"id\":9165,\"country\":\"IN\",\"sunrise\":1674870093,\"sunset\":1674908769},\"timezone\":19800,\"id\":1273294,\"name\":\"Delhi\",\"cod\":200}',	1674918801),
(9,	10,	'{\"temp\":8}',	1674918802),
(10,	10,	'{\"temp\":8}',	1674918802);

-- 2023-01-29 10:18:10
