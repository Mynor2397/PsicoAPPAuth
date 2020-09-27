import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const EtapaInicial = ({
	currentStep,
	handleChange,
	premorbidPersonality,
	premorbidPersonalityFile,
	currentProblem,
	currentProblemFile,
	healthHistory,
	healthHistoryFile,
	sexualHistory,
	sexualHistoryFile,
	growthHistory,
	growthHistoryFile,
	perinatalHistory,
	perinatalHistoryFile,
	familyHistory,
	familyHistoryFile,
	genogramFile,
	schoolHistory,
	schoolHistoryFile,
	workHistory,
	workHistoryFile,
	mentalEvaluationTest,
	mentalEvaluationTestFile,
	clinicalInterpretation,
	clinicalInterpretationFile,
	interpreationOfEvidence,
	interpreationOfEvidenceFile,
	therapeuticContract,
	therapeuticContractFile,
	uuidTestingApplication,
	uuidTestType,
	testingApplication,
	testingApplicationFile
}) => {
	if (currentStep !== 2) {
		return null
	}
	return (
		<>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={premorbidPersonality}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'premorbidPersonality'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='premorbidPersonalityFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								premorbidPersonalityFile 
								? premorbidPersonalityFile.name || premorbidPersonalityFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>

			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={currentProblem}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'currentProblem'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='currentProblemFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								currentProblemFile 
								? currentProblemFile.name || currentProblemFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={healthHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'healthHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='healthHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								healthHistoryFile 
								? healthHistoryFile.name || healthHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={sexualHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'sexualHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='sexualHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								sexualHistoryFile 
								? sexualHistoryFile.name || sexualHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={growthHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'growthHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='growthHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								growthHistoryFile 
								? growthHistoryFile.name || growthHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={perinatalHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'perinatalHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='perinatalHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								perinatalHistoryFile 
								? perinatalHistoryFile.name || perinatalHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={familyHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'familyHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='familyHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								familyHistoryFile 
								? familyHistoryFile.name || familyHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='genogramFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								genogramFile 
								? genogramFile.name || genogramFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={schoolHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'schoolHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='schoolHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								schoolHistoryFile 
								? schoolHistoryFile.name || schoolHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={workHistory}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'workHistory'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='workHistoryFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								workHistoryFile 
								? workHistoryFile.name || workHistoryFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={mentalEvaluationTest}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'mentalEvaluationTest'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='mentalEvaluationTestFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								mentalEvaluationTestFile 
								? mentalEvaluationTestFile.name || mentalEvaluationTestFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={clinicalInterpretation}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'clinicalInterpretation'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='clinicalInterpretationFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								clinicalInterpretationFile 
								? clinicalInterpretationFile.name || clinicalInterpretationFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={interpreationOfEvidence}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'interpreationOfEvidence'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='interpreationOfEvidenceFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								interpreationOfEvidenceFile 
								? interpreationOfEvidenceFile.name || interpreationOfEvidenceFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={therapeuticContract}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'therapeuticContract'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='therapeuticContractFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								therapeuticContractFile 
								? therapeuticContractFile.name || therapeuticContractFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>
			<div className="ed-item xl-50">
				<CKEditor
					editor={ClassicEditor}
					data={testingApplication}
					onInit={editor => {
					}}
					onBlur={(event, editor) => {
						const data = {
							value: editor.getData(),
							is: true,
							name: 'testingApplication'
						}
						handleChange(data)
					}}
				/>
		
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" 
							name='testingApplicationFile'
							onChange={handleChange}
							/>
						<label className="custom-file-label" htmlFor="inputGroupFile01"> 
							{
								testingApplicationFile 
								? testingApplicationFile.name || testingApplicationFile
								:'Selecciones archivo' 
							}
						</label>
					</div>
				</div>
			</div>

		</>
	)
}

export default EtapaInicial