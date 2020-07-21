import React from 'react';
import {Link} from 'react-router-dom';

function RecordCard({record, handleDeleteRecord}){
    return(
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h1>{record.name}</h1>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Artist: </dt>
                    <dd>{record.artist}</dd>
                    <dd>{record.genre}</dd>
                </dl>
            </div>
            <div className="panel-footer">
                <Link className='btn btn-xs btn-warning' to={{ pathname: '/edit', state: {record} }}>EDIT</Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteRecord(record._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default RecordCard;