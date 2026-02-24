import React from 'react'

export default function Cateogryitem({item ,handelCateogry,currentCateogry}) {
  return (
    <>
     <li onClick={()=>handelCateogry(item)} className={`${currentCateogry==item ? "bg-warning" :""} mt-2 border  border-white opacity-50 border-1 text-white p-1 py-2 rounded-3 fs-6 cursor-pointer custom-li `}>{item}</li>
      
    </>
  )
}
