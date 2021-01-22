//change path for csv to fit yours
// copy this into your local mysql to transfer the csv file
// if data doesn't save because of loading local data is distabled do the below steps:
// in mysql type this: SET GLOBAL local_infile=1;
// quit and restart and try downloading schema again


LOAD DATA LOCAL INFILE 'COPY_LOCAL_PATH_FOR_USERINFO_CSV' INTO TABLE users
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '_COPY_LOCAL_PATH_FOR_PLANTINFO_CSV' INTO TABLE plant_info
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

