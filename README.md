# 環境構築
### docker-compose up -d
これでdockerコンテナが立ち上がります。
[http://localhost:8090](http://localhost:8090)でトップページアクセスできます（現在WEBは使っていないのでLaravelデフォルトのトップページが表示されます）。
dockerfileを修正したときは
```
docker-compose up -d --build
```
を実行する

### docker-compose exec php /bin/bash
これでコンテナにログインできます。PHPコンテナ内でcomposerが実行可能。

### .env
[浜田の例ファイル](https://drive.google.com/file/d/1zwCep6jRCLXJAPB8yzjz54UhaVcYRSmf/view?usp=sharing)

Nearlyの開発サーバーに接続されます。基本的にそのまま使えると思います。
データベース名はid_posにしています。
