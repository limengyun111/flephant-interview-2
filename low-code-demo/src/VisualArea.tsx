import React from 'react';
import { useDrop } from 'react-dnd';
import { COMPONENT_TYPE, ElementSchema } from './const';
import styles from './VisualArea.module.css';

interface Props {
  allVisualData: ElementSchema[];
  setAllVisualData: Function;
  onSelectIdChange: Function;
}

const VisualArea = (props: Props) => {
  const { allVisualData, onSelectIdChange, setAllVisualData } = props;
  const [, drop] = useDrop(() => ({
    accept: COMPONENT_TYPE.TEXT,
    drop: (_, monitor) => {
      const { x, y } = monitor.getClientOffset() as any;
      const currentX = x - 310;
      const currentY = y - 20;
      const id = Date.now().toString();
      setAllVisualData([
        ...allVisualData,
        {
          id: `text-${id}`,
          type: 'text',
          data: '我是新建的文字',
          color: '#000000',
          size: '14px',
          width: '100px',
          height: '20px',
          left: `${currentX}px`,
          top: `${currentY}px`
        }
      ]);
    }
  }), [JSON.stringify(allVisualData)]);

  let output: any[] = [];

  const generateContent = () => {
    for (const item of allVisualData) {
      if (item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              onSelectIdChange(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              // width: item.width,
              // height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              cursor: 'pointer'
            }}
          >
            {item.data}
          </div>
        );
      }
    }

    return output;
  };
  return (
    <div className={styles["draw-panel"]} ref={drop as any}>
      {generateContent()}
    </div>
  )
}

export default VisualArea;