export const WITHOUT_HOLIDAY = {
	'2020-02-01': {
		NO_CHANGE: {
			1: {
				keyMonth: '2020-02-01-2020-02-29',
				firstDate: '2020-02-01',
				lastDate: '2020-02-29'
			}
		},
		PREVIOUS: {
			1: {
				keyMonth: '2020-01-31-2020-02-27',
				firstDate: '2020-01-31',
				lastDate: '2020-02-27'
			}
		},
		NEXT_WEEK: {
			1: {
				keyMonth: '2020-02-03-2020-03-01',
				firstDate: '2020-02-03',
				lastDate: '2020-03-01'
			}
		}
	},
	'2020-07-01': {
		NO_CHANGE: {
			1: {
				keyMonth: '2020-07-01-2020-07-31',
				firstDate: '2020-07-01',
				lastDate: '2020-07-31'
			}
		},
		PREVIOUS: {
			1: {
				keyMonth: '2020-07-01-2020-07-30',
				firstDate: '2020-07-01',
				lastDate: '2020-07-30'
			}
		},
		NEXT_WEEK: {
			1: {
				keyMonth: '2020-07-01-2020-08-02',
				firstDate: '2020-07-01',
				lastDate: '2020-08-02'
			}
		}
	}
};

export const WITH_HOLIDAY = {
	'2020-07-01': {
		NO_CHANGE: {
			1: {
				keyMonth: '2020-07-01-2020-07-31',
				firstDate: '2020-07-01',
				lastDate: '2020-07-31'
			}
		},
		PREVIOUS: {
			1: {
				keyMonth: '2020-07-01-2020-07-31',
				firstDate: '2020-07-01',
				lastDate: '2020-07-31'
			}
		},
		NEXT_WEEK: {
			1: {
				keyMonth: '2020-07-01-2020-07-31',
				firstDate: '2020-07-01',
				lastDate: '2020-07-31'
			}
		}
	}
};

export const resultTest = {
	WITHOUT_HOLIDAY,
	WITH_HOLIDAY
};
