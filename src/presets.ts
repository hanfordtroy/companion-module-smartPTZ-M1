import type { ModuleInstance } from './main.js'
import { CompanionPresetDefinitions, combineRgb } from '@companion-module/base'

export function UpdatePresets(self: ModuleInstance): void {
	const presets: CompanionPresetDefinitions = {}
	presets['record'] = {
		type: 'button',
		category: 'Record/Stream',
		name: 'Name',
		style: {
			text: 'Cam\nRecord\n[on/off]',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "record_toggle",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "RecordState",
				options: {},
				style: {
					bgcolor: combineRgb(255, 0, 0),
					color: combineRgb(255, 255, 255),
				}
			}
		]
	}

	presets['stream'] = {
		type: 'button',
		category: 'Record/Stream',
		name: 'Name',
		style: {
			text: 'Stream Button\n[on/off]',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "stream_toggle",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "StreamState",
				options: {},
				style: {
					bgcolor: combineRgb(255, 0, 0), 
					color: combineRgb(255, 255, 255),
    			}
			}
		]
	}

	presets['auto_wb'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: 'Auto WB',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "auto_wb_toggle",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "AutoWBState",
				options: {},
				style: {
					bgcolor: combineRgb(255, 0, 0), 
					color: combineRgb(255, 255, 255),
    			}
			}
		]
	}

	presets['cam_temp_down'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: `Temp Down\n$(smartptz-module:camTemp)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(214, 48, 49),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "cam_temp_down",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "CamTempState",
				options: {}
			}
		]
	}
	presets['cam_temp_up'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: `Temp Up\n$(smartptz-module:camTemp)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(214, 48, 49),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "cam_temp_up",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "CamTempState",
				options: {}
			}
		]
	}

	presets['cam_tint_down'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: `Tint Down\n$(smartptz-module:camTint)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(214, 48, 49),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "cam_tint_down",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "CamTintState",
				options: {}
			}
		]
	}
	presets['cam_tint_up'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: `Tint Up\n$(smartptz-module:camTint)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(214, 48, 49),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "cam_tint_up",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "CamTintState",
				options: {}
			}
		]
	}

	presets['cam_exp_down'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: `Exp Down\n$(smartptz-module:camExp)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(214, 48, 49),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "cam_exp_down",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "CamExpState",
				options: {}
			}
		]
	}
	presets['cam_exp_up'] = {
		type: 'button',
		category: 'Camera Controls',
		name: 'Name',
		style: {
			text: `Exp Up\n$(smartptz-module:camExp)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(214, 48, 49),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: "cam_exp_up",
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "CamExpState",
				options: {}
			}
		]
	}
	presets['preset_1'] = {
		type: 'button',
		category: 'Presets',
		name: 'Name',
		style: {
			text: `Preset 1`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(54, 169, 225),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					
				],
				up: [
					{
						actionId: "call_preset_1",
						options: {}
					}
				],
				3000: [
						{
							actionId: "set_preset_1",
							options: {}
						}
				]
			}
		],
		feedbacks: []
	},
	presets['preset_2'] = {
		type: 'button',
		category: 'Presets',
		name: 'Name',
		style: {
			text: `Preset 2`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(54, 169, 225),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					
				],
				up: [
					{
						actionId: "call_preset_2",
						options: {}
					}
				],
				3000: [
						{
							actionId: "set_preset_2",
							options: {}
						}
				]
			}
		],
		feedbacks: []
	},
	presets['preset_3'] = {
		type: 'button',
		category: 'Presets',
		name: 'Name',
		style: {
			text: `Preset 3`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(54, 169, 225),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					
				],
				up: [
					{
						actionId: "call_preset_3",
						options: {}
					}
				],
				3000: [
						{
							actionId: "set_preset_3",
							options: {}
						}
				]
			}
		],
		feedbacks: []
	},
	presets['preset_4'] = {
		type: 'button',
		category: 'Presets',
		name: 'Name',
		style: {
			text: `Preset 4`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(54, 169, 225),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					
				],
				up: [
					{
						actionId: "call_preset_4",
						options: {}
					}
				],
				3000: [
						{
							actionId: "set_preset_4",
							options: {}
						}
				]
			}
		],
		feedbacks: []
	},
	presets['preset_5'] = {
		type: 'button',
		category: 'Presets',
		name: 'Name',
		style: {
			text: `Preset 5`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(54, 169, 225),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					
				],
				up: [
					{
						actionId: "call_preset_5",
						options: {}
					}
				],
				3000: [
						{
							actionId: "set_preset_5",
							options: {}
						}
				]
			}
		],
		feedbacks: []
	},
	presets['preset_6'] = {
		type: 'button',
		category: 'Presets',
		name: 'Name',
		style: {
			text: `Preset 6`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(54, 169, 225),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					
				],
				up: [
					{
						actionId: "call_preset_6",
						options: {}
					}
				],
				3000: [
						{
							actionId: "set_preset_6",
							options: {}
						}
				]
			}
		],
		feedbacks: []
	}
	presets['zoom_faster'] = {
		type: 'button',
		category: "Zoom",
		name: 'Name',
		style: {
			text: `Zoom Faster\n$(smartptz-module:zoomSensitivity)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(110, 118, 125),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: 'zoom_faster',
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: []
	}
	presets['zoom_slower'] = {
		type: 'button',
		category: "Zoom",
		name: 'Name',
		style: {
			text: `Zoom Slower\n$(smartptz-module:zoomSensitivity)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(110, 118, 125),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: 'zoom_slower',
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: []
	}

	presets['zoom_in'] = {
		type: 'button',
		category: "Zoom",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"
	
		},
		steps: [
			{
				down: [
					{
						actionId: 'zoom_in',
						options: {}
					}
				],
				up: [
					{
						actionId: 'zoom_in_release',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['zoom_out'] = {
		type: 'button',
		category: "Zoom",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"

		},
		steps: [
			{
				down: [
					{
						actionId: 'zoom_out',
						options: {}
					}
				],
				up: [
					{
						actionId: 'zoom_out_release',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['pt_faster'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: `Pan/Tilt Faster\n$(smartptz-module:ptSensitivity)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(110, 118, 125),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: 'pt_faster',
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: []
	}
	presets['pt_slower'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: `Pan/Tilt Slower\n$(smartptz-module:ptSensitivity)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(110, 118, 125),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: 'pt_slower',
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: []
	}

	presets['left'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAGAAAAABAAAAYAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAASAAAAAOgBAABAAAASAAAAAAAAACy0A2pAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTAyLTE0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhCVGRCbkxHNCZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRk5vUmF5RjVrJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O1Ryb3kgSGFuZm9yZOKAmXMgdGVhbSZxdW90O308L0F0dHJpYjpEYXRhPgogICAgIDxBdHRyaWI6RXh0SWQ+YzQzMjdlYmEtNzM0YS00ZTZmLTgwMDEtY2U2MDg0ZGY5MmM5PC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlVudGl0bGVkIGRlc2lnbiAtIDI8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+VHJveSBIYW5mb3JkPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgZG9jPURBSEJUZEJuTEc0IHVzZXI9VUFGTm9SYXlGNWsgYnJhbmQ9VHJveSBIYW5mb3Jk4oCZcyB0ZWFtPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PoJHSgAAAALlSURBVHic7Zu9itRQFMf3S0EQP8BaC8HO2sLGZ7DQykIECxsLtdhmZ/URRATxDQYstLCwmReYQgtfYDDCMCTzPTsfSY7/E+6VIDt7LzNCQvL/wSVDdjNz5zfn3JOb3OzsEEIIIYQQQki9EJHdovtQSlQM2l7R/SglJmpU0EG/379idjOSFI0aGznD4fA92muz/6DYnpUASNg32/MQ8xFbmc1mR2bfuWJ7VzBWThAE1yaTybckSdSPDAaDhu5vt9v1FWTTB1Fzazwe/1QxeD0z22P9Wy0FmUqVyen1eveQTt04jjVq4tFotFRB2NYzgoycLK0g59EJmM/nVo5GzrK2EZSvVBByuFwuZTqdJpCRqBzT6ilIo8amFr78B5WAQTmGqDQnp56CbEpBxlUMxl/NGLOChH/l1E+QHYy73e5NRMwP8+VXp4ipl6B8pQrD8C7Gmt96juOQkxf0Ro/tdDoX9H22bOWa2+UrFdLqIarUdLFY/K1UnoKO9fjKRZD+Ws1mM5ODCeerNZVqbcP/xWma6uvPGK8eYPsU7ckmDSn9GD/KM7zPbdu3ouXYSrWPL/rujErlkiR6bqSorE0bUnpl+nCo/Ss0Gm1KoWOX8It90Y5hu65S+UjS4+It29yk6wvTx2KuDNgPjqLoBqS0bRnfRMz/bFoQjKCXhQjKVyp04g7k/NLQ9qhU1RekclqtVvaBGIzvY8wY64DsWamqLajRaOzZMQdp9RzzzRQz8hRyvCpVpQWZCaem1i4i562tVL5lvNKC7K0YTBsuYrz5tG2lqpQgTSvdBkFwHVK+2zlVWeVQUNkEmQ9ginlI4iDtgmXeA54oekriVMNPFCerHpJ4ucNHEi+YOTCnAVk0hWHIS66nwYv2Hghv+/hhJfHG4RkIbz27ES5ecCNc/uJGuIDKjXAJnh+5iS4Xca5DuAzYjXAhuRvhowhuJPcwSxRFl81uPsySR/g4lB/CB+oIIYQQQggh1eQPu+3c6nl02HwAAAAASUVORK5CYII="
			},
		steps: [
			{
				down: [
					{
						actionId: 'move_left',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['right'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"
		},
		steps: [
			{
				down: [
					{
						actionId: 'move_right',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['down'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"
		},
		steps: [
			{
				down: [
					{
						actionId: 'move_down',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['up'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAGAAAAABAAAAYAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAASAAAAAOgBAABAAAASAAAAAAAAACy0A2pAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTAyLTE0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhCVGRCbkxHNCZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRk5vUmF5RjVrJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O1Ryb3kgSGFuZm9yZOKAmXMgdGVhbSZxdW90O308L0F0dHJpYjpEYXRhPgogICAgIDxBdHRyaWI6RXh0SWQ+NDc1YmNlODEtZjUzOS00ZTJhLTg3YTYtZGNjM2VhMGVjZmJhPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlVudGl0bGVkIGRlc2lnbiAtIDM8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+VHJveSBIYW5mb3JkPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgZG9jPURBSEJUZEJuTEc0IHVzZXI9VUFGTm9SYXlGNWsgYnJhbmQ9VHJveSBIYW5mb3Jk4oCZcyB0ZWFtPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/Ppd4ZIAAAAPYSURBVHic7Zq/a1NRFMdbbQXRqYKDsx0URNBNHNz8D3Rxc5CighREbIfU+h/oIAFFunbpYl0cOnQNorSDcwoNadKmP/KSNHkvz+83fdceSpubvMSXl+R84JJH8nLu935z7zk3NxkZURRFURRFURRFGWx83x9NJBLneq0jltAc2XqtJ1bAkMas2d3dvb61tTUpnxt6zGzB46X9/f3faGvZbPayfG1okUuqWCwu1et1n61UKi1xBg39csPgz/MRs+YDrv29vb0aG69h2Ed5z9CBgY/x8eDgYDowx4VRPhuvg+dey3uHhpWVlcaAkZQfVSoVmlKHGXVhUB3GedVq1d/e3n4s3zPwmIFi4PdgTtFxHB9G/TPHND7H18rlsoOkfV++d2Ax+YSlHAPfODw8pBHeSXOESR7vgZEbmFWTMsbAYXbI6XR6AjPjJ6uVzDtnNd7jeZ6PJfcLhk0wxsDtkUyp5hLBQJeZgDFYqzliJjWSNq6/J5PJcRlzIDCfOEr3p3bNETOpUf5hcJKxFhcXB2OpmcSKQc6cLOchTDIzaZYx+778G3MwsCe1Wo0D82Q5D2EQ3+sxFmPKPvoOU20KhcIDVKwyltep5bzdxhiMxZiMLfvqG4zgfD5/AyU6w81gs3IewiSPMRl7c3Pzpuwz9piEnMlkruJL5xpLdCd5x1b+2Qf7kn3HFlN619fXL2AZ/Ahbsdot/+yLfUoNcWTUTHOU4q//25yTJrFP9h1oiJ9Jwpx3nZbzEM3skd5LLbFBVKynrutSqAuDojKHH0ajT/ZNDVJTzzFCMNUfovJWWYI72et0YJIp/1Vqkdp6bs7Ozs4tlNwcxFFo18p5CJM8aoCWfDabvd1Tk0xJzeVy11Bq/wS72yjzzlkmudRCTdQmtUZpTqNKpNPpi1j7q1FVrDZMMkl7lRql5kgNgoCFYCNYgrCqpXXTQNfWHzUF50gLkRokzPnsH+H5LcDz5W5UNsZgrBbxgm//XyIxyT/+kW8CQudh0hyWVgLXc03aPAS+wX3feHyK606SuBfEWGZMxm7WN7VRY3DflUhMahdzZgOxz1o9Zm2WgIN8NyVjxw7/6BfPsVQqNW5rJkliK/Ci0x22MOglYzJ2KxqoNXYzxyBm0FQXDXouY/c1apAFNciCGmRBDbKgBllQgyyoQRbUIAtqkAU1yIIaZEENsqAGWZDnQcHBfsX8HzpEq/C3r9ifB7WDGQQG9yo4Bq2ddjbaIrVgFk7L2H2Nf/z3uzuFQmEen/4M2myYhmX2lsenjuPclbGVYYCfdivHoy0eoerMURRFURRFURSln/kLiQyhZoBLLQkAAAAASUVORK5CYII="
		},
		steps: [
			{
				down: [
					{
						actionId: 'move_up',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['leftUp'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAGAAAAABAAAAYAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAASAAAAAOgBAABAAAASAAAAAAAAACy0A2pAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTAyLTE0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhCVGRCbkxHNCZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRk5vUmF5RjVrJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O1Ryb3kgSGFuZm9yZOKAmXMgdGVhbSZxdW90O308L0F0dHJpYjpEYXRhPgogICAgIDxBdHRyaWI6RXh0SWQ+NWU0ZjQxNmMtZTU3ZC00MDk1LTlkZjctYzBjZDVhMjAwM2ExPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlVudGl0bGVkIGRlc2lnbiAtIDc8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+VHJveSBIYW5mb3JkPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgZG9jPURBSEJUZEJuTEc0IHVzZXI9VUFGTm9SYXlGNWsgYnJhbmQ9VHJveSBIYW5mb3Jk4oCZcyB0ZWFtPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PtQIC8oAAASRSURBVHic7ZpNbExRFMfpVFAsCGErNtKlr0RsrcSSjcS2G4lFE0SURnysxMeKhQWxQC0QJalNRZCQ7sSmdo1q2mmn7bTT6Xxe//84h+uZp63O67uP+09O78ybj3fOb86999x7u2yZl5eXl5eXl5eXl5eXl5eXl5eXV3Qyxiynxe2H8xJQTbBmtd7eXrYpud6kMC2o/z5YBr6Yz3d2dhJcqq+vbwVN4Ka6urpS9aAmIlvVSQYyOTl5P5vNvkX7CHZ7YmLiCqwDdgx2BNcOwPbiPdunpqY2Dw8Pr+3v71+5mECtbK2BlUx1B5ztTC6Xe2e+q2ICKpVKZmZmxgBOFZAKaHOwUVg/7D2u9cAewG6Oj49fhp0E1DbYYdj+dDq9C+022IbBwcEWfOWKOONekBQSnH9SLpeNACihVSvDKoSDzDHT09MGMGvACoWC4Weq1WqQae1asVisvR/fzc/n8T1TePwV9gmP36Dtht3Da9fx/CLsBGCus/2KXTr2wNG7DIxwYKaeIYCqbbhWITxCDEBVsHyPUbCEms/na+AI1ubJP3jfZfHJDTgU+z1bBHKNTjK4MEB/a0GwApVWApQCgeFxO/3gYB8vkYA4OLJFBp2VDCo2GlAYNGYguyLufZo+cLCOl0YdcTpmC4ePSwaVPRxL2sXg9FEZpCsxwXFn3LGlv1wmkznIAVQH1qjgYMwpC5wO6/5uwqF0FhsbG9sX+JUbDcckDg6lgBBEK4IocjqOCJBO5eflvimnpvMwWcuNLQgkxyKw0YA4rrEaR3tB7tUcb9QLkAVoLYIZYzEXBSDWOsieR+hiK+V+btU7YVJAdBzBfObyIYqZjN8pXew512Nyb/chWRnUhEA+SFeIZKpn5SyQXiQKkgqr8JecZaIsFhMJSR2E8w+XoppOHCQtFuH4ragWrImGpNMunL20xAvWH5CGhobWiC/uQVJAqHBPLVUG1YHU4ywkC1Bb1IN0IiHpGIRZ7JDUQZEtWBMJSQGNjo7u51psqeE4D0mdSKfTO7nBzj3ksCyyt0yjhsSjJfEv3kWtAsrn81vhZD5sRS/Xqqy2o1qS2JDQvsLzjbFDspYb6+FQtt6KHpnFza4KZDKZzBlAfBzVjMcs5ubd7OzsJLPa/hFjBcSCDQ5+gWO/AArsBNa2SXl+xW7QaEiEw5U/fBiBdsQORxzQDGpGsB/lGKZidavgHnKztC0s8hoFiXDYdZE94J/eLfeIfzPf7t9w8rVu3v/p9EF/VWZdIyCFwHFnY838PIJ+qsHOtYfcKEgsTAXOiJNwKGtv+o5Ms7Pz2WBfLCSFgzHHzcxR6fkYgFxlkLJxNq8N9r+FZMNBkbpHvss9OJQeQWP67mCAAHWOz+d7+hCA1D0XJB1zEgGHUuewHmuH8zfkWtNCCjSFhHYVaqlnYZASB8cWHF1nTeMLrl4V0sDAwGpk0m+QbDhYbyULjmqxZX0YpH8CTqNUDxIrdNY5ietWUUkh8cyN52GYALL8f0V57f+Go9LuivFnE6xVrsW/fHBJxvq/6NgXnq5KIHk4Xl5eXl5eXl5eXl5J1jeC6K51VpeCDQAAAABJRU5ErkJggg=="
		},
		steps: [
			{
				down: [
					{
						actionId: 'move_left_up',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['leftDown'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"
		},
		steps: [
			{
				down: [
					{
						actionId: 'move_left_down',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['rightUp'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"
		},
		steps: [
			{
				down: [
					{
						actionId: 'move_right_up',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}
	presets['rightDown'] = {
		type: 'button',
		category: "PanTilt",
		name: 'Name',
		style: {
			text: ``,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
			png64: "data:image/png;base64,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"

		},
		steps: [
			{
				down: [
					{
						actionId: 'move_right_down',
						options: {}
					}
				],
				up: [
					{
						actionId: 'release_dock',
						options: {}
					}
				]
			}
		],
		feedbacks: []
	}

	presets['smartStation'] = {
		type: 'button',
		category: "AI",
		name: 'Name',
		style: {
			text: `Smart Station`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(48, 54, 61),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: 'smart_station',
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: [
			{
				feedbackId: "SmartStationState",
				options: {},
				style: {
					bgcolor: combineRgb(160, 100, 160),
					color: combineRgb(255, 255, 255),
				} 
			}
		]
	}

	presets['dockStatus'] = {
		type: 'button',
		category: "Phone",
		name: 'Name',
		style: {
			text: `Dock Status\n[red=on]`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(48, 54, 61),
			show_topbar: false,
		},
		steps: [],
		feedbacks: [
			{
				feedbackId: "DockState",
				options: {},
				style: {
					bgcolor: combineRgb(255, 0, 0),
					color: combineRgb(255, 255, 255),
				} 
			}
		]
	}
	presets['phoneBattery'] = {
		type: 'button',
		category: "Phone",
		name: 'Name',
		style: {
			text: `Phone Battery\n$(smartptz-module:phoneBattery)%`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(48, 54, 61),
			show_topbar: false,
		},
		steps: [],
		feedbacks: []
	}

	presets['setZoom'] = {
		type: 'button',
		category: "Zoom",
		name: 'Name',
		style: {
			text: `Fixed Zoom\n$(smartptz-module:zoomState)`,
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(48, 54, 61),
			show_topbar: false,
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_zoom_x1w',
						options: {}
					}
				],
				up: []
			},
			{
				down: [
					{
						actionId: 'set_zoom_x2w',
						options: {}
					}
				],
				up: []
			},
			{
				down: [
					{
						actionId: 'set_zoom_x3w',
						options: {}
					}
				],
				up: []
			},
			{
				down: [
					{
						actionId: 'set_zoom_x1t',
						options: {}
					}
				],
				up: []
			},
			{
				down: [
					{
						actionId: 'set_zoom_x2t',
						options: {}
					}
				],
				up: []
			},
			{
				down: [
					{
						actionId: 'set_zoom_x3t',
						options: {}
					}
				],
				up: []
			}
		],
		feedbacks: []
	}
	
	self.setPresetDefinitions(presets)
}
