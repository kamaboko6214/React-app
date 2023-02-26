/// <reference types="react-scripts" />

// 型定義 jsライブラリ使用のため
declare module 'react-anchor-link-smooth-scroll' {
    interface Props {
      href: string;
      offset?: function | number;
      onClick?: (e: Event) => void;
      [key: string]: any;
    }
  
    export default class AnchorLink extends React.Component<Props> {}
  }