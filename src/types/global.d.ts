declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.less' {
  const content: { [key: string]: any };
  export default content;
}
