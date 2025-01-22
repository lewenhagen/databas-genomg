USE forest;

ALTER TABLE rainforest ADD COLUMN forest_type VARCHAR(40)

UPDATE rainforest SET forest_type = "Tropical";
UPDATE rainforest SET forest_type = "Tempered" WHERE forest_name = "Tongass";

SELECT * FROM rainforest;
