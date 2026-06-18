import { FC, SVGProps } from 'react';

declare global {
  type SVGComponent = FC<SVGProps<SVGSVGElement>>;

  declare module '*.svg' {
    const content: SVGComponent;
    export default content;
  }
}
