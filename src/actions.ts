
import { changeExposure, changePtSensitivity, changeTint, changeWB, changeZoom, changeZoomSensitivity, executePreset, moveDock, releaseDock, releaseZoom, setZoom, toggleAutoWB, toggleRecord, toggleSmartStation, toggleStream } from './firebase.js'
import type { ModuleInstance } from './main.js'

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		record_toggle: {
			name: 'Start/Stop Recording',
			options: [],
			callback: async () => {
				toggleRecord()
				let record = self.getVariableValue("record")
				if( record?.valueOf() == true){
					self.setVariableValues({ "record": false })
				}
				else{
					self.setVariableValues({ "record": true })
				}
			},
		},
		stream_toggle: {
			name: 'Start/Stop Stream',
			options: [],
			callback: async () => {
				toggleStream(self)
				let stream = self.getVariableValue("stream")
				if( stream?.valueOf() == true){
					self.setVariableValues({ "stream": false })
				}
				else{
					self.setVariableValues({ "stream": true })
				}
			},
		},
		auto_wb_toggle: {
			name: 'On/Off White Balance',
			options: [],
			callback: async () => {
				toggleAutoWB(self)
				let stream = self.getVariableValue("autoWB")
				if( stream?.valueOf() == true){
					self.setVariableValues({ "autoWB": false })
				}
				else{
					self.setVariableValues({ "autoWB": true })
				}
			},
		},
		cam_temp_down: {
			name: 'Temp down',
			options: [],
			callback: async () => {
				changeWB(self, false)
			},
		},
		cam_temp_up: {
			name: 'Temp up',
			options: [],
			callback: async () => {
				changeWB(self, true)
			},
		},
		cam_tint_down: {
			name: 'Tint down',
			options: [],
			callback: async () => {
				changeTint(self, false)
			},
		},
		cam_tint_up: {
			name: 'Tint up',
			options: [],
			callback: async () => {
				changeTint(self, true)
			},
		},
		cam_exp_down: {
			name: 'Exp down',
			options: [],
			callback: async () => {
				changeExposure(false)
			},
		},
		cam_exp_up: {
			name: 'Exp up',
			options: [],
			callback: async () => {
				changeExposure(true)
			},
		},
		call_preset_1: {
			name: "call_preset_1",
			options: [],
			callback: async () => {
				executePreset("callPreset1")
			}
		},
		set_preset_1: {
			name: "set_preset_1",
			options: [],
			callback: async () => {
				executePreset("setPreset1")
			}
		},
		call_preset_2: {
			name: "call_preset_2",
			options: [],
			callback: async () => {
				executePreset("callPreset2")
			}
		},
		set_preset_2: {
			name: "set_preset_2",
			options: [],
			callback: async () => {
				executePreset("setPreset2")
			}
		},
		call_preset_3: {
			name: "call_preset_3",
			options: [],
			callback: async () => {
				executePreset("callPreset3")
			}
		},
		set_preset_3: {
			name: "set_preset_3",
			options: [],
			callback: async () => {
				executePreset("setPreset3")
			}
		},
		call_preset_4: {
			name: "call_preset_4",
			options: [],
			callback: async () => {
				executePreset("callPreset4")
			}
		},
		set_preset_4: {
			name: "set_preset_4",
			options: [],
			callback: async () => {
				executePreset("setPreset4")
			}
		},
		call_preset_5: {
			name: "call_preset_5",
			options: [],
			callback: async () => {
				executePreset("callPreset5")
			}
		},
		set_preset_5: {
			name: "set_preset_5",
			options: [],
			callback: async () => {
				executePreset("setPreset5")
			}
		},
		call_preset_6: {
			name: "call_preset_6",
			options: [],
			callback: async () => {
				executePreset("callPreset6")
			}
		},
		set_preset_6: {
			name: "set_preset_6",
			options: [],
			callback: async () => {
				executePreset("setPreset6")
			}
		},
		zoom_faster: {
			name: "Zoom Faster",
			options: [],
			callback: async () => {
				changeZoomSensitivity(true)
			}
		},
		zoom_slower: {
			name: "Zoom Slower",
			options: [],
			callback: async () => {
				changeZoomSensitivity(false)
			}
		},
		zoom_in: {
			name: "Zoom In",
			options: [],
			callback: async () => {
				changeZoom(true)
			}
		},
		zoom_out: {
			name: "Zoom Out",
			options: [],
			callback: async () => {
				changeZoom(false)
			}
		},
		zoom_in_release: {
			name: "Zoom In release",
			options: [],
			callback: async () => {
				releaseZoom(true)
			}
		},
		zoom_out_release: {
			name: "Zoom Out release",
			options: [],
			callback: async () => {
				releaseZoom(true)
			}
		},
		pt_faster: {
			name: "Pt Faster",
			options: [],
			callback: async () => {
				changePtSensitivity(true)
			}
		},
		pt_slower: {
			name: "Pt Slower",
			options: [],
			callback: async () => {
				changePtSensitivity(false)
			}
		},
		release_dock: {
			name: "Move Left",
			options: [],
			callback: async () => {
				releaseDock("left")
			}
		},
		move_left: {
			name: "Move Left",
			options: [],
			callback: async () => {
				moveDock("left")
			}
		},
		move_left_up: {
			name: "Move Left Up",
			options: [],
			callback: async () => {
				moveDock("leftUp")
			}
		},
		move_left_down: {
			name: "Move Left Down",
			options: [],
			callback: async () => {
				moveDock("leftDown")
			}
		},
		move_right: {
			name: "Move Right",
			options: [],
			callback: async () => {
				moveDock("right")
			}
		},
		move_right_up: {
			name: "Move Right Up",
			options: [],
			callback: async () => {
				moveDock("rightUp")
			}
		},
		move_right_down: {
			name: "Move Right Down",
			options: [],
			callback: async () => {
				moveDock("rightDown")
			}
		},
		move_up: {
			name: "Move Up",
			options: [],
			callback: async () => {
				moveDock("up")
			}
		},
		move_down: {
			name: "Move Down",
			options: [],
			callback: async () => {
				moveDock("down")
			}
		},
		smart_station: {
			name: "Smart Station",
			options: [],
			callback: async () => {
				toggleSmartStation()
			}
		},
		set_zoom_x1w: {
			name: "Set Zoom x1W",
			options: [],
			callback: async () => {
				setZoom(self, "x1W")
			}
		},
		set_zoom_x2w: {
			name: "Set Zoom x2W",
			options: [],
			callback: async () => {
				setZoom(self, "x2W")
			}
		},
		set_zoom_x3w: {
			name: "Set Zoom x3W",
			options: [],
			callback: async () => {
				setZoom(self, "x3W")
			}
		},
		set_zoom_x1t: {
			name: "Set Zoom x1T",
			options: [],
			callback: async () => {
				setZoom(self, "x1T")
			}
		},
		set_zoom_x2t: {
			name: "Set Zoom x2T",
			options: [],
			callback: async () => {
				setZoom(self, "x2T")
			}
		},
		set_zoom_x3t: {
			name: "Set Zoom x3T",
			options: [],
			callback: async () => {
				setZoom(self, "x3T")
			}
		}
	})
}
