import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EtapaDiagnostico = ({
  currentStep,
  handleChangediag,
  uuidDSM5Array,
  uuidDSM5,
  descriptionOfProblem,
  descriptionOfProblemFile
}) => {
  if (currentStep !== 2) {
    return null
  }
  return (
      <>
      <div className="ed-item">
      <label htmlFor="uuidReligion" >Religion </label>
            <select className="select-css"
              value={uuidDSM5 || 0}
              name="uuidDSM5"
              onChange={handleChangediag}
            >
              <option value="0">Seleccionar un valor</option>
              {
                uuidDSM5Array.map(({ uuid, name }) => (
                  <option key={uuid} value={uuid}>{name}</option>
                ))
              }
            </select>
      </div>
      <div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={descriptionOfProblem}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
              name: 'descriptionOfProblem'
						}
						handleChangediag(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='descriptionOfProblemFile'
							onChange={(e) => handleChangediag(e)}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								descriptionOfProblemFile 
								? descriptionOfProblemFile.name || descriptionOfProblemFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
      </div>
      </>
  )
}

export default EtapaDiagnostico