import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import { connect } from 'react-redux'

const  Directory  = ({ sections }) => (
            <div className='directory-menu'>
                {
                 sections.map(({id, ...otheSctionProps }) => (
                    // <MenuItem key={id} title={title} imageUrl={imageUrl}  size={size} />
                    <MenuItem key={id} {...otheSctionProps} />
                    ))
                }
            </div>
        );

        const mapStateToProps = createStructuredSelector({
          sections: selectDirectorySections
        })
export default connect(mapStateToProps)(Directory);