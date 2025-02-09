# 永雅電工株式会社

シンプルでプロフェッショナルな電気工事会社のウェブサイトです。

## 開発手順

1. 共通コンポーネント作成
   - Header
   - Footer
   - Navigation

2. ページ作成
   - ホーム (/)
   - 会社概要 (/about)
   - サービス内容 (/services)
   - お問い合わせ (/contact)

## プロジェクト構造

ega-denko/
├── src/
│   ├── app/
│   │   ├── page.tsx          # トップページ
│   │   ├── layout.tsx        # 共通レイアウト
│   │   ├── globals.css       # グローバルスタイル
│   │   ├── about/
│   │   │   └── page.tsx      # 会社概要ページ
│   │   ├── services/
│   │   │   └── page.tsx      # サービス内容ページ
│   │   └── contact/
│   │       └── page.tsx      # お問い合わせページ
│   ├── components/
│   │   ├── Header.tsx        # ヘッダーコンポーネント
│   │   ├── Footer.tsx        # フッターコンポーネント
│   │   └── ui/              # 共通UIコンポーネント
│   └── lib/                 # ユーティリティ関数など
├── public/
│   └── images/             # 画像ファイル
├── package.json
├── tailwind.config.js
└── tsconfig.json 