import React, { useState } from 'react';
import ComponentLib from './ComponentLib';
import VisualArea from './VisualArea';
import PropertyPanal from './PropertyPanal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './App.module.css';
import { ElementSchema } from './const';

function App() {
  const [allVisualData, setAllVisualData] = useState<ElementSchema[]>([]);

  const [selectedElementId, setSelectedElementId] = useState<string>('');
  const [selectdElementData, setSelectedElementData] = useState<ElementSchema>();

  const onSelectElementIdChange = (id: string) => {
    setSelectedElementId(id);
    const item = allVisualData.find((it: ElementSchema) => it.id === id);
    setSelectedElementData(item ? Object.assign({}, { ...item }) : undefined);
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.content}>
        <ComponentLib />
        <VisualArea
          allVisualData={allVisualData}
          setAllVisualData={setAllVisualData}
          onSelectIdChange={onSelectElementIdChange}
        />
        <PropertyPanal
          allVisualData={allVisualData}
          setAllVisualData={setAllVisualData}
          elementData={selectdElementData}
          elementId={selectedElementId}
        />
      </div>
    </DndProvider>
  )
}

export default App;
