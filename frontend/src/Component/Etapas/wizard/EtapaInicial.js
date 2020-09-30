import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Files from '../../helpers/File';


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
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={premorbidPersonalityFile}
					label="Personalidad (adjunto)"
					name="premorbidPersonalityFile"
					handleChange={handleChange}
				/>
			</div>

			<div className="ed-item xl-50 borderinicial">
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

				<Files
					file={currentProblemFile}
					label="Problema Actual (Adjunto)"
					name="currentProblemFile"
					handleChange={handleChange}
				/>

			</div>

			<div className="ed-item xl-50 borderinicial">
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

				<Files
					file={healthHistoryFile}
					label="Historial de salud (Adjunto)"
					name="healthHistoryFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={sexualHistoryFile}
					label="Historial Sexual (Adjunto)"
					name="sexualHistoryFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={growthHistoryFile}
					label="Historia de Crecimiento (Adjunto)"
					name="growthHistoryFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={perinatalHistoryFile}
					label="Historia Perinatal (Adjunto)"
					name="perinatalHistoryFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={familyHistoryFile}
					label="Historia Familiar (Adjunto)"
					name="familyHistoryFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
				<Files
					file={genogramFile}
					label="Archivo del Genograma"
					name="genogramFile"
					handleChange={handleChange}
				/>
			</div>

			<div className="ed-item xl-50 borderinicial">
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

				<Files
					file={schoolHistoryFile}
					label="Historia Escolar (Adjunto)"
					name="schoolHistoryFile"
					handleChange={handleChange}
				/>

			</div>
			<div className="ed-item xl-50 borderinicial">
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


				<Files
					file={workHistoryFile}
					label="Historial de trabajo (Adjunto)"
					name="workHistoryFile"
					handleChange={handleChange}
				/>

			</div>
			<div className="ed-item xl-50 borderinicial">
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

				<Files
					file={mentalEvaluationTestFile}
					label="Prueba de evaluación mental (Adjunto)"
					name="mentalEvaluationTestFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={clinicalInterpretationFile}
					label="Interpretación Clínica (Adjuntos)"
					name="clinicalInterpretationFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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

				<Files
					file={interpreationOfEvidenceFile}
					label="Interpretación de evidencia (Adjunto)"
					name="interpreationOfEvidenceFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
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
				<Files
					file={therapeuticContractFile}
					label="Contrato terapéutico (Adjunto)"
					name="therapeuticContractFile"
					handleChange={handleChange}
				/>
			</div>
			<div className="ed-item xl-50 borderinicial">
				<label htmlFor="#">
					Aplicación de pruebas
					</label>
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
				<Files
					file={testingApplicationFile}
					label="Aplicación de pruebas (Adjunto)"
					name="testingApplicationFile"
					handleChange={handleChange}
				/>
			</div>
		</>
	)
}

export default EtapaInicial