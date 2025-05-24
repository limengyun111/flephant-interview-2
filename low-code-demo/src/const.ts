export enum COMPONENT_TYPE {
    TEXT = 'text',
    VIDEO = 'video',
    IMAGE = 'image',
    AUDIO = 'audio',
    CARD = 'card',
  }
  

  export interface ElementSchema {
      id: string,
      type: COMPONENT_TYPE,
      data: string,
      color: string,
      size: string,
      width?: string,
      height?: string,
      left?: string,
      top?: string
    
  }
