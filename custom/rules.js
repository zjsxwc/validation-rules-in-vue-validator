define({
	'rule1' : [
		'/^1\d{10}$/',
		'must be number'
	],

	'rule2' : [
		function($v) {
			return $v > 1000
		},
		'must lg than 1000'
	]

})