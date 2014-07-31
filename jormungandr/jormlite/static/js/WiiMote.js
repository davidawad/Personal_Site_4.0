function WiiMote() {
	var me = this;
	me.JJ = new XMLHttpRequest();
	me.buttons1 = 0;
	me.acc1 = [0, 0];
	me.stick1 = [128, 128];
	me.buttons2 = 0;
	me.acc2 = [0, 0];
	me.stick2 = [128, 128];
	me.hasData = false;
	me.sendToServer = function() {
		me.JJ.open("POST", "http://127.0.0.1:5000/getWiimote", true);
		me.JJ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		me.JJ.send("GET=DATA");
		WAIT_FOR_RESPONSE();
	};

	var WAIT_FOR_RESPONSE = function() {
		if (me.JJ.readyState == 4) {
			var response = me.JJ.responseText;
			if (response != "NONE") {
				obj = (JSON.parse(response, null)).data;

				me.acc1[0] = eval(obj.substring(1, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.acc1[1] = eval(obj.substring(1, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.buttons1 = eval(obj.substring(1, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.stick1[0] = eval(obj.substring(2, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.stick1[1] = eval(obj.substring(1, obj.indexOf(")")));
				obj = obj.substring(obj.indexOf(")") + 2, obj.length);

				me.acc2[0] = eval(obj.substring(1, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.acc2[1] = eval(obj.substring(1, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.buttons2 = eval(obj.substring(1, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.stick2[0] = eval(obj.substring(2, obj.indexOf(",")));
				obj = obj.substring(obj.indexOf(",") + 1, obj.length);
				me.stick2[1] = eval(obj.substring(1, obj.indexOf(")")));
				obj = obj.substring(obj.indexOf(")") + 2, obj.length);

				me.hasData = true;
			} else {
				me.hasData = false;
			}
			me.sendToServer();
		} else {
			setTimeout(WAIT_FOR_RESPONSE, 10);
		}
	};

	me.sendToServer();
	
	me.getA1 = function() {
		return (me.buttons1 & 8) > 0 ? 1 : 0;
	};

	me.getB1 = function() {
		return (me.buttons1 & 4) > 0 ? 1 : 0;
	};

	me.getAccX1 = function() {
		return me.acc1[0];
	};

	me.getAccY1 = function() {
		return me.acc1[1];
	};

	me.getL1 = function() {
		return (me.buttons1 & 256) > 0 ? 1 : 0;
	};

	me.getR1 = function() {
		return (me.buttons1 & 512) > 0 ? 1 : 0;
	};

	me.getD1 = function() {
		return (me.buttons1 & 1024) > 0 ? 1 : 0;
	};

	me.getU1 = function() {
		return (me.buttons1 & 2048) > 0 ? 1 : 0;
	};

	me.getStickX1 = function() {
		var value = me.stick1[0];
		if (value >= 126 && value <= 130) {
			return 0;
		} else {
			return value - 128;
		}
	};

	me.getStickY1 = function() {
		var value = me.stick1[1];
		if (value >= 126 && value <= 130) {
			return 0;
		} else {
			return value - 128;
		}
	};

	me.getA2 = function() {
		return (me.buttons2 & 8) > 0 ? 1 : 0;
	};

	me.getB2 = function() {
		return (me.buttons2 & 4) > 0 ? 1 : 0;
	};

	me.getAccX2 = function() {
		return me.acc2[0];
	};

	me.getAccY2 = function() {
		return me.acc2[1];
	};

	me.getL2 = function() {
		return (me.buttons2 & 256) > 0 ? 1 : 0;
	};

	me.getR2 = function() {
		return (me.buttons2 & 512) > 0 ? 1 : 0;
	};

	me.getD2 = function() {
		return (me.buttons2 & 1024) > 0 ? 1 : 0;
	};

	me.getU2 = function() {
		return (me.buttons2 & 2048) > 0 ? 1 : 0;
	};

	me.getStickX2 = function() {
		var value = me.stick2[0];
		if (value >= 126 && value <= 130) {
			return 0;
		} else {
			return value - 128;
		}
	};

	me.getStickY2 = function() {
		var value = me.stick2[1];
		if (value >= 126 && value <= 130) {
			return 0;
		} else {
			return value - 128;
		}
	};

}
