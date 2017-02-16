class PIPtest {
    constructor ( arr ) {
        this.arr = arr;
        if ( !arr || !arr.length || arr.length < 3 ) {
            throw new Error( "[error] arr's length must large than 3");
        }
        this.test = function( point ) {
            let arr = this.arr;
            let result = false;
            let maxLat = arr[0].lat;
            let maxLng = arr[0].lng;
            let minLat = arr[0].lat;
            let minLng = arr[0].lng;
            let len = arr.length;

            this.arr.map( ( item, index ) => {
                if ( item.lat > maxLat ) {
                    maxLat = item.lat;
                } else if ( item.lat < minLat ) {
                    minLat = item.lat;
                }
                if ( item.lng > maxLng ) {
                    maxLng = item.lng;
                } else if ( item.lng < minLng ) {
                    minLng = item.lng;
                }
            });

            if ( point.lat >= minLat &&
                point.lat <= maxLat &&
                point.lng >= minLng &&
                point.lng <= maxLng
            ) {
                for ( let next = 0, prev = len - 1; next < len; prev = next++ ) {
                    if (
                        ( ( arr[next].lng > point.lng ) !== ( arr[prev].lng > point.lng ) ) &&
                        (point.lat < ( arr[next].lat - arr[prev].lat )*( point.lng - arr[prev].lng )/(arr[next].lng - arr[prev].lng) + arr[prev].lat)
                    ) {
                        result = !result;
                    }
                }
            }
            return result;
        }
    }

}

export default PIPtest;
