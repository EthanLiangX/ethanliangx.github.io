# gdal
## gdal转tiff为mbtiles格式
```shell
gdal_translate -of MBTiles in.tif out.mbtiles
gdaladdo -r average out.mbtiles 2 4 8 16 32 64 128 256 
```
## gdal_translate 把tiff转成图片
```shell
gdal_translate  -of png -outsize 1024 768 int.tif out.png
```

## gdal转tiff为geopackage
```shell
gdal_translate -q -of GPKG -co APPEND_SUBDATASET=YES -co TILING_SCHEME=GoogleMapsCompatible -co RASTER_TABLE=tablename in.tiff out.gpkg
gdaladdo -r average -oo TILE_FORMAT=PNG out.gpkg 2 4 8 16 32 64 128 256
```

## gdal2tiles.py 把tiff转成xyz格式瓦片
```shell
gdal2tiles.py --xyz  -z 1-16  -p mercator -w all -r average  -a 0.0 --processes=6 input.tif output_dir
```