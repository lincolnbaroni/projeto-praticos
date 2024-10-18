window.onload = function() {
    let map

    function initialize() {
        let mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollWheel:false,
            zoom:12,
            MapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp)

        function addMarker(lat,long,icon,content) {
            let latLng = {'lat':lat, 'long':long}

            let marker = new google.maps.Marker({
                position:latLng,
                map:map,
                icon:icon
            })

            let infoWindow = new google.maps.InfoWindow({
                content:content,
                maxWidth:200,
                pixlOffset: new google.maps.Size(0,20)
            })

            infoWindow.open(map,marker)
        }
    }

    initialize()
    addMarker()

    
}