// 20240410043513
// https://zingmp3.vn/api/v2/recommend/get/songs?id=ZUZBC0EU&historyIds=ZOFA609Z&start=0&count=999&src=qlMymusic&ctime=1712698496&version=1.10.15&sig=d65f38188b0619d5be33b12530e1749c44f3da4377fab573cddec4cbdb7f6b23372ddb97d1e3786909690ae22293ca25b26a488d74e73cd6241a7664d8fcbadb&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y

const mockData =
{
  "err": 0,
  "msg": "Success",
  "data": {
    "items": [
      {
        "encodeId": "ZUWEADBF",
        "title": "Phố Đã Lên Đèn (Masew Remix)",
        "alias": "Pho-Da-Len-Den-Masew-Remix-Masew-Huyen-Tam-Mon-Great",
        "isOffical": true,
        "username": "",
        "artistsNames": "Masew, Huyền Tâm Môn, Great",
        "artists": [
          {
            "id": "IWZFD77I",
            "name": "Masew",
            "link": "/Masew",
            "spotlight": false,
            "alias": "Masew",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZO697IEW"
          },
          {
            "id": "IW67C60F",
            "name": "Huyền Tâm Môn",
            "link": "/Huyen-Tam-Mon",
            "spotlight": false,
            "alias": "Huyen-Tam-Mon",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/9/3/8/093889299fe3e2c1f97b993e23866f64.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/9/3/8/093889299fe3e2c1f97b993e23866f64.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9CUBW"
          },
          {
            "id": "IW6ZBEAB",
            "name": "Great",
            "link": "/nghe-si/Great",
            "spotlight": false,
            "alias": "Great",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/a/c/0/7ac0ae75ea8c5484c8dbd27591853079.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/a/c/0/7ac0ae75ea8c5484c8dbd27591853079.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9COD0"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/7/8/d/978d12830c18df95c26e93e658019166.jpg",
        "link": "/bai-hat/Pho-Da-Len-Den-Masew-Remix-Masew-Huyen-Tam-Mon-Great/ZUWEADBF.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/7/8/d/978d12830c18df95c26e93e658019166.jpg",
        "duration": 189,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1626868800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "68C6O89W",
          "title": "Phố Đã Lên Đèn (Masew Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/7/8/d/978d12830c18df95c26e93e658019166.jpg",
          "isoffical": true,
          "link": "/album/Pho-Da-Len-Den-Masew-Remix-Single-Masew-Huyen-Tam-Mon-Great/68C6O89W.html",
          "isIndie": false,
          "releaseDate": "21/07/2021",
          "sortDescription": "",
          "releasedAt": 1626800400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZFD77I",
              "name": "Masew",
              "link": "/Masew",
              "spotlight": false,
              "alias": "Masew",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZO697IEW",
              "totalFollow": 423005
            },
            {
              "id": "IW67C60F",
              "name": "Huyền Tâm Môn",
              "link": "/Huyen-Tam-Mon",
              "spotlight": false,
              "alias": "Huyen-Tam-Mon",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/9/3/8/093889299fe3e2c1f97b993e23866f64.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/9/3/8/093889299fe3e2c1f97b993e23866f64.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9CUBW",
              "totalFollow": 11181
            },
            {
              "id": "IW6ZBEAB",
              "name": "Great",
              "link": "/nghe-si/Great",
              "spotlight": false,
              "alias": "Great",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/a/c/0/7ac0ae75ea8c5484c8dbd27591853079.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/a/c/0/7ac0ae75ea8c5484c8dbd27591853079.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9COD0",
              "totalFollow": 10482
            }
          ],
          "artistsNames": "Masew, Huyền Tâm Môn, Great"
        },
        "distributor": "Great Entertainment",
        "indicators": [
          
        ],
        "radioId": 1460644334,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCEB7EI",
        "title": "Không Bằng (Cukak Remix)",
        "alias": "Khong-Bang-Cukak-Remix-CUKAK-Do-Le-Hong-Nhung",
        "isOffical": true,
        "username": "",
        "artistsNames": "CUKAK, Đỗ Lê Hồng Nhung",
        "artists": [
          {
            "id": "IW7O8E7F",
            "name": "CUKAK",
            "link": "/nghe-si/CUKAK",
            "spotlight": false,
            "alias": "CUKAK",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6B7WAAUE"
          },
          {
            "id": "IWZAO7CE",
            "name": "Đỗ Lê Hồng Nhung",
            "link": "/nghe-si/Do-Le-Hong-Nhung",
            "spotlight": false,
            "alias": "Do-Le-Hong-Nhung",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/2/e/f/92efae954ee8284f9947ea2963cafafa.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/2/e/f/92efae954ee8284f9947ea2963cafafa.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9ACBC"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
        "link": "/bai-hat/Khong-Bang-Cukak-Remix-CUKAK-Do-Le-Hong-Nhung/ZUCEB7EI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
        "duration": 183,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637990280,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "69CUO98I",
          "title": "Không Bằng (Cukak Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/9/2/3/9923dcfcd8921b82d3812c02d7e06625.jpg",
          "isoffical": true,
          "link": "/album/Khong-Bang-Cukak-Remix-Single-CUKAK-Do-Le-Hong-Nhung/69CUO98I.html",
          "isIndie": false,
          "releaseDate": "27/11/2021",
          "sortDescription": "",
          "releasedAt": 1637946000000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW7O8E7F",
              "name": "CUKAK",
              "link": "/nghe-si/CUKAK",
              "spotlight": false,
              "alias": "CUKAK",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6B7WAAUE",
              "totalFollow": 22724
            },
            {
              "id": "IWZAO7CE",
              "name": "Đỗ Lê Hồng Nhung",
              "link": "/nghe-si/Do-Le-Hong-Nhung",
              "spotlight": false,
              "alias": "Do-Le-Hong-Nhung",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/2/e/f/92efae954ee8284f9947ea2963cafafa.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/2/e/f/92efae954ee8284f9947ea2963cafafa.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9ACBC",
              "totalFollow": 919
            }
          ],
          "artistsNames": "CUKAK, Đỗ Lê Hồng Nhung"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1466446759,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true,
        "zoneid": "272894159406723362",
        "type": "nativeAd"
      },
      {
        "encodeId": "ZWB0DFU7",
        "title": "Duyên Trời Lấy 2 (Remix)",
        "alias": "Duyen-Troi-Lay-2-Remix-Chung-Thanh-Duy",
        "isOffical": true,
        "username": "",
        "artistsNames": "Chung Thanh Duy",
        "artists": [
          {
            "id": "IW6UIIZW",
            "name": "Chung Thanh Duy",
            "link": "/Chung-Thanh-Duy",
            "spotlight": false,
            "alias": "Chung-Thanh-Duy",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/2/a/3/32a3be9f3b6643bb11cf190afdee778f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/2/a/3/32a3be9f3b6643bb11cf190afdee778f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9BCO6"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/5/c/a/85ca2da2e4f366d35144e2673c042989.jpg",
        "link": "/bai-hat/Duyen-Troi-Lay-2-Remix-Chung-Thanh-Duy/ZWB0DFU7.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/5/c/a/85ca2da2e4f366d35144e2673c042989.jpg",
        "duration": 256,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1581412920,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "ZF69CAFO",
          "title": "Duyên Trời Lấy 2 (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/5/c/a/85ca2da2e4f366d35144e2673c042989.jpg",
          "isoffical": true,
          "link": "/album/Duyen-Troi-Lay-2-Remix-Single-Chung-Thanh-Duy/ZF69CAFO.html",
          "isIndie": false,
          "releaseDate": "2020",
          "sortDescription": "",
          "releasedAt": 1609347600000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6UIIZW",
              "name": "Chung Thanh Duy",
              "link": "/Chung-Thanh-Duy",
              "spotlight": false,
              "alias": "Chung-Thanh-Duy",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/2/a/3/32a3be9f3b6643bb11cf190afdee778f.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/2/a/3/32a3be9f3b6643bb11cf190afdee778f.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9BCO6",
              "totalFollow": 124733
            }
          ],
          "artistsNames": "Chung Thanh Duy"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1294827170,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWAEZ809",
        "title": "Tướng Quân (Remix)",
        "alias": "Tuong-Quan-Remix-Nhat-Phong-DinhLong",
        "isOffical": true,
        "username": "",
        "artistsNames": "Nhật Phong, DinhLong",
        "artists": [
          {
            "id": "IW6W7AZD",
            "name": "Nhật Phong",
            "link": "/Nhat-Phong",
            "spotlight": false,
            "alias": "Nhat-Phong",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "60IZFEFU"
          },
          {
            "id": "IW6W8FO6",
            "name": "DINHLONG",
            "link": "/nghe-si/DINHLONG",
            "spotlight": false,
            "alias": "DINHLONG",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9B9U9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/4/0/2/d40297d06db53b9b4659de0dd59a3399.jpg",
        "link": "/bai-hat/Tuong-Quan-Remix-Nhat-Phong-DinhLong/ZWAEZ809.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/4/0/2/d40297d06db53b9b4659de0dd59a3399.jpg",
        "duration": 260,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 0,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "Z6ABCUDZ",
          "title": "Tướng Quân (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/8/8/a/b88a59c8e5116807f13cd49214dcf2f8.jpg",
          "isoffical": true,
          "link": "/album/Tuong-Quan-Remix-Single-Nhat-Phong/Z6ABCUDZ.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6W7AZD",
              "name": "Nhật Phong",
              "link": "/Nhat-Phong",
              "spotlight": false,
              "alias": "Nhat-Phong",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "60IZFEFU",
              "totalFollow": 226383
            }
          ],
          "artistsNames": "Nhật Phong"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1286778880,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBO98E0",
        "title": "Một Giấc Mộng Xưa (Remix)",
        "alias": "Mot-Giac-Mong-Xua-Remix-Gia-Huy-Singer",
        "isOffical": true,
        "username": "",
        "artistsNames": "Gia Huy Singer",
        "artists": [
          {
            "id": "IWZFE9DB",
            "name": "Gia Huy Singer",
            "link": "/Gia-Huy-Singer",
            "spotlight": false,
            "alias": "Gia-Huy-Singer",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZODE9AD0"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/9/5/8/69581b8352bff66daf89b6aa1595b35e.jpg",
        "link": "/bai-hat/Mot-Giac-Mong-Xua-Remix-Gia-Huy-Singer/ZWBO98E0.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/9/5/8/69581b8352bff66daf89b6aa1595b35e.jpg",
        "duration": 154,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1590727860,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "60EAB8EW",
          "title": "Một Giấc Mộng Xưa (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/9/5/8/69581b8352bff66daf89b6aa1595b35e.jpg",
          "isoffical": true,
          "link": "/album/Mot-Giac-Mong-Xua-Remix-Single-Gia-Huy-Singer/60EAB8EW.html",
          "isIndie": false,
          "releaseDate": "29/05/2020",
          "sortDescription": "",
          "releasedAt": 1590685200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZFE9DB",
              "name": "Gia Huy Singer",
              "link": "/Gia-Huy-Singer",
              "spotlight": false,
              "alias": "Gia-Huy-Singer",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZODE9AD0",
              "totalFollow": 51205
            }
          ],
          "artistsNames": "Gia Huy Singer"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1319116150,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCO06WU",
        "title": "Hẹn Yêu (EDM)",
        "alias": "Hen-Yeu-EDM-Minh-Vuong-M4U-Thuong-Vo",
        "isOffical": true,
        "username": "",
        "artistsNames": "Minh Vương M4U, Thương Võ",
        "artists": [
          {
            "id": "IWZ9ZFA7",
            "name": "Minh Vương M4U",
            "link": "/Minh-Vuong-M4U",
            "spotlight": false,
            "alias": "Minh-Vuong-M4U",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZ9DAC6"
          },
          {
            "id": "IWZFEZIC",
            "name": "Thương Võ",
            "link": "/Thuong-Vo",
            "spotlight": false,
            "alias": "Thuong-Vo",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B6OD"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "link": "/bai-hat/Hen-Yeu-EDM-Minh-Vuong-M4U-Thuong-Vo/ZUCO06WU.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "duration": 339,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637292360,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1468924902,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWDUE6WI",
        "title": "05 (Không Phai) (Masew Remix)",
        "alias": "05-Khong-Phai-Masew-Remix-Tang-Duy-Tan-T-R-I-Phong-Max-Masew",
        "isOffical": true,
        "username": "",
        "artistsNames": "Nhiều nghệ sĩ",
        "artists": [
          {
            "id": "IW6W8FO8",
            "name": "Tăng Duy Tân",
            "link": "/Tang-Duy-Tan",
            "spotlight": false,
            "alias": "Tang-Duy-Tan",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/7/1/7/5717ff675b04fe5d6c619b92a0b98916.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/7/1/7/5717ff675b04fe5d6c619b92a0b98916.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B9UA"
          },
          {
            "id": "IW6W88E8",
            "name": "T.R.I",
            "link": "/T-R-I",
            "spotlight": false,
            "alias": "T-R-I",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B8BB"
          },
          {
            "id": "IW67EOAU",
            "name": "Phong Max",
            "link": "/nghe-si/Phong-Max",
            "spotlight": false,
            "alias": "Phong-Max",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CZ6I"
          },
          {
            "id": "IWZFD77I",
            "name": "Masew",
            "link": "/Masew",
            "spotlight": false,
            "alias": "Masew",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZO697IEW"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
        "link": "/bai-hat/05-Khong-Phai-Masew-Remix-Tang-Duy-Tan-T-R-I-Phong-Max-Masew/ZWDUE6WI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/b/6/1/5b61a30f04aee798909d6357c6a56eaf.jpg",
        "duration": 205,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1599220800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6U0Z8BB6",
          "title": "05 (Không Phai) (Masew Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/3/1/9/a/319a048010efc72fef6eb7c545c74bfe.jpg",
          "isoffical": true,
          "link": "/album/05-Khong-Phai-Masew-Remix-Single-Tang-Duy-Tan-T-R-I-Phong-Max-Masew/6U0Z8BB6.html",
          "isIndie": false,
          "releaseDate": "04/09/2020",
          "sortDescription": "",
          "releasedAt": 1599152400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6W8FO8",
              "name": "Tăng Duy Tân",
              "link": "/Tang-Duy-Tan",
              "spotlight": false,
              "alias": "Tang-Duy-Tan",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/7/1/7/5717ff675b04fe5d6c619b92a0b98916.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/7/1/7/5717ff675b04fe5d6c619b92a0b98916.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9B9UA",
              "totalFollow": 74689
            },
            {
              "id": "IW6W88E8",
              "name": "T.R.I",
              "link": "/T-R-I",
              "spotlight": false,
              "alias": "T-R-I",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9B8BB",
              "totalFollow": 32622
            },
            {
              "id": "IW67EOAU",
              "name": "Phong Max",
              "link": "/nghe-si/Phong-Max",
              "spotlight": false,
              "alias": "Phong-Max",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9CZ6I",
              "totalFollow": 31923
            },
            {
              "id": "IWZFD77I",
              "name": "Masew",
              "link": "/Masew",
              "spotlight": false,
              "alias": "Masew",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZO697IEW",
              "totalFollow": 423005
            }
          ],
          "artistsNames": "Nhiều nghệ sĩ"
        },
        "distributor": "Great Entertainment",
        "indicators": [
          
        ],
        "radioId": 1371940957,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWCZ680C",
        "title": "Em Ơi Em Đừng Khóc (Fireprox Remix)",
        "alias": "Em-Oi-Em-Dung-Khoc-Fireprox-Remix-Cao-Nam-Thanh",
        "isOffical": true,
        "username": "",
        "artistsNames": "Cao Nam Thành",
        "artists": [
          {
            "id": "IWZ9D9O9",
            "name": "Cao Nam Thành",
            "link": "/Cao-Nam-Thanh",
            "spotlight": false,
            "alias": "Cao-Nam-Thanh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/2/5/a/e25aa659838ed8aee03390dad3850ab0.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/2/5/a/e25aa659838ed8aee03390dad3850ab0.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZOD7CDZW"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/e/c/1/2ec1590e91ae48aa2541cfb522fcd4eb.jpg",
        "link": "/bai-hat/Em-Oi-Em-Dung-Khoc-Fireprox-Remix-Cao-Nam-Thanh/ZWCZ680C.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/e/c/1/2ec1590e91ae48aa2541cfb522fcd4eb.jpg",
        "duration": 215,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1597665600,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6WAAB06Z",
          "title": "Em Ơi Em Đừng Khóc (Fireprox Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/f/5/3/ff53c30e301a62aa14ba6c10e58d12da.jpg",
          "isoffical": true,
          "link": "/album/Em-Oi-Em-Dung-Khoc-Fireprox-Remix-Single-Cao-Nam-Thanh/6WAAB06Z.html",
          "isIndie": false,
          "releaseDate": "17/08/2020",
          "sortDescription": "",
          "releasedAt": 1597597200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZ9D9O9",
              "name": "Cao Nam Thành",
              "link": "/Cao-Nam-Thanh",
              "spotlight": false,
              "alias": "Cao-Nam-Thanh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/2/5/a/e25aa659838ed8aee03390dad3850ab0.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/2/5/a/e25aa659838ed8aee03390dad3850ab0.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZOD7CDZW",
              "totalFollow": 40014
            }
          ],
          "artistsNames": "Cao Nam Thành"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1349729930,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCOZW0A",
        "title": "Em Nào Có Tội (EDM)",
        "alias": "Em-Nao-Co-Toi-EDM-Thuong-Vo",
        "isOffical": true,
        "username": "",
        "artistsNames": "Thương Võ",
        "artists": [
          {
            "id": "IWZFEZIC",
            "name": "Thương Võ",
            "link": "/Thuong-Vo",
            "spotlight": false,
            "alias": "Thuong-Vo",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B6OD"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
        "link": "/bai-hat/Em-Nao-Co-Toi-EDM-Thuong-Vo/ZUCOZW0A.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
        "duration": 291,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637306520,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1468039848,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUBEFEU6",
        "title": "Người Lạ Thoáng Qua (EDM)",
        "alias": "Nguoi-La-Thoang-Qua-EDM-Dinh-Tung-Huy",
        "isOffical": true,
        "username": "",
        "artistsNames": "Đinh Tùng Huy",
        "artists": [
          {
            "id": "IWZA6F8I",
            "name": "Đinh Tùng Huy",
            "link": "/Dinh-Tung-Huy",
            "spotlight": false,
            "alias": "Dinh-Tung-Huy",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZUO88FII"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/d/a/9/5da92b54155ac844f9dac366057cbcde.jpg",
        "link": "/bai-hat/Nguoi-La-Thoang-Qua-EDM-Dinh-Tung-Huy/ZUBEFEU6.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/5/d/a/9/5da92b54155ac844f9dac366057cbcde.jpg",
        "duration": 306,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637046000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1466538708,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOUAIA",
        "title": "Ngỡ Như Giấc Mơ (EDM Version)",
        "alias": "Ngo-Nhu-Giac-Mo-EDM-Version-Chu-Duyen-ACV",
        "isOffical": true,
        "username": "",
        "artistsNames": "Chu Duyên, ACV",
        "artists": [
          {
            "id": "IW6ZBB8W",
            "name": "Chu Duyên",
            "link": "/nghe-si/Chu-Duyen",
            "spotlight": false,
            "alias": "Chu-Duyen",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CO8B"
          },
          {
            "id": "IW6ZAAB8",
            "name": "ACV",
            "link": "/nghe-si/ACV-Music",
            "spotlight": false,
            "alias": "ACV-Music",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWC9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
        "link": "/bai-hat/Ngo-Nhu-Giac-Mo-EDM-Version-Chu-Duyen-ACV/ZWBOUAIA.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
        "duration": 317,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589360340,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1319117689,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCOZIOW",
        "title": "Cứ Vội Vàng (EDM)",
        "alias": "Cu-Voi-Vang-EDM-Thuong-Vo",
        "isOffical": true,
        "username": "",
        "artistsNames": "Thương Võ",
        "artists": [
          {
            "id": "IWZFEZIC",
            "name": "Thương Võ",
            "link": "/Thuong-Vo",
            "spotlight": false,
            "alias": "Thuong-Vo",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B6OD"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
        "link": "/bai-hat/Cu-Voi-Vang-EDM-Thuong-Vo/ZUCOZIOW.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
        "duration": 265,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637306340,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1490031769,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZO6II7ZB",
        "title": "Tuyệt Sắc (Remix)",
        "alias": "Tuyet-Sac-Remix-NamDuc-LongDrae",
        "isOffical": true,
        "username": "",
        "artistsNames": "NamDuc, LongDrae",
        "artists": [
          {
            "id": "IW68CZCW",
            "name": "NamDuc",
            "link": "/NamDuc",
            "spotlight": false,
            "alias": "NamDuc",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/d/8/7/ed8721e146c89c1ec80dffd4e780eb4a.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/d/8/7/ed8721e146c89c1ec80dffd4e780eb4a.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "67IUI9B7"
          },
          {
            "id": "IW6ZAOEW",
            "name": "LongDrae",
            "link": "/nghe-si/LongDrae",
            "spotlight": false,
            "alias": "LongDrae",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/6/c/c/26cc987e02486c05a099034a8b84ca02.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/6/c/c/26cc987e02486c05a099034a8b84ca02.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CW97"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/1/8/a/818a0425ebd2c2415b78158e17b3486c.jpg",
        "link": "/bai-hat/Tuyet-Sac-Remix-NamDuc-LongDrae/ZO6II7ZB.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/1/8/a/818a0425ebd2c2415b78158e17b3486c.jpg",
        "duration": 192,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1609758000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "67IUI9CZ",
          "title": "Tuyệt Sắc (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/2/5/e/725e36e0b2729b49ee7c67d992857dda.jpg",
          "isoffical": true,
          "link": "/album/Tuyet-Sac-Remix-Single-NamDuc-LongDrae/67IUI9CZ.html",
          "isIndie": false,
          "releaseDate": "04/01/2021",
          "sortDescription": "",
          "releasedAt": 1609693200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW68CZCW",
              "name": "NamDuc",
              "link": "/NamDuc",
              "spotlight": false,
              "alias": "NamDuc",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/d/8/7/ed8721e146c89c1ec80dffd4e780eb4a.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/d/8/7/ed8721e146c89c1ec80dffd4e780eb4a.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "67IUI9B7",
              "totalFollow": 6288
            },
            {
              "id": "IW6ZAOEW",
              "name": "LongDrae",
              "link": "/nghe-si/LongDrae",
              "spotlight": false,
              "alias": "LongDrae",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/6/c/c/26cc987e02486c05a099034a8b84ca02.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/6/c/c/26cc987e02486c05a099034a8b84ca02.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9CW97",
              "totalFollow": 1715
            }
          ],
          "artistsNames": "NamDuc, LongDrae"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1421707662,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZZ97Z8WB",
        "title": "Đám Cưới Nha? (Remix)",
        "alias": "Dam-Cuoi-Nha-Remix-Hong-Thanh-DJ-Mie",
        "isOffical": true,
        "username": "",
        "artistsNames": "Hồng Thanh, DJ Mie",
        "artists": [
          {
            "id": "IW67C6FD",
            "name": "Hồng Thanh",
            "link": "/Hong-Thanh",
            "spotlight": false,
            "alias": "Hong-Thanh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/0/4/2/4042f8127cbb5d12bb8b0a22949d7d0c.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/0/4/2/4042f8127cbb5d12bb8b0a22949d7d0c.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9CUCU"
          },
          {
            "id": "IWZD6FED",
            "name": "DJ Mie",
            "link": "/DJ-Mie",
            "spotlight": false,
            "alias": "DJ-Mie",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/1/f/ec1fcdefabbc8fea32a2eb23301837d3.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/c/1/f/ec1fcdefabbc8fea32a2eb23301837d3.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9BUA8"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/f/9/0/cf900c3017049f251df9ba21dd092be9.jpg",
        "link": "/bai-hat/Dam-Cuoi-Nha-Remix-Hong-Thanh-DJ-Mie/ZZ97Z8WB.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/f/9/0/cf900c3017049f251df9ba21dd092be9.jpg",
        "duration": 181,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1648468800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6BWW78IA",
          "title": "Đám Cưới Nha? (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/a/0/2/5/a025fcf74f8c8b5f259bfe2e038faad2.jpg",
          "isoffical": true,
          "link": "/album/Dam-Cuoi-Nha-Remix-Single-Hong-Thanh-DJ-Mie/6BWW78IA.html",
          "isIndie": false,
          "releaseDate": "28/03/2022",
          "sortDescription": "",
          "releasedAt": 1648400400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW67C6FD",
              "name": "Hồng Thanh",
              "link": "/Hong-Thanh",
              "spotlight": false,
              "alias": "Hong-Thanh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/0/4/2/4042f8127cbb5d12bb8b0a22949d7d0c.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/0/4/2/4042f8127cbb5d12bb8b0a22949d7d0c.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9CUCU",
              "totalFollow": 53821
            },
            {
              "id": "IWZD6FED",
              "name": "DJ Mie",
              "link": "/DJ-Mie",
              "spotlight": false,
              "alias": "DJ-Mie",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/1/f/ec1fcdefabbc8fea32a2eb23301837d3.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/c/1/f/ec1fcdefabbc8fea32a2eb23301837d3.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9BUA8",
              "totalFollow": 46738
            }
          ],
          "artistsNames": "Hồng Thanh, DJ Mie"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOUAUE",
        "title": "Chiếc Khăn Gió Ấm (EDM Version)",
        "alias": "Chiec-Khan-Gio-Am-EDM-Version-Huong-Ly-ACV",
        "isOffical": true,
        "username": "",
        "artistsNames": "Hương Ly, ACV",
        "artists": [
          {
            "id": "IW6ZO9UB",
            "name": "Hương Ly",
            "link": "/Huong-Ly",
            "spotlight": false,
            "alias": "Huong-Ly",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZZ67898D"
          },
          {
            "id": "IW6ZAAB8",
            "name": "ACV",
            "link": "/nghe-si/ACV-Music",
            "spotlight": false,
            "alias": "ACV-Music",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWC9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/3/2/5e322024f707148e51c0591591f0ee38.jpg",
        "link": "/bai-hat/Chiec-Khan-Gio-Am-EDM-Version-Huong-Ly-ACV/ZWBOUAUE.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/5/e/3/2/5e322024f707148e51c0591591f0ee38.jpg",
        "duration": 238,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589362440,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1319117676,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWCOE0E8",
        "title": "Bigcityboi (DJ DSmall Remix)",
        "alias": "Bigcityboi-DJ-DSmall-Remix-DJ-DSmall-Binz-Touliver",
        "isOffical": true,
        "username": "",
        "artistsNames": "DJ DSmall, Binz, Touliver",
        "artists": [
          {
            "id": "IWZAUEB9",
            "name": "DJ DSmall",
            "link": "/nghe-si/DJ-DSmall",
            "spotlight": false,
            "alias": "DJ-DSmall",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/1/9/d/319d928cec62d6acee4c71bd6e4e191e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/1/9/d/319d928cec62d6acee4c71bd6e4e191e.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9ADFZ"
          },
          {
            "id": "IWZ96FEI",
            "name": "Binz",
            "link": "/Binz",
            "spotlight": false,
            "alias": "Binz",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/4/a/e/04aed9e81df90a6191d6e223b6d6b59a.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/4/a/e/04aed9e81df90a6191d6e223b6d6b59a.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZBECI6"
          },
          {
            "id": "IWZ986AE",
            "name": "Touliver",
            "link": "/Touliver",
            "spotlight": false,
            "alias": "Touliver",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/d/3/64d31b03975da6697a6f75a10571b06d.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/d/3/64d31b03975da6697a6f75a10571b06d.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZBCZCB"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/d/7/6/bd76ef2f3d8d685cd8f506b6d31c1f3b.jpg",
        "link": "/bai-hat/Bigcityboi-DJ-DSmall-Remix-DJ-DSmall-Binz-Touliver/ZWCOE0E8.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/d/7/6/bd76ef2f3d8d685cd8f506b6d31c1f3b.jpg",
        "duration": 253,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1597338000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6IC9UBC6",
          "title": "Bigcityboi (DJ DSmall Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/d/7/6/bd76ef2f3d8d685cd8f506b6d31c1f3b.jpg",
          "isoffical": true,
          "link": "/album/Bigcityboi-DJ-DSmall-Remix-Single-DJ-DSmall-Binz-Touliver/6IC9UBC6.html",
          "isIndie": false,
          "releaseDate": "14/08/2020",
          "sortDescription": "",
          "releasedAt": 1597338000000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZAUEB9",
              "name": "DJ DSmall",
              "link": "/nghe-si/DJ-DSmall",
              "spotlight": false,
              "alias": "DJ-DSmall",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/1/9/d/319d928cec62d6acee4c71bd6e4e191e.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/1/9/d/319d928cec62d6acee4c71bd6e4e191e.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9ADFZ",
              "totalFollow": 13921
            },
            {
              "id": "IWZ96FEI",
              "name": "Binz",
              "link": "/Binz",
              "spotlight": false,
              "alias": "Binz",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/4/a/e/04aed9e81df90a6191d6e223b6d6b59a.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/4/a/e/04aed9e81df90a6191d6e223b6d6b59a.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZWZBECI6",
              "totalFollow": 391479
            },
            {
              "id": "IWZ986AE",
              "name": "Touliver",
              "link": "/Touliver",
              "spotlight": false,
              "alias": "Touliver",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/d/3/64d31b03975da6697a6f75a10571b06d.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/d/3/64d31b03975da6697a6f75a10571b06d.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZWZBCZCB",
              "totalFollow": 105932
            }
          ],
          "artistsNames": "DJ DSmall, Binz, Touliver"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1347310797,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOU9FD",
        "title": "Thêm Một Lần Đau (Remix)",
        "alias": "Them-Mot-Lan-Dau-Remix-Chu-Duyen-ACV",
        "isOffical": true,
        "username": "",
        "artistsNames": "Chu Duyên, ACV",
        "artists": [
          {
            "id": "IW6ZBB8W",
            "name": "Chu Duyên",
            "link": "/nghe-si/Chu-Duyen",
            "spotlight": false,
            "alias": "Chu-Duyen",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CO8B"
          },
          {
            "id": "IW6ZAAB8",
            "name": "ACV",
            "link": "/nghe-si/ACV-Music",
            "spotlight": false,
            "alias": "ACV-Music",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWC9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
        "link": "/bai-hat/Them-Mot-Lan-Dau-Remix-Chu-Duyen-ACV/ZWBOU9FD.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/5/3/7/4/53748e5ef2495f1896d1de64a787604a.jpg",
        "duration": 268,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589358360,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1319117696,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOUAWD",
        "title": "Nỗi Nhớ Đóng Băng (EDM Version)",
        "alias": "Noi-Nho-Dong-Bang-EDM-Version-Minh-Vuong-M4U-Huong-Ly-ACV",
        "isOffical": true,
        "username": "",
        "artistsNames": "Minh Vương M4U, Hương Ly, ACV",
        "artists": [
          {
            "id": "IWZ9ZFA7",
            "name": "Minh Vương M4U",
            "link": "/Minh-Vuong-M4U",
            "spotlight": false,
            "alias": "Minh-Vuong-M4U",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZ9DAC6"
          },
          {
            "id": "IW6ZO9UB",
            "name": "Hương Ly",
            "link": "/Huong-Ly",
            "spotlight": false,
            "alias": "Huong-Ly",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZZ67898D"
          },
          {
            "id": "IW6ZAAB8",
            "name": "ACV",
            "link": "/nghe-si/ACV-Music",
            "spotlight": false,
            "alias": "ACV-Music",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWC9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "link": "/bai-hat/Noi-Nho-Dong-Bang-EDM-Version-Minh-Vuong-M4U-Huong-Ly-ACV/ZWBOUAWD.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "duration": 255,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589361000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1319117680,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCOZWEC",
        "title": "Lựa Chọn Của Anh (EDM)",
        "alias": "Lua-Chon-Cua-Anh-EDM-Thuong-Vo",
        "isOffical": true,
        "username": "",
        "artistsNames": "Thương Võ",
        "artists": [
          {
            "id": "IWZFEZIC",
            "name": "Thương Võ",
            "link": "/Thuong-Vo",
            "spotlight": false,
            "alias": "Thuong-Vo",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B6OD"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
        "link": "/bai-hat/Lua-Chon-Cua-Anh-EDM-Thuong-Vo/ZUCOZWEC.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
        "duration": 304,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637306700,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1467370624,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUFCFZ7U",
        "title": "Chuyện Cũ Mình Bỏ Qua Remix (Dance Version)",
        "alias": "Chuyen-Cu-Minh-Bo-Qua-Remix-Dance-Version-Peto",
        "isOffical": true,
        "username": "",
        "artistsNames": "Peto",
        "artists": [
          {
            "id": "IWZAWC70",
            "name": "Peto",
            "link": "/nghe-si/Peto",
            "spotlight": false,
            "alias": "Peto",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/3/8/c/d38c3d6d357241c7404c7d09507d3eab.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/3/8/c/d38c3d6d357241c7404c7d09507d3eab.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "ZOEIUO7D"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/8/e/c/f8ec81b22b6ee3132f41a3f2858aa775.jpg",
        "link": "/bai-hat/Chuyen-Cu-Minh-Bo-Qua-Remix-Dance-Version-Peto/ZUFCFZ7U.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/8/e/c/f8ec81b22b6ee3132f41a3f2858aa775.jpg",
        "duration": 261,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1640606400,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "69F0AAUZ",
          "title": "Nhạc Xuân Chọn Lọc Remix (Phần 1)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/8/e/c/f8ec81b22b6ee3132f41a3f2858aa775.jpg",
          "isoffical": true,
          "link": "/album/Nhac-Xuan-Chon-Loc-Remix-Phan-1-Peto/69F0AAUZ.html",
          "isIndie": false,
          "releaseDate": "27/12/2021",
          "sortDescription": "",
          "releasedAt": 1640538000000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZAWC70",
              "name": "Peto",
              "link": "/nghe-si/Peto",
              "spotlight": false,
              "alias": "Peto",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/3/8/c/d38c3d6d357241c7404c7d09507d3eab.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/3/8/c/d38c3d6d357241c7404c7d09507d3eab.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "ZOEIUO7D",
              "totalFollow": 4066
            }
          ],
          "artistsNames": "Peto"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1490032115,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZZOW98ZI",
        "title": "Nỗi Đau Xót Xa (EDM)",
        "alias": "Noi-Dau-Xot-Xa-EDM-Huong-Ly",
        "isOffical": true,
        "username": "",
        "artistsNames": "Hương Ly",
        "artists": [
          {
            "id": "IW6ZO9UB",
            "name": "Hương Ly",
            "link": "/Huong-Ly",
            "spotlight": false,
            "alias": "Huong-Ly",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZZ67898D"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/b/3/4cb3cc5a19be786f0771ba8e2c530828.jpg",
        "link": "/bai-hat/Noi-Dau-Xot-Xa-EDM-Huong-Ly/ZZOW98ZI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/4/c/b/3/4cb3cc5a19be786f0771ba8e2c530828.jpg",
        "duration": 269,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1643264400,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1490032301,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUW6OACI",
        "title": "Badaboo Của Anh (Orinn Remix)",
        "alias": "Badaboo-Cua-Anh-Orinn-Remix-Lap-Nguyen",
        "isOffical": true,
        "username": "",
        "artistsNames": "Lập Nguyên",
        "artists": [
          {
            "id": "IW68Z8C7",
            "name": "Lập Nguyên",
            "link": "/Lap-Nguyen",
            "spotlight": false,
            "alias": "Lap-Nguyen",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/1/8/9/6189cc15928cc11561cd622216cf639d.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/1/8/9/6189cc15928cc11561cd622216cf639d.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6ZIEU8AB"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/4/7/a/b47a0de56e8a06e0c5d66d6b1dc46faa.jpg",
        "link": "/bai-hat/Badaboo-Cua-Anh-Orinn-Remix-Lap-Nguyen/ZUW6OACI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/4/7/a/b47a0de56e8a06e0c5d66d6b1dc46faa.jpg",
        "duration": 245,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1626022800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "68BI0FCU",
          "title": "Badaboo Của Anh (Orinn Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/0/b/e/70be8cc643efc532e4eae621fba32f82.jpg",
          "isoffical": true,
          "link": "/album/Badaboo-Cua-Anh-Orinn-Remix-Single-Lap-Nguyen/68BI0FCU.html",
          "isIndie": false,
          "releaseDate": "12/07/2021",
          "sortDescription": "",
          "releasedAt": 1626022800000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCD"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW68Z8C7",
              "name": "Lập Nguyên",
              "link": "/Lap-Nguyen",
              "spotlight": false,
              "alias": "Lap-Nguyen",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/1/8/9/6189cc15928cc11561cd622216cf639d.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/1/8/9/6189cc15928cc11561cd622216cf639d.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6ZIEU8AB",
              "totalFollow": 85221
            }
          ],
          "artistsNames": "Lập Nguyên"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1460644952,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZU06BCC0",
        "title": "Uyên Ương Không Thành (Remix)",
        "alias": "Uyen-Uong-Khong-Thanh-Remix-DIMZ-Pham-Sac-Lenh",
        "isOffical": true,
        "username": "",
        "artistsNames": "DIMZ, Phạm Sắc Lệnh",
        "artists": [
          {
            "id": "IW689UCI",
            "name": "DIMZ",
            "link": "/DIMZ",
            "spotlight": false,
            "alias": "DIMZ",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/0/e/3d0e23225474db866a81c0321da3c246.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/0/e/3d0e23225474db866a81c0321da3c246.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6Z6IC90O"
          },
          {
            "id": "IW6ZB07B",
            "name": "Phạm Sắc Lệnh",
            "link": "/Pham-Sac-Lenh",
            "spotlight": false,
            "alias": "Pham-Sac-Lenh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/8/0/4/98043bc8ee50449ecd3808efb240d629.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/cover/9/8/0/4/98043bc8ee50449ecd3808efb240d629.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9CO0W"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/4/3/4/a434b8bedaef240b82316f84de3935c1.jpg",
        "link": "/bai-hat/Uyen-Uong-Khong-Thanh-Remix-DIMZ-Pham-Sac-Lenh/ZU06BCC0.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/a/4/3/4/a434b8bedaef240b82316f84de3935c1.jpg",
        "duration": 194,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1622566800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1444421606,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUBEFCZB",
        "title": "Không Sao Em À (EDM)",
        "alias": "Khong-Sao-Em-A-EDM-Dinh-Tung-Huy",
        "isOffical": true,
        "username": "",
        "artistsNames": "Đinh Tùng Huy",
        "artists": [
          {
            "id": "IWZA6F8I",
            "name": "Đinh Tùng Huy",
            "link": "/Dinh-Tung-Huy",
            "spotlight": false,
            "alias": "Dinh-Tung-Huy",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZUO88FII"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/d/a/9/5da92b54155ac844f9dac366057cbcde.jpg",
        "link": "/bai-hat/Khong-Sao-Em-A-EDM-Dinh-Tung-Huy/ZUBEFCZB.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/5/d/a/9/5da92b54155ac844f9dac366057cbcde.jpg",
        "duration": 283,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637046000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6BW76EA",
        "title": "Yêu Thật Khó Xóa Thật Đau (Yang Remix)",
        "alias": "Yeu-That-Kho-Xoa-That-Dau-Yang-Remix-Qinn-Media-Truong-Khai-Minh",
        "isOffical": true,
        "username": "",
        "artistsNames": "Qinn Media, Trương Khải Minh",
        "artists": [
          {
            "id": "IW8ZUU69",
            "name": "Qinn Media",
            "link": "/nghe-si/Qinn-Media-IW8ZUU69",
            "spotlight": false,
            "alias": "Qinn-Media-IW8ZUU69",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6BBWCE7A"
          },
          {
            "id": "IWZ9887I",
            "name": "Trương Khải Minh",
            "link": "/nghe-si/Truong-Khai-Minh",
            "spotlight": false,
            "alias": "Truong-Khai-Minh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/a/2/7/8a27337c2c18900aa5ea86b682e18475.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/a/2/7/8a27337c2c18900aa5ea86b682e18475.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "ZODFZ7O8"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/9/d/a/b9da3a12f6592968c87e77244c20414c.jpg",
        "link": "/bai-hat/Yeu-That-Kho-Xoa-That-Dau-Yang-Remix-Qinn-Media-Truong-Khai-Minh/Z6BW76EA.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/9/d/a/b9da3a12f6592968c87e77244c20414c.jpg",
        "duration": 238,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1685120400,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "SBB0088C",
          "title": "Yêu Thật Khó Xóa Thật Đau (Yang Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/9/d/a/b9da3a12f6592968c87e77244c20414c.jpg",
          "isoffical": true,
          "link": "/album/Yeu-That-Kho-Xoa-That-Dau-Yang-Remix-Single-Qinn-Media-Truong-Khai-Minh/SBB0088C.html",
          "isIndie": false,
          "releaseDate": "27/05/2023",
          "sortDescription": "",
          "releasedAt": 1685120400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW8ZUU69",
              "name": "Qinn Media",
              "link": "/nghe-si/Qinn-Media-IW8ZUU69",
              "spotlight": false,
              "alias": "Qinn-Media-IW8ZUU69",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6BBWCE7A",
              "totalFollow": 1186
            },
            {
              "id": "IWZ9887I",
              "name": "Trương Khải Minh",
              "link": "/nghe-si/Truong-Khai-Minh",
              "spotlight": false,
              "alias": "Truong-Khai-Minh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/a/2/7/8a27337c2c18900aa5ea86b682e18475.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/a/2/7/8a27337c2c18900aa5ea86b682e18475.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "ZODFZ7O8",
              "totalFollow": 5101
            }
          ],
          "artistsNames": "Qinn Media, Trương Khải Minh"
        },
        "distributor": "VIEENT Music",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZO0IOAZI",
        "title": "Cứ Thế Rời Xa (Remix)",
        "alias": "Cu-The-Roi-Xa-Remix-Yen-Tattoo",
        "isOffical": true,
        "username": "",
        "artistsNames": "Yến Tattoo",
        "artists": [
          {
            "id": "IWZA80I8",
            "name": "Yến Tattoo",
            "link": "/Yen-Tattoo",
            "spotlight": false,
            "alias": "Yen-Tattoo",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/5/1/c/851cecdcfd1680709556fc012e20bf5d.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/5/1/c/851cecdcfd1680709556fc012e20bf5d.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9BWOO"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/1/5/4/9154d104178911ba28ba43cedc056742.jpg",
        "link": "/bai-hat/Cu-The-Roi-Xa-Remix-Yen-Tattoo/ZO0IOAZI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/1/5/4/9154d104178911ba28ba43cedc056742.jpg",
        "duration": 185,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1605182400,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6ZU6EFWB",
          "title": "Cứ Thế Rời Xa (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/9/d/6/d9d67250ec27c07f03a0b878f3e8341c.jpg",
          "isoffical": true,
          "link": "/album/Cu-The-Roi-Xa-Remix-Single-Yen-Tattoo/6ZU6EFWB.html",
          "isIndie": false,
          "releaseDate": "12/11/2020",
          "sortDescription": "",
          "releasedAt": 1605114000000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZA80I8",
              "name": "Yến Tattoo",
              "link": "/Yen-Tattoo",
              "spotlight": false,
              "alias": "Yen-Tattoo",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/5/1/c/851cecdcfd1680709556fc012e20bf5d.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/5/1/c/851cecdcfd1680709556fc012e20bf5d.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9BWOO",
              "totalFollow": 39432
            }
          ],
          "artistsNames": "Yến Tattoo"
        },
        "distributor": "Great Entertainment",
        "indicators": [
          
        ],
        "radioId": 1391517709,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZO8IO9EE",
        "title": "Thiên Ý (Remix)",
        "alias": "Thien-Y-Remix-NBH-Htrol",
        "isOffical": true,
        "username": "",
        "artistsNames": "NBH, Htrol",
        "artists": [
          {
            "id": "IW68CCIC",
            "name": "NBH",
            "link": "/nghe-si/NBH",
            "spotlight": false,
            "alias": "NBH",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/7/a/647a99188396712eb86c893b280ea761.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/7/a/647a99188396712eb86c893b280ea761.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "67WUEA8A"
          },
          {
            "id": "IW6Z60Z8",
            "name": "Htrol",
            "link": "/nghe-si/Htrol",
            "spotlight": false,
            "alias": "Htrol",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9BFF9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/c/c/e/0cced8e113068defaa7ab7d207afeb91.jpg",
        "link": "/bai-hat/Thien-Y-Remix-NBH-Htrol/ZO8IO9EE.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/c/c/e/0cced8e113068defaa7ab7d207afeb91.jpg",
        "duration": 285,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1611576000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "67WFOOUZ",
          "title": "Thiên Ý (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/c/c/e/0cced8e113068defaa7ab7d207afeb91.jpg",
          "isoffical": true,
          "link": "/album/Thien-Y-Remix-Single-NBH-Htrol/67WFOOUZ.html",
          "isIndie": false,
          "releaseDate": "25/01/2021",
          "sortDescription": "",
          "releasedAt": 1611507600000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW68CCIC",
              "name": "NBH",
              "link": "/nghe-si/NBH",
              "spotlight": false,
              "alias": "NBH",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/7/a/647a99188396712eb86c893b280ea761.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/7/a/647a99188396712eb86c893b280ea761.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "67WUEA8A",
              "totalFollow": 226
            },
            {
              "id": "IW6Z60Z8",
              "name": "Htrol",
              "link": "/nghe-si/Htrol",
              "spotlight": false,
              "alias": "Htrol",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9BFF9",
              "totalFollow": 24478
            }
          ],
          "artistsNames": "NBH, Htrol"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1423451954,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWABW06E",
        "title": "Sợ Cô Ta (Remix)",
        "alias": "So-Co-Ta-Remix-Ho-Gia-Khanh",
        "isOffical": true,
        "username": "",
        "artistsNames": "Hồ Gia Khánh",
        "artists": [
          {
            "id": "IWZ97DEE",
            "name": "Hồ Gia Khánh",
            "link": "/Ho-Gia-Khanh",
            "spotlight": false,
            "alias": "Ho-Gia-Khanh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/c/d/3/fcd30ea4e7f1d76154a2fff58bdcdc81.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/c/d/3/fcd30ea4e7f1d76154a2fff58bdcdc81.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZODEA6I8"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/f/7/4/0f74a0e9c4a133c38fc01406ce403d3d.jpg",
        "link": "/bai-hat/So-Co-Ta-Remix-Ho-Gia-Khanh/ZWABW06E.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/f/7/4/0f74a0e9c4a133c38fc01406ce403d3d.jpg",
        "duration": 259,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 0,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "ZU9U6ADE",
          "title": "Sợ Cô Ta (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/f/7/4/0f74a0e9c4a133c38fc01406ce403d3d.jpg",
          "isoffical": true,
          "link": "/album/So-Co-Ta-Remix-Single-Ho-Gia-Khanh/ZU9U6ADE.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZ97DEE",
              "name": "Hồ Gia Khánh",
              "link": "/Ho-Gia-Khanh",
              "spotlight": false,
              "alias": "Ho-Gia-Khanh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/c/d/3/fcd30ea4e7f1d76154a2fff58bdcdc81.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/c/d/3/fcd30ea4e7f1d76154a2fff58bdcdc81.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZODEA6I8",
              "totalFollow": 18755
            }
          ],
          "artistsNames": "Hồ Gia Khánh"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1286698782,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOU0II",
        "title": "Lữ Khách Qua Thời Gian (Remix)",
        "alias": "Lu-Khach-Qua-Thoi-Gian-Remix-Tuan-Nguyen",
        "isOffical": true,
        "username": "",
        "artistsNames": "Tuấn Nguyễn",
        "artists": [
          {
            "id": "IW6ZUZ9W",
            "name": "Tô Anh Tuấn",
            "link": "/nghe-si/To-Anh-Tuan",
            "spotlight": false,
            "alias": "To-Anh-Tuan",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/f/1/e/3f1ee8825071cfe5da5557208a6a900a.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/f/1/e/3f1ee8825071cfe5da5557208a6a900a.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9BE0C"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/c/9/d/7c9d3e1969ab9a8643186e7ca6142643.jpg",
        "link": "/bai-hat/Lu-Khach-Qua-Thoi-Gian-Remix-Tuan-Nguyen/ZWBOU0II.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/7/c/9/d/7c9d3e1969ab9a8643186e7ca6142643.jpg",
        "duration": 198,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589180880,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1315102424,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZZCACUAD",
        "title": "Xin Má Rước Dâu (EDM Version)",
        "alias": "Xin-Ma-Ruoc-Dau-EDM-Version-Dieu-Kien",
        "isOffical": true,
        "username": "",
        "artistsNames": "Diệu Kiên",
        "artists": [
          {
            "id": "IW6Z8UUB",
            "name": "Diệu Kiên",
            "link": "/nghe-si/Dieu-Kien",
            "spotlight": false,
            "alias": "Dieu-Kien",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/5/b/7/55b787b8189794c412c305027d1f239d.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/5/b/7/55b787b8189794c412c305027d1f239d.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWWB"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/4/4/c/c44c3822217d8775780358df759f126d.jpg",
        "link": "/bai-hat/Xin-Ma-Ruoc-Dau-EDM-Version-Dieu-Kien/ZZCACUAD.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/4/4/c/c44c3822217d8775780358df759f126d.jpg",
        "duration": 242,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1654510080,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6BOU8CIE",
          "title": "Xin Má Rước Dâu (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/c/4/4/c/c44c3822217d8775780358df759f126d.jpg",
          "isoffical": true,
          "link": "/album/Xin-Ma-Ruoc-Dau-Single-Dieu-Kien/6BOU8CIE.html",
          "isIndie": false,
          "releaseDate": "20/05/2022",
          "sortDescription": "",
          "releasedAt": 1652979600000,
          "genreIds": [
            "IWZ97FCD",
            "IWZ9Z08I"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6Z8UUB",
              "name": "Diệu Kiên",
              "link": "/nghe-si/Dieu-Kien",
              "spotlight": false,
              "alias": "Dieu-Kien",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/5/b/7/55b787b8189794c412c305027d1f239d.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/5/b/7/55b787b8189794c412c305027d1f239d.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9CWWB",
              "totalFollow": 25522
            }
          ],
          "artistsNames": "Diệu Kiên"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZO0B0Z0Z",
        "title": "Chúng Ta Chỉ Là Đã Từng Yêu (Remix 2)",
        "alias": "Chung-Ta-Chi-La-Da-Tung-Yeu-Remix-2-Thien-Tu",
        "isOffical": true,
        "username": "",
        "artistsNames": "Thiên Tú",
        "artists": [
          {
            "id": "IW67E9CO",
            "name": "Thiên Tú",
            "link": "/Thien-Tu",
            "spotlight": false,
            "alias": "Thien-Tu",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/b/6/2/2b62681eb5f225949b1a3f2ed54c837f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/b/6/2/2b62681eb5f225949b1a3f2ed54c837f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UOECFUC"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/2/6/d/726d3574af7f7b8c1afc4ae030217734.jpg",
        "link": "/bai-hat/Chung-Ta-Chi-La-Da-Tung-Yeu-Remix-2-Thien-Tu/ZO0B0Z0Z.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/7/2/6/d/726d3574af7f7b8c1afc4ae030217734.jpg",
        "duration": 248,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1605688200,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1392818869,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZOWEW7ZU",
        "title": "Kiếp Duyên Không Thành (Remix)",
        "alias": "Kiep-Duyen-Khong-Thanh-Remix-DIMZ",
        "isOffical": true,
        "username": "",
        "artistsNames": "DIMZ",
        "artists": [
          {
            "id": "IW689UCI",
            "name": "DIMZ",
            "link": "/DIMZ",
            "spotlight": false,
            "alias": "DIMZ",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/0/e/3d0e23225474db866a81c0321da3c246.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/0/e/3d0e23225474db866a81c0321da3c246.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6Z6IC90O"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/5/5/8/7558e2c937d2049dc0627f066fa42490.jpg",
        "link": "/bai-hat/Kiep-Duyen-Khong-Thanh-Remix-DIMZ/ZOWEW7ZU.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/5/5/8/7558e2c937d2049dc0627f066fa42490.jpg",
        "duration": 183,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1607488500,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6Z7OUZ88",
          "title": "Kiếp Duyên Không Thành (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/5/5/8/7558e2c937d2049dc0627f066fa42490.jpg",
          "isoffical": true,
          "link": "/album/Kiep-Duyen-Khong-Thanh-Single-DIMZ/6Z7OUZ88.html",
          "isIndie": false,
          "releaseDate": "05/12/2020",
          "sortDescription": "",
          "releasedAt": 1607101200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCD"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW689UCI",
              "name": "DIMZ",
              "link": "/DIMZ",
              "spotlight": false,
              "alias": "DIMZ",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/0/e/3d0e23225474db866a81c0321da3c246.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/0/e/3d0e23225474db866a81c0321da3c246.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6Z6IC90O",
              "totalFollow": 45539
            }
          ],
          "artistsNames": "DIMZ"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1394739283,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCO09AD",
        "title": "Trúc Xinh (EDM)",
        "alias": "Truc-Xinh-EDM-Minh-Vuong-M4U",
        "isOffical": true,
        "username": "",
        "artistsNames": "Minh Vương M4U",
        "artists": [
          {
            "id": "IWZ9ZFA7",
            "name": "Minh Vương M4U",
            "link": "/Minh-Vuong-M4U",
            "spotlight": false,
            "alias": "Minh-Vuong-M4U",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZ9DAC6"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "link": "/bai-hat/Truc-Xinh-EDM-Minh-Vuong-M4U/ZUCO09AD.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "duration": 255,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637293140,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1467456009,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZO8U9OWW",
        "title": "Phố Cũ Còn Anh (Remix)",
        "alias": "Pho-Cu-Con-Anh-Remix-Dinh-Binh-Quinn-Nguyen-Phi",
        "isOffical": true,
        "username": "",
        "artistsNames": "Đình Bình, Quinn, Nguyễn Phi",
        "artists": [
          {
            "id": "IWZAWOB9",
            "name": "Đình Bình",
            "link": "/nghe-si/Dinh-Binh",
            "spotlight": false,
            "alias": "Dinh-Binh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/d/3/f/4d3fcf0adf3f8ae79ba2a63bd091b67b.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/d/3/f/4d3fcf0adf3f8ae79ba2a63bd091b67b.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9ABOF"
          },
          {
            "id": "IW67FCCW",
            "name": "Quinn",
            "link": "/nghe-si/Tran-Thi-Diem-Quynh",
            "spotlight": false,
            "alias": "Tran-Thi-Diem-Quynh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/9/b/5/19b543005d980f6db9c105f7692923e2.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/9/b/5/19b543005d980f6db9c105f7692923e2.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6U68C0F7"
          },
          {
            "id": "IW68E77F",
            "name": "Nguyễn Phi",
            "link": "/nghe-si/Nguyen-Phi",
            "spotlight": false,
            "alias": "Nguyen-Phi",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "67OW6999"
          }
        ],
        "isWorldWide": false,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/d/a/1/fda11f521ef69bca16a86e0571131760.jpg",
        "link": "/bai-hat/Pho-Cu-Con-Anh-Remix-Dinh-Binh-Quinn-Nguyen-Phi/ZO8U9OWW.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/d/a/1/fda11f521ef69bca16a86e0571131760.jpg",
        "duration": 247,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1611734700,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "67OW6C9D",
          "title": "Phố Cũ Còn Anh (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/d/a/1/fda11f521ef69bca16a86e0571131760.jpg",
          "isoffical": true,
          "link": "/album/Pho-Cu-Con-Anh-Remix-Single-Dinh-Binh-Quinn-Nguyen-Phi/67OW6C9D.html",
          "isIndie": false,
          "releaseDate": "27/01/2021",
          "sortDescription": "",
          "releasedAt": 1611680400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZAWOB9",
              "name": "Đình Bình",
              "link": "/nghe-si/Dinh-Binh",
              "spotlight": false,
              "alias": "Dinh-Binh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/d/3/f/4d3fcf0adf3f8ae79ba2a63bd091b67b.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/d/3/f/4d3fcf0adf3f8ae79ba2a63bd091b67b.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9ABOF",
              "totalFollow": 803
            },
            {
              "id": "IW67FCCW",
              "name": "Quinn",
              "link": "/nghe-si/Tran-Thi-Diem-Quynh",
              "spotlight": false,
              "alias": "Tran-Thi-Diem-Quynh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/9/b/5/19b543005d980f6db9c105f7692923e2.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/9/b/5/19b543005d980f6db9c105f7692923e2.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6U68C0F7",
              "totalFollow": 13300
            },
            {
              "id": "IW68E77F",
              "name": "Nguyễn Phi",
              "link": "/nghe-si/Nguyen-Phi",
              "spotlight": false,
              "alias": "Nguyen-Phi",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "67OW6999",
              "totalFollow": 38
            }
          ],
          "artistsNames": "Đình Bình, Quinn, Nguyễn Phi"
        },
        "distributor": "Đình Bình",
        "indicators": [
          
        ],
        "radioId": 1423675475,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBUOC68",
        "title": "Không Thấy Ngày Về Remix 2020",
        "alias": "Khong-Thay-Ngay-Ve-Remix-2020-La-Phong-Lam",
        "isOffical": true,
        "username": "",
        "artistsNames": "Lã Phong Lâm",
        "artists": [
          {
            "id": "IWZA6A7Z",
            "name": "Lã Phong Lâm",
            "link": "/La-Phong-Lam",
            "spotlight": false,
            "alias": "La-Phong-Lam",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/1/f/e/71fe19307ced55a4724bb15c43348208.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/1/f/e/71fe19307ced55a4724bb15c43348208.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B0Z6"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/0/1/f/801f171b106d9184cc7d761cd1143d42.jpg",
        "link": "/bai-hat/Khong-Thay-Ngay-Ve-Remix-2020-La-Phong-Lam/ZWBUOC68.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/0/1/f/801f171b106d9184cc7d761cd1143d42.jpg",
        "duration": 243,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1592369340,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1321818454,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6Z9A0OZ",
        "title": "Khuất Lối (EDM)",
        "alias": "Khuat-Loi-EDM-H-Kray",
        "isOffical": true,
        "username": "",
        "artistsNames": "H-Kray",
        "artists": [
          {
            "id": "IW76DOIC",
            "name": "H-Kray",
            "link": "/nghe-si/H-Kray",
            "spotlight": false,
            "alias": "H-Kray",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/5/8f752317162aa020b255bf4e638e5f8b.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/5/8f752317162aa020b255bf4e638e5f8b.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "69E9BWDU"
          }
        ],
        "isWorldWide": false,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/a/a/4/4aa428e316cde8219f7785210348cbf3.jpg",
        "link": "/bai-hat/Khuat-Loi-EDM-H-Kray/Z6Z9A0OZ.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/a/a/4/4aa428e316cde8219f7785210348cbf3.jpg",
        "duration": 275,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1672912260,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6B7F0O0O",
          "title": "Khuất Lối (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/4/a/a/4/4aa428e316cde8219f7785210348cbf3.jpg",
          "isoffical": true,
          "link": "/album/Khuat-Loi-Single-H-Kray/6B7F0O0O.html",
          "isIndie": false,
          "releaseDate": "17/12/2022",
          "sortDescription": "",
          "releasedAt": 1671278400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCD"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW76DOIC",
              "name": "H-Kray",
              "link": "/nghe-si/H-Kray",
              "spotlight": false,
              "alias": "H-Kray",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/5/8f752317162aa020b255bf4e638e5f8b.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/5/8f752317162aa020b255bf4e638e5f8b.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "69E9BWDU",
              "totalFollow": 8539
            }
          ],
          "artistsNames": "H-Kray"
        },
        "distributor": "H-Kray",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWADFDZ8",
        "title": "Thằng Hầu (EDM Version)",
        "alias": "Thang-Hau-EDM-Version-Nhat-Phong-Htrol",
        "isOffical": true,
        "username": "",
        "artistsNames": "Nhật Phong, Htrol",
        "artists": [
          {
            "id": "IW6W7AZD",
            "name": "Nhật Phong",
            "link": "/Nhat-Phong",
            "spotlight": false,
            "alias": "Nhat-Phong",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "60IZFEFU"
          },
          {
            "id": "IW6Z60Z8",
            "name": "Htrol",
            "link": "/nghe-si/Htrol",
            "spotlight": false,
            "alias": "Htrol",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9BFF9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/c/5/0/8c50e48589ebecc89ca1358b99c28020.jpg",
        "link": "/bai-hat/Thang-Hau-EDM-Version-Nhat-Phong-Htrol/ZWADFDZ8.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/c/5/0/8c50e48589ebecc89ca1358b99c28020.jpg",
        "duration": 243,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 0,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "ZZZFFU0B",
          "title": "Thằng Hầu (EDM Version) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/c/5/0/8c50e48589ebecc89ca1358b99c28020.jpg",
          "isoffical": true,
          "link": "/album/Thang-Hau-EDM-Version-Single-Nhat-Phong-Htrol/ZZZFFU0B.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6W7AZD",
              "name": "Nhật Phong",
              "link": "/Nhat-Phong",
              "spotlight": false,
              "alias": "Nhat-Phong",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "60IZFEFU",
              "totalFollow": 226383
            },
            {
              "id": "IW6Z60Z8",
              "name": "Htrol",
              "link": "/nghe-si/Htrol",
              "spotlight": false,
              "alias": "Htrol",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9BFF9",
              "totalFollow": 24478
            }
          ],
          "artistsNames": "Nhật Phong, Htrol"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1286772152,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOUA66",
        "title": "Vầng Trăng Khóc (EDM Version)",
        "alias": "Vang-Trang-Khoc-EDM-Version-Minh-Vuong-M4U-Huong-Ly-ACV",
        "isOffical": true,
        "username": "",
        "artistsNames": "Minh Vương M4U, Hương Ly, ACV",
        "artists": [
          {
            "id": "IWZ9ZFA7",
            "name": "Minh Vương M4U",
            "link": "/Minh-Vuong-M4U",
            "spotlight": false,
            "alias": "Minh-Vuong-M4U",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZ9DAC6"
          },
          {
            "id": "IW6ZO9UB",
            "name": "Hương Ly",
            "link": "/Huong-Ly",
            "spotlight": false,
            "alias": "Huong-Ly",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZZ67898D"
          },
          {
            "id": "IW6ZAAB8",
            "name": "ACV",
            "link": "/nghe-si/ACV-Music",
            "spotlight": false,
            "alias": "ACV-Music",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWC9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "link": "/bai-hat/Vang-Trang-Khoc-EDM-Version-Minh-Vuong-M4U-Huong-Ly-ACV/ZWBOUA66.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "duration": 238,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589362980,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1319117672,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBZ7U6W",
        "title": "Điểm Ca Đích Nhân (Snow Chill)",
        "alias": "Diem-Ca-Dich-Nhan-Snow-Chill-Thai-Quynh",
        "isOffical": true,
        "username": "",
        "artistsNames": "Thái Quỳnh",
        "artists": [
          {
            "id": "IW6WABW7",
            "name": "Thái Quỳnh",
            "link": "/Thai-Quynh",
            "spotlight": false,
            "alias": "Thai-Quynh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/2/e/a/62ea7836f7d4ce14d79762fc04a4aaf9.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/2/e/a/62ea7836f7d4ce14d79762fc04a4aaf9.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9BA77"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/a/b/c/9abc1bec7624df276ba4f62e0b00df28.jpg",
        "link": "/bai-hat/Diem-Ca-Dich-Nhan-Snow-Chill-Thai-Quynh/ZWBZ7U6W.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/9/a/b/c/9abc1bec7624df276ba4f62e0b00df28.jpg",
        "duration": 188,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1594198200,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1331065174,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUCO087U",
        "title": "Nắm (EDM)",
        "alias": "Nam-EDM-Minh-Vuong-M4U-Huong-Ly",
        "isOffical": true,
        "username": "",
        "artistsNames": "Minh Vương M4U, Hương Ly",
        "artists": [
          {
            "id": "IWZ9ZFA7",
            "name": "Minh Vương M4U",
            "link": "/Minh-Vuong-M4U",
            "spotlight": false,
            "alias": "Minh-Vuong-M4U",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZ9DAC6"
          },
          {
            "id": "IW6ZO9UB",
            "name": "Hương Ly",
            "link": "/Huong-Ly",
            "spotlight": false,
            "alias": "Huong-Ly",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZZ67898D"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "link": "/bai-hat/Nam-EDM-Minh-Vuong-M4U-Huong-Ly/ZUCO087U.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "duration": 229,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1637292780,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1465692495,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWBOUA68",
        "title": "Ngôi Nhà Hoa Hồng (EDM Version)",
        "alias": "Ngoi-Nha-Hoa-Hong-EDM-Version-Minh-Vuong-M4U-Huong-Ly-ACV",
        "isOffical": true,
        "username": "",
        "artistsNames": "Minh Vương M4U, Hương Ly, ACV",
        "artists": [
          {
            "id": "IWZ9ZFA7",
            "name": "Minh Vương M4U",
            "link": "/Minh-Vuong-M4U",
            "spotlight": false,
            "alias": "Minh-Vuong-M4U",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/0/8/4c08ac0f796cc77203dff94ced5a4c43.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZWZ9DAC6"
          },
          {
            "id": "IW6ZO9UB",
            "name": "Hương Ly",
            "link": "/Huong-Ly",
            "spotlight": false,
            "alias": "Huong-Ly",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/f/7/4/8f7440f12cc759faba40847103086c3f.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZZ67898D"
          },
          {
            "id": "IW6ZAAB8",
            "name": "ACV",
            "link": "/nghe-si/ACV-Music",
            "spotlight": false,
            "alias": "ACV-Music",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CWC9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "link": "/bai-hat/Ngoi-Nha-Hoa-Hong-EDM-Version-Minh-Vuong-M4U-Huong-Ly-ACV/ZWBOUA68.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/8/1/8142308a12a798886cc342e51b436fec_1511496189.jpg",
        "duration": 283,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1589362980,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1319117670,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZU8FCFO7",
        "title": "Cầu Vồng Sau Mưa (Remix)",
        "alias": "Cau-Vong-Sau-Mua-Remix-Ha-My",
        "isOffical": true,
        "username": "",
        "artistsNames": "Hà My",
        "artists": [
          {
            "id": "IW6A8ID7",
            "name": "Hà My",
            "link": "/nghe-si/Nguyen-Ha-My",
            "spotlight": false,
            "alias": "Nguyen-Ha-My",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/f/6/9/6f69a77c82f3756e7c1732e1f5ee9700.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/f/6/9/6f69a77c82f3756e7c1732e1f5ee9700.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6B7WAUOD"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/f/6/9/6f69a77c82f3756e7c1732e1f5ee9700.jpg",
        "link": "/bai-hat/Cau-Vong-Sau-Mua-Remix-Ha-My/ZU8FCFO7.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/6/f/6/9/6f69a77c82f3756e7c1732e1f5ee9700.jpg",
        "duration": 221,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1634130000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUDIF6IB",
        "title": "Hạc Giấy (EDM)",
        "alias": "Hac-Giay-EDM-Yen-Napun",
        "isOffical": true,
        "username": "",
        "artistsNames": "Yến Napun",
        "artists": [
          {
            "id": "IW769IB6",
            "name": "Yến Napun",
            "link": "/nghe-si/Yen-Napun",
            "spotlight": false,
            "alias": "Yen-Napun",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/5/9/7f594bb3dbbd54c3a7e58cadae4e2afc.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/5/9/7f594bb3dbbd54c3a7e58cadae4e2afc.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "S9A86DC7"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/5/9/7f594bb3dbbd54c3a7e58cadae4e2afc.jpg",
        "link": "/bai-hat/Hac-Giay-EDM-Yen-Napun/ZUDIF6IB.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/7/f/5/9/7f594bb3dbbd54c3a7e58cadae4e2afc.jpg",
        "duration": 238,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1638180000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "radioId": 1490031990,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZU79EDEO",
        "title": "Em Luôn Ở Trong Tâm Trí Anh (EDM)",
        "alias": "Em-Luon-O-Trong-Tam-Tri-Anh-EDM-Merci",
        "isOffical": true,
        "username": "",
        "artistsNames": "Merci",
        "artists": [
          {
            "id": "IW76IO9W",
            "name": "Merci",
            "link": "/nghe-si/Merci-Vietnam",
            "spotlight": false,
            "alias": "Merci-Vietnam",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/b/f/cebf2da8f3bf719fa56150529a41c82c.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/e/b/f/cebf2da8f3bf719fa56150529a41c82c.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "69IIBEI8"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/1/9/5/a19569b0895b3d366d70864111953020.jpg",
        "link": "/bai-hat/Em-Luon-O-Trong-Tam-Tri-Anh-EDM-Merci/ZU79EDEO.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/a/1/9/5/a19569b0895b3d366d70864111953020.jpg",
        "duration": 284,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1632675600,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "distributor": "ACV Entertainment",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUW9E6U7",
        "title": "Lỗi Tại Anh - Remix By Orinn",
        "alias": "Loi-Tai-Anh-Remix-By-Orinn-Alex-Lam-Orinn",
        "isOffical": true,
        "username": "",
        "artistsNames": "Alex Lam, Orinn",
        "artists": [
          {
            "id": "IWZA6EF6",
            "name": "Alex Lam",
            "link": "/Alex-Lam",
            "spotlight": false,
            "alias": "Alex-Lam",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/9/8/4/59842ee0a32951610e5d0b9c2514b98a.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/9/8/4/59842ee0a32951610e5d0b9c2514b98a.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6UW9B0E9"
          },
          {
            "id": "IW7O98D9",
            "name": "Orinn",
            "link": "/nghe-si/Orinn",
            "spotlight": false,
            "alias": "Orinn",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/c/9/9/8c994a030999627e97c353fc928bc57d.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/c/9/9/8c994a030999627e97c353fc928bc57d.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "68B8B60Z"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/8/1/e/381e632e087bce3ee54d0a9047d962bf.jpg",
        "link": "/bai-hat/Loi-Tai-Anh-Remix-By-Orinn-Alex-Lam-Orinn/ZUW9E6U7.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/8/1/e/381e632e087bce3ee54d0a9047d962bf.jpg",
        "duration": 231,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1626368400,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "68B8BZWI",
          "title": "Lỗi Tại Anh (Remixes EP)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/4/7/f/647f6faf1f6f2951bb1aef7b63beb5a5.jpg",
          "isoffical": true,
          "link": "/album/Loi-Tai-Anh-Remixes-EP-Alex-Lam/68B8BZWI.html",
          "isIndie": false,
          "releaseDate": "16/07/2021",
          "sortDescription": "",
          "releasedAt": 1626368400000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZA6EF6",
              "name": "Alex Lam",
              "link": "/Alex-Lam",
              "spotlight": false,
              "alias": "Alex-Lam",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/9/8/4/59842ee0a32951610e5d0b9c2514b98a.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/9/8/4/59842ee0a32951610e5d0b9c2514b98a.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6UW9B0E9",
              "totalFollow": 2433
            }
          ],
          "artistsNames": "Alex Lam"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1460645160,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6A6BZC0",
        "title": "Một Cuộc Tình Dối Trá (Remix)",
        "alias": "Mot-Cuoc-Tinh-Doi-Tra-Remix-Trung-Dio",
        "isOffical": true,
        "username": "",
        "artistsNames": "Trung Dio",
        "artists": [
          {
            "id": "IW80Z8DA",
            "name": "Trung Dio",
            "link": "/Trung-Dio",
            "spotlight": false,
            "alias": "Trung-Dio",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/7/e/9/c7e9ed924f9d1a26c4ea447e4eb7c507.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/7/e/9/c7e9ed924f9d1a26c4ea447e4eb7c507.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "6B88BU77"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/banner/3/9/9/c/399c052f2b48f4753074c271d98005d1.jpg",
        "link": "/bai-hat/Mot-Cuoc-Tinh-Doi-Tra-Remix-Trung-Dio/Z6A6BZC0.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/3/9/9/c/399c052f2b48f4753074c271d98005d1.jpg",
        "duration": 283,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1683188100,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "SBA8AA89",
          "title": "Một Cuộc Tình Dối Trá (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/4/f/2/b4f23f11b2ea5c277591410182b6c86d.jpg",
          "isoffical": true,
          "link": "/album/Mot-Cuoc-Tinh-Doi-Tra-Single-Trung-Dio/SBA8AA89.html",
          "isIndie": false,
          "releaseDate": "04/05/2023",
          "sortDescription": "",
          "releasedAt": 1683188100000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCD"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW80Z8DA",
              "name": "Trung Dio",
              "link": "/Trung-Dio",
              "spotlight": false,
              "alias": "Trung-Dio",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/7/e/9/c7e9ed924f9d1a26c4ea447e4eb7c507.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/7/e/9/c7e9ed924f9d1a26c4ea447e4eb7c507.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "6B88BU77",
              "totalFollow": 1537
            }
          ],
          "artistsNames": "Trung Dio"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWAE9UZI",
        "title": "Một Khúc Ly Sầu (Remix)",
        "alias": "Mot-Khuc-Ly-Sau-Remix-Gia-Huy-Singer-DinhLong",
        "isOffical": true,
        "username": "",
        "artistsNames": "Gia Huy Singer, DinhLong",
        "artists": [
          {
            "id": "IWZFE9DB",
            "name": "Gia Huy Singer",
            "link": "/Gia-Huy-Singer",
            "spotlight": false,
            "alias": "Gia-Huy-Singer",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZODE9AD0"
          },
          {
            "id": "IW6W8FO6",
            "name": "DINHLONG",
            "link": "/nghe-si/DINHLONG",
            "spotlight": false,
            "alias": "DINHLONG",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9B9U9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/a/5/8/2a58ae978ee9fef9739e44c057fb57b4.jpg",
        "link": "/bai-hat/Mot-Khuc-Ly-Sau-Remix-Gia-Huy-Singer-DinhLong/ZWAE9UZI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/a/5/8/2a58ae978ee9fef9739e44c057fb57b4.jpg",
        "duration": 264,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 0,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "Z8UDWAO8",
          "title": "Một Khúc Ly Sầu (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/2/a/5/8/2a58ae978ee9fef9739e44c057fb57b4.jpg",
          "isoffical": true,
          "link": "/album/Mot-Khuc-Ly-Sau-Remix-Single-Gia-Huy-Singer-DinhLong/Z8UDWAO8.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZFE9DB",
              "name": "Gia Huy Singer",
              "link": "/Gia-Huy-Singer",
              "spotlight": false,
              "alias": "Gia-Huy-Singer",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/d/a/e/cdaed0039653f6d0ba77d0ec3683db67.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZODE9AD0",
              "totalFollow": 51205
            },
            {
              "id": "IW6W8FO6",
              "name": "DINHLONG",
              "link": "/nghe-si/DINHLONG",
              "spotlight": false,
              "alias": "DINHLONG",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9B9U9",
              "totalFollow": 29766
            }
          ],
          "artistsNames": "Gia Huy Singer, DinhLong"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1286783471,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWAFZ0DW",
        "title": "Đau Bởi Vì Ai (Remix)",
        "alias": "Dau-Boi-Vi-Ai-Remix-Nhat-Phong",
        "isOffical": true,
        "username": "",
        "artistsNames": "Nhật Phong",
        "artists": [
          {
            "id": "IW6W7AZD",
            "name": "Nhật Phong",
            "link": "/Nhat-Phong",
            "spotlight": false,
            "alias": "Nhat-Phong",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "60IZFEFU"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/5/0/c/850c552710a7092d7c279efced19bee5.jpg",
        "link": "/bai-hat/Dau-Boi-Vi-Ai-Remix-Nhat-Phong/ZWAFZ0DW.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/5/0/c/850c552710a7092d7c279efced19bee5.jpg",
        "duration": 246,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1572868800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "ZAFUDUOB",
          "title": "Đau Bởi Vì Ai (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/5/0/c/850c552710a7092d7c279efced19bee5.jpg",
          "isoffical": true,
          "link": "/album/Dau-Boi-Vi-Ai-Remix-Single-Nhat-Phong/ZAFUDUOB.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6W7AZD",
              "name": "Nhật Phong",
              "link": "/Nhat-Phong",
              "spotlight": false,
              "alias": "Nhat-Phong",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "60IZFEFU",
              "totalFollow": 226383
            }
          ],
          "artistsNames": "Nhật Phong"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1286795665,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWAEBA7U",
        "title": "Chỉ Là Câu Hứa (Remix)",
        "alias": "Chi-La-Cau-Hua-Remix-Dinh-Tung-Huy-Htrol",
        "isOffical": true,
        "username": "",
        "artistsNames": "Đinh Tùng Huy, Htrol",
        "artists": [
          {
            "id": "IWZA6F8I",
            "name": "Đinh Tùng Huy",
            "link": "/Dinh-Tung-Huy",
            "spotlight": false,
            "alias": "Dinh-Tung-Huy",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZUO88FII"
          },
          {
            "id": "IW6Z60Z8",
            "name": "Htrol",
            "link": "/nghe-si/Htrol",
            "spotlight": false,
            "alias": "Htrol",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9BFF9"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/0/5/6c05a512bc422a7e2da9da4c8aa37f2f.jpg",
        "link": "/bai-hat/Chi-La-Cau-Hua-Remix-Dinh-Tung-Huy-Htrol/ZWAEBA7U.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/c/0/5/6c05a512bc422a7e2da9da4c8aa37f2f.jpg",
        "duration": 270,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 0,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "Z89I0Z6C",
          "title": "Chỉ Là Câu Hứa (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/c/0/5/6c05a512bc422a7e2da9da4c8aa37f2f.jpg",
          "isoffical": true,
          "link": "/album/Chi-La-Cau-Hua-Remix-Single-Dinh-Tung-Huy-Htrol/Z89I0Z6C.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZA6F8I",
              "name": "Đinh Tùng Huy",
              "link": "/Dinh-Tung-Huy",
              "spotlight": false,
              "alias": "Dinh-Tung-Huy",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/5/0/c/a50c42664585288873464b6e9c18de3e.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZUO88FII",
              "totalFollow": 100582
            },
            {
              "id": "IW6Z60Z8",
              "name": "Htrol",
              "link": "/nghe-si/Htrol",
              "spotlight": false,
              "alias": "Htrol",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/2/0/01205ab1d7c3b6f684e93956edc219b5.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9BFF9",
              "totalFollow": 24478
            }
          ],
          "artistsNames": "Đinh Tùng Huy, Htrol"
        },
        "distributor": "Đinh Tùng Huy",
        "indicators": [
          
        ],
        "radioId": 1286786667,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6A9F99D",
        "title": "Khúc Vương Tình (Sinkra x Lee Ken Remix)",
        "alias": "Khuc-Vuong-Tinh-Sinkra-x-Lee-Ken-Remix-Can-Vinh-Lee-Ken",
        "isOffical": true,
        "username": "",
        "artistsNames": "Cần Vinh, Lee Ken",
        "artists": [
          {
            "id": "IW7ZBBDI",
            "name": "Cần Vinh",
            "link": "/nghe-si/Can-Vinh",
            "spotlight": false,
            "alias": "Can-Vinh",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/7/2/0/a720b843714e86c71b0bea273e0e0b3c.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/7/2/0/a720b843714e86c71b0bea273e0e0b3c.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "68EOUC6O"
          },
          {
            "id": "IW6A7CED",
            "name": "Lee Ken",
            "link": "/Lee-Ken",
            "spotlight": false,
            "alias": "Lee-Ken",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "67DDBW9C"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/banner/7/b/0/6/7b06f1dd300eb71309dfe8a4520d8d26.jpg",
        "link": "/bai-hat/Khuc-Vuong-Tinh-Sinkra-x-Lee-Ken-Remix-Can-Vinh-Lee-Ken/Z6A9F99D.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/7/b/0/6/7b06f1dd300eb71309dfe8a4520d8d26.jpg",
        "duration": 255,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1683774600,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6BAACEW8",
          "title": "Khúc Vương Tình (Sinkra x Lee Ken Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/a/e/5/c/ae5c2eeccd5f92242e4f50e6d4bbd16b.jpg",
          "isoffical": true,
          "link": "/album/Khuc-Vuong-Tinh-Sinkra-x-Lee-Ken-Remix-Single-Can-Vinh-Lee-Ken/6BAACEW8.html",
          "isIndie": false,
          "releaseDate": "11/05/2023",
          "sortDescription": "",
          "releasedAt": 1683774600000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW7ZBBDI",
              "name": "Cần Vinh",
              "link": "/nghe-si/Can-Vinh",
              "spotlight": false,
              "alias": "Can-Vinh",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/7/2/0/a720b843714e86c71b0bea273e0e0b3c.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/7/2/0/a720b843714e86c71b0bea273e0e0b3c.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "68EOUC6O",
              "totalFollow": 1997
            },
            {
              "id": "IW6A7CED",
              "name": "Lee Ken",
              "link": "/Lee-Ken",
              "spotlight": false,
              "alias": "Lee-Ken",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "67DDBW9C",
              "totalFollow": 28458
            }
          ],
          "artistsNames": "Cần Vinh, Lee Ken"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z66W8CAI",
        "title": "Quả Phụ Tướng (SinKra Remix)",
        "alias": "Qua-Phu-Tuong-SinKra-Remix-Dunghoangpham-SinKra",
        "isOffical": true,
        "username": "",
        "artistsNames": "Dunghoangpham, SinKra",
        "artists": [
          {
            "id": "IW76EDEC",
            "name": "Dunghoangpham",
            "link": "/nghe-si/Dunghoangpham",
            "spotlight": false,
            "alias": "Dunghoangpham",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6ABFC9AO"
          },
          {
            "id": "IW7887DC",
            "name": "SinKra",
            "link": "/nghe-si/SinKra",
            "spotlight": false,
            "alias": "SinKra",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/2/6/d/026da26fd269000cb8675752bdb01794.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/2/6/d/026da26fd269000cb8675752bdb01794.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6BBWD78D"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/4/b/8/54b8bc87ad59ae3afdd8ef5ad22274cd.jpg",
        "link": "/bai-hat/Qua-Phu-Tuong-SinKra-Remix-Dunghoangpham-SinKra/Z66W8CAI.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/4/b/8/54b8bc87ad59ae3afdd8ef5ad22274cd.jpg",
        "duration": 184,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1674234000,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6B8Z90AZ",
          "title": "Quả Phụ Tướng (SinKra Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/4/b/8/54b8bc87ad59ae3afdd8ef5ad22274cd.jpg",
          "isoffical": true,
          "link": "/album/Qua-Phu-Tuong-SinKra-Remix-Single-Dunghoangpham-SinKra/6B8Z90AZ.html",
          "isIndie": false,
          "releaseDate": "21/01/2023",
          "sortDescription": "",
          "releasedAt": 1674234000000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW76EDEC",
              "name": "Dunghoangpham",
              "link": "/nghe-si/Dunghoangpham",
              "spotlight": false,
              "alias": "Dunghoangpham",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6ABFC9AO",
              "totalFollow": 31460
            },
            {
              "id": "IW7887DC",
              "name": "SinKra",
              "link": "/nghe-si/SinKra",
              "spotlight": false,
              "alias": "SinKra",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/2/6/d/026da26fd269000cb8675752bdb01794.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/2/6/d/026da26fd269000cb8675752bdb01794.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6BBWD78D",
              "totalFollow": 442
            }
          ],
          "artistsNames": "Dunghoangpham, SinKra"
        },
        "distributor": "VIEENT Music",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZUOZ0OFA",
        "title": "Rượu Đầy Tràn Ly (K-ICM Remix)",
        "alias": "Ruou-Day-Tran-Ly-K-ICM-Remix-DJ-KUTI-RYO-K-ICM",
        "isOffical": true,
        "username": "",
        "artistsNames": "DJ KUTI, RYO, K-ICM",
        "artists": [
          {
            "id": "IW6FAICC",
            "name": "DJ KUTI",
            "link": "/nghe-si/DJ-KUTI",
            "spotlight": false,
            "alias": "DJ-KUTI",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/2/3/5/52352b59a8864b2d5218f7d177b0dfec.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/2/3/5/52352b59a8864b2d5218f7d177b0dfec.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "686WZUUE"
          },
          {
            "id": "IW67C8OA",
            "name": "RYO",
            "link": "/nghe-si/RYO-Nguyen",
            "spotlight": false,
            "alias": "RYO-Nguyen",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/2/4/e/224e0347e9e97a78cef2a92c5f6c7397.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/2/4/e/224e0347e9e97a78cef2a92c5f6c7397.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9CUD6"
          },
          {
            "id": "IWZFFOWB",
            "name": "K-ICM",
            "link": "/K-ICM",
            "spotlight": false,
            "alias": "K-ICM",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/e/a/4ceac8b6c213bcaf2841f5afa0709beb.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/e/a/4ceac8b6c213bcaf2841f5afa0709beb.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZODE97IC"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/6/2/2/7622a12485df74d93a0af904654ce490.jpg",
        "link": "/bai-hat/Ruou-Day-Tran-Ly-K-ICM-Remix-DJ-KUTI-RYO-K-ICM/ZUOZ0OFA.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/6/2/2/7622a12485df74d93a0af904654ce490.jpg",
        "duration": 201,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1627390800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "68CAAZAW",
          "title": "Rượu Đầy Tràn Ly (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/2/8/b/b/28bbdade3b1872dcf941f3218ba83dbb.jpg",
          "isoffical": true,
          "link": "/album/Ruou-Day-Tran-Ly-Single-DJ-KUTI-RYO/68CAAZAW.html",
          "isIndie": false,
          "releaseDate": "25/07/2021",
          "sortDescription": "",
          "releasedAt": 1627146000000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6FAICC",
              "name": "DJ KUTI",
              "link": "/nghe-si/DJ-KUTI",
              "spotlight": false,
              "alias": "DJ-KUTI",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/2/3/5/52352b59a8864b2d5218f7d177b0dfec.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/2/3/5/52352b59a8864b2d5218f7d177b0dfec.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "686WZUUE",
              "totalFollow": 490
            },
            {
              "id": "IW67C8OA",
              "name": "RYO",
              "link": "/nghe-si/RYO-Nguyen",
              "spotlight": false,
              "alias": "RYO-Nguyen",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/2/4/e/224e0347e9e97a78cef2a92c5f6c7397.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/2/4/e/224e0347e9e97a78cef2a92c5f6c7397.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9CUD6",
              "totalFollow": 4215
            }
          ],
          "artistsNames": "DJ KUTI, RYO"
        },
        "distributor": "ICM Entertainment",
        "indicators": [
          
        ],
        "radioId": 1460645331,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6BCCF9W",
        "title": "Cô Đơn Dành Cho Ai (Remix)",
        "alias": "Co-Don-Danh-Cho-Ai-Remix-Lee-Ken-Nal",
        "isOffical": true,
        "username": "",
        "artistsNames": "Lee Ken, Nal",
        "artists": [
          {
            "id": "IW6A7CED",
            "name": "Lee Ken",
            "link": "/Lee-Ken",
            "spotlight": false,
            "alias": "Lee-Ken",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "67DDBW9C"
          },
          {
            "id": "IW6A7CEE",
            "name": "Nal",
            "link": "/Nal",
            "spotlight": false,
            "alias": "Nal",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/9/f/0/29f036bcab12ef4e01869cd393fa9b67.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/9/f/0/29f036bcab12ef4e01869cd393fa9b67.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "67DDBWBE"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/5/c/c/d5cc961fdf1fd6ab8b082c3f2ba2942c.jpg",
        "link": "/bai-hat/Co-Don-Danh-Cho-Ai-Remix-Lee-Ken-Nal/Z6BCCF9W.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/5/c/c/d5cc961fdf1fd6ab8b082c3f2ba2942c.jpg",
        "duration": 301,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1687162500,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "SBB6C6AD",
          "title": "Cô Đơn Dành Cho Ai (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/5/c/c/d5cc961fdf1fd6ab8b082c3f2ba2942c.jpg",
          "isoffical": true,
          "link": "/album/Co-Don-Danh-Cho-Ai-Remix-Single-Lee-Ken-Nal/SBB6C6AD.html",
          "isIndie": false,
          "releaseDate": "19/06/2023",
          "sortDescription": "",
          "releasedAt": 1687162500000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW6A7CED",
              "name": "Lee Ken",
              "link": "/Lee-Ken",
              "spotlight": false,
              "alias": "Lee-Ken",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/a/a/1/aaa1fb6c9169545b508120af9b923b18.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "67DDBW9C",
              "totalFollow": 28458
            },
            {
              "id": "IW6A7CEE",
              "name": "Nal",
              "link": "/Nal",
              "spotlight": false,
              "alias": "Nal",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/9/f/0/29f036bcab12ef4e01869cd393fa9b67.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/9/f/0/29f036bcab12ef4e01869cd393fa9b67.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "67DDBWBE",
              "totalFollow": 116965
            }
          ],
          "artistsNames": "Lee Ken, Nal"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZW70EI6I",
        "title": "Quên Người Đã Quá Yêu (EDM Version)",
        "alias": "Quen-Nguoi-Da-Qua-Yeu-EDM-Version-Ha-Duy-Thai",
        "isOffical": true,
        "username": "mp3",
        "artistsNames": "Hà Duy Thái",
        "artists": [
          {
            "id": "IWZAWOAB",
            "name": "Hà Duy Thái",
            "link": "/nghe-si/Ha-Duy-Thai",
            "spotlight": false,
            "alias": "Ha-Duy-Thai",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/79e6c580bc7e3225919543b542a36e6c_1430102600.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/79e6c580bc7e3225919543b542a36e6c_1430102600.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "ZOE0ODU0"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/e/7/e72ecb0c6710f4a1df3cecedf0dcfcf3_1430102667.jpg",
        "link": "/bai-hat/Quen-Nguoi-Da-Qua-Yeu-EDM-Version-Ha-Duy-Thai/ZW70EI6I.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/covers/e/7/e72ecb0c6710f4a1df3cecedf0dcfcf3_1430102667.jpg",
        "duration": 234,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 0,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "ZWZBDBAC",
          "title": "Kí Ức Chỉ Là Quá Khứ",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/covers/e/7/e72ecb0c6710f4a1df3cecedf0dcfcf3_1430102667.jpg",
          "isoffical": true,
          "link": "/album/Ki-Uc-Chi-La-Qua-Khu-Ha-Duy-Thai/ZWZBDBAC.html",
          "isIndie": false,
          "releaseDate": "2015",
          "sortDescription": "Sự trở lại của album “ Kí Ức Chỉ Là Quá Khứ “ mong rằng sẽ đem lại những gì hay nhất những gì tốt đẹp nhất !!! mà mọi người hâm mộ đã yêu mến cái tên Hà Duy Thái trong thời gian qua với ca khúc “ Quên Người Đã Quá Yêu “\r\n\r\nAlbum lần này cũng là sự tiếp nối của những giai điệu mượt mà ướt át nhưng không thiếu phần cuốn hút mà thời gian qua các bạn đã yêu mến những giai điệu như vậy\r\n\r\nNgoài ca khúc chủ đề của Album ra các bạn sẽ được nghe một phong cách mới của những ca khúc trước đây mà Thái đã phát hành.\r\n\r\nMong rằng sản phẩm lần này lại được các bạn đón nhận yêu mến và sẽ ngày càng đến gần với công chúng hơn nữa. \r\n",
          "releasedAt": 1451494800000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZAWOAB",
              "name": "Hà Duy Thái",
              "link": "/nghe-si/Ha-Duy-Thai",
              "spotlight": false,
              "alias": "Ha-Duy-Thai",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/79e6c580bc7e3225919543b542a36e6c_1430102600.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/79e6c580bc7e3225919543b542a36e6c_1430102600.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "ZOE0ODU0",
              "totalFollow": 6489
            }
          ],
          "artistsNames": "Hà Duy Thái"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1284949308,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "ZWAFEUF7",
        "title": "Mình Đừng Thương Nhau (Remix)",
        "alias": "Minh-Dung-Thuong-Nhau-Remix-Vo-Kieu-Van",
        "isOffical": true,
        "username": "",
        "artistsNames": "Võ Kiều Vân",
        "artists": [
          {
            "id": "IWZAWBCZ",
            "name": "Võ Kiều Vân",
            "link": "/Vo-Kieu-Van",
            "spotlight": false,
            "alias": "Vo-Kieu-Van",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/2/1290b7ed82ecda7161439ff65c02fa50_1511493608.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/2/1290b7ed82ecda7161439ff65c02fa50_1511493608.jpg",
            "isOA": true,
            "isOABrand": false,
            "playlistId": "ZO6989O6"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/9/3/f/c93f1e16748ab132bff623db86898001.jpg",
        "link": "/bai-hat/Minh-Dung-Thuong-Nhau-Remix-Vo-Kieu-Van/ZWAFEUF7.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/9/3/f/c93f1e16748ab132bff623db86898001.jpg",
        "duration": 230,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1575971940,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "ZAC6D6OU",
          "title": "Mình Đừng Thương Nhau (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/c/9/3/f/c93f1e16748ab132bff623db86898001.jpg",
          "isoffical": true,
          "link": "/album/Minh-Dung-Thuong-Nhau-Single-Vo-Kieu-Van/ZAC6D6OU.html",
          "isIndie": false,
          "releaseDate": "2019",
          "sortDescription": "",
          "releasedAt": 1577725200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCD"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IWZAWBCZ",
              "name": "Võ Kiều Vân",
              "link": "/Vo-Kieu-Van",
              "spotlight": false,
              "alias": "Vo-Kieu-Van",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/2/1290b7ed82ecda7161439ff65c02fa50_1511493608.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/2/1290b7ed82ecda7161439ff65c02fa50_1511493608.jpg",
              "isOA": true,
              "isOABrand": false,
              "playlistId": "ZO6989O6",
              "totalFollow": 93303
            }
          ],
          "artistsNames": "Võ Kiều Vân"
        },
        "distributor": "MIXUS",
        "indicators": [
          
        ],
        "radioId": 1286805046,
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6C86F0F",
        "title": "Mối Tình Chiều Mưa Bay (Qinn Remix)",
        "alias": "Moi-Tinh-Chieu-Mua-Bay-Qinn-Remix-Qinn-Media-Lam-Chan-Hai",
        "isOffical": true,
        "username": "",
        "artistsNames": "Qinn Media, Lâm Chấn Hải",
        "artists": [
          {
            "id": "IW8ZUU69",
            "name": "Qinn Media",
            "link": "/nghe-si/Qinn-Media-IW8ZUU69",
            "spotlight": false,
            "alias": "Qinn-Media-IW8ZUU69",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6BBWCE7A"
          },
          {
            "id": "IWZ96Z0U",
            "name": "Lâm Chấn Hải",
            "link": "/nghe-si/Lam-Chan-Hai",
            "spotlight": false,
            "alias": "Lam-Chan-Hai",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/a/2/5/ba25230f7794cdeec8c5d6764eb2e865.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/a/2/5/ba25230f7794cdeec8c5d6764eb2e865.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "ZUO88EC7"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/2/1/6/0216417c3cd35ab78726d42da7891548.jpg",
        "link": "/bai-hat/Moi-Tinh-Chieu-Mua-Bay-Qinn-Remix-Qinn-Media-Lam-Chan-Hai/Z6C86F0F.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/2/1/6/0216417c3cd35ab78726d42da7891548.jpg",
        "duration": 240,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1689181200,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6BBD8WAO",
          "title": "Mối Tình Chiều Mưa Bay (Qinn Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/2/1/6/0216417c3cd35ab78726d42da7891548.jpg",
          "isoffical": true,
          "link": "/album/Moi-Tinh-Chieu-Mua-Bay-Qinn-Remix-Single-Qinn-Media-Lam-Chan-Hai/6BBD8WAO.html",
          "isIndie": false,
          "releaseDate": "13/07/2023",
          "sortDescription": "",
          "releasedAt": 1689181200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW8ZUU69",
              "name": "Qinn Media",
              "link": "/nghe-si/Qinn-Media-IW8ZUU69",
              "spotlight": false,
              "alias": "Qinn-Media-IW8ZUU69",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6BBWCE7A",
              "totalFollow": 1186
            },
            {
              "id": "IWZ96Z0U",
              "name": "Lâm Chấn Hải",
              "link": "/nghe-si/Lam-Chan-Hai",
              "spotlight": false,
              "alias": "Lam-Chan-Hai",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/a/2/5/ba25230f7794cdeec8c5d6764eb2e865.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/a/2/5/ba25230f7794cdeec8c5d6764eb2e865.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "ZUO88EC7",
              "totalFollow": 7478
            }
          ],
          "artistsNames": "Qinn Media, Lâm Chấn Hải"
        },
        "distributor": "VIEENT Music",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6E9F7C6",
        "title": "Về Bên Anh EDM (SinKra Remix)",
        "alias": "Ve-Ben-Anh-EDM-SinKra-Remix-Jena",
        "isOffical": true,
        "username": "",
        "artistsNames": "Jena",
        "artists": [
          {
            "id": "IW76960B",
            "name": "Jena",
            "link": "/nghe-si/Jena",
            "spotlight": false,
            "alias": "Jena",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/4/c/7/d4c745d36b8d6d7ed87fa0e20729453c.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/4/c/7/d4c745d36b8d6d7ed87fa0e20729453c.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "69BI9BO7"
          }
        ],
        "isWorldWide": false,
        "previewInfo": {
          "startTime": 0,
          "endTime": 60
        },
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/d/f/7/3df7653f0e87c2f5010483c43002640a.jpg",
        "link": "/bai-hat/Ve-Ben-Anh-EDM-SinKra-Remix-Jena/Z6E9F7C6.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/d/f/7/3df7653f0e87c2f5010483c43002640a.jpg",
        "duration": 233,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1694278800,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6BCDA7IC",
          "title": "Về Bên Anh EDM (SinKra Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/3/d/f/7/3df7653f0e87c2f5010483c43002640a.jpg",
          "isoffical": true,
          "link": "/album/Ve-Ben-Anh-EDM-SinKra-Remix-Single-Jena/6BCDA7IC.html",
          "isIndie": false,
          "releaseDate": "10/09/2023",
          "sortDescription": "",
          "releasedAt": 1694278800000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW76960B",
              "name": "Jena",
              "link": "/nghe-si/Jena",
              "spotlight": false,
              "alias": "Jena",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/4/c/7/d4c745d36b8d6d7ed87fa0e20729453c.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/4/c/7/d4c745d36b8d6d7ed87fa0e20729453c.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "69BI9BO7",
              "totalFollow": 6531
            }
          ],
          "artistsNames": "Jena"
        },
        "distributor": "VIEENT Music",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z6AB77DO",
        "title": "Nhường Hạnh Phúc Cho Anh (Qinn Remix)",
        "alias": "Nhuong-Hanh-Phuc-Cho-Anh-Qinn-Remix-Qinn-Media-Ngoc-KayLa",
        "isOffical": true,
        "username": "",
        "artistsNames": "Qinn Media, Ngọc KayLa",
        "artists": [
          {
            "id": "IW8ZUU69",
            "name": "Qinn Media",
            "link": "/nghe-si/Qinn-Media-IW8ZUU69",
            "spotlight": false,
            "alias": "Qinn-Media-IW8ZUU69",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6BBWCE7A"
          },
          {
            "id": "IWZAZOFA",
            "name": "Ngọc KayLa",
            "link": "/nghe-si/Ngoc-KayLa",
            "spotlight": false,
            "alias": "Ngoc-KayLa",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/c/4/3/6c434c389f70a9613f8042f0c5b6208b.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/c/4/3/6c434c389f70a9613f8042f0c5b6208b.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6UW9AE8U"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/6/0/9/d609a9f052a25b23d90290faa5f4af81.jpg",
        "link": "/bai-hat/Nhuong-Hanh-Phuc-Cho-Anh-Qinn-Remix-Qinn-Media-Ngoc-KayLa/Z6AB77DO.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/6/0/9/d609a9f052a25b23d90290faa5f4af81.jpg",
        "duration": 358,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1683651600,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6BABW6AB",
          "title": "Nhường Hạnh Phúc Cho Anh (Qinn Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/6/0/9/d609a9f052a25b23d90290faa5f4af81.jpg",
          "isoffical": true,
          "link": "/album/Nhuong-Hanh-Phuc-Cho-Anh-Qinn-Remix-Single-Qinn-Media-Ngoc-KayLa/6BABW6AB.html",
          "isIndie": false,
          "releaseDate": "10/05/2023",
          "sortDescription": "",
          "releasedAt": 1683651600000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW8ZUU69",
              "name": "Qinn Media",
              "link": "/nghe-si/Qinn-Media-IW8ZUU69",
              "spotlight": false,
              "alias": "Qinn-Media-IW8ZUU69",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/4/b/1f4be0a68289bff0c6b772723227957e.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6BBWCE7A",
              "totalFollow": 1186
            },
            {
              "id": "IWZAZOFA",
              "name": "Ngọc KayLa",
              "link": "/nghe-si/Ngoc-KayLa",
              "spotlight": false,
              "alias": "Ngoc-KayLa",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/c/4/3/6c434c389f70a9613f8042f0c5b6208b.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/c/4/3/6c434c389f70a9613f8042f0c5b6208b.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6UW9AE8U",
              "totalFollow": 1293
            }
          ],
          "artistsNames": "Qinn Media, Ngọc KayLa"
        },
        "distributor": "VIEENT Music",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      },
      {
        "encodeId": "Z69OIDO6",
        "title": "Ba Kiếp Tình Một Kiếp Duyên (Remix)",
        "alias": "Ba-Kiep-Tinh-Mot-Kiep-Duyen-Remix-20X-Remix-Lam-Tuan",
        "isOffical": true,
        "username": "",
        "artistsNames": "20X Remix, Lâm Tuấn",
        "artists": [
          {
            "id": "IW8OABB8",
            "name": "20X Remix",
            "link": "/nghe-si/20X-Remix.IW8OABB8",
            "spotlight": false,
            "alias": "20X-Remix.IW8OABB8",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
            "isOA": false,
            "isOABrand": false
          },
          {
            "id": "IW8O6EAW",
            "name": "Lâm Tuấn",
            "link": "/nghe-si/Lam-Tuan",
            "spotlight": false,
            "alias": "Lam-Tuan",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/3/3/6/83362763ada6181e1d4637bf273c5edc.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/3/3/6/83362763ada6181e1d4637bf273c5edc.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "6B9CCF6O"
          }
        ],
        "isWorldWide": true,
        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/c/8/f/9c8f6db8a73e570405d8fa4551782f68.jpg",
        "link": "/bai-hat/Ba-Kiep-Tinh-Mot-Kiep-Duyen-Remix-20X-Remix-Lam-Tuan/Z69OIDO6.html",
        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/c/8/f/9c8f6db8a73e570405d8fa4551782f68.jpg",
        "duration": 298,
        "zingChoice": false,
        "isPrivate": false,
        "preRelease": false,
        "releaseDate": 1680541200,
        "genreIds": [
          "IWZ9Z08I",
          "IWZ9Z088",
          "IWZ97FCE"
        ],
        "album": {
          "encodeId": "6B9E7U6E",
          "title": "Ba Kiếp Tình Một Kiếp Duyên (Remix) (Single)",
          "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/c/8/f/9c8f6db8a73e570405d8fa4551782f68.jpg",
          "isoffical": true,
          "link": "/album/Ba-Kiep-Tinh-Mot-Kiep-Duyen-Remix-Single-20X-Remix-Lam-Tuan/6B9E7U6E.html",
          "isIndie": false,
          "releaseDate": "04/04/2023",
          "sortDescription": "",
          "releasedAt": 1680541200000,
          "genreIds": [
            "IWZ9Z08I",
            "IWZ9Z088",
            "IWZ97FCE"
          ],
          "PR": false,
          "artists": [
            {
              "id": "IW8OABB8",
              "name": "20X Remix",
              "link": "/nghe-si/20X-Remix.IW8OABB8",
              "spotlight": false,
              "alias": "20X-Remix.IW8OABB8",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
              "isOA": false,
              "isOABrand": false,
              "totalFollow": 642
            },
            {
              "id": "IW8O6EAW",
              "name": "Lâm Tuấn",
              "link": "/nghe-si/Lam-Tuan",
              "spotlight": false,
              "alias": "Lam-Tuan",
              "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/3/3/6/83362763ada6181e1d4637bf273c5edc.jpg",
              "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/3/3/6/83362763ada6181e1d4637bf273c5edc.jpg",
              "isOA": false,
              "isOABrand": false,
              "playlistId": "6B9CCF6O",
              "totalFollow": 611
            }
          ],
          "artistsNames": "20X Remix, Lâm Tuấn"
        },
        "distributor": "VIEENT Music",
        "indicators": [
          
        ],
        "isIndie": false,
        "streamingStatus": 1,
        "allowAudioAds": true,
        "hasLyric": true
      }
    ],
    "total": 60,
    "simData": {
      "v": 20328
    }
  },
  "timestamp": 1712698587985
}