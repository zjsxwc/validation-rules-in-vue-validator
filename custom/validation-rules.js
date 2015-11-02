define({
	rule1 : {
		pattern : '/^1\d{10}$/',
		message : 'must be number'
	},

	rule2 : {
		valid : function($v) {
			return $v > 1000
		},
		message : 'must lg than 1000'
	},

	testEmail : {
		pattern : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message : 'email formart error'
	},

	testInRange : {
		valid : function($v) {
			//remote valid, $.post(...)
			return ($v >= 1000) && ($v <= 6000)
		},
		message : 'not in range'
	},

})