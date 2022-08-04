import React from 'react'

const ArchiveCatatan=({id,onArchive,archived})=>{
return <button className='contact-item_delete' onClick={()=>{onArchive(id)}}>{ archived  ? ("M") : ("Archived")}</button>
}

export default ArchiveCatatan;