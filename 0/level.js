var levels = {}

levels[0] = {
	ppath: "b o 0 0 3.6",
	px: 0,
	py: 0,
	pr: 3.6,
	targetps: [
	],
	bitks: [
	],
	bitxs: [
	],
}

levels.northwest = {
	ppath: "( m 2 2 l 2 -2 q 0.4 -2 -0.8 -0.8 q -2 0.4 -2 2 )",
	px: -2.2,
	py: -2.2,
	targetps: [
		[-5, -8],
		[5, -8],
		[10, 0],
		[5, 8],
		[-5, 8],
		[-10, 0],
	],
	bitks: [
		[0, 1, 0.7],
		[0, 2, 0.7],
		[0, 3, 0.7],
		[0, 4, 0.7],
		[0, 5, 0.7],
		[0, 6, 0.7],
		[1, 2],
	],
	bitxs: [
		[2, 4, 3, 5],
		[1, 5, 4, 6],
	],
}

levels.northeast = {
	ppath: "( m -2 2 l -2 -2 q -0.4 -2 0.8 -0.8 q 2 0.4 2 2 )",
	px: 2.2,
	py: -2.2,
	targetps: [
		[-10, -10],
		[0, -10],
		[10, -10],
		[10, 0],
		[10, 10],
		[0, 10],
		[-10, 10],
		[-10, 0],
	],
	bitks: [
		[1, 2],
		[1, 8],
		[8, 7],
		[0, 3, 0.7],
		[0, 6, 0.7],
		[4, 6],
		[5, 6],
	],
	bitxs: [
		[1, 4, 2, 8],
		[2, 4, 3, 6],
		[0, 7, 5, 8],
	],
}

levels.southwest = {
	ppath: "( m 2 -2 l 2 2 q 0.4 2 -0.8 0.8 q -2 -0.4 -2 -2 )",
	px: -2.2,
	py: 2.2,
	targetps: [
		[-9, -7],
		[-3, -7],
		[3, -7],
		[9, -7],
		[-9, 7],
		[-3, 7],
		[3, 7],
		[9, 7],
	],
	bitks: [
		[0, 8, 0.75],
		[0, 4],
		[2, 5, 0.75],
		[4, 7, 0.25],
	],
	bitxs: [
		[0, 1, 2, 6],
		[0, 5, 1, 6],
		[2, 8, 3, 5],
	],
}

levels.southeast = {
	ppath: "( m -2 -2 l -2 2 q -0.4 2 0.8 0.8 q 2 -0.4 2 -2 )",
	px: 2.2,
	py: 2.2,
	targetps: [
		[-10, -10],
		[-6, -6],
		[6, -6],
		[10, -10],
		[-10, 10],
		[-6, 6],
		[6, 6],
		[10, 10],
	],
	bitks: [
		[1, 4],
		[5, 8],
		[0, 2],
		[0, 3],
		[0, 6],
		[0, 7],
	],
	bitxs: [
		[1, 3, 2, 4],
		[1, 6, 2, 5],
		[3, 8, 4, 7],
		[5, 7, 6, 8],
	],
}



