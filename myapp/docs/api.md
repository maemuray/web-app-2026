# API仕様

## POST /api/lunches
説明：現在地の位置情報を送信し、近くの飯屋を検索する

リクエスト：
{"latitude": 18.0817,"longitude": 25.0426}

レスポンス：
{"message": "位置情報を受け取りました"}

## GET /api/lunches
説明：近くの飯屋の一覧を返す

レスポンス：
[
  {
    "id": 1,
    "name": "スツロー",
    "genre": "寿司",
    "distance": "200m"
  },
  {
    "id": 2,
    "name": "紫麺",
    "genre": "ラーメン",
    "distance": "500m"
  }
]