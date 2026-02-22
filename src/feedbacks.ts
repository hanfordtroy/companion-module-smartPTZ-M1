import { combineRgb } from '@companion-module/base'
import type { ModuleInstance } from './main.js'

export function UpdateFeedbacks(self: ModuleInstance): void {
	self.setFeedbackDefinitions({
		RecordState: {
			name: 'Listen for record',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				if (self.isRecording) {
					return true
				} else {
					return false
				}
			},
		},
		StreamState: {
			name: 'Listen for stream',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				if (self.isStreaming) {
					return true
				} else {
					return false
				}
			},
		},
		DockState: {
			name: 'Listen for dock state',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.isDockConnected
			},
		},
		PhoneBatteryState: {
			name: 'Listen for phone battery',
			type: 'value',
			options: [],
			callback: () => {
				return self.phoneBattery
			},
		},
		AutoWBState: {
			name: 'Listen for auto white balance',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				if (self.autoWhiteBalance) {
					return true
				} else {
					return false
				}
			},
		},
		CamTempState: {
			name: 'Listen for cam temp',
			type: 'value',
			options: [],
			callback: () => {
				return self.getVariableValue('camTemp') ?? 0
			},
		},
		CamTintState: {
			name: 'Listen for cam tint',
			type: 'value',
			options: [],
			callback: () => {
				return self.getVariableValue('camTint') ?? 0
			},
		},
		CamExpState: {
			name: 'Listen for cam exp',
			type: 'value',
			options: [],
			callback: () => {
				return self.getVariableValue('camExp') ?? 0
			},
		},
		ZoomSensitivityState: {
			name: 'Listen for zoom sensitivity',
			type: 'value',
			options: [],
			callback: () => {
				return self.getVariableValue('zoomSensitivity') ?? 0
			},
		},
		PtSensitivityState: {
			name: 'Listen for pt sensitivity',
			type: 'value',
			options: [],
			callback: () => {
				return self.getVariableValue('ptSensitivity') ?? 0
			},
		},
		SmartStationState: {
			name: 'Listen for smart station',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				if (self.isSmartStation) {
					return true
				} else {
					return false
				}
			},
		},
	})
}
