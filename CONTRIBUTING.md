# Contribution Guide

## 目次

## 準備

### 必要なツール

- [git](https://git-scm.com/downloads)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [act](https://github.com/nektos/act)

### 開発準備

1. プロジェクトをクローン
   ```sh
   git clone https://github.com/system-denso-kogyo/homepage.git
   ```
1. クローンしたプロジェクトのディレクトリへ移動
   ```sh
   cd homepage
   ```
1. 依存関係のインストール
   ```sh
   yarn install
   ```
1. 実行
   ```sh
   yarn dev
   ```
   http://localhost:3000 でアクセス

## 開発

### ディレクトリ構造

```
.
├── components/     // コンポーネントファイルを配置する
  ├── elements/     // コンポーネントを構成する汎用的な要素を配置する
  └── layout/layout.tsx     // ページのレイアウトを定義するテンプレート
├── node_modules/   // pakcage.jsonの依存関係がインストールされる。バージョン管理は行わない
├── pages/          // ページファイルを配置する。
├── public/         // 画像などの静的ファイルを配置する
├── styles/         // CSSファイルを配置する
├── util/           // 共通的に使用する処理を配置する
├── next-env.d.ts   // 型定義ファイルへの参照
├── package.json    // 依存関係の定義
├── tsconfig.json   // TSのコンパイラオプションを定義する
├── CONTRIBUTING.md // 開発に関するガイドライン
├── README.md       // プロジェクトの簡単な説明
└── yarn.lock       // 依存関係のバージョンを固定するためのファイル
```

### ページについて

- 全てのページは`pages/`に置く必要がある
- ページは`layout.tsx`をテンプレートとして使用する
- next.js は`pages/`配下のファイルを元にルーティングを自動的に関連付けられる
- ページの識別子は拡張子を除いたファイル名であり、大文字小文字が区別される

#### ページの作成

1. `pages/`配下に`小文字ページ名.tsx`ファイルを作成する
1. ページを TSX（TypeScript の JSX）形式で記述する
1. ページは`components/layout/layout.tsx`で定義されている`<Layout></Layout>`でラップする
1. 必要に応じて SSG のための処理を記述する

   ```ts
   import { API } from "../util/api";
   import { CMSResult } from "../util/cmsResult";

   interface Person extends CMSResult {
     name: string;
   }

   export const PersonPage: React.FC<Person> = ({ name }) => (
     <Layout>
       <span>{name}</span>
     </Layout>
   );

   /**
    * SSGを行うための関数
    * Next.jsは、この関数がページに存在する場合に、ビルド時に自動的にレンダリングを行う
    * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
    *
    * @param context
    * @returns
    */
   export const getStaticProps: GetStaticProps = async (
     context: GetStaticPropsContext
   ) => {
     // APIからデータ取得
     const data = await API.get<Person>("...");

     // ページにデータを連携する
     return {
       props: data,
     };
   };
   ```

### CSS について

- CSS の選択肢は以下の二つ
  - 通常の CSS ファイル、`styles`配下に配置する
  - [Emotion](https://emotion.sh/docs/introduction)という`CSSinJS`ライブラリの

#### CSS の場合

- コンポーネント単位のスタイリングを行うには、`コンポーネント名.module.css`というファイル名で作成する
  https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css

#### Emotion の場合

- `CSSinJS`は、JavaScript 内に CSS を記述する
- `Emotion`は` css``  `形式のタグ付きテンプレートを提供おり、このテンプレート中に CSS を記述する
  https://emotion.sh/docs/introduction

### pages/\_app.tsx について

- Next.js はすべてのページにおいて、ページを初期化するために App コンポーネントを使用している
- pages/\_app.tsx ファイルで App コンポーネントをオーバーライドすることで、ページの初期化をコントロールできる
- 全ページ共通の処理は`_app.tsx`に書く

## CI/CD

- **原則手動デプロイは行わない**
- CI/CD は GitHub Actions で実施する

### GitHub Actions

- main に push したタイミングで作動
- デプロイ先は J-MOTTO でホスティングしている Web サーバー
  - 詳細な接続先は Environment secrets に設定

### 手動でデプロイする際の手順

1. ビルド&静的 HTML のエクスポート
   ```sh
   yarn build
   ```
1. （out ディレクトリに静的バージョンのアプリが作成される）
1. out ディレクトリへ移動
   ```sh
   cd out
   ```
1. FTP を使用し、out 配下のファイルを J-MOTTO でホスティングしている Web サーバーに転送

### act を使用したテスト方法

- テストの実行
  ```sh
  # ※ [-n (dryrun)] を外してしまうと実際に動作してしまい、本番環境に影響がでるので理解して実施すること
  ./bin/act -n
  ```
- Secrets を設定
  ```sh
  # ※ [-n (dryrun)] を外してしまうと実際に動作してしまい、本番環境に影響がでるので理解して実施すること
  ./bin/act -n -s FTP_SERVER=103.37.114.67 -s FTP_USER=sdk-co -s FTP_PASSWORD=?qO5ba94
  ```
