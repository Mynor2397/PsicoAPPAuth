import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Files from '../../helpers/File';
import UploadFile from '../../helpers/UploadFile';
import {URLI} from '../../../config/option'


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
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Personalidad
					</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={premorbidPersonalityFile}
						label="Personalidad (adjunto)"
						name="premorbidPersonalityFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${premorbidPersonalityFile}`} />
			</div>

			<div className="ed-item xl-50 ed-container borderinicial">
				<label htmlFor="#">
					Problema Actual
					</label>
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
				<div className="ed-item s-80 m-80">
					<Files
						file={currentProblemFile}
						label="Problema Actual (Adjunto)"
						name="currentProblemFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${currentProblemFile}`} />
			</div>

			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historial de salud
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={healthHistoryFile}
						label="Historial de salud (Adjunto)"
						name="healthHistoryFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${healthHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historial Sexual
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={sexualHistoryFile}
						label="Historial Sexual (Adjunto)"
						name="sexualHistoryFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${sexualHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historia de Crecimiento
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={growthHistoryFile}
						label="Historia de Crecimiento (Adjunto)"
						name="growthHistoryFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${growthHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historia Perinatal
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={perinatalHistoryFile}
						label="Historia Perinatal (Adjunto)"
						name="perinatalHistoryFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${perinatalHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historia Familiar
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
				<Files
					file={familyHistoryFile}
					label="Historia Familiar (Adjunto)"
					name="familyHistoryFile"
					handleChange={handleChange}
				/>
				</div>
				<UploadFile URL={`${URLI}attachment/${familyHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item s-80 m-80">
					<Files
						file={genogramFile}
						label="Archivo del Genograma"
						name="genogramFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${genogramFile}`} />
			</div>

			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historia Escolar
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={schoolHistoryFile}
						label="Historia Escolar (Adjunto)"
						name="schoolHistoryFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${schoolHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Historial de trabajo
					</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={workHistoryFile}
						label="Historial de trabajo (Adjunto)"
						name="workHistoryFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${workHistoryFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Prueba de evaluación mental
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={mentalEvaluationTestFile}
						label="Prueba de evaluación mental (Adjunto)"
						name="mentalEvaluationTestFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${mentalEvaluationTestFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Interpretación Clínica
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={clinicalInterpretationFile}
						label="Interpretación Clínica (Adjuntos)"
						name="clinicalInterpretationFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${clinicalInterpretationFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Interpretación de evidencia 
						</label>
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
				</div>
				<div className="ed-item s-80 m-80">
					<Files
						file={interpreationOfEvidenceFile}
						label="Interpretación de evidencia (Adjunto)"
						name="interpreationOfEvidenceFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${interpreationOfEvidenceFile}`} />
			</div>
			<div className="ed-item xl-50 ed-container borderinicial">
				<div className="ed-item">
					<label htmlFor="#">
						Contrato terapéutico
					</label>
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
				</div>

				<div className="ed-item s-80 m-80">
					<Files
						file={therapeuticContractFile}
						label="Contrato terapéutico (Adjunto)"
						name="therapeuticContractFile"
						handleChange={handleChange}
					/>
				</div>
				<UploadFile URL={`${URLI}attachment/${therapeuticContractFile}`} />
			</div>
		</>
	)
}

export default EtapaInicial