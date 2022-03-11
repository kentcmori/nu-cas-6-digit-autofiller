# NU-CAS 6-digit autofiiler by K.C.MORI

NU-CASにログインするときに必要な6桁のコードを自動生成・入力するChromeの拡張機能です。

(**NU-CAS** = Nagoya Univ. Central Authentification Service)


## デモ / DEMO
https://twitter.com/qastad/status/1502102011629555715

## 環境 / Environment
- Windows 10 or 11
- Google Chrome

## 免責事項 / Attention!
- JavaScript/Chrome Exntensions/OTP の知識が十分ある方の利用を想定しています。重大なセキュリティのリスクがありますので、それ以外の方は絶対に使わないてください。
- シードは平文で保管されていますが、変更をおすすめします。
- 本プログラムによるいかなる結果への責任を負いません。

### English

- This program is intended for use by those with sufficient knowledge of JavaScript/Chrome Exntensions/OTP. Please do not use this program if you are not familiar with these, as it can pose serious security risks.
- The seed (needed for generating 6-digit number) is stored in plain text, but I recommend you to change it.
- No responsibility is assumed for any consequences resulting from this program.

# インストール / Installation
### ①ダウンロード
### ②CASにログインした状態で以下を開き、認証シードをコピー
https://auth-mfa.nagoya-u.ac.jp/gauth-manager/ 

認証シードは大文字と数字の羅列です。(例:ADSF13~)  
スマホでもログイン可能なよう、**必ずQRコードを認証アプリ(Google Authentificatorなど)に登録してください。**(失敗するとロックアウトされます)  
登録したら「登録(Register)」をクリック。

### ③popup.jsを開き、認証シードを編集
関数totp内のyour seed部分(25行目)を②で取得した認証シードに置き換え  
**認証シードは厳重に扱ってください**

### ④Chromeを開き拡張機能を追加
Chrome://extensions を開き、右上からデベロッパーモードをONに  
左上の「パッケージ化されていない拡張機能を読み込む」からプログラムのフォルダーを選択し追加

### ⑤動作確認
NU-CASにログインし、6桁の番号の入力が求められる画面で拡張機能を起動(クリック)すると数字が自動入力され、ログイン処理が行われます。
必ず正常に動作することを確認してください。  

正常に動作しない場合は
- 認証シードを正しく入力できたか？
- 認証シードを正しく「登録(Register)」できたか？
- PCの時計は正確か？

を確認してください。

## ライセンス / License
Copyright (c) 2022 K.C.MORI  
Released under the MIT license
except citation  
https://opensource.org/licenses/mit-license.php
