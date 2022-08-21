
/**
 * This function returns the distance between two locations (latitude, longitude) as the crow flies
 * @param latitude1 Latitude of location 1
 * @param longitude1 Longitude of location 1
 * @param latitude2 Latitude of location 2
 * @param longitude2 Longitude of location 2
 * @returns distance in km between the two locations
 */
export function distanceBetweenCoords(latitude1: number, longitude1: number, latitude2: number, longitude2: number) 
{
    var R = 6371; // Radius of the earth in km
    var diffLat = degToRad(latitude2-latitude1);
    var diffLon = degToRad(longitude2-longitude1);
    var radLat1 = degToRad(latitude1);
    var radLat2 = degToRad(latitude2);

    var a = Math.sin(diffLat/2) * Math.sin(diffLat/2) +
        Math.sin(diffLon/2) * Math.sin(diffLon/2) * Math.cos(radLat1) * Math.cos(radLat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

/**
 * Converts numeric degrees to radians
 * @param deg value in degrees
 * @returns 
 */
function degToRad(deg: number) 
{
    return deg * Math.PI / 180;
}