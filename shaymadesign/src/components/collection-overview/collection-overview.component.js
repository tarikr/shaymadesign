import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview  from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) =>  (
    <div className="collections-overview">
    {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
            }
    </div>
);

const mapStateProps = createStructuredSelector({
    collections: selectCollectionForPreview
})


export default connect(mapStateProps)(CollectionsOverview);