import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4) // 直接使用filter來控制顯示數量(只顯示4筆)
        .map((
          { id, ...otherItemProps } // 但這些array methond 在此組件被rerender時重複被執行，有效能疑慮
        ) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
