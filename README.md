# Points inclusion in Polygon test
## 可用于测试某一坐标点是否在国内(使用百度地图)

## usage
```javascript
    let arr = [
        {
            lat: 11,
            lng: 21
        },
        {
            lat: 12,
            lng: 22
        },
        {
            lat: 13,
            lng: 23
        },
        {
            lat: 31,
            lng: 31
        }
    ]
    let piptest = new PIPtest( arr );
    let result = piptest.test({
        lat: 31,
        lng: 31
    }); // Boolean
```
