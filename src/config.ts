import { type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	ptzId: string
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'ptzId',
			label: 'PTZ ID',
			width: 4,
			default: "",
		},
	]
}
