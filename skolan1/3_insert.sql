USE forest;

DELETE FROM rainforest; -- visa felet

INSERT INTO rainforest (forest_name, location, area, acronym)
VALUES
("Amazon", "South America", 5500000, "ama"),
("Congo", "Africa", 1780000, "con"),
("Valdivian", "South America", 248100, "val"),
("Daintree", "Australia", 2600, "dai"),
("Tongass", "North America", 67583, "ton");

SELECT * FROM rainforest;
SELECT * FROM rainforest WHERE area < 30000;
