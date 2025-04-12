import React, { useState } from 'react'
const Folder = ({ explorer }) => {
    const [expand,setexpand]=useState(false)
    const [showInput, setShowInput]=useState({
        visible:false,
        isFolder:null

    })
    console.log(explorer)
    
    const handleNewFolder=(e,isFolder)=>{
        e.stopPropagation()
          setexpand(true)
        setShowInput({
            visible:true,
            isFolder,
        })
    }

    if (explorer.isFolder)
        return (
            <div style={{
                marginTop: "5px"
            }}>
                <div className='folder' onClick={()=>setexpand(true)}>
                    <span > 📁{explorer.name} </span>
                    <div >
                        <button style={{marginRight:"4px"}} 
                        onClick={(e)=>handleNewFolder(e,true)}
                        >folder +</button>
                        <button     onClick={(e)=>handleNewFolder(e,false)}> file +</button>
                    </div>
                </div>
                <div style={{display:expand?"block":"none", paddingLeft:"25px",marginTop:"4px"}}>
                    {
                        showInput.visible && (
                            <div className='inputContainer'>
                             <span>{showInput.isFolder?"📁":"📄"}</span>
                             <input  className='inputContainer__input' type="text"  onBlur={()=>setShowInput({...showInput,visible:false})} autoFocus/>
                            </div>
                        )
                    }
                    {explorer.items.map((item) => (
                        <>
                          <Folder explorer={item}/>
                        </>
                    ))}
                </div>

            </div>

        )
    else {
        return (
            <>
                <span className='file'> 📄{explorer.name}</span>

            </>
        )
    }
}

export default Folder
