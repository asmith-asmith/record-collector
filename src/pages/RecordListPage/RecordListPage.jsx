import React from 'react';
import './RecordListPage.css';
import RecordCard from '../../components/RecordCard/RecordCard';

function RecordListPage(props){
    return(
        <>
            <h1>Record List</h1>
            <div className='RecordListPage-grid'>
                {props.records.map(record =>
                    <RecordCard
                        key={record._id}
                        record={record}
                        handleDeleteRecord={props.handleDeleteRecord}
                        handleUpdateRecord={props.handleUpdateRecord}
                    />
                )}
            </div>
        </>
    )
}

export default RecordListPage;