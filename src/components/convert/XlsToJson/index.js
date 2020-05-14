import React, { useState } from 'react'
import XLSX from 'xlsx'

import { sheetType } from 'constants/sheetType'

const XlsToJson = (props) => {
  const [json, setJson] = useState([])
  const { headers } = props

  const uploadFile = (e) => {
    let file = e.target.files[0]

    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString

    reader.onload = (event) => {
      if (file) {
        let bstr = event.target.result
        let workbook = XLSX.read(bstr, {
          type: rABS ? 'binary' : 'array',
          bookVBA: true,
        })
        let arr = []

        workbook.SheetNames.forEach((sheet) => {
          let worksheet = workbook.Sheets[sheet]
          let rowObj = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet],
          )
          let data = XLSX.utils.sheet_to_json(worksheet)

          let jsonObj = JSON.stringify(rowObj)

          console.log(JSON.stringify(data, null, 2))

          arr.push(JSON.parse(jsonObj))
          setJson(arr)
        })
      }
    }

    if (rABS) {
      reader.readAsBinaryString(file)
    } else {
      reader.readAsArrayBuffer(file)
    }
  }

  console.log(1, json)

  return (
    <div className='convert-xls-json'>
      <div className='form-field'>
        <label>Import Users</label>
        <input
          id='xlsx-upload'
          type='file'
          accept={sheetType}
          multiple={false}
          onChange={uploadFile}
        />
      </div>

      <div className='data-table'>
        <table>
          <theader>
            <tr></tr>
          </theader>
        </table>
      </div>
    </div>
  )
}

XlsToJson.defaultProps = {
  headers: [],
}

export default XlsToJson
