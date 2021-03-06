# Contribution Guide

## 目次


## 準備
### 必要なツール
- [git](https://git-scm.com/downloads)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### 開発準備
1. プロジェクトをクローン
    ```
    git clone https://github.com/system-denso-kogyo/homepage.git
    ```
1. クローンしたプロジェクトのディレクトリへ移動
    ```
    cd homepage
    ```
1. 依存関係のインストール
    ```
    yarn install
    ```
1. 実行
    ```
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
- next.jsは`pages/`配下のファイルを元にルーティングを自動的に関連付けられる
- ページの識別子は拡張子を除いたファイル名であり、大文字小文字が区別される
#### ページの作成
1. `pages/`配下に`小文字ページ名.tsx`ファイルを作成する
1. ページをTSX（TypeScriptのJSX）形式で記述する
1. ページは`components/layout/layout.tsx`で定義されている`<Layout></Layout>`でラップする
1. 必要に応じてSSGのための処理を記述する
    ```ts
    import { API } from '../util/api';
    import {CMSResult} from '../util/cmsResult';

    interface Person extends CMSResult {
        name: string
    }

    export const PersonPage: React.FC<Person> = ({name}) => 
        <Layout>
            <span>{ name }</span>
        </Layout>

    /**
     * SSGを行うための関数
     * Next.jsは、この関数がページに存在する場合に、ビルド時に自動的にレンダリングを行う
     * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
     * 
     * @param context 
     * @returns 
     */
    export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
        // APIからデータ取得
        const data = await API.get<Person>('...');

        // ページにデータを連携する
        return {
            props: data
        };
    }
    ```

### CSSについて
- CSSの選択肢は以下の二つ
    - 通常のCSSファイル、`styles`配下に配置する
    - [Emotion](https://emotion.sh/docs/introduction)という`CSSinJS`ライブラリの

#### CSSの場合
- コンポーネント単位のスタイリングを行うには、`コンポーネント名.module.css`というファイル名で作成する
https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css

#### Emotionの場合
- `CSSinJS`は、JavaScript内にCSSを記述する
- `Emotion`は`css`` `形式のタグ付きテンプレートを提供おり、このテンプレート中にCSSを記述する
https://emotion.sh/docs/introduction


### pages/_app.tsxについて
- Next.jsはすべてのページにおいて、ページを初期化するためにAppコンポーネントを使用している
- pages/_app.tsxファイルでAppコンポーネントをオーバーライドすることで、ページの初期化をコントロールできる
- 全ページ共通の処理は`_app.tsx`に書く