# Get highlights for routes between two locations

This is a solution for the Indie Campers technical assesment.

## Notes

The datasource for routes and highlights in this project is a database filled with dummy routes and highlights, but it could be an external api(s).

Database used is SQLite, as it is portable and require no database prior setup to run this project locally

### Dummy data
The dummy routes and highlights used are the following

#### Routes:
1. {"name": "Route 1", "description": "Route description 1", "start": "start1", "end": "end1", "highlights": [1, 3]}
2. {"name": "Route 2", "description": "Route description 2", "start": "start2", "end": "end2", "highlights": [2, 10]}
3. {"name": "Route 3", "description": "Route description 3", "start": "start2", "end": "end2", "highlights": [2, 6, 8]}
4. {"name": "Route 4", "description": "Route description 4", "start": "start1", "end": "end1", "highlights": [3, 5]}
5. {"name": "Route 5", "description": "Route description 5", "start": "start3", "end": "end3", "highlights": [4, 7, 9]}

#### Highlights:
1. {"name":"highlight 1", "description":"highlight description 1", "latitude":39.98239159489074, "longitude":-6.154486018401318}
2. {"name":"highlight 2", "description":"highlight description 2", "latitude":46.705044775671524, "longitude":1.87505644832081}
3. {"name":"highlight 3", "description":"highlight description 3", "latitude":39.12044032439212, "longitude":-5.330428626699228}
4. {"name":"highlight 4", "description":"highlight description 4", "latitude":38.731189585275345, "longitude":-9.188670771742895}
5. {"name":"highlight 5", "description":"highlight description 5", "latitude":37.88814573059609, "longitude":-4.783593948811073}
6. {"name":"highlight 6", "description":"highlight description 6", "latitude":45.42684582414596, "longitude":0.1906156805408895}
7. {"name":"highlight 7", "description":"highlight description 7", "latitude":40.21988790183374, "longitude":-8.414452570510107}
8. {"name":"highlight 8", "description":"highlight description 8", "latitude":44.86065486986204, "longitude":3.283143652636841}
9. {"name":"highlight 9", "description":"highlight description 9", "latitude":41.179402375391156, "longitude":-8.622315759743362}
10. {"name":"highlight 10", "description": "highlight description 10", "latitude":47.918414283565134, "longitude":3.5989762965955765}


## Tech Stack:

1. NodeJs + ExpressJs
2. Typescript
3. SQLite


## Steps to run this project:

1. Run `npm i` command
2. Run `npm start` command

## The available endpoints are the following:

- (GET) http://localhost:3000/api/routes/ - get all routes
- (GET) http://localhost:3000/api/routes/:start/:end - get the routes starting and ending in :start and :end, respectively.

- (GET) http://localhost:3000/api/highlights/ - get all highlights
- (GET) http://localhost:3000/api/highlights/:start/:end - get all highlights included in the routes starting and ending in :start and :end, respectively
- (GET) http://localhost:3000/api/highlights/closer/:latitude/:longitude - get the closer highlight to some given location, represented by its coordinates (:latitude and :longitude)

### Possible start and end values 
- :start = {start1, start2, start3}

- :end = {end1, end2, end3}

### Example of usage
- http://localhost:3000/api/highlights/start1/end1
- http://localhost:3000/api/highlights/closer/71.3293371/13.4877472

