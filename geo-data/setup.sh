#!/bin/bash

wget https://download.geofabrik.de/europe/germany/bayern-latest.osm.pbf
docker volume create openstreetmap-data
time docker run -v "$(pwd)/bayern-latest.osm.pbf:/data.osm.pbf" -v openstreetmap-data:/var/lib/postgresql/12/main overv/openstreetmap-tile-server:1.3.10 import
docker run -p 80:80 -v openstreetmap-data:/var/lib/postgresql/12/main -d overv/openstreetmap-tile-server:1.3.10 run

