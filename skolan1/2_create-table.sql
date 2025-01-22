USE forest;

DROP TABLE IF EXISTS rainforest;

CREATE TABLE rainforest
(
    forest_name VARCHAR(40),
    location VARCHAR(40),
    area INT,
    acronym CHAR(3),

    PRIMARY_KEY (acronym)
);

SHOW TABLES;
