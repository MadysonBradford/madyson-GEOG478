
//creating the Run() function
function Run()
{
    console.log(theJSON);
    var coordinates = theJSON.data;
    console.log(coordinates);
   
    var topLeftPoint = findTopLeft(coordinates);
    //print top left point
    console.log("The top left point is");
    console.log(topLeftPoint);

    var topRightPoint = findTopRight(coordinates);
    //print top right point
    console.log("The top right point is");
    console.log(topRightPoint);
    
    var bottomLeftPoint = findBottomLeft(coordinates);
    //print bottom left point
    console.log("The bottom left point is");
    console.log(bottomLeftPoint);
    
    var bottomRightPoint = findBottomRight(coordinates);
    //print bottom right point
    console.log("The bottom right point is");
    console.log(bottomRightPoint);

    //creating a bounding box object
    var boundingBox =
    {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    }

    console.log("Bounding box for mbrad@tamu.edu:")
    console.log(boundingBox);

}

//find top left coordinate of bounding box
function findTopLeft(coordinates)
{
    var point;
    var points = [];

    coordinates.forEach(
        element =>
        {
            if(point == null)
            {
                point = element;
            }
            else
            {
                if(element.lat < point.lat && element.lon > point.lon)
                {
                    point = element;
                }
            }
        }

    )
    
    return point;
}

//find top right coordinate of bounding box
function findTopRight(coordinates)
{
    var point;

    coordinates.forEach(
        element =>
        {
            if(point == null)
            {
                point = element;
            }
            else
            {
                if(element.lat > point.lat && element.lon > point.lon)
                {
                    point = element;
                }
            }
        }

    )
    
    return point;
}

//find bottom left coordinate of bounding box
function findBottomLeft(coordinates)
{
    var point;

    coordinates.forEach(
        element =>
        {
            if(point == null)
            {
                point = element;
            }
            else
            {
                if(element.lat < point.lat && element.lon < point.lon)
                {
                    point = element;
                }
            }
        }

    )
    
    return point;

}

//find bottom right coordinate of bounding box
function findBottomRight(coordinates)
{
    var point;

    coordinates.forEach(
        element =>
        {
            if(point == null)
            {
                point = element;
            }
            else
            {
                if(element.lat > point.lat && element.lon < point.lon)
                {
                    point = element;
                }
            }
        }

    )
    
    return point;
}

