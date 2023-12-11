import React from 'react';

export interface ITab {
	component: React.ReactNode;
	title: React.ReactNode | string;
	key: string;
	disabled?: boolean;
	loading?: boolean;
}
