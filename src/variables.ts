import type { ModuleInstance } from './main.js'

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	self.setVariableDefinitions([
		{ variableId: "ptzId", name: "PTZ ID" },
		{ variableId: "record", name: "Record" },
		{ variableId: "stream", name: "Stream" },
		{ variableId: "autoWB", name: "Auto White Balance" },
		{ variableId: "camTemp", name: "Camera Temperature" },
		{ variableId: "camTint", name: "Camera Tint" },
		{ variableId: "camExp", name: "Camera Exposure" },
		{ variableId: "zoomSensitivity", name: "Zoom Sensitivity" },
		{ variableId: "ptSensitivity", name: "Pt Sensitivity" },
		{ variableId: "zoomState", name: "Zoom State" },
		{ variableId: "phoneBattery", name: "Phone Battery" },
		{ variableId: "isDockConnected", name: "Dock Connection Status" }
	])
}
