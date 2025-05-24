import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from './const';
import styles from './ComponentLib.module.css';

const TextComponent = () => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.TEXT,
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
  }));

  return (
    <div ref={drag as any} className={styles["text-component"]} style={{ opacity: isDragging ? 0.3: 1}}>
      文字组件
    </div>
  );
}
const ComponentLib = () => {
  return (
    <div className={styles['component-lib-panel']}>
       <div className={styles["component-list"]}>
       <TextComponent />
      </div>    
    </div>
  )
}

export default ComponentLib;