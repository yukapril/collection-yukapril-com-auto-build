#!/bin/bash
echo "building..."
mkdir tmp
git clone https://github.com/yukapril/collection.yukapril.com.git tmp
cd tmp
jekyll b
rm -rf /home/www/collection_yukapril_com
mv _site /home/www/collection_yukapril_com
rm -rf ../tmp
echo "complete!"