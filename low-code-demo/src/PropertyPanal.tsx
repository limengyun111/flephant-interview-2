import React, { useState } from 'react';
import styles from './PropertyPanal.module.css';
import { ElementSchema } from './const';

interface Props {
  allVisualData: ElementSchema[];
  elementId: string;
  setAllVisualData: Function;
  elementData: ElementSchema | undefined;
}

const PropertyPanal = (props: Props) => {
  const { allVisualData, elementId, setAllVisualData, elementData } = props;
  const [changedPropertyData, setChangedPropertyData] = useState<ElementSchema>();

  const submitChangedData = () => {
    const changedData = allVisualData.map((item: ElementSchema) => {
      return item.id === elementId ? changedPropertyData : item;
    })
    setAllVisualData([...changedData]);
  };

  return (
      <div className={styles["property-panel"]}>
        { elementData ? <div>
          <div className={styles["text-config-item"]}>
          <div>文字内容:</div>
          <input
            defaultValue={elementData.data}
            key={JSON.stringify(elementData)}
            style={{ width: '50%', marginTop: 4 }}
            onChange={(e) => {
              setChangedPropertyData(Object.assign({}, { ...elementData }, { data: e.target.value }))
            }}

            type="text"
          ></input>
          </div>
         
          <div className={styles["text-config-item"]}>
            <div>文字大小:</div>
            <input
              style={{ width: '50%', marginTop: 4 }}
              defaultValue={elementData.size}
              key={JSON.stringify(elementData)}
              onChange={(e) => {
                setChangedPropertyData(Object.assign({}, { ...elementData }, { size: e.target.value }))
              }}
              type="text"
            ></input>
          </div>
          <div className={styles["text-config-item"]}>
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              style={{ width: '50%', marginTop: 4 }}
              key={JSON.stringify(elementData)}
              onChange={(e) => {
                setChangedPropertyData(Object.assign({}, { ...elementData }, { top: e.target.value }))
              }}
              type="text"
            ></input>
          </div>

          <button
            className={styles['submit-btn']}
            onClick={submitChangedData}
          >
            确认修改
          </button>
        </div>: <div className={styles['no-select-tip']}>未选中元素</div>}
       
      </div>

  )
}
export default PropertyPanal;