import React from 'react'

export default function ProductCategory({category}) {
  return (
    <tr className='py-2 px-2 bg-slate-700 text-white rounded-md my-4'>
        <th colSpan="2">{category}</th>
    </tr>
  )
}
