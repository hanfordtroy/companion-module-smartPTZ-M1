import type { ModuleInstance } from './main.js'
import { WebSocket } from 'ws'

let ptzId = ''
let recordEnabled = false
let camTemp = 4000
let camTint = 0
let camExposure = 0
let zoom = 5
let ptSensitivity = 5
let isSmartStation = false
let socket: WebSocket

export function startFirebase(self: ModuleInstance, ptzIdParam: string): void {
	connect(self)
	ptzId = ptzIdParam?.toString() ?? '0'
}

function connect(self: ModuleInstance): void {
	socket = new WebSocket('wss://api.smartptz.com')
	//socket = new WebSocket("http://localhost:8080")
	socket.on('open', () => {
		initialize(self)
	})
	socket.onclose = (event) => {
		if (event.code == 3003) {
			return
		}
		setTimeout(() => {
			connect(self)
		}, 1000)
	}
}

function initialize(self: ModuleInstance) {
	socket.send(JSON.stringify({ ptzId: ptzId, type: 'subscribe' }))
	socket.on('message', (message: string) => {
		const payload = JSON.parse(message)

		if (Object.hasOwn(payload, 'record')) {
			const value = payload.record
			self.setVariableValues({ record: value })
			recordEnabled = value
			self.isRecording = value
			self.checkFeedbacks('RecordState')
		} else if (Object.hasOwn(payload, 'stream')) {
			const value = payload.stream
			self.setVariableValues({ stream: value })
			self.isStreaming = value
			self.checkFeedbacks('StreamState')
		} else if (Object.hasOwn(payload, 'smart_station')) {
			const value = payload.smart_station
			isSmartStation = value
			self.isSmartStation = value
			self.checkFeedbacks('SmartStationState')
		} else if (Object.hasOwn(payload, 'cameraControls')) {
			const controls = payload.cameraControls

			const value = controls.wbAuto
			const autoTint = controls.tintAuto
			self.autoTint = autoTint
			self.autoWhiteBalance = value

			camTemp = controls.camTemp
			camTint = controls.camTint
			zoom = controls.zoom
			ptSensitivity = controls.ptSensitivity
			camExposure = controls.camExposure
			self.isDockConnected = payload.isDockConnected
			self.setVariableValues({
				autoWB: value,
				camTemp: camTemp,
				camTint: camTint,
				camExp: camExposure,
				zoomSensitivity: zoom,
				ptSensitivity: ptSensitivity,
				phoneBattery: round1(payload.phoneBattery * 100),
				isDockConnected: payload.isDockConnected,
			})
			self.checkFeedbacks(
				'AutoWBState',
				'AutoTintState',
				'CamTempState',
				'CamTintState',
				'CamExpState',
				'ZoomSensitivityState',
				'PtSensitivityState',
				'DockState',
			)
		}
	})
}

export function toggleRecord(): void {
	const nextValue = !recordEnabled
	recordEnabled = nextValue
	socket.send(JSON.stringify({ ptzId: ptzId, value: nextValue, type: 'record' }))
}

export function toggleStream(self: ModuleInstance): void {
	const nextValue = !self.isStreaming
	self.isStreaming = nextValue // optimistic local update
	socket.send(JSON.stringify({ ptzId: ptzId, value: nextValue, type: 'stream' }))
}
export function toggleAutoWB(self: ModuleInstance): void {
	const nextValue = !self.autoWhiteBalance
	self.autoWhiteBalance = nextValue // optimistic local update
	socket.send(JSON.stringify({ ptzId: ptzId, value: nextValue, type: 'toggleAutoWb' }))
}

export function changeWB(self: ModuleInstance, increment: boolean): void {
	if (increment) {
		if (camTemp < 7000) {
			camTemp += 100
		}
	} else {
		if (camTemp > 2700) {
			camTemp -= 100
		}
	}
	socket.send(
		JSON.stringify({
			ptzId: ptzId,
			camTint: camTint,
			type: 'changeWB',
			autoWb: self.autoWhiteBalance,
			camTemp: camTemp,
		}),
	)
}

export function changeTint(self: ModuleInstance, increment: boolean): void {
	if (increment) {
		if (camTint < 150) {
			camTint += 10
		}
	} else {
		if (camTint > -150) {
			camTint -= 10
		}
	}
	socket.send(
		JSON.stringify({
			ptzId: ptzId,
			camTint: camTint,
			type: 'changeWB',
			autoWb: self.autoWhiteBalance,
			camTemp: camTemp,
		}),
	)
}

export function setZoom(self: ModuleInstance, type: string): void {
	socket.send(JSON.stringify({ ptzId: ptzId, op: type, type: 'setZoom' }))
	self.setVariableValues({ zoomState: type })
}

function round1(x: number) {
	return Math.round(x * 10) / 10
}

export function changeExposure(increment: boolean): void {
	const next = increment ? camExposure + 0.1 : camExposure - 0.1
	camExposure = round1(Math.max(-2, Math.min(2, next)))
	socket.send(JSON.stringify({ ptzId: ptzId, camExposure: camExposure, type: 'changeExposure' }))
}

export function executePreset(type: string): void {
	socket.send(JSON.stringify({ ptzId: ptzId, preset: type, type: 'executePreset' }))
}

export function changeZoomSensitivity(increment: boolean): void {
	if (increment) {
		if (zoom < 10) {
			zoom += 1
		}
	} else {
		if (zoom > 1) {
			zoom -= 1
		}
	}
	socket.send(JSON.stringify({ ptzId: ptzId, zoom: zoom, type: 'changeZoomSensitivity' }))
}

export function changePtSensitivity(increment: boolean): void {
	if (increment) {
		if (ptSensitivity < 10) {
			ptSensitivity += 1
		}
	} else {
		if (ptSensitivity > 1) {
			ptSensitivity -= 1
		}
	}
	socket.send(JSON.stringify({ ptzId: ptzId, ptSensitivity: ptSensitivity, type: 'changePtSensitivity' }))
}

export function changeZoom(increment: boolean): void {
	let type = 'zoomOut'
	if (increment) {
		type = 'zoomIn'
	}
	socket.send(JSON.stringify({ ptzId: ptzId, op: type, type: 'changeZoom', zoom: zoom / 10 }))
}

export function releaseZoom(increment: boolean): void {
	let type = 'zoomOut'
	if (increment) {
		type = 'zoomIn'
	}
	socket.send(JSON.stringify({ ptzId: ptzId, op: type, type: 'releaseZoom' }))
}

export function moveDock(type: string): void {
	socket.send(JSON.stringify({ ptzId: ptzId, move: type, type: 'moveDock', ptSensitivity: ptSensitivity / 10 }))
}

export function releaseDock(type: string): void {
	socket.send(JSON.stringify({ ptzId: ptzId, move: type, type: 'releaseDock' }))
}

export function toggleSmartStation(): void {
	isSmartStation = !isSmartStation
	socket.send(JSON.stringify({ ptzId: ptzId, value: isSmartStation, type: 'toggleSmartStation' }))
}
