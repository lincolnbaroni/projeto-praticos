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
            let latLng = {'lat':lat, 'lng':long}

            let marker = new google.maps.Marker({
                position:latLng,
                map:map,
                icon:icon,
            })

            let infoWindow = new google.mps.infoWindow({
                content:content,
                maxWidth:200,
                pixelOffset: new google.maps.Size(0,20)
            })

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open(map, maker)
            })

            InfoWindow.open(map,marker)
        }
            
    }

    initialize()

    addMarker(-27.616637,-48.5923228, '', 'Meu endereço personalizado')

    map.panTo({'lat':-19.575670, 'lgn':-42.642639});

    addMarker()

    
}